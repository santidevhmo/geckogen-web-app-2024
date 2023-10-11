import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

interface AccessBttnsProps {
  setToggle: Dispatch<SetStateAction<boolean>>
}

const AccessBttns = (props: AccessBttnsProps) => {
  const { setToggle } = props 

  return (
    <div className="flex whitespace-nowrap">
      <div>
        <Link href={"/sign-up"} 
          className="py-2 px-4 mr-1 bg-black text-white rounded-full"
          onClick={() => setToggle(false)}>
          Sign Up
        </Link>
      </div>
      <div>
        <Link href={"/sign-in"}
          className="py-2 px-4 hover:bg-gray-200 rounded-full"
          onClick={() => setToggle(false)}>
          Log In
        </Link>
      </div>
    </div>
  );
};

export default AccessBttns;
