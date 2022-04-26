import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { FaUser } from 'react-icons/fa';
import { InformationContext } from "context/UserContext";

export const TicketFooter = ({problem, status}) => {
  const [username, setUsername] = useState('')
  const [ids,setId] = useState('')
  const [email,setEmail] = useState('')
  useEffect(() => {
    const cookie = Cookies.get("token");
    const req = new XMLHttpRequest();
    req.open("GET", "http://127.0.0.1:8000/api/user", true);
    req.onload = () => {
      if (req.readyState === XMLHttpRequest.DONE) {
        if (req.status === 200) {
          let data = JSON.parse(req.response);
          // console.log(data);
          const { username,id } = data
          console.log(id);
          setUsername(username)
;
        }
      }
    };
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.setRequestHeader("Accept", "application/json");
    req.setRequestHeader("Access-Control-Allow-Origin", "*");
    req.setRequestHeader("Authorization", `Bearer ${cookie}`);
    req.send();
  }, []);

  return (
    <div className="bg-gray-700 md:flex py-2 md:h-auto h-28 space-y-3">
      <div className="md:w-1/3 flex justify-center md:justify-start ml-4 space-x-4 items-center">
        <div className="md:w-8 md:h-8 w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <FaUser className="text-gray-400"/>
        </div>
        <h1 className="text-white font-poppins">{username}</h1>
      </div>
      <div className="flex justify-center md:justify-start ml-auto w-full text-white rounded-md py-3 pl-2 lg:space-x-20 mr-3">
        <h1 className="font-poppins text-center text-sm">Problem: <span className="ml-2 underline underline-offset-2">{problem}</span></h1>
        <div className="px-10 rounded-md flex items-center">
        <h1 className="font-poppins text-center">Status: <span className="ml-2 underline underline-offset-2">{status}</span></h1>
        </div>
      </div>
    </div>
  );
};
