import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/duclear_Home_Logo.svg';
import HomeLogo from './HomeLogo';
import BtnToExpense from './BtnToExpense';

function Home() {
  return (
    <div className='relative w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
        style={{backgroundImage: `url(https://images.pexels.com/photos/1629212/pexels-photo-1629212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`}}
    >
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-transparent'></div>
        <div className='absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent'></div>

        <div className='absolute top-0 left-0 w-full h-full bg-black opacity-5'></div>
        <div className='absolute top-0 left-0 w-full h-full' style={{backdropFilter: 'blur(20px)'}}></div>

        <HomeLogo/>
        

    </div>
  );
}

export default Home;
