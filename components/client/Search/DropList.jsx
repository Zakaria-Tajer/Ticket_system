import React, { useContext } from "react";
import { useRouter } from "next/router";

export const DropList = ({ category }) => {

  const router = useRouter();
  sessionStorage.setItem('category', category);
  const initializeTickets = () => {
    router.push("/client/Tickets");
  };

  return (
    <div className="bg-white w-full py-1 absolute top-[4.2rem] rounded right-0">
      <li className="list-none py-2 pl-4 font-poppins cursor-pointer hover:bg-gray-300 hover:duration-700" onClick={initializeTickets}>
        {category}
      </li>
    </div>
  );
};
