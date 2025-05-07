import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaGamepad, FaCog, FaSignOutAlt } from "react-icons/fa";
import { sideNavBottomItems, sideNavTopItems } from "../constants/SideNavItems";

export const Sidebar = ({ toggleSideBar, setToggleSidebar }) => {



  return (
    <div className={`w-[90%] bg-[#111827] min-h-screen flex flex-col items-center md:items-start py-6 px-2 space-y-6 relative duration-150 red-hat-display`}>
      <div className=" w-full px-4">
        <img src="assets/logo.png" alt="Logo" className="mx-auto my-4 hidden lg:block" />
      </div>

      <div className="bg-white/10 w-full rounded-xl p-4 flex flex-col items-center gap-4">
        {/*  */}
        <div className="bg-white/5 w-full rounded-xl flex items-center gap-3 p-3">
          <img
            src="assets/coin20.png"
            alt="Coin"
          />

          <div className={`${toggleSideBar === false ? "block" : " block lg:hidden"} relative`}>
            <h1 className=" text-white text-lg font-semibold">Bonus</h1>
            <p className=" text-gray-400 text-sm">Get everyday extra points</p>
          </div>


        </div>

        {/*  */}
        <div className="bg-white/5 w-full rounded-xl flex flex-col gap-3 p-3">
          {sideNavTopItems.map((item, index) => (
            <NavItem
              key={index}
              icon={item.icon}
              label={item.label}
              to={item.to}
              toggleSideBar={toggleSideBar}
            />
          ))}
        </div>
        {/*  */}
        <div className="bg-white/5 w-full rounded-xl flex flex-col gap-3 p-3">
          {sideNavBottomItems.map((item, index) => (
            <NavItem
              key={index}
              icon={item.icon}
              label={item.label}
              to={item.to}
              toggleSideBar={toggleSideBar}
            />
          ))}
        </div>
      </div>
      <img
        src="assets/Arrow.png"
        alt="toggle sidebar"
        className={`absolute -right-2 top-10 cursor-pointer duration-150 ${toggleSideBar ? "rotate-180" : ""}`}
        onClick={() => setToggleSidebar(!toggleSideBar)}
      />

    </div>
  );
};


const NavItem = ({ icon, label, to, toggleSideBar }) => (
  <NavLink
    to={to}
    className={`flex items-center px-3 py-4 text-sm md:text-base rounded-lg transition   text-white  gap-3 hover:bg-[#FF197533]  ${to === '/' ? "bg-[#FF197533]" : "text-white"} }`

    }
  >
    <img src={icon} alt={label} className="w-4 h-4" />
    <span className={`${toggleSideBar === false ? "block" : " block lg:hidden"}`}>{label}</span>
  </NavLink>
);
