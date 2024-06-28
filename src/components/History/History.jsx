

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

        setHistoryItems(data)
        
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }
    fetchExpenses()

    // const historyFromSession = JSON.parse(localStorage.getItem('expenses'))
    // if(historyFromSession.length>0){
    //   setHistoryItems(historyFromSession)
    // }
  },[])

  return (
    <HistoryContextProvider value={{historyItems}}>
    <LogDisplay/>
    </HistoryContextProvider>

  );
}

export default History;

