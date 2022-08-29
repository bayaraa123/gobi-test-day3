import React from 'react';
import GlobalIcon from '../assets/GlobalIcon';
export default function Header() {
  return (
    <>
      <div className="flex flex-row items-center justify-between bg-purple h-9 lg:h-10 text-white">
        <div className="flex flex-row w-80 md:w-auto items-center justify-start pl-2 sm:pl-10">
          <GlobalIcon />
          <p className="mx-3 text-xs ">Global - English</p>
        </div>
        <div className="flex flex-row invisible md:visible w-0 md:w-auto">
          <p className="mx-2 text-xs">RETURNING AN ORDER?</p>
          <p className="underline text-xs">Click for more info </p>
        </div>
        <div className="flex flex-row w-80 md:w-auto justify-end pr-2 sm:pr-10">
          <button className="text-sm m-2">SIGN IN</button>
          <button className="text-sm m-2">SIGN UP</button>
        </div>
      </div>
    </>
  );
}
