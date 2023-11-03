import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';

function Main() {
  return (
    <div className="bg-[#fff8f3]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Main;
