import { useState } from "react";
import { useFiltersContext, FilterOption } from "../Filters/FiltersContext"; // Import FilterOption

interface AccordionProps {
  title: string;
  content?: (string | { title: string; subFilters?: string[] })[];
}

const Accordion = (props: AccordionProps) => {
  const { title, content } = props;
  const { selectedFilters, setSelectedFilters } = useFiltersContext();
  const [isOpen, setIsOpen] = useState(true);

  const handleFilterButtonClick = (filterOption: FilterOption) => {
    setSelectedFilters((prevFilters) => {

      const existingIndex = prevFilters.findIndex(
        (filter) =>
          filter.species === filterOption.species && filter.sex === filterOption.sex
      );

      if (existingIndex !== -1) {
        const updatedFilters = prevFilters.filter((_, index) => index !== existingIndex);
        return updatedFilters;
      }

      if (filterOption.sex) {
        const mainFilterIndex = prevFilters.findIndex(
          (filter) => filter.species === filterOption.species && !filter.sex
        );

        if (mainFilterIndex !== -1) {
          const newFilters = [...prevFilters];
          newFilters[mainFilterIndex] = filterOption;
          return newFilters;
        }
      }

      if (filterOption.species && !filterOption.sex) {
        const subFilterIndex = prevFilters.findIndex(
          (filter) => filter.species === filterOption.species && filter.sex
        );

        if (subFilterIndex !== -1) {
          const newFilters = [...prevFilters];
          newFilters[subFilterIndex] = filterOption;
          return newFilters;
        }
      }

      const newFilters = [...prevFilters, filterOption];
      return newFilters;
    });
  };


  return (
    <div className="mb-8">
      <div className="border-b pb-2">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex-1">{title}</div>
          <div>
            {content && (
              <img
                className={`${isOpen && "rotate-180"} h-6 w-6`}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAoklEQVR4nO3UQQrCMBgF4UE9ZHfeTCwIXtISN1kESdA2Gv/CfMtCw5sGCpIkSZIkDXUALsD5C2dNwA04MXD8FUjA0hkxAY981n1ERDk+dUaU49OoiFrAloja+JQDjvxYb8Rfx/dGhBi/NSLU+LURIcd/GhF6fBkxNyKWyvM5vxNK6yZCf/m1EaHHv4vYxfhWxK7Gv0bscnwZEe5vI0mSJGJ4Av0nf05PPz48AAAAAElFTkSuQmCC"
              />
            )}
          </div>
        </div>
        {isOpen && content && (
          <div className="pt-3 pl-3">
            {content.map((filterOption, idx) => {
              if (typeof filterOption === "string") {
                return (
                  <div key={idx} className="py-1 space-x-2 text-base text-gray-600">
                    <input
                      type="checkbox"
                      checked={selectedFilters.some(filter => filter.species === filterOption)}
                      onClick={() => handleFilterButtonClick({ species: filterOption })}
                    />
                    <label>{filterOption}</label>
                  </div>
                );
              } else if (typeof filterOption === "object" && filterOption.title) {
                return (
                  <div key={idx} className="py-1 space-x-2 text-base text-gray-600">
                    <input
                      type="checkbox"
                      checked={selectedFilters.some(filter => filter.species === filterOption.title)}
                      onClick={() => handleFilterButtonClick({ species: filterOption.title })}
                    />
                    <label>{filterOption.title}</label>
                    {filterOption.subFilters && (
                      <div className="pl-4">
                        {filterOption.subFilters.map((subFilter, subIdx) => (
                          <div key={subIdx} className="py-1 space-x-2 text-base text-gray-600">
                            <input
                              type="checkbox"
                              checked={selectedFilters.some(
                                filter =>
                                  filter.species === filterOption.title &&
                                  filter.sex === subFilter
                              )}
                              onChange={() =>
                                handleFilterButtonClick({
                                  species: filterOption.title,
                                  sex: subFilter,
                                })
                              }
                            />
                            <label>{subFilter}</label>
                          </div>
                        ))}

                      </div>
                    )}
                  </div>
                );
              }
              return null;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
