import React from 'react';
import Navbar from './Navbar';
import Image from 'next/image';
import icon from '/banner.svg';

export default function Banner() {
  return (
    <div>
      <Navbar />
      <div>
        <Image src={icon} alt="icon" />
      </div>
    </div>
  );
}
