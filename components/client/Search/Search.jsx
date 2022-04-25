import React, { FC, useState, createContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMediaQuery } from "react-responsive";
import { DropList } from "./DropList";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
export const Search = () => {

  const [keyword, setKeyword] = useState("");
  const [hidden, setHidden] = useState(false);
  const [cte, setCategory] = useState([]);

  let arr = [];
  const getSearchedValue = (e) => {
    setKeyword(e.target.value);
    // RequestCreator(
    //   'POST',
    //   `http://127.0.0.1:8000/api/search`,
    //   `keyword=${keyword}`
    // )
    const req = new XMLHttpRequest();
    req.open("POST", "http://127.0.0.1:8000/api/search", true);
    req.onload = () => {
      if (req.readyState === XMLHttpRequest.DONE) {
        if (req.status === 200) {
          let data = JSON.parse(req.response);
          for (let i = 0; i < data.length; i++) {
            const { category } = data[i];
            setCategory(category);
            console.log(data);
          }
        }
      }
    };
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.setRequestHeader("Accept", "application/json");
    req.setRequestHeader("Access-Control-Allow-Origin", "*");
    req.send(`keyword=${keyword}`);
    setHidden(!hidden);
    // console.log(cte);
    console.log(arr);
  };

  return (
    <div className="max-w-xl w-11/12 py-4 rounded bg-white px-4 flex items-center relative">
      <FontAwesomeIcon icon={faSearch} className="text-lg text-gray-500" />
      <input
        type="text"
        placeholder="Search..."
        className="px-5 ml-3 w-96 md:ml-1 outline-none "
        onChange={getSearchedValue}
      />
      {cte == '' ? (
        ''
      ) : (
        <DropList category={cte}/>
      
      )}
    </div>
  );
};
