import React from 'react';
import Topheader from './Components/Topheader';
import Header from './Components/Header';
import Herosection from './Components/Herosection';
import Section1 from './Components/section1';
import Section2 from './Components/Section2';
import Section3 from './Components/Section3';
import Section4 from './Components/Section4';
import Section5 from './Components/Section5';
import Footer from './Components/Footer';

const page = () => {
  return (
    <>
    <Topheader />
    <Header />
    <Herosection />
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
    <Section5 />
    <Footer />
    </>
  )
}

export default page