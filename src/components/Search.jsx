import React from 'react';

const Search = () => {
  return (
    <div className="bg-white flex flex-row md:w-8/12 xl:w-4/12 h-14 items-center">
      <p className="text-black w-2/12 text-semibold text-xl border-r-4 border-rose-500 h-full flex items-center justify-center">
        +62
      </p>
      <input
        type="number"
        className="bg-white w-6/12 text-black text-semibold text-xl h-full ml-5"
        placeholder="Enter mobile number"
      />
      <button className="w-4/12 h-full bg-rose-600 rounded-none">
        Subscribe
      </button>
    </div>
  );
};

export default Search;
