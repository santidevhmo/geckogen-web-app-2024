import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

interface HomeLogoProps {
  setToggle: Dispatch<SetStateAction<boolean>>;
}

const HomeLogo = (props: HomeLogoProps) => {
  const { setToggle } = props;
  return (
    <div className="text-2xl mr-6">
      <Link onClick={() => setToggle(false)} href={"/"}>
        Geckogen
      </Link>
    </div>
  );
};

export default HomeLogo;