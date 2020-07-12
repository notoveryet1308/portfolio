import React from 'react';

import Header from './components/Header';
import HeroSection from './components/Hero';
import MobHeader from './components/mobile/header';
import Skills from './components/Skill';
import Works from './components/Works';
import Aboutme from './components/About';

function App() {
  return (
    <div>
      <MobHeader/>
      <Header/>
      <HeroSection/>
      <Skills/>
      <Works/>
      <Aboutme/>
    </div>
  );
}

export default App;
