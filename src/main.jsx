import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './Layout/Layout.jsx'
import Home from './components/Home/Home.jsx'
import {Route, RouterProvider, createBrowserRouter,createRoutesFromElements} from 'react-router-dom'
import History from './components/History/History.jsx'
import AddExpense from './components/AddExpense/AddExpense.jsx'
import { ExpenseEntryContextProvider } from './contexts/ExpenseEntryContext.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element = {<Home/>}/>
      <Route path='history' element = {<History/>}/>
      <Route path='addexpense' element = {<AddExpense/>}/>
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
