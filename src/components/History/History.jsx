

import React, { useEffect,useState } from 'react';
import { useExpense } from '../../contexts/ExpenseEntryContext';
import LogDisplay from './LogDisplay';
import { HistoryContextProvider } from '../../contexts/HistoryContext';
function History() {

  const [historyItems,setHistoryItems] = useState([])
  

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


  },[])

  const toggleDetailedLog = (expenseId)=>{
     console.log('toggled for ', expenseId)
     
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

  return (
    <HistoryContextProvider value={{historyItems, toggleDetailedLog}}>
    <LogDisplay/>
    </HistoryContextProvider>

  );
}

export default History;

