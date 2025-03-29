"use client";

import { useState, useEffect } from "react";
import HomeLogo from "./utils/HomeLogo";
import NavigationLinks from "./utils/NavigationLinks";
import HamburguerBttn from "./utils/HamburguerBttn";
import HamburguerMenu from "./utils/HamburguerMenu";
import { useUser } from "@clerk/nextjs";
import UserAndSignOutButtonSkeleton from "../Skeleton/UserAndSignOutButtonSkeleton";

const NavBar = () => {
  const { isLoaded } = useUser();
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    // Function to check screen size and update setToggle state
    function handleResize() {
      if (window.innerWidth >= 1024) {
        setToggle(false);
      }
    }
    // Add the event listener
    window.addEventListener("resize", handleResize);
    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="infinite-banner">
        <span className="text-lg mt-2 mb-2">FREE SHIPPING INCLUDED ON ALL PRODUCTS</span>
      </div>
      <nav className="w-full bg-white border-b border-gray-200">
        <div className="flex items-center justify-between p-5">
          <HomeLogo setToggle={setToggle} />
          <div className="lg:hidden flex items-center space-x-6">
            <HamburguerBttn toggle={toggle} setToggle={setToggle} />
          </div>

          {isLoaded ? (
            <div className="hidden items-center space-x-4 lg:flex">
              <NavigationLinks />
            </div>
          ) : (
            <UserAndSignOutButtonSkeleton />
          )}
        </div>
        <HamburguerMenu toggle={toggle} setToggle={setToggle} />
      </nav>
    </>
  );
};

export default NavBar;
