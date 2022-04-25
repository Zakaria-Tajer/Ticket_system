import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { FaUser } from 'react-icons/fa';
import { TicketContext } from "context/UserContext";

export const TicketFooter = ({problem, status}) => {
  const [username, setUsername] = useState('')
  const [ids,setId] = useState('')
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
          Cookies.set('id', id);
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
    <div className="bg-gray-700 flex py-2 ">
      <div className="w-1/3 flex ml-4 space-x-4 items-center">
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
          <FaUser className="text-gray-400"/>
        </div>
        <h1 className="text-white font-poppins">{username}</h1>
      </div>
      <div className="flex ml-auto bg-purple-500 px-7 rounded-md py-3 space-x-20 mr-3">
        <h1>{problem}</h1>
        <div className="px-10 bg-white rounded-md flex items-center">
          {status}
        </div>
      </div>
    </div>
  );
};
