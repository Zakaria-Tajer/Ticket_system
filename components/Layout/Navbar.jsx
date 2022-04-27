import React, { useEffect, useState } from "react";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { Logout } from "./Logout";

export const Navbar = () => {
  const [profile, setProfile] = useState(true);
  const [data, setData] = useState({});
  useEffect(() => {
    if (Cookies.get("token")) {
      setProfile(false);
    }
  }, []);



  return (
    <nav className="bg-[#13274F] justify-center shadow flex items-center">
      <div className="container space-x-5  xl:ml-44 flex items-center justify-center px-6 py-8 mx-auto text-gray-600 capitalize">
        <Link href="/client">
          <a className="text-white border-b-2 font-poppins border-blue-500 mx-1.5 sm:mx-6">
            Home
          </a>
        </Link>
        <Link href="/client/about">
          <a className="border-b-2 border-transparent text-white hover:border-blue-500 mx-1.5 sm:mx-6 font-poppins">
            About
          </a>
        </Link>
        
        <a className="border-b-2 border-transparent text-white hover:border-blue-500 mx-1.5 sm:mx-6 font-poppins"></a>
      </div>
      <div className="md:pr-10 mr-2">
        <Logout />
      </div>
    </nav>
  );
};
