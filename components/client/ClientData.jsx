import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Image from "next/image";

export const ClientData = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    const cookie = Cookies.get("token");
    const req = new XMLHttpRequest();
    req.open("GET", "http://127.0.0.1:8000/api/user", true);
    req.onload = () => {
      if (req.readyState === XMLHttpRequest.DONE) {
        if (req.status === 200) {
          let data = JSON.parse(req.response);
          console.log(data);
          const { username, email,id } = data;
          setUsername(username);
          setEmail(email);
          Cookies.set('id', id)
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
    <div className="bg-gray-700 lg:ml-2 w-full max-h-96 md:mr-2 rounded-md lg:w-1/4 flex justify-center flex-col space-y-4">
      <div className="w-36 h-36 bg-white rounded-full mt-6 mx-auto">
        <Image 
            src='https://www.kindpng.com/picc/m/495-4952816_user-list-add-new-user-icon-hd-png.png'
            width='200'
            height='200'
            layout='responsive'
            alt="Client-Profile"
            className="rounded-full object-cover"
        />
      </div>
      <div className="mx-auto text-center">
        <h1 className="text-white font-poppins">FullName: {username}</h1>
        <h1 className="text-white font-poppins">Email: {email}</h1>
      </div>
    </div>
  );
};
