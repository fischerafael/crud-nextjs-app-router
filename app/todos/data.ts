import { revalidatePath, revalidateTag } from "next/cache";

interface Todo {
  id: string;
  description: string;
}

const generateId = () => new Date().toTimeString().toString();

export let db: Todo[] = [];

export const services = {
  getTodos: async () => {
    await new Promise((resolve) => setTimeout(resolve, 250));
    return db;
  },

  addTodo: async (description: string) => {
    await new Promise((resolve) => setTimeout(resolve, 250));
    db.push({ id: generateId(), description });
  },

  removeTodo: async (id: string) => {
    await new Promise((resolve) => setTimeout(resolve, 250));
    const updated = db.filter((item) => item.id !== id);
    db = updated;
  },
};
