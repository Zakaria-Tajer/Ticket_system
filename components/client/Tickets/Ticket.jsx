import { DataContext } from "context/UserContext";
import React, { useState, useContext } from "react";
import { FaTicketAlt, FaEllipsisH } from "react-icons/fa";
import { Options } from "./TicketsComponents/Options";
import { TicketFooter } from "./TicketsComponents/TicketFooter";

export const Ticket = () => {

  
  const { sortedData } = useContext(DataContext);
  console.log(sortedData);
  return (
    <div className="w-3/4 bg-gray-600 flex flex-wrap">
      {sortedData.map((item,i) => (
        <div key={item.id} className="w-[700px] shadow-lg bg-white mr-4 mb-4 mt-2">
          <div className=" flex bg-red-500 py-2 pl-4">
            <div className="flex w-5/6 space-x-3 py-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#00CCFF]">
                <FaTicketAlt className="w-3 text-white" />
              </div>
              <h1 className="font-SansS">Ticket,# {item.uniques_id}</h1>
            </div>
            <div className="flex w-1/2 items-center bg-gray-300 mr-2">
              <h1 className="ml-3 font-SansS">{item.created_at}</h1>
              <Options />
            </div>
          </div>
          <div className="mt-4 ml-3 space-y-4">
            <h1 className="text-2xl font-SansS">{item.Ticket_Title}</h1>
            <p className="font-SansS">{item.ticket_text}</p>
          </div>
          <div className="mt-2">
          <TicketFooter problem={item.category} status={item.status} />
          </div>
        </div>
      ))}
    </div>
  );
};