import React from "react";

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  return (
    <nav className="container mx-auto flex items-center justify-between p-5 ">
      <a href="#">
        <img
          src={"/images/full-logo.svg"}
          className="h-[26px] w-[107px]"
          alt="logo"
        />
      </a>

      <div className="flex items-center gap-4">
        <MagnifyingGlassIcon className="h-5" />
        <button className="flex h-9 items-center justify-center rounded-md bg-brand__red">
          Sign in
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
