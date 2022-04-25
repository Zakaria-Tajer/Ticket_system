import React, { useState } from "react";
import { FaEllipsisH } from "react-icons/fa";
export const Options = () => {
  const [sort, setSort] = useState(false);

  const TimeHide = () => {
    setSort(!sort);
  };
  return (
    <div className="relative ml-auto mr-3">
      <FaEllipsisH className="cursor-pointer text-lg" onClick={TimeHide} />
      {sort ? (
        <div className="absolute right-0 w-40 rounded-md bg-white">
          <li className="cursor-pointer list-none py-2 pl-2 font-SansS hover:bg-gray-300 hover:duration-700">
            <a>Delete</a>
          </li>
          <li className="cursor-pointer list-none py-2 pl-2 font-SansS hover:bg-gray-300 hover:duration-700">
            <a>Close</a>
          </li>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
