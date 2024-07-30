"use server";

import { revalidatePath } from "next/cache";
import { services } from "./data";

export const createTodoAction = async (description: string) => {
  await services.addTodo(description);
  revalidatePath("/todos");
};

export const removeTodoAction = async (id: string) => {
  await services.removeTodo(id);
  revalidatePath("/todos");
};
