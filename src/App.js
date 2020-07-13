import React from 'react';

import Header from './components/Header';
import HeroSection from './components/Hero';
import MobHeader from './components/mobile/header';
import Skills from './components/Skill';
import Works from './components/Works';
import Aboutme from './components/About';
import Contactme from './components/Contact';
import Footer from './components/Footer';

function App() {
  let viewport = document.querySelector('meta[name=viewport]')
  viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0');
   document.documentElement.style.setProperty('overflow', 'auto')
 const metaViewport = document.querySelector('meta[name=viewport]')
 metaViewport.setAttribute('content', 'height=' + window.innerHeight + 'px, width=device-width, initial-scale=1.0')
  return (
    <div>
      <MobHeader />
      <Header />
      <HeroSection />
      <Skills />
      <Works />
      <Aboutme />
      <Contactme />
      <Footer />
    </div>
  );
}

export default App;
