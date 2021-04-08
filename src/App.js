import './App.scss';
import React from "react";
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import FeaturedContent from './components/FeaturedContent';
import StuffSlider from './components/StuffSlider';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Blogs from './components/Blogs';
import SocialMedia from './components/SocialMedia';
import Footer from './components/Footer';





export default function App() {

  return (
    <>
      <Header />

      <HeroSlider />
      <FeaturedContent />

      <StuffSlider />
      <Portfolio />
      <Services />
      <Blogs />
      <SocialMedia />
      <Footer />
    </>
  );
}
