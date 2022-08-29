import React from 'react';
import Navbar from './Navbar';
import Image from 'next/image';
import icon from '/banner.svg';
import Announce from './Announce';

export default function Banner() {
  return (
    <div>
      <Navbar />
      <div className="w-full relative">
        <Image src={icon} alt="icon" layout="responsive" />
        <div className="absolute top-1/4 left-1/2  w-1/2 flex justify-center">
          <Announce />
        </div>
      </div>
    </div>
  );
}
