import React from 'react'
import { Link } from 'react-router-dom'
function BtnToExpense() {
  return (
    <Link to='/addexpense' className="inline-block rounded-full border border-[#d97706] bg-[#d97706] p-3 text-white hover:bg-transparent hover:text-[#d97706] focus:outline-none focus:ring active:text-[#b45309] z-30">
  <span className="sr-only"> Download </span>

  <svg
    className="size-5 rtl:rotate-180"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M14 5l7 7m0 0l-7 7m7-7H3"
    />
  </svg>
</Link>
  )
}

export default BtnToExpense




