import React from 'react'
import {useContext} from 'react'

export const ExpenseEntryContext = React.createContext({

    expenseEntryItems : 
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

    addExpense : (expense)=>{},



})

export const ExpenseEntryContextProvider = ExpenseEntryContext.Provider

export const useExpense = ()=>{
    return useContext(ExpenseEntryContext)
}