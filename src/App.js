import './App.scss';
import React from "react";
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import FeaturedContent from './components/FeaturedContent';
import StuffSlider from './components/StuffSlider';
import Portfolio from './components/Portfolio';




export default function App() {

  return (
    <>
      <Header />
      <HeroSlider />
      <FeaturedContent />
      <StuffSlider />
      <Portfolio />
    </>
  );
}
