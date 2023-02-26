import React from 'react';
import { datas } from '../../services/data';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

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
          return (
            <div key={poster.id} className="h-96 max-h-fit w-96 ">
              <img
                src={poster.image}
                alt=""
                className="max-h-max max-w-xs"
                width={200}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
