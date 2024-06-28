import React from 'react'
import ExpenseInputForm from './ExpenseInputForm'
import { useState,useEffect} from 'react'
import History from '../History/History'
import { ExpenseEntryContextProvider } from '../../contexts/ExpenseEntryContext'

function AddExpense() {

  const [expenseEntryItems, setexpenseEntryItems] = useState([])
  const addExpense = (expense)=>{
    setexpenseEntryItems((prev)=>[{id : Date.now(),...expense},...prev])          // return array but why??

  }



  useEffect(()=>{
    const expenses = JSON.parse(localStorage.getItem('expenses'))

    if(expenses&&expenses.length > 0){
      setexpenseEntryItems(expenses)
    }
  }, [])

  useEffect(()=>{

    localStorage.setItem('expenses', JSON.stringify(expenseEntryItems))
  },[expenseEntryItems])


  return (
    <ExpenseEntryContextProvider value={{expenseEntryItems, addExpense}}>
    <div className='relative w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
    style={{backgroundImage: `url(https://images.pexels.com/photos/1629212/pexels-photo-1629212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`}}
    >
    <div className='absolute top-0 left-0 w-full h-full bg-black opacity-80'></div>
    <div className='absolute top-0 left-0 w-full h-full' style={{backdropFilter: 'blur(20px)'}}></div>
    <ExpenseInputForm/>

    </div>
    </ExpenseEntryContextProvider>

  )
}

export default AddExpense