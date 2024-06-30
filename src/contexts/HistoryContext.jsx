import React from 'react'
import { useContext } from 'react';
export const HistoryContext = React.createContext({
    historyItems : {
        expenseLogDB : [],
    },
    toggleDetailedLog : (expenseid)=>{}

})

export const HistoryContextProvider = HistoryContext.Provider;

export const useHistory = ()=>{
    return useContext(HistoryContext)
}

