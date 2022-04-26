import { ClosedTicketsContext } from "context/UserContext";
import React, { useEffect, useState } from "react";
import { ClsTicket } from "./TicketsStatus/ClsTicket";

export const ClosedTickets = () => {
  const [isData, setIsData] = useState([]);

  useEffect(() => {
    const req = new XMLHttpRequest();
    req.open("GET", "http://127.0.0.1:8000/api/closedTicket", true);
    req.onload = () => {
      if (req.readyState === XMLHttpRequest.DONE) {
        if (req.status === 200) {
          let data = JSON.parse(req.response);
          console.log(data);
          setIsData(data);
        }
      }
    };
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.setRequestHeader("Accept", "application/json");
    req.setRequestHeader("Access-Control-Allow-Origin", "*");
    req.send();
  }, []);

  return (
    <ClosedTicketsContext.Provider value={{ isData }}>
      <ClsTicket />
    </ClosedTicketsContext.Provider>
  );
};
