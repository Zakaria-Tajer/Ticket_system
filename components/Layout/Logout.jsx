import React from "react";
import { useRouter } from "next/router";
import Cookies from 'js-cookie'
export const Logout = () => {
    const router = useRouter();

  const logout = () => {
    Cookies.remove("token");
    Cookies.remove("role");
    router.push("/");
    window.history.forward();
  };

  return (
      <button
        onClick={logout}
        className="w-32 border-[1px] rounded border-blue-500 py-2 font-poppins text-white"
      >
        Logout
      </button>
  );
};
