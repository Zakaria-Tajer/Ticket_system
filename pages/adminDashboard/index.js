import { TicketsTable } from "@/components/admin/TicketsTable";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useMediaQuery } from "react-responsive";

import Image from "next/image";
import { Logout } from "@/components/Layout/Logout";
export async function getServerSideProps() {
  const data = await fetch("http://127.0.0.1:8000/api/allTickets");
  const response = await data.json();

  return {
    props: { response },
  };
}

function Home({ response }) {
  const isTabletOrMobile = useMediaQuery({ query: "(min-width: 1440px)" });

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  useEffect(() => {
    const cookie = Cookies.get("token");
    const req = new XMLHttpRequest();
    req.open("GET", "http://127.0.0.1:8000/api/user", true);
    req.onload = () => {
      if (req.readyState === XMLHttpRequest.DONE) {
        if (req.status === 200) {
          let data = JSON.parse(req.response);
          console.log(data);
          const { email, username } = data;
          setEmail(email);
          setUsername(username);
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
    <div className="bg-[#F4F5FA] min-h-screen">
      <Head>
        <title>Dashboard</title>
      </Head>
      <div className=" h-20 flex items-center justify-between">
        <h1 className="ml-4 font-poppins text-xl">Tickets Dashboard</h1>
        <div className="flex mr-3 shadow-md bg-blue-900 rounded">
          <Logout />
        </div>
      </div>
      <div className="xl:flex xl:space-x-20">
        {isTabletOrMobile ? (
          <>
            <TicketsTable TicketsData={response} />
            <div className="bg-gray-700  w-full mt-14 max-h-96 md:mr-2 rounded-md lg:w-1/4 flex justify-center flex-col space-y-4">
              <div className="w-36 h-36 bg-white rounded-full mt-6 mx-auto">
                <Image
                  src="https://www.kindpng.com/picc/m/495-4952816_user-list-add-new-user-icon-hd-png.png"
                  width="200"
                  height="200"
                  layout="responsive"
                  alt="Client-Profile"
                  className="rounded-full object-cover"
                />
              </div>
              <div className="mx-auto text-center">
                <h1 className="text-white font-poppins">
                  FullName: {username}
                </h1>
                <h1 className="text-white font-poppins">Email: {email}</h1>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="bg-gray-700  w-full max-h-96 md:mr-2 rounded-md flex justify-center flex-col space-y-4">
              <div className="w-36 h-36 bg-white rounded-full mt-6 mx-auto">
                <Image
                  src="https://www.kindpng.com/picc/m/495-4952816_user-list-add-new-user-icon-hd-png.png"
                  width="200"
                  height="200"
                  layout="responsive"
                  alt="Client-Profile"
                  className="rounded-full object-cover"
                />
              </div>
              <div className="mx-auto text-center">
                <h1 className="text-white font-poppins">
                  FullName: {username}
                </h1>
                <h1 className="text-white font-poppins">Email: {email}</h1>
              </div>
            </div>
            <TicketsTable TicketsData={response} />
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
