import React from 'react';
import AnnounceBody from '../assets/AnnounceBody';
import AnnounceTitle from '../assets/AnnounceTitle';
import Button from './Button';

export default function Announce() {
  return (
    <>
      <div className="pt-10 flex flex-col align-middle text-white w-ful justify-center">
        <AnnounceTitle />
        <AnnounceBody />
        <div className="m-10 flex justify-center">
          <Button type="primary" name="SHOP NOW" />
        </div>
      </div>
    </>
  );
}
