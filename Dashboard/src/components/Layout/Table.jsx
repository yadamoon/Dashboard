import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Search from "../pages/Search";

function RCPaginate({ items, itemsPerPage, setter }) {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);

  useEffect(() => {
    setter(currentItems);
  }, [itemOffset, endOffset, items]);

  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };
  return (
    <div className="flex justify-center  ">
      <ReactPaginate
        containerClassName="flex space-x-2 items-center bg-white p-1 px-2 justify-center rounded sm:1/2"
        nextClassName="bg-gray-300 text-xs uppercase py-1 px-2 rounded-lg hover:opacity-75"
        previousClassName="bg-gray-300 text-xs uppercase py-1 px-2 rounded-lg hover:opacity-75"
        activeLinkClassName=" text-white bg-blue-600 border-0"
        pageLinkClassName="w-8 h-8 flex items-center justify-center text-sm rounded-full border  hover:bg-blue-500 hover:text-white"
        breakLabel="..."
        nextLabel="next"
        onPageChange={handlePageClick}
        initialPage={0}
        pageCount={pageCount}
        previousLabel="previous"
        renderOnZeroPageCount={null}
      />
    </div>
  );
}

function Table() {
  const [users, setUsers] = useState([]);
  const [displayedUsers, setDisplayedUsers] = useState([]);
  const [usersFiltered, setUsersFiltered] = useState([]);

  function getUsers() {
    try {
      axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
        setUsers(res.data);
        setUsersFiltered(res.data);

        console.log(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUsers();
    setDisplayedUsers(users.slice(0, 5));
  }, []);

  const handlePageChange = (newPageItems) => {
    setDisplayedUsers(newPageItems);
  };

  const headTable = ["FullName", "Email", "Address", "Information"];
  return (
    <div className="flex justify-center">
      <div className=" w-full">
        <Search users={users} setter={setUsersFiltered} />
        <div className=" flex  ">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            {/* //todo Header of Table */}
            <thead className="text-xs text-black uppercase  bg-gray-200">
              <tr>
                {headTable.map((title) => (
                  <th scope="col" className="px-6 py-3" key={title.id}>
                    {title}
                  </th>
                ))}
              </tr>
            </thead>
            {displayedUsers.map((person) => (
              <tbody key={person.id}>
                <tr className="bg-gray-100 ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-900"
                  >
                    {person.name}
                  </th>
                  <td className="px-6 py-4"> {person.email}</td>
                  <td className="px-6 py-4">{person.address.city}</td>

                  <td className="px-6 py-4">
                    <a
                      href=""
                      className="bg-blue-500 text-white p-3 rounded hover:opacity-75"
                    >
                      Details
                    </a>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
        <div className="space-y-2 my-16">
          {users.length > 4 && (
            <RCPaginate
              items={usersFiltered}
              itemsPerPage={5}
              setter={setDisplayedUsers}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Table;
