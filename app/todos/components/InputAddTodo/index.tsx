"use client";

import { useRef } from "react";
import { Button } from "../Button";

export const InputAddTodo = ({
  action,
}: {
  action: (description: string) => Promise<void>;
}) => {
  const ref = useRef<HTMLFormElement>(null);

  const onAction = async (formData: FormData) => {
    const description = formData.get("description") as string;
    await action(description);
    ref.current?.reset();
  };

  return (
    <form ref={ref} action={onAction} className="flex gap-8 ">
      <input
        placeholder="New Todo"
        name="description"
        className="p-4 w-full rounded"
      />
      <Button
        type="submit"
        className=" bg-zinc-800 p-4 px-8 text-zinc-50 rounded"
      >
        Add
      </Button>
    </form>
  );
};
