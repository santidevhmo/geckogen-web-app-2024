import Link from "next/link";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

interface HomeLogoProps {
  setToggle: Dispatch<SetStateAction<boolean>>;
}

const HomeLogo = (props: HomeLogoProps) => {
  const { setToggle } = props;
  return (
    <div className="text-2xl mr-6 ml-2">
      <Link onClick={() => setToggle(false)} href={"/"}>
        <Image width={90} height={200} src={"/geckogen-logo.png"} alt="geckogen-logo"></Image>
      </Link>
    </div>
  );
};

export default HomeLogo;
