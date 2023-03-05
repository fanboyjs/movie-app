import React from 'react';
import { datas } from '../../services/data';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import PosterCard from './PosterCard';

const Slider = () => {
  return (
    <div className="wrapper mt-8 flex h-96 flex-col gap-5 overflow-x-auto overflow-y-hidden px-5 py-10 pb-14  md:gap-5 md:px-8 lg:px-14 xl:px-24">
      <div className="flex w-full flex-row justify-between">
        <p className="font-medium leading-10 md:text-xl">
          Most Popular
        </p>
        <button className="flex flex-row items-center gap-2 bg-transparent">
          <span>See all </span>
          <ArrowRightIcon className="h-5 text-red-600" />
        </button>
      </div>

      <div className="wrapper flex h-96 flex-row gap-5  ">
        {datas.map((poster) => {
          return <PosterCard key={poster.id} poster={poster} />;
        })}
      </div>
    </div>
  );
};

export default Slider;
