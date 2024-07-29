"use server";

import { revalidatePath } from "next/cache";
import { services } from "./data";

export const createTodoAction = async (formData: FormData) => {
  const description = formData.get("description") as string;
  await services.addTodo(description);
  formData.set("description", "");
  revalidatePath("/todos");
};

export const removeTodoAction = async (id: string) => {
  await services.removeTodo(id);
  revalidatePath("/todos");
};
