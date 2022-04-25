import React, { useEffect, useState } from "react";
import { FaPenNib, FaSort } from "react-icons/fa";
import { DataContext, FormContext } from "context/UserContext";
import { NewTickets } from "@/components/client/Tickets/TicketsComponents/NewTickets";
import { Navbar } from "@/components/Layout/Navbar";
import { FaTicketAlt, FaEllipsisH } from "react-icons/fa";
import { TicketFooter } from "@/components/client/Tickets/TicketsComponents/TicketFooter";
import Cookies from "js-cookie";
import { Ticket } from "@/components/client/Tickets/Ticket";

// export async function getServerSideProps(context) {
//   const cookies = context.req.cookies['id'];

//   const data = await fetch(`http://127.0.0.1:8000/api/Tickets`, {
//     method: "POST",
//     headers: {
//       'content-type': 'application/json',
//     },
//     body: cookies
//   });
//   const response = await data.json();
//   // const req = new XMLHttpRequest()
//   //       req.open('GET', 'http://127.0.0.1:8000/api/getCategories', true)
//   //       req.onload = () => {
//   //         if (req.readyState === XMLHttpRequest.DONE) {
//   //           if (req.status === 200) {
//   //             let data = JSON.parse(req.response)
//   //             console.log(data)

//   //           }
//   //         }
//   //       }
//   //       req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
//   //       req.setRequestHeader('Accept', 'application/json')
//   //       req.setRequestHeader('Access-Control-Allow-Origin', '*')
//   //       req.send(`clients_id=${id}`)
//   return {
//     props: { data: response},
//   };
// }

export default function Tickets({ data }) {
  console.log(data);
  const [hidden, setHidden] = useState(false);
  const [sortedData, setSortedData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const id = Cookies.get("id");
    const req = new XMLHttpRequest();
    req.open("POST", "http://127.0.0.1:8000/api/Tickets", true);
    req.onload = () => {
      if (req.readyState === XMLHttpRequest.DONE) {
        if (req.status === 200) {
          let data = JSON.parse(req.response);
          const { Ticket_Title } = data;
          setSortedData(data);
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
  // console.log(sortedData);

  return (
    <>
      <Navbar />
      <div className="bg-gray-300">
        <FormContext.Provider value={{ isOpen, setIsOpen }}>
          <div className="mt-8 flex items-center justify-between bg-gray-400 py-2">
            {isOpen ? <NewTickets /> : ""}
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
        <div className="bg-blue-400 flex mt-2">
          <DataContext.Provider value={{ sortedData }}>
            <Ticket />
          </DataContext.Provider>

          <div>d</div>
        </div>
      </div>
    </>
  );
}
