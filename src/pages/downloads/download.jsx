import { useState } from 'react'



  export const Downloads = () => {
      const [isOpen, setIsOpen] = useState(false);
    
      const toggleDropdown = () => {
        setIsOpen(!isOpen);
      }
  return (
    <div>
       <div className="flex items-center justify-center p-4">
      <button id="dropdownDefault" onClick={toggleDropdown} className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" type="button">
        Filter by category
        <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>

      {isOpen && (
        <div id="dropdown" className="z-10 w-56 p-3 bg-white rounded-lg shadow dark:bg-gray-700">
          <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">Category</h6>
          <ul className="space-y-2 text-sm" aria-labelledby="dropdownDefault">
            {/* Checkbox elements for categories */}
          </ul>
        </div>
      )}
    </div>
    </div>
  )
}