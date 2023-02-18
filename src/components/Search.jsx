import React from "react";

const Search = () => {
  return (
    <div className="flex flex-col gap-y-2">
      <div className="mb-3 flex h-12 w-3/4 items-center rounded-md bg-white px-1 md:w-1/2 xl:w-1/4">
        <span className="border-r-[1px] border-brand__red bg-white py-2 px-2 text-black">
          +62{" "}
        </span>
        <input
          type="number"
          className="w-full bg-white p-1 pl-3 text-base text-black"
          placeholder="Enter mobile number"
        />
      </div>

      <button className="w-2/5 rounded-md bg-brand__red md:w-1/3 xl:w-1/4">
        Subscribe
      </button>
    </div>
  );
};

export default Search;
