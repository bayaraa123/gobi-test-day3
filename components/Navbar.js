import React, { useState } from 'react';
import GlobalIcon from '../assets/GlobalIcon';
import Link from 'next/link';
import GobiIcon from '../assets/GobiIcon';
import FavoritesIcon from '../assets/FavoritesIcon';
import BagIcon from '../assets/BagIcon';
import SearchDeleteIcon from '../assets/SearchDeleteIcon';
export default function Navbar() {
  const [state, setState] = useState({
    value: '',
  });

  const handleChange = (e) => {
    console.log(e.target.value);
    console.log(e.target.name);
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const clearValue = () => {
    setState({ value: '' });
  };
  const getItems = () => {
    console.log('a;sdkfjsa;fd');
  };
  return (
    <>
      <div className="flex flex-row items-center justify-between w-full text-white fixed z-10 ease-in h-12 md:h-20">
        <div className="flex flex-row w-80 md:w-auto items-center justify-start pl-2 sm:pl-10">
          <Link href="">
            <p className="m-4 text-md ">WOMEN</p>
          </Link>
          <Link href="">
            <p className="m-4 text-md ">MEN</p>
          </Link>
          <Link href="">
            <p className="m-4 text-md ">HOME</p>
          </Link>
          <Link href="">
            <p className="m-4 text-md ">ACCESSORIES</p>
          </Link>
          <Link href="">
            <p className="m-4 text-md ">ORGANIC</p>
          </Link>
        </div>

        <div className="invisible md:visible w-0 md:w-auto align-center">
          <GobiIcon />
        </div>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center justify-between rounded-lg bg-white w-60 h-11 px-4 text-black mx-4">
            <input
              name="value"
              type="text"
              className="text-sm w-52"
              placeholder="Search"
              value={state.value}
              onChange={handleChange}
              onClick={getItems}
            />
            <button onClick={clearValue}>
              <SearchDeleteIcon />
            </button>
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
