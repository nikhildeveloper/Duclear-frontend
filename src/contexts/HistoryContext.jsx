import React from 'react'
import { useContext } from 'react';
export const HistoryContext = React.createContext({
    historyItems : 
    [
        {
            id : 1,
            item : '',
            amount : 0,
            date :'',
            name:'',
            Action:'',
        }
    ],

})

export const HistoryContextProvider = HistoryContext.Provider;

export const useHistory = ()=>{
    return useContext(HistoryContext)
}

