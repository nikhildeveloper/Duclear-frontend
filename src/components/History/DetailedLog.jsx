

import React from 'react';
import moment from 'moment';
import { useHistory } from '../../contexts/HistoryContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function DetailedLog({ item, name, amount, date, action, detailedLogToggle, expense_id }) {
  const history = useHistory();

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

              <button className="text-red-500 text-2xl p-3">
                  <FontAwesomeIcon icon={faTrashAlt} />
                </button>
              </div>
            </div>
            <div className="bg-white-800 p-4 rounded-lg">
              <div className="grid grid-cols-4 gap-4 items-end border-b border-orange-500 pb-2">
                <div className="text-left">Paid</div>
                <div className="text-left">Balance</div>
                <div className="text-left">Date</div>
                <div className="flex justify-end gap-4 col-span-1">
                  <input
                    type="number"
                    placeholder="Amount Paid"
                    className="bg-gray-700 p-2 rounded-lg focus:outline-none"
                  />
                  <button className="bg-blue-500 p-2 rounded-lg">Paid</button>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4 py-2">
                <div className="text-left">{amount}</div>
                <div className="text-left">500</div>
                <div className="text-left">{moment(date).format('DD MMM YYYY')}</div>
                
              </div>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
}

export default DetailedLog;

