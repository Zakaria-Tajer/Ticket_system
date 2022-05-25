import React from "react";

export const AllRespTickets = ({ data }) => {
  return (
    <div className="w-3/4 flex flex-wrap space-x-4 pt-24 justify-center">
      {data.map((items, i) => (
        <div
          key={i}
          className="w-2/5 shadow-xl bg-white rounded-md relative h-80 ml-4 mb-5  space-y-2"
        >
          <h1 className="font-mono text-2xl p-2">#{items.uniques_id}</h1>
          <p className="font-poppins text-xl p-2 pr-3">
            Ticket Title: {items.Ticket_Title}
          </p>
          <h1 className="font-poppins text-xl p-2 underline underline-offset-2 text-blue-900">
            Problem:
          </h1>
          <p className="pl-2 font-poppins">{items.ticket_text}</p>
          <div className="flex items-center">
          <h1 className="font-poppins text-xl p-2 underline underline-offset-2 text-blue-900">
            Response:
          </h1>
          <p className="pl-2 font-poppins">{items.ResponseText}</p>
          </div>
          <div className="bg-gray-200 w-full absolute  bottom-0 h-10 flex items-center pl-4 space-x-14">
            <h1 className="font-poppins">Status: {items.status}</h1>
            <h1 className="font-poppins pr-4">
              Responded at: {items.updated_at}
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
};
