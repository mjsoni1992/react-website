import './App.scss';
import React from "react";
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import FeaturedContent from './components/FeaturedContent';
import StuffSlider from './components/StuffSlider';




export default function App() {

  return (
    <>
      <Header />
      <HeroSlider />
      <FeaturedContent />

      <StuffSlider />
    </>
  );
}
