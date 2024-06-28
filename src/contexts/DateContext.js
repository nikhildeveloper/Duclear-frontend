import React from 'react'
import {useContext} from 'react'

export const DateContext = React.createContext({

    date : 0 ,
    Action : "",
    storeDate : (d)=>{},
    storeActionValue : (a)=>{}



})

export const DateContextContextProvider = DateContext.Provider

export const useDate = ()=>{
    return useContext(DateContext)
}