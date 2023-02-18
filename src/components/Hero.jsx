import React from "react";
import Search from "./Search";

const Hero = () => {
  return (
    <header className="flex max-w-[100vw] flex-col gap-3 bg-[url('public/images/BG.png')] bg-cover bg-center bg-no-repeat px-5 py-10 pb-14 text-white md:gap-5 md:px-8 lg:px-14 xl:px-24">
      <p className="text-base font-semibold md:text-lg lg:text-xl">
        Welcome to Bd Screens
      </p>
      <h1 className="w-3/4 text-2xl font-bold md:text-3xl lg:text-5xl xl:w-1/2">
        Download Unlimited Movies, Drama, Music Video and More Content.
      </h1>
      <p className="w-3/4 text-base font-semibold md:text-lg lg:text-xl xl:w-1/2">
        Enjoy exclusive Music Video popular movies and Live shows. Subscribe BD
        Screen now
      </p>
      <Search />
    </header>
  );
};

export default Hero;
