import { ClosedTicketsContext } from "context/UserContext";
import React, { useContext } from "react";
import { FaTicketAlt } from "react-icons/fa";
import { TicketFooter } from "../TicketsComponents/TicketFooter";

export const ClsTicket = () => {
  const { isData } = useContext(ClosedTicketsContext);
  return (
    <div className="md:w-5/6 w-full flex flex-wrap md:mx-auto">
      {isData.map((item) => (
        <div
          key={item.id}
          className="md:w-[700px] w-full lg:max-w-2xl md:h-auto shadow-2xl rounded bg-white md:mr-4 mb-4 mt-2"
        >
          <div className="md:text-left md:flex py-3 md:pl-4 lg:pl-4">
            <div className="flex w-5/6 space-x-3 py-2">
              <div className="flex h-6 w-6 items-center ml-2 md:ml-0 justify-center rounded-full bg-[#00CCFF]">
                <FaTicketAlt className="w-3 text-white " />
              </div>
              <h1 className="font-SansS">Ticket,# {item.uniques_id}</h1>
            </div>
            <div className="flex md:w-1/2 w-full items-center md:space-x-2">
              <h1 className="ml-3 font-SansS">{item.created_at}</h1>
              {/* <Options TicketUniqueId={item.uniques_id}/> */}
            </div>
          </div>
          <div className="mt-4 ml-3 space-y-4 mb-6">
            <h1 className="text-2xl font-SansS">{item.Ticket_Title}</h1>
            <span className="font-SansS">{item.ticket_text}</span>
          </div>
          <div className="mt-10 md:mt-2">
            <TicketFooter problem={item.category} status={item.status} />
          </div>
        </div>
      ))}
    </div>
  );
};
