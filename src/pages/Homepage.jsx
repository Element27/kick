import { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { TopBar } from "../components/Topbar";
import HeroSection from "../components/HeroSection";
import AllGames from "../components/AllGames";

export default function HomePage() {

  const [toggleSideBar, setToggleSidebar] = useState(false);

  console.log("toggleSideBar", toggleSideBar);

  return (



    <div className="flex flex-col lg:flex-row min-h-screen overflow-x-hidden bg-[#151C2F]">
      <div className={` duration-150 absolute top-0 lg:top-auto lg:static left-[-100%] lg:left-auto ${toggleSideBar ? " w-full lg:w-36 z-10 lg:z-0 left-[0]" : "w-full lg:w-1/5"} `}>
        <Sidebar
          toggleSideBar={toggleSideBar}
          setToggleSidebar={setToggleSidebar}
        />
      </div>
      <div className="w-full lg:w-4/5 mx-auto">
        <TopBar
          toggleSideBar={toggleSideBar}
          setToggleSidebar={setToggleSidebar}
        />

        <div className="w-full mx-auto">
          <HeroSection />
          <AllGames />
        </div>
      </div>

    </div>
  );
}