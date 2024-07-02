import React from 'react'
import { useContext } from 'react';
export const HistoryContext = React.createContext({
    historyItems : {
        expenseLogDB : [],
    },
    changes : null,
    toggleDetailedLog : (expenseid)=>{},
    updateChanges : ()=>{}

})

export const HistoryContextProvider = HistoryContext.Provider;

export const useHistory = ()=>{
    return useContext(HistoryContext)
}

