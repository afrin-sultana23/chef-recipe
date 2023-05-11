import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Outlet } from 'react-router-dom';
import Header from '../pages/Shared/Header';
import Footer from '../pages/Shared/Footer';
import Loading from './Loading';


const Main = () => {

  const {loading} = useContext(AuthContext);
  if(loading) {
    return <Loading></Loading>
  }
    return (
        <div>
            <div className='container mx-auto'>
              <Header></Header>
            <div className='min-h-[calc(100vh-350px)]'>
              <Outlet></Outlet>
        </div>
        </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;