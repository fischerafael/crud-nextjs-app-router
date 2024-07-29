export const DeleteButton = ({
  id,
  action,
}: {
  id: string;
  action: (id: string) => Promise<void>;
}) => {
  const remove = action.bind(null, id);

  return (
    <form action={remove}>
      <button className="text-xs bg-zinc-800 px-2 py-1 h-fit text-zinc-50 rounded-full">
        Remove
      </button>
    </form>
  );
};
