import React from "react";
import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

export const TopBar = ({ toggleSideBar, setToggleSidebar }) => {
  return (
    <div className={`flex items-center justify-between mb-6 text-white px-4 lg:px-8 my-8 bg-[#1F2937] lg:bg-transparent rounded-md w-[90%] lg:w-full mx-auto`}>

      <div className="hidden lg:block">
        <p>GMT- 02:48</p>
        <p>12/04/24</p>
      </div>
      <div className=" block lg:hidden">
        <img src="assets/logo.png" alt="Logo" className="mx-auto my-4" />
      </div>

      {/* search */}
      <div className="flex items-center gap-4 w-1/2 justify-end">
        <div className="relative  flex-1 hidden lg:block">
          <input
            type="text"
            placeholder="Search..."
            className="bg-[#1F2937] text-white w-full rounded-lg pl-8 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 "
          />
          <FaSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <FaSearch className="block lg:hidden text-gray-400" />


        {/* notification */}
        <div>
          <FaBell className="text-2xl" />
        </div>


        {/* avatar mobile */}
        <img
          src="assets/avatar.png"
          alt="avatar"
          className="hidden lg:block w-8 h-8"
        />

        <img
          src="assets/d_caret.png"
          alt="drop down"
          className="hidden lg:block"
        />

        <IoMenu className="block lg:hidden w-6 h-6" onClick={() => setToggleSidebar(!toggleSideBar)} />

      </div>

    </div>
  );
};
