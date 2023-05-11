import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/Shared/Header';
import Footer from '../pages/Shared/Footer';

const Access = () => {
  return (
    <div>
        <div className='container mx-auto'>
          <Header></Header>
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
    </div>
  );
};

export default Access;