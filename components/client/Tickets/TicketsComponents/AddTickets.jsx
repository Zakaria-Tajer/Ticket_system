import { FormContext } from "context/UserContext";
import React, {useState } from "react";
import { FaPenNib, FaSort } from "react-icons/fa";
import { NewTickets } from "./NewTickets";



export const AddTickets = () => {
  const [hidden, setHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const hide = () => {
    setHidden(!hidden);
  };

  return (
    <FormContext.Provider value={{isOpen,setIsOpen}}>
      <div className="mt-8 flex items-center justify-between bg-gray-400 py-2">
      {isOpen ? <NewTickets /> : ''}
        <div className="ml-4 flex items-center space-x-4 rounded bg-white px-6 py-2">
          <FaPenNib className="text-blue-900" />
          <button
            className="font-poppins font-semibold text-blue-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            New Ticket
          </button>
        </div>
        <div className="relative mr-10 flex cursor-pointer items-center space-x-2 bg-white px-6 py-2">
          <FaSort className="text-blue-900" />
          <button
            className="font-poppins font-semibold text-blue-900"
            onClick={hide}
          >
            Sort
          </button>
          {hidden && (
            <div className="absolute top-10 right-0 mt-1 flex w-full rounded-md bg-purple-400 py-2">
              <button className="ml-2  font-poppins">By Time</button>
            </div>
          )}
        </div>
      </div>
    </FormContext.Provider>
  );
};
