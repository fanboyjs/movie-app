import React from "react";
import Search from "./Search";

const Hero = () => {
  return (
    <header className="flex flex-col gap-3 bg-[url('./images/BG.png')] bg-contain bg-center p-5 text-white">
      <p className="text-base font-semibold ">Welcome to Bd Screens</p>
      <h1 className="w-3/4 text-2xl font-bold ">
        Download Unlimited Movies, Drama, Music Video and More Content.
      </h1>
      <p className="text-base font-semibold ">
        Enjoy exclusive Music Video popular movies and Live shows. Subscribe BD
        Screen now
      </p>
      <Search />
    </header>
  );
};

export default Hero;
