import { RequestCreator } from "lib/RequestCreator";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FaEllipsisH } from "react-icons/fa";
export const Options = ({ TicketUniqueId }) => {
  const [sort, setSort] = useState(false);
  const router = useRouter()
  const TimeHide = () => {
    setSort(!sort);
  };
  const deleteTicket = () => {
    console.log(TicketUniqueId)
    RequestCreator('POST', 'http://127.0.0.1:8000/api/DeleteTicket', `unique_id=${TicketUniqueId}`)
    setTimeout(() => {
      router.reload();
    }, 1);
  };
  return (
    <div className="relative ml-auto mr-3">
      <FaEllipsisH className="cursor-pointer text-lg" onClick={TimeHide} />
      {sort ? (
        <div className="absolute right-0 w-40 rounded-md bg-white shadow-xl">
          <li className="cursor-pointer rounded-md list-none py-2 pl-2 font-SansS hover:bg-gray-300 hover:duration-700">
            <a onClick={deleteTicket}>Delete</a>
          </li>
          <li className="cursor-pointer rounded-md list-none py-2 pl-2 font-SansS hover:bg-gray-300 hover:duration-700">
            <a>Close</a>
          </li>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
