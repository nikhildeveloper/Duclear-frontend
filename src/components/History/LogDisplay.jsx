// import React from 'react'
// import RowLog from './RowLog'
// import DetailedLog from './DetailedLog'
// import { useState,useEffect } from 'react'
// import moment from 'moment'
// import { useHistory } from '../../contexts/HistoryContext'
// function LogDisplay() {


//   const [expenses, setExpenses] = useState([])

//   const historyItems = useHistory()
//   useEffect(()=>{

    
//     setExpenses(historyItems.historyItems)
    
//   })  // removed the dependecies brackets since we used the async call(fetch) in History.jsx it will rerender when the promise is resolved, so it should be able to render if there is any change.

//   return (
    
//     <div className='relative w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
//         style={{backgroundImage: `url(https://images.pexels.com/photos/1629212/pexels-photo-1629212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`}}
//     >
//         <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-transparent'></div>
//         <div className='absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent'></div>

//         <div className='absolute top-0 left-0 w-full h-full bg-black opacity-20'></div>
//         <div className='absolute top-0 left-0 w-full h-full' style={{backdropFilter: 'blur(20px)'}}></div>
//       <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-full h-full m-20">
//           <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//               <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//                   <tr>
//                       <th scope="col" class="px-6 py-3">
//                           Item name
//                       </th>
//                       <th scope="col" class="px-6 py-3">
//                           Amount
//                       </th>
//                       <th scope="col" class="px-6 py-3">
//                           Date
//                       </th>
//                       <th scope="col" class="px-6 py-3">
//                           name
//                       </th>
//                       <th scope="col" class="px-6 py-3">
//                           Action
//                       </th>
//                       <th scope="col" class="px-6 py-3">
//                           <span class="sr-only">Edit</span>
//                       </th>
//                   </tr>
//               </thead>
//               <tbody>
//                   {
//                     expenses.map((expense)=>{
                        
//                         if(expense.detailedLogToggle == false){
//                             return <RowLog 
//                             item={expense.item} 
//                             name ={expense.name} 
//                             amount = {expense.amount}
//                             date = {moment(expense.date).format('dddd, MMMM Do YYYY')} 
//                             action={expense.Action}
//                             detailedLogToggle={expense.DetailLogToggle}
//                             expense_id = {expense._id}
//                             />
//                         }
//                         else{
                            
//                             return <>
//                             <RowLog 
//                             item={expense.item} 
//                             name ={expense.name} 
//                             amount = {expense.amount}
//                             date = {moment(expense.date).format('dddd, MMMM Do YYYY')} 
//                             action={expense.Action}
//                             detailedLogToggle={expense.DetailLogToggle}
//                             expense_id = {expense._id}
//                             />
//                             <DetailedLog
//                             item={expense.item} 
//                             name ={expense.name} 
//                             amount = {expense.amount}
//                             date = {moment(expense.date).format('dddd, MMMM Do YYYY')} 
//                             action={expense.Action}
//                             detailedLogToggle={expense.DetailLogToggle}
//                             expense_id = {expense._id}
//                             />

//                             </>
//                         }
//                     })
//                   }
//               </tbody>
//           </table>
//       </div>
// </div>
//   )
// }

// export default LogDisplay

