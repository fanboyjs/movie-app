import React from "react";

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <nav className="md:px-3">
      <div className="mx-auto flex items-center justify-between p-5 ">
        <a href="#">
          <img
            src={"public/images/full-logo.svg"}
            className="h-[26px]  md:h-10 "
            alt="logo"
          />
        </a>

        <div className="flex items-center gap-4">
          <MagnifyingGlassIcon className="h-5 md:h-7" />
          <button className="flex h-9 w-28 items-center justify-center rounded-md bg-brand__red md:h-11">
            Sign in
          </button>
        </div>
      </div>

      <Menu />
    </nav>
  );
};

export default Navbar;
