import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { setHide, setShow } from "../../store/Slice/authSlice";
import { frame, motion } from "framer-motion";

const SideBar = () => {
  // const controller = useSelector((state) => state.controller);

  // const { signedIn } = useSelector((state) => state.auth);

  return (
    <div className="">
      <aside
        id="sidebar-multi-level-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-white">
          <div className=" mb-4 justify-center items-center text-center ">
            <motion.h1
              className="text-blue-600  text-2xl items-center justify-center uppercase font-bold "
              initial={{ y: -100 }}
              animate={{ y: -10 }}
            >
              Admin Panel
            </motion.h1>
          </div>
          <div className="flex border h-1 bg-black"></div>
          <ul className="space-y-2 my-5 font-medium">
            <div className=" flex justify-start items-center py-7 relative">
              <input
                className="text-sm leading-none text-left text-gray-600 px-4 py-3 w-full border rounded border-gray-300  outline-none"
                type="text"
                placeholder="Search"
              />
              <svg
                className="absolute right-3 z-10 cursor-pointer"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z"
                  stroke="#4B5563"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 21L15 15"
                  stroke="#4B5563"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Dashboard */}
            <motion.li
              whileHover={{ scale: 1.3, originX: 0, color: "#f8e112" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                to="/"
                className="flex items-center p-2 text-gray-500 transition duration-75 rounded-lg group hover:bg-gray-200 dark:text-gray-500 dark:hover:bg-gray-200"
              >
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ms-3">Dashboard</span>
              </Link>
            </motion.li>

            {/* table */}
            <motion.li
              whileHover={{ scale: 1.3, originX: 0, color: "#f8e112" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                to="/Table"
                className="flex items-center w-full p-2 text-base text-gray-500 transition duration-75 rounded-lg group hover:bg-gray-200 dark:text-gray-500 dark:hover:bg-gray-200"
              >
                <i class="fa fa-table"></i>
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  Table
                </span>
              </Link>
            </motion.li>

            <motion.li
              whileHover={{ scale: 1.3, originX: 0, color: "#f8e112" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                to=""
                href="#"
                className="flex items-center p-2 text-gray-500 transition duration-75 rounded-lg group hover:bg-gray-200 dark:text-gray-500 dark:hover:bg-gray-200"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Over View</span>
                <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                  new
                </span>
              </Link>
            </motion.li>

            {/* inbox */}
            <motion.li
              whileHover={{ scale: 1.3, originX: 0, color: "#f8e112" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                to="/Inbox"
                href="#"
                className="flex items-center p-2 text-gray-500 transition duration-75 rounded-lg group hover:bg-gray-200 dark:text-gray-500 dark:hover:bg-gray-200"
              >
                <i class="fa fa-inbox"></i>
                <span className="flex-1 ms-3 whitespace-nowrap">Inbox</span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  3
                </span>
              </Link>
            </motion.li>

            {/* user */}
            <motion.li
              whileHover={{ scale: 1.3, originX: 0, color: "#f8e112" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                to="/User"
                className="flex items-center p-2 text-gray-500 transition duration-75 rounded-lg group hover:bg-gray-200 dark:text-gray-500 dark:hover:bg-gray-200"
              >
                <i class="fa fa-user"></i>
                <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
              </Link>
            </motion.li>

            <motion.li
              whileHover={{ scale: 1.3, originX: 0, color: "#f8e112" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                to="/Product"
                className="flex items-center p-2 text-gray-500 transition duration-75 rounded-lg group hover:bg-gray-200 dark:text-gray-500 dark:hover:bg-gray-200"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                </svg>

                <span className="flex-1 ms-3 whitespace-nowrap">Products</span>
              </Link>
            </motion.li>
            {/* settings */}
            <motion.li
              whileHover={{ scale: 1.3, originX: 0, color: "#f8e112" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                to="/Setting"
                className="flex items-center p-2 text-gray-500 transition duration-75 rounded-lg group hover:bg-gray-200 dark:text-gray-500 dark:hover:bg-gray-200"
              >
                <i class="fa fa-gears"></i>
                <span className="flex-1 ms-3 whitespace-nowrap">Settings</span>
              </Link>
            </motion.li>

            <motion.li
              whileHover={{ scale: 1.3, originX: 0, color: "#f8e112" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                to="/About"
                className="flex items-center p-2 text-gray-500 transition duration-75 rounded-lg group hover:bg-gray-200 dark:text-gray-500 dark:hover:bg-gray-200"
              >
                <i class="fa fa-info-circle" aria-hidden="true"></i>
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Information
                </span>
              </Link>
            </motion.li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default SideBar;
