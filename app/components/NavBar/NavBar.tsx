"use client";

import { useState, useEffect } from "react";
import HomeLogo from "./utils/HomeLogo";
import NavigationLinks from "./utils/NavigationLinks";
import AccessBttns from "./utils/AccessBttns";
import { SignOutButton, useUser } from "@clerk/nextjs";
import HamburguerBttn from "./utils/HamburguerBttn";
import HamburguerMenu from "./utils/HamburguerMenu";
import Link from "next/link";
import UserAndSignOutButtonSkeleton from "../Skeleton/UserAndSignOutButtonSkeleton";

const NavBar = () => {
  const { isLoaded, isSignedIn, user } = useUser();
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
    <nav className="fixed w-full z-20 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between p-5">
        <HomeLogo setToggle={setToggle} />
        <div className="lg:hidden flex items-center space-x-6">
          {isSignedIn && <p>Hi {user.firstName}</p>}
          <HamburguerBttn toggle={toggle} setToggle={setToggle} />
        </div>

        {isLoaded ? (
          <div className="hidden items-center space-x-4 lg:flex">
            <NavigationLinks />
            {isSignedIn ? (
              <div className="flex space-x-4">
                <p className="text-gray-500">Hi {user.firstName}</p>
                <SignOutButton>
                  <div>
                    <Link
                      href={"/"}
                      className="py-2 px-4 border border-black rounded-full"
                    >
                      Sign Out
                    </Link>
                  </div>
                </SignOutButton>
              </div>
            ) : (
              <AccessBttns setToggle={setToggle} />
            )}
          </div>
        ) : <UserAndSignOutButtonSkeleton/>}
      </div>
      <HamburguerMenu toggle={toggle} setToggle={setToggle} />
    </nav>
  );
};

export default NavBar;
