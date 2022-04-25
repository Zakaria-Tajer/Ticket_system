import React, { useEffect, useState } from "react";
import { FaPenNib, FaSort } from "react-icons/fa";
import { DataContext, FormContext } from "context/UserContext";
import { NewTickets } from "@/components/client/Tickets/TicketsComponents/NewTickets";
import { Navbar } from "@/components/Layout/Navbar";
import Cookies from "js-cookie";
import { Ticket } from "@/components/client/Tickets/Ticket";
import Image from "next/image";
import { ClientData } from "@/components/client/ClientData";

export default function Tickets({ data }) {
  console.log(data);
  const [hidden, setHidden] = useState(false);
  const [sortedData, setSortedData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [datas, setData] = useState(false);

  useEffect(() => {
    const id = Cookies.get("id");
    const req = new XMLHttpRequest();
    req.open("POST", "http://127.0.0.1:8000/api/Tickets", true);
    req.onload = () => {
      if (req.readyState === XMLHttpRequest.DONE) {
        if (req.status === 200) {
          let data = JSON.parse(req.response);
          setSortedData(data);
          if(data == ''){
            setData(false )
          }else {
            setData(true);

          }
        }
      }
    };
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.setRequestHeader("Accept", "application/json");
    req.setRequestHeader("Access-Control-Allow-Origin", "*");
    req.send(`clients_id=${id}`);
  }, []);

  const hide = () => {
    setHidden(!hidden);
  };

  return (
    <>
      <Navbar />
      <div className="">
        <FormContext.Provider value={{ isOpen, setIsOpen }}>
          <div className="mt-8 flex items-center justify-between py-2">
            {isOpen ? <NewTickets /> : ""}
            <div className="ml-4 flex items-center space-x-4 rounded bg-blue-900 px-6 py-2">
              <FaPenNib className="text-white" />
              <button
                className="font-poppins text-white"
                onClick={() => setIsOpen(!isOpen)}
              >
                New Ticket
              </button>
            </div>
            
          </div>
        </FormContext.Provider>
        <div className="flex mt-2">
          {datas ? (
            <DataContext.Provider value={{ sortedData }}>
              <Ticket />
            </DataContext.Provider>
          ) : (
            <div className="w-3/4 h-44 bg-white mt-2 p-2 mb-2 ml-2 rounded">
              <h1 className="text-2xl font-poppins">
                No Tickets available create one Now!
              </h1>
              <p className="font-poppins">Create new Tickets or delete them</p>
            </div>
          )}

          <ClientData />
        </div>
      </div>
    </>
  );
}
