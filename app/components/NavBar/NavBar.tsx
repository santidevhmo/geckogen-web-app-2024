"use client"

import HomeLogo from "./HomeLogo";
import NavigationLinks from "./NavigationLinks";
import AccessBttns from "./AccessBttns";
import { UserButton, useUser } from "@clerk/nextjs";
import HamburguerBttn from "./HamburguerBttn";
import HamburguerMenu from "./HamburguerMenu";
import { useState } from "react";

const NavBar = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const [toggle, setToggle] = useState(false)

  return (
    <nav className="fixed w-full z-10 bg-white border-b border-gray-200">
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
