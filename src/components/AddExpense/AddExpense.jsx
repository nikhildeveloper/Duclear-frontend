import React from 'react'
import ExpenseInputForm from './ExpenseInputForm'
import { useState,useEffect} from 'react'
import History from '../History/History'


function AddExpense() {

  return (
    <div className='relative w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat rounded-lg'
    style={{backgroundImage: `url(https://images.pexels.com/photos/1629212/pexels-photo-1629212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`}}
    >
    <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-transparent'></div>
    <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>
    <div className='absolute top-0 left-0 w-full h-full' style={{backdropFilter: 'blur(20px)'}}></div>
    <ExpenseInputForm/> 

    </div>

  )
}

export default AddExpense