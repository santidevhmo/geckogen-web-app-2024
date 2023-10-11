import { Dispatch, SetStateAction } from "react";

interface HamburguerBttnProps {
  toggle: boolean;
  setToggle: Dispatch<SetStateAction<boolean>>;
}

const HamburguerBttn = (props: HamburguerBttnProps) => {
  const { setToggle, toggle } = props;
  return (
    <div className="lg:hidden" onClick={() => setToggle(!toggle)}>
      <img
        className="w-5 h-5"
        src={toggle ? "/close.png" : "/hamburguer.png"}
        alt="hamburguer-menu-bttn"
      />
    </div>
  );
};

export default HamburguerBttn;
