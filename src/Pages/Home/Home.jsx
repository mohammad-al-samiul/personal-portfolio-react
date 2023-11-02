import React from 'react';
import About from '../About/About';
import Hero from './Hero/Hero';

function Home() {
  return (
    <div>
      <Hero />
      <div className="lg:mt-20">
        <About />
      </div>
    </div>
  );
}

export default Home;
