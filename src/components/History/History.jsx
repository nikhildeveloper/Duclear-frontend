

import React, { useEffect,useState } from 'react';
import { useExpense } from '../../contexts/ExpenseEntryContext';

import UserLogDisplay from './UserLogDisplay';
import { HistoryContextProvider } from '../../contexts/HistoryContext';
function History() {

  const [historyItems,setHistoryItems] = useState([])
  const [changes, setChanges] = useState(false)
  

  useEffect(()=>{
    const fetchExpenses = async ()=>{
      try {

        const response = await fetch("http://localhost:8080/getexpenses")
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()

        const detailToggleAdded = data.map((item)=>{
          return {
            ...item,
            'detailedLogToggle' : false
          }
      })

        setHistoryItems(detailToggleAdded)
        
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }
    fetchExpenses()


  },[changes])

  const toggleDetailedLog = (expenseId)=>{
    //  console.log('toggled for ', expenseId)
     console.log()
     
    setHistoryItems((prev)=> prev.map((item)=>{
       
        if(item._id === expenseId){
          
          const updateItem = {
            ...item,
            "detailedLogToggle" :!(item.detailedLogToggle)
          }
        
          return updateItem
        }
        
        else{
          return item
        }
    }))
  }

  const updateChanges = ()=>{
    setChanges((prev)=>!prev)
  }

  return (
    <HistoryContextProvider value={{historyItems, toggleDetailedLog, updateChanges}}>
    <UserLogDisplay />
    </HistoryContextProvider>

  );
}

export default History;

