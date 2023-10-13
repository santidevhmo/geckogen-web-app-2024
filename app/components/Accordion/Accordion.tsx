"use client"

import { useState } from "react";

interface AccordionProps {
  title: string;
  content?: string[];
}
const Accordion = (props: AccordionProps) => {
  const { title, content } = props;
  
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-72 mb-8">
      <div className="border-b pb-2">
        <div className="flex justify-between items-center cursor-pointer" onClick={() => {setIsOpen(!isOpen)}}>
          <div className="flex-1">{title}</div>
          <div>
            { content && <img
              className={`${isOpen && "rotate-90"} h-6 w-6`}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAoklEQVR4nO3UQQrCMBgF4UE9ZHfeTCwIXtISN1kESdA2Gv/CfMtCw5sGCpIkSZIkDXUALsD5C2dNwA04MXD8FUjA0hkxAY981n1ERDk+dUaU49OoiFrAloja+JQDjvxYb8Rfx/dGhBi/NSLU+LURIcd/GhF6fBkxNyKWyvM5vxNK6yZCf/m1EaHHv4vYxfhWxK7Gv0bscnwZEe5vI0mSJGJ4Av0nf05PPz48AAAAAElFTkSuQmCC"/>
            }
          </div>
        </div>
        {isOpen && content &&
          <div className="pt-3 pl-3">
            {content?.map((subOption) => {
              return (
                <div className="py-1">
                  {subOption}
                </div>
              )
            })}
          </div>}
      </div>
    </div>
  );
};

export default Accordion;
