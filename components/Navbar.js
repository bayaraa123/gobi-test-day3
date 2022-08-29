import React from 'react';
import GlobalIcon from '../assets/GlobalIcon';
import Link from 'next/link';
import GobiIcon from '../assets/GobiIcon';
import FavoritesIcon from '../assets/FavoritesIcon';
import BagIcon from '../assets/BagIcon';
export default function Navbar() {
  return (
    <>
      <div className="flex flex-row items-center justify-between w-full text-white fixed z-10 ease-in">
        <div className="flex flex-row w-80 md:w-auto items-center justify-start pl-2 sm:pl-10">
          <Link href="">
            <h1 className="m-4 text-md ">WOMEN</h1>
          </Link>
          <Link href="">
            <h1 className="m-4 text-md ">MEN</h1>
          </Link>
          <Link href="">
            <h1 className="m-4 text-md ">HOME</h1>
          </Link>
          <Link href="">
            <h1 className="m-4 text-md ">ACCESSORIES</h1>
          </Link>
          <Link href="">
            <h1 className="m-4 text-md ">ORGANIC</h1>
          </Link>
        </div>

        <div className="invisible md:visible w-0 md:w-auto">
          <GobiIcon />
        </div>
        <div className="flex flex-row gap">
          <div>
            <input
              type="text"
              className="px-4 py-2 w-64 rounded-lg text-sm"
              placeholder="search"
            />
          </div>
          <div className="flex flex-row w-80 md:w-auto justify-end pr-2 sm:pr-10">
            <FavoritesIcon />
            <BagIcon />
          </div>
        </div>
      </div>
    </>
  );
}
