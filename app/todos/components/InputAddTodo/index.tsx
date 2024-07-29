"use client";

import { useRef } from "react";

export const InputAddTodo = ({
  action,
}: {
  action: (formData: FormData) => Promise<void>;
}) => {
  const ref = useRef<HTMLFormElement>(null);

  const onAction = async (formData: FormData) => {
    await action(formData);
    ref.current?.reset();
  };

  return (
    <form ref={ref} action={onAction} className="flex gap-8 ">
      <input
        placeholder="New Todo"
        name="description"
        className="p-4 w-full rounded"
      />
      <button
        type="submit"
        className=" bg-zinc-800 p-4 px-8 text-zinc-50 rounded"
      >
        Add
      </button>
    </form>
  );
};
