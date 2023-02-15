import React from 'react';

import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  return (
    <div className="container mx-auto flex flex-row justify-between p-8 xl:px-16">
      <div>
        <img
          src={'/images/logo.svg'}
          width={170}
          height={40}
          alt="logo"
        />
      </div>

      <div className="flex flex-row gap-4 items-center">
        <MagnifyingGlassIcon className="h-6 w-6 text-blue-500" />
        <div className="w-24 h-10 bg-rose-600 flex items-center justify-center rounded-sm">
          Signin
        </div>
      </div>
    </div>
  );
};

export default Navbar;
