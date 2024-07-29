import { createTodoAction, removeTodoAction } from "./actions";
import { DeleteButton } from "./components/ButtonDelete";
import { InputAddTodo } from "./components/InputAddTodo";
import { services } from "./data";

const Page = async () => {
  const todos = await services.getTodos();

  return (
    <div className="flex h-screen bg-zinc-100 justify-center p-8">
      <div className="flex flex-col w-full max-w-[600px] gap-8">
        <InputAddTodo action={createTodoAction} />
        <div className="flex flex-col gap-8">
          {todos.map((todo) => (
            <div className="flex gap-8 items-center" key={todo.id}>
              <p className="p-4 w-full rounded">{todo.description}</p>
              <DeleteButton action={removeTodoAction} id={todo.id} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
