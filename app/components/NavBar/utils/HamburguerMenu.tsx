import Link from "next/link";
import AccessBttns from "./AccessBttns";
import { Dispatch, SetStateAction } from "react";
import { SignOutButton, SignedIn, UserButton, useUser } from "@clerk/nextjs";

interface HamburguerMenuProps {
  toggle: boolean;
  setToggle: Dispatch<SetStateAction<boolean>>;
}

const HamburguerMenu = (props: HamburguerMenuProps) => {
  const { toggle, setToggle } = props;

  const { isLoaded, isSignedIn, user } = useUser();

  return (
    <div className={`${!toggle && "hidden"} lg:hidden px-6 mt-2 mb-8`}>
      <ul className="text-center space-y-1">
        <li>
          <Link
            className="block hover:text-blue-500 hover:bg-[#F4F4F4] py-2 rounded"
            href={"/shop"}
            onClick={() => setToggle(false)}
          >
            Shop
          </Link>
        </li>
        <li>
          <Link
            className="block hover:text-blue-500 hover:bg-[#F4F4F4] py-2 rounded"
            href={"/orders"}
            onClick={() => setToggle(false)}
          >
            My Orders
          </Link>
        </li>
      </ul>
      <div className="flex justify-center mt-8">
        {isSignedIn ? (
          <SignOutButton>
            <div>
              <Link
                href={"/"}
                className="py-2 px-4 border border-black rounded-full"
                onClick={() => setToggle(false)}
              >
                Sign Out
              </Link>
            </div>
          </SignOutButton>
        ) : (
          <AccessBttns setToggle={setToggle} />
        )}
      </div>
    </div>
  );
};

export default HamburguerMenu;
