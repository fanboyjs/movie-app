import React from "react";

const Menu = () => {
  return (
    <div className="wrapper flex overflow-x-auto overflow-y-hidden border-t-4 border-solid border-dark__third px-5 py-3 md:text-lg">
      <a className="mr-5 flex min-w-fit gap-x-2 ">
        <img src="/public/images/home.svg" className=" w-5" />
        <span>Home </span>
      </a>
      <a className="mr-5 flex min-w-fit gap-x-2 text-dark__fourth">
        <img src="/public/images/movie.svg" className=" w-5" />
        <span>Movie </span>
      </a>
      <a className="mr-5 flex min-w-fit gap-x-2 text-dark__fourth">
        <img src="/public/images/drama.svg" className=" w-5" />
        <span>Drama </span>
      </a>
      <a className="mr-5 flex min-w-fit gap-x-2 text-dark__fourth">
        <img src="/public/images/music-video.svg" className=" w-5" />
        <span>Music Video </span>
      </a>
      <a className="mr-5 flex min-w-fit gap-x-2 text-dark__fourth">
        <img src="/public/images/live-show.svg" className=" w-5" />
        <span>Live Show </span>
      </a>
      <a className="mr-5 flex min-w-fit gap-x-2 text-dark__fourth">
        <img src="/public/images/comedies.svg" className=" w-5" />
        <span>Comedies </span>
      </a>
    </div>
  );
};

export default Menu;
