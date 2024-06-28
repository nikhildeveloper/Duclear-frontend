import React, { useState, useEffect, useRef } from 'react'
import { useDate } from '../../contexts/DateContext'
function FormDropdown() {
    const [boxValue,setboxValue] = useState("Action")
    const [isDropDownOpen, setIsDropDownOpen] = useState(false)
    const dropDownRef = useRef()
    const actionUpdate = useDate()

    const dropDownBtnClick = (e) => {
        e.preventDefault()
        console.log(isDropDownOpen)
        setIsDropDownOpen(!isDropDownOpen)
    }

    useEffect(()=>{actionUpdate.storeActionValue(boxValue)},[boxValue])

  return (

    <div className='relative' ref={dropDownRef}>
    <button data-ripple-light="true" data-popover-target="menu"
          class="select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          onClick={dropDownBtnClick}
          >
            {boxValue}
      </button>
      {isDropDownOpen && (
              <ul role="menu" data-popover="menu" data-popover-placement="bottom"
              class="absolute z-10 min-w-[180px] overflow-auto rounded-md border border-blue-gray-50 bg-white p-3 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none">
                  <li role="menuitem"
                      class="block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                      onClick = {()=>{
                        setboxValue("Given")
                        setIsDropDownOpen(false)
                    }}
                    >
                      Given
                  </li>
                  <li role="menuitem"
                      class="block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                       onClick = {() => {
                        setboxValue("Taken")
                        setIsDropDownOpen(false)
                       }}
                    >
                      Taken
                  </li>
    
              </ul>
      )}

    </div>
 
  )
}

export default FormDropdown


