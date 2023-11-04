import React from 'react';
import About from '../About/About';
import Project from '../Project/Project';
import Skills from '../Skills/Skills';
import Hero from './Hero/Hero';

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Project />
      <Skills />
    </div>
  );
}

export default Home;
