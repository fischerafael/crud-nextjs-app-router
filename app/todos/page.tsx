import React from "react";

const index = () => {
  return (
    <div className="flex h-screen bg-zinc-100 justify-center p-8">
      <div className="flex flex-col w-full max-w-[600px] gap-8">
        <div className="flex gap-8 ">
          <input placeholder="New Todo" className="p-4 w-full rounded" />
          <button className=" bg-zinc-800 p-4 px-8 text-zinc-50 rounded">
            Add
          </button>
        </div>

        <div className="flex gap-8 items-center">
          <p className="p-4 w-full rounded">first todo</p>
          <button className="text-xs bg-zinc-800 px-2 py-1 h-fit text-zinc-50 rounded-full">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default index;
