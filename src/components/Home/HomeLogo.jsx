

import React from 'react';
import logo from '../../assets/duclear_Home_Logo.svg';
import BtnToExpense from './BtnToExpense';

function HomeLogo() {
  return (
    <div className="flex justify-start items-center z-30 w-full ml-20"> 
      <img src={logo} alt="Duclear Home Logo" className="w-95 h-80 mr-20 pl-10" style={{ width: '40rem', height: '30rem' }} />
      
      <div className='ml-20' >
      <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 mb-6">Duclear</h1>
      <BtnToExpense/>
      </div>

    </div>
  );
}

export default HomeLogo;

