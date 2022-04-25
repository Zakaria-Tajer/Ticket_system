import React, { useContext, useState } from "react";
import { FormContext } from "context/UserContext";
import { RequestCreator } from "lib/RequestCreator";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

const category = [
  { id: 1, category: "Product Problem" },
  { id: 2, category: "General Problem" },
  { id: 3, category: "Service Request" },
  { id: 4, category: "Hardware" },
  { id: 5, category: "Software" },
  { id: 6, category: "Incidents" },
];

export const NewTickets = () => {
  const [drop, setDrop] = useState(false);
  const { isOpen, setIsOpen } = useContext(FormContext);
  const [dropText, setDropText] = useState("");
  const [title, setTitle] = useState("");
  const [ticketProblem, setTicketProblem] = useState("");
  const id = Cookies.get("id");
  const categorySearch = sessionStorage.getItem('category')
  const saveForm = () => {
    if (title !== "" && ticketProblem !== "") {
      if (ticketProblem.length < 20) {
        toast.error("Please enter more than 20 chracters");
      } else {
        RequestCreator(
          "POST",
          "http://127.0.0.1:8000/api/createTicket",
          `Ticket_Title=${title}&ticket_text=${ticketProblem}&clients_id=${id}&category=${dropText == '' ? categorySearch : dropText}`
        );
        setIsOpen(!isOpen);
      }
    } else {
      toast.error("All fields are required");
    }
  };
  const selectSection = () => {
    setDrop(!drop);
  };

  return (
    <div className="fixed inset-0 z-10 flex min-h-screen w-full items-center justify-center bg-gray-400/75">
      <div className="rounded bg-white p-3 space-y-6 px-6 shadow-lg">
        <h1 className="font-poppins">Ticket Informations</h1>
        <div
          className="w-96 h-10 rounded-t bg-gray-700 flex items-center relative cursor-pointer"
          onClick={selectSection}
        >
          {dropText ? (
            <h1 className="p-2 text-white font-SansS ml-4 text-sm">
              {dropText}
            </h1>
          ) : (
            <h1 className="p-2 text-white font-SansS ml-4 text-sm">{categorySearch ? categorySearch : '' }</h1>
          )}

          <FontAwesomeIcon
            icon={faChevronDown}
            className="text-white ml-auto mr-3"
          />
          {drop && (
            <div className="bg-white list-none absolute top-11 space-y-2 font-SansS shadow-lg w-full rounded-b">
              {category.map((item) => (
                <li
                  key={item.id}
                  className="bg-white py-2 px-6 hover:bg-gray-200 duration-700"
                  onClick={() => setDropText(item.category)}
                >
                  <a>{item.category}</a>
                </li>
              ))}
            </div>
          )}
        </div>
        <div>
          <label htmlFor="" className="font-SansS block mb-2">
            Ticket Title
          </label>
          <input
            type="text"
            className="w-96 py-2 rounded outline-none border-b-2 px-3"
            placeholder="First Ticket"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="" className="font-SansS block mb-2">
            Describe the problem
          </label>
          <textarea
            className="w-96 px-3 py-4 outline-none border-2 "
            placeholder="problems... "
            onChange={(e) => setTicketProblem(e.target.value)}
          ></textarea>
        </div>
        <button
          className="w-full bg-gray-700 text-white font-SansS py-3 rounded-md"
          onClick={saveForm}
        >
          Save
        </button>
      </div>
    </div>
  );
};
