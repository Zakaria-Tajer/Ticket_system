import { RespondedTicketsContext } from 'context/UserContext';
import React,{ useEffect, useState } from 'react'
import { RespondedTickets } from './TicketsStatus/RespondedTickets';

export const RespondTickets = () => {
    const [isData, setIsData] = useState([]);

  return (
    <RespondedTicketsContext.Provider value={{isData}}>
        <RespondedTickets data={isData}/>
    </RespondedTicketsContext.Provider>
  )
}
