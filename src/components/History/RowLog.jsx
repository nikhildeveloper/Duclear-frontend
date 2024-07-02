// import React from 'react'
// import { useEffect } from 'react'
// function RowLog({props}) {

//     useEffect(()=>{console.log(...props)},[])


//   return (
//     <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
//     <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//         {props.item}
//     </th>
//     <td class="px-6 py-4">
//         {props.amount}
//     </td>
//     <td class="px-6 py-4">
//         {props.date}
//     </td>
//     <td class="px-6 py-4">
//         {props.name}
//     </td>
//     <td class="px-6 py-4">
//         {props.action}
//     </td>
//     <td class="px-6 py-4 text-right">
//         <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
//     </td>
//     </tr>
//   )
// }

// export default RowLog

// NOT sure why the above prop destructing is not working 



import React, { useEffect } from 'react'
import EditExpense from './EditExpense'
import { useState } from 'react'
import { useHistory } from '../../contexts/HistoryContext'

function RowLog({ name, amount, own, detailedExpense,detailedLogToggle,expense_id }) {
    const [isEditToggleButton, setisEditToggleButton] = useState(false)

    const history = useHistory()
     
    

    useEffect(() => {
        
    },[isEditToggleButton])

    const editExpense = (id) =>{

        history.toggleDetailedLog(id)
        
        // setisEditToggleButton((prev)=>!prev)
        
    }


    return (

        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {name}
            </th>
            <td className="px-6 py-4">
                {amount}
            </td>
            <td className="px-6 py-4">
                {own}
            </td>

            
            {isEditToggleButton ? (<EditExpense/>) : (
            
            <td className="px-6 py-4 text-right">
                <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                onClick={()=>{editExpense(expense_id)}}
                >Edit</a>
            </td> )}
        </tr>

    )
}

export default RowLog
