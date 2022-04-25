import React, { useEffect, useState } from "react";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

export const Navbar = () => {
  const [profile, setProfile] = useState(true);
  const [data, setData] = useState({});
  useEffect(() => {
    if (Cookies.get("token")) {
      setProfile(false);
    }
  }, []);

  const router = useRouter();

  const logout = () => {
    Cookies.remove("token");
    Cookies.remove("role");
    router.push("/");
    window.history.forward();
  };

  return (
    <nav className="bg-[#13274F] justify-center shadow flex items-center">
      <div className="container space-x-5 flex items-center justify-center px-6 py-8 mx-auto text-gray-600 capitalize">
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
        <Link href="/client/contacts">
          <a className="border-b-2 border-transparent text-white hover:border-blue-500 mx-1.5 sm:mx-6 font-poppins">
            Support
          </a>
        </Link>

        <a className="border-b-2 border-transparent text-white hover:border-blue-500 mx-1.5 sm:mx-6 font-poppins"></a>
      </div>
      <div className="md:pr-10 mr-2">
        <button
          onClick={logout}
          className="w-32 rounded border-[1px] border-blue-500 py-2 font-poppins text-white"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};
