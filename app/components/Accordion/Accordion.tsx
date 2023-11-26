"use client";

import { useState } from "react";
import { useFiltersContext } from "../Filters/FiltersContext";

interface AccordionProps {
  title: string;
  content?: string[];
}
const Accordion = (props: AccordionProps) => {
  const { title, content } = props;
  const { selectedFilters, setSelectedFilters } = useFiltersContext();

  const [isOpen, setIsOpen] = useState(true);

  const handleFilterButtonClick = (selectedFilter: string) => {
    if (selectedFilters.includes(selectedFilter)) {
      let filters = selectedFilters.filter((el) => el !== selectedFilter);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedFilter]);
    }
  };

  return (
    <div className="mb-8">
      <div className="border-b pb-2">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <div className="flex-1">{title}</div>
          <div>
            {content && (
              <img
                className={`${isOpen && "rotate-90"} h-6 w-6`}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAoklEQVR4nO3UQQrCMBgF4UE9ZHfeTCwIXtISN1kESdA2Gv/CfMtCw5sGCpIkSZIkDXUALsD5C2dNwA04MXD8FUjA0hkxAY981n1ERDk+dUaU49OoiFrAloja+JQDjvxYb8Rfx/dGhBi/NSLU+LURIcd/GhF6fBkxNyKWyvM5vxNK6yZCf/m1EaHHv4vYxfhWxK7Gv0bscnwZEe5vI0mSJGJ4Av0nf05PPz48AAAAAElFTkSuQmCC"
              />
            )}
          </div>
        </div>
        {isOpen && content && (
          <div className="pt-3 pl-3">
            {content.map((filterOption, idx) => {
              return (
                <div className="py-1 space-x-2 text-base text-gray-600" key={idx}>
                  <input
                    className="cursor-pointer accent-black"
                    type="checkbox"
                    checked={selectedFilters.includes(filterOption)}
                    id={filterOption}
                    name={filterOption}
                    onClick={() => {
                      handleFilterButtonClick(filterOption)
                    }}
                  />
                  <label>{filterOption}</label>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
