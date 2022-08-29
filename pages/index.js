import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Banner from '../components/Banner';
// import { ReactComponent as GlobalIcon } from '../assets/';
import icon from '/banner.svg';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <Banner />
    </div>
  );
}
