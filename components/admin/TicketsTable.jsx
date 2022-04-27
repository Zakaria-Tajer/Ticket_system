import { createContext, useState} from "react";
import { TicketReponse } from "./TicketReponse";

export const AdminResponse = createContext([])

export const TicketsTable = ({ TicketsData }) => {
  console.log(TicketsData);

  const [hidden, setHidden] = useState(false);
  const [uniqueId, setUniqueId] = useState("");

  const data = TicketsData;
  console.log(data);
  
  const OpenEdit = (e) => {
    const value = e.target.value 
    setHidden(!hidden);
    setUniqueId(value)
  };

  return (
    <AdminResponse.Provider value={{hidden, setHidden}}>
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg xl:w-2/3 mt-6 xl:mt-36 xl:ml-4">
      {hidden && <TicketReponse uniqe={uniqueId}/>}
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Ticket id
            </th>
            <th scope="col" className="px-6 py-3">
              Ticket Title
            </th>
            <th scope="col" className="px-6 py-3">
              created_at
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((items) => (
            <tr
              key={items.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 dark:text-white "
              >
                #{items.uniques_id}
              </td>
              <td className="px-6 py-4">{items.Ticket_Title}</td>

              <td className="px-6 py-4">{items.created_at}</td>
              <td className="px-6 py-4">{items.status}</td>
              <td className="px-6 py-4 text-right">
                <button
                  onClick={OpenEdit}
                  value={items.id}
                  className="font-medium cursor-pointer text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </AdminResponse.Provider>
  );
};
