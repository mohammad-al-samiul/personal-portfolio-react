import React from 'react';
import About from '../About/About';
import Project from '../Project/Project';
import Hero from './Hero/Hero';

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Project />
    </div>
  );
}

export default Home;
