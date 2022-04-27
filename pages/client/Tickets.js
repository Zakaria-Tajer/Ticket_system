import React, { useEffect, useState } from "react";
import { FaPenNib, FaSort } from "react-icons/fa";
import { DataContext, FormContext } from "context/UserContext";
import { NewTickets } from "@/components/client/Tickets/TicketsComponents/NewTickets";
import { Navbar } from "@/components/Layout/Navbar";
import Cookies from "js-cookie";
import { Ticket } from "@/components/client/Tickets/Ticket";
import Head from "next/head";
import { ClientData } from "@/components/client/ClientData";
import { useMediaQuery } from "react-responsive";
import { ClosedTickets } from "@/components/client/Tickets/ClosedTickets";
import { RespondedTickets } from "@/components/client/Tickets/TicketsStatus/RespondedTickets";

export default function Tickets() {
  const [hidden, setHidden] = useState(false);
  const [sortedData, setSortedData] = useState([]);
  const [isData, setIsData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [datas, setData] = useState(false);
  const [closedTickets, setClosedTickets] = useState(false);
  const [resTickets, setResTickets] = useState(false);
  const [noti, setNoti] = useState(false);

  const isTabletOrMobile = useMediaQuery({ query: "(min-width: 1024px)" });

  useEffect(() => {
    const id = Cookies.get("id");
    const req = new XMLHttpRequest();
    req.open("POST", "http://127.0.0.1:8000/api/Tickets", true);
    req.onload = () => {
      if (req.readyState === XMLHttpRequest.DONE) {
        if (req.status === 200) {
          let data = JSON.parse(req.response);
          setSortedData(data);
          if (data == "") {
            setData(false);
          } else {
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

  useEffect(() => {
    const id = Cookies.get("id");
    const req = new XMLHttpRequest();
    req.open("POST", "http://127.0.0.1:8000/api/TicketsAnswerd", true);
    req.onload = () => {
      if (req.readyState === XMLHttpRequest.DONE) {
        if (req.status === 200) {
          let data = JSON.parse(req.response);
          console.log(data);
          if (data == "") {
          } else {
            setIsData(data);
            setTimeout(() => {
              setNoti(false);
            }, 6000);
            setNoti(true);
          }
        }
      }
    };
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.setRequestHeader("Accept", "application/json");
    req.setRequestHeader("Access-Control-Allow-Origin", "*");
    req.send(`id=${id}`);
  }, []);

  const answerdTickets = () => {
    setResTickets(!resTickets);
  };

  return (
    <>
      <Head>
        <title>Tickets Page</title>
      </Head>
      <Navbar />
      <div className="">
        {noti ? (
          <div className="m-auto w-96 absolute right-3 top-24">
            <div className="bg-white rounded-lg border-gray-300 border p-3 shadow-lg ">
              <div className="flex flex-row">
                <div className="px-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 1792 1792"
                    fill="#44C997"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1299 813l-422 422q-19 19-45 19t-45-19l-294-294q-19-19-19-45t19-45l102-102q19-19 45-19t45 19l147 147 275-275q19-19 45-19t45 19l102 102q19 19 19 45t-19 45zm141 83q0-148-73-273t-198-198-273-73-273 73-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273zm224 0q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" />
                  </svg>
                </div>
                <div className="ml-2 mr-6">
                  <span className="font-semibold">New Answered Tickets</span>
                  <span className="block text-gray-500">Check them out</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        <FormContext.Provider value={{ isOpen, setIsOpen }}>
          <div className="mt-8 flex  items-center py-2 space-x-4">
            {isOpen ? <NewTickets /> : ""}
            <div className="ml-4 flex items-center md:space-x-4 rounded bg-blue-900 px-6 py-2 hover:bg-blue-700 duration-700">
              <FaPenNib className="text-white" />
              <button
                className="font-poppins text-white text-sm md:text-lg"
                onClick={() => setIsOpen(!isOpen)}
              >
                New Ticket
              </button>
            </div>
            <div className="list-none flex md:space-x-4 items-end underline underline-offset-2">
              <li className="cursor-pointer font-poppins hover:text-blue-500 hover:duration-700">
                <a onClick={() => setClosedTickets(!closedTickets)}>
                  {closedTickets == false ? (
                    <a className="lg:text-lg font-poppins ">Closed Tickets</a>
                  ) : (
                    <a className="lg:text-lg font-poppins ">All Tickets</a>
                  )}
                </a>
              </li>
              <li className="cursor-pointer font-poppins hover:text-blue-500 hover:duration-700">
                <a onClick={answerdTickets}>
                  {resTickets == false ? (
                    <a className="lg:text-lg font-poppins ">
                      Responded Tickets
                    </a>
                  ) : (
                    <a className="lg:text-lg font-poppins ">All Tickets</a>
                  )}
                </a>
              </li>
            </div>
          </div>
        </FormContext.Provider>
        {isTabletOrMobile ? (
          <div className="lg:flex mt-2">
            {datas ? (
              <DataContext.Provider value={{ sortedData }}>
                {closedTickets ? (
                  <ClosedTickets />
                ) : <Ticket /> && resTickets ? (
                  <RespondedTickets data={isData} />
                ) : (
                  <Ticket />
                )}
              </DataContext.Provider>
            ) : (
              <div className="w-3/4 h-44 bg-white mt-2 p-2 mb-2 ml-2 rounded">
                <h1 className="text-2xl font-poppins">
                  No Tickets available create one Now!
                </h1>
                <p className="font-poppins">
                  Create new Tickets or delete them
                </p>
              </div>
            )}
            <ClientData />
          </div>
        ) : (
          <div className="lg:flex mt-2">
            <ClientData />
            {datas ? (
              <DataContext.Provider value={{ sortedData }}>
                {closedTickets ? <ClosedTickets /> : <Ticket />}
              </DataContext.Provider>
            ) : (
              <div className="w-3/4 h-44 bg-white mt-2 p-2 mb-2 ml-2 rounded">
                <h1 className="text-2xl font-poppins">
                  No Tickets available create one Now!
                </h1>
                <p className="font-poppins">
                  Create new Tickets or delete them
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
