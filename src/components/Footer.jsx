import React from 'react';

const Footer = () => {
  return (
    <footer className="border-1 mt-60 flex h-64 w-full flex-row flex-wrap items-center justify-between border-4 border-black border-t-dark__third pt-5 pl-8  pr-8 md:px-8 lg:px-14 xl:px-24">
      <div className="flex h-10 w-72 flex-row items-center justify-between text-sm">
        <a href="">Feedback</a>
        <a href="">Help</a>
        <a href="">Faq</a>
      </div>
      <div className="h-14 w-56 ">
        <img
          src={'/images/full-logo.svg'}
          className="h-[26px]  md:h-10 lg:h-12"
          alt="logo"
        />
      </div>
      <div className="w-full text-center">
        ©2023 All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
