"use client"

import HomeLogo from "./utils/HomeLogo";
import NavigationLinks from "./utils/NavigationLinks";
import AccessBttns from "./utils/AccessBttns";
import { UserButton, useUser } from "@clerk/nextjs";
import HamburguerBttn from "./utils/HamburguerBttn";
import HamburguerMenu from "./utils/HamburguerMenu";
import { useEffect, useState } from "react";

const NavBar = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    // Function to check screen size and update setToggle state
    function handleResize() {
      if (window.innerWidth >= 1024) {
        setToggle(false);
      }
    }
    // Add the event listener
    window.addEventListener('resize', handleResize);
    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="fixed w-full z-20 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between p-5">
        <HomeLogo setToggle={setToggle}/>
        <div className="lg:hidden flex items-center space-x-6">
          {isSignedIn && <p>Hi {user.firstName}</p>}
          <HamburguerBttn toggle={toggle} setToggle={setToggle}/>
        </div>
        
        { isLoaded && 
          <div className="hidden items-center lg:flex">
            <NavigationLinks/>
            { isSignedIn ? <UserButton afterSignOutUrl="/"/> : <AccessBttns setToggle={setToggle}/>}
          </div>
        }
        
      </div>
      <HamburguerMenu toggle={toggle} setToggle={setToggle} />
    </nav>
  );
};

export default NavBar;
