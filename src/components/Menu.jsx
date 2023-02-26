import React from 'react';

const Menu = () => {
  return (
    <div className="wrapper flex overflow-x-auto overflow-y-hidden border-t-4 border-solid border-dark__third px-5 py-3 md:text-lg lg:gap-5">
      <a className="mr-5 flex min-w-fit items-center gap-x-2 ">
        <img src="/images/home.svg" className=" w-5" />
        <span>Home </span>
      </a>
      <a className="mr-5 flex min-w-fit items-center gap-x-2 text-dark__fourth">
        <img src="/images/movie.svg" className=" w-5" />
        <span>Movie </span>
      </a>
      <a className="mr-5 flex min-w-fit items-center gap-x-2 text-dark__fourth">
        <img src="/images/drama.svg" className=" w-5" />
        <span>Drama </span>
      </a>
      <a className="mr-5 flex min-w-fit items-center gap-x-2 text-dark__fourth">
        <img src="/images/music-video.svg" className=" w-5" />
        <span>Music Video </span>
      </a>
      <a className="mr-5 flex min-w-fit items-center gap-x-2 text-dark__fourth">
        <img src="/images/live-show.svg" className=" w-5" />
        <span>Live Show </span>
      </a>
      <a className="mr-5 flex min-w-fit items-center gap-x-2 text-dark__fourth">
        <img src="/images/comedies.svg" className=" w-5" />
        <span>Comedies </span>
      </a>
    </div>
  );
};

export default Menu;
