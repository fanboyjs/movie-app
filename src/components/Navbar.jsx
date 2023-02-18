import React from "react";

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  return (
    <div className="container mx-auto flex flex-row justify-between p-8 xl:px-16">
      <div>
        <img src={"/images/full-logo.svg"} width={170} height={40} alt="logo" />
      </div>

      <div className=" flex flex-row items-center gap-4">
        <MagnifyingGlassIcon className="h-6 w-6 text-blue-500" />
        <div className="flex h-10 w-24 items-center justify-center rounded-sm bg-rose-600">
          Signin
        </div>
      </div>
    </div>
  );
};

export default Navbar;
