import React, { useContext, useEffect, useState } from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AdminResponse } from "./TicketsTable";
import toast from "react-hot-toast";

const status = [
  { id: 1, status: "onHold" },
  { id: 2, status: "solved" },
  { id: 3, status: "not yet answered" },
  { id: 4, status: "not yet solved" },
  { id: 5, status: "closed" },
];

export const TicketReponse = ({ ticketData, uniqe }) => {
  const [stats, setStats] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [responseText, setResponseText] = useState("");
  const [uniqueId, setUniqueId] = useState("");
  console.log(stats);

  const { hidden, setHidden } = useContext(AdminResponse);

  useEffect(() => {
    const req = new XMLHttpRequest();
    req.open("POST", "http://127.0.0.1:8000/api/getUniqueIds", true);
    req.onload = () => {
      if (req.readyState === XMLHttpRequest.DONE) {
        if (req.status === 200) {
          let data = JSON.parse(req.response);
          const { uniques_id } = data[0];
          console.log(uniques_id);
          setUniqueId(uniques_id);
        }
      }
    };
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.setRequestHeader("Accept", "application/json");
    req.setRequestHeader("Access-Control-Allow-Origin", "*");
    req.send(`id=${uniqe}`);
  }, []);

  const answeredTicket = () => {
    if (stats !== "" && responseText !== "") {
      const req = new XMLHttpRequest();
      req.open("POST", "http://127.0.0.1:8000/api/Respond", true);
      req.onload = () => {
        if (req.readyState === XMLHttpRequest.DONE) {
          if (req.status === 200) {
            let data = req.response;
            // console.log(data);
          }
        }
      };
      req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      req.setRequestHeader("Accept", "application/json");
      req.setRequestHeader("Access-Control-Allow-Origin", "*");
      req.send(
        `ResponseText=${responseText}&status=${stats}&response_ticket_id=${uniqe}`
      );

      setHidden(!hidden);
    } else {
      toast.error("All fields are required");
    }
  };

  return (
    <>
      {hidden && (
        <div className="fixed inset-0 z-10 flex min-h-screen w-full items-center justify-center bg-gray-400/75 ">
          <div className="bg-white p-3 rounded-md space-y-7">
            <h1 className="font-poppins">Ticket Informations</h1>
            <div className="flex relative space-x-3">
              <div className="w-96 py-2 rounded bg-gray-300 px-2">
                <h1 className="">#{uniqueId}</h1>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label htmlFor="" className="font-SansS block mb-2">
                  Set new ticket status
                </label>
                <div
                  className="w-96 relative text-white bg-[#333] py-2 rounded-t-md flex justify-between items-center cursor-pointer"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <h1 className="font-poppins ml-4">
                    {stats !== "" ? stats : "Ticket status"}
                  </h1>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="mr-5 cursor-pointer"
                  />
                  {isOpen && (
                    <div className="w-full absolute text-black bg-white shadow-xl top-11 rounded-b-md">
                      {status.map((stat) => (
                        <li
                          key={stat.id}
                          className="list-none py-2 pl-4 font-poppins mb-1 cursor-pointer hover:bg-gray-200 hover:duration-700"
                          onClick={() => setStats(stat.status)}
                        >
                          <a className="">{stat.status}</a>
                        </li>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <label htmlFor="" className="font-SansS block mb-2">
                Respond
              </label>
              <textarea
                className="w-96 px-3 py-4 outline-none border-2 "
                placeholder="Response... "
                onChange={(e) => setResponseText(e.target.value)}
              ></textarea>
            </div>
            <button
              className="w-full bg-gray-700 text-white font-SansS py-3 rounded-md"
              onClick={answeredTicket}
            >
              Save
            </button>
          </div>
        </div>
      )}
    </>
  );
};
