

import React from 'react';
import moment from 'moment';
import { useEffect,useState } from 'react';
import { useHistory } from '../../contexts/HistoryContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons';



function DetailedLog({ name, amount, own, detailedExpense,detailedLogToggle,expense_id,email }) {
  const history = useHistory();
  const [deleteToggleBtn,setDeleteToggleBtn] = useState(false)
  
  const dateFormat = (d)=>{
    const date = new Date(d)
    const options = {
      year : 'numeric',
      month : 'long',
      day : 'numeric',
    }
    return date.toLocaleDateString('en-US', options)
  }

  const deleteUserExpense = async ()=>{
    const response = await fetch(`http://localhost:8080/deleteuserexpense/${email}`,{
      method : 'DELETE',
      headers :{
        'Content-Type' : 'application/json'
      },
    })
    if(!response.ok){
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    history.updateChanges()

  }
  return (
    <tr className="bg-gray-800 bg-opacity-50 backdrop-blur-sm text-white">
      <td colSpan="6" className="p-4">
        <div className="w-full px-4 py-6 ">
          <div className="max-w-screen-lg mx-auto p-4">
            <div className="flex items-center justify-between mb-4 w-full">
              <h1 className="text-2xl">Track Hard</h1>

              <div className="flex justify-end space-x-4">
              <button className="text-green-500 text-2xl p-2" onClick={() => { history.toggleDetailedLog(expense_id); }}>
                  <FontAwesomeIcon icon={faCheckCircle} />
                </button>

              <button className="text-red-500 text-2xl p-3" onClick={deleteUserExpense}>
                  <FontAwesomeIcon icon={faTrashAlt} />
                </button>
              </div>
            </div>
            <div className="bg-white-800 p-4 rounded-lg">
              <div className="grid grid-cols-4 gap-4 items-end border-b border-orange-500 pb-2">
                <div className="text-left">Item</div>
                <div className="text-left">Amount</div>
                <div className="text-left">Action</div>
                <div className="text-left">Date</div>
                {/* <div className="flex justify-end gap-4 col-span-1">
                  <input
                    type="number"
                    placeholder="Amount Paid"
                    className="bg-gray-700 p-2 rounded-lg focus:outline-none"
                  />
                  <button className="bg-blue-500 p-2 rounded-lg">Paid</button>
                </div> */}
              </div>
              <div className="grid grid-cols-4 gap-4 py-2">
                {
                  detailedExpense.map((expense, index) => (
                    <>
                      <div className="text-left">{expense.item}</div>
                      <div className="text-left">{expense.amount}</div>
                      <div className="text-left">{expense.action}</div>
                      <div className="text-left">{dateFormat(expense.date)}</div>
                      </>
                  ))
                }
                {/* <div className="text-left">jhg</div>
                <div className="text-left">{detailedExpense.amount}</div>
                <div className="text-left">{detailedExpense.action}</div>
                <div className="text-left">{detailedExpense.date}</div> */}
              </div>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
}

export default DetailedLog;

