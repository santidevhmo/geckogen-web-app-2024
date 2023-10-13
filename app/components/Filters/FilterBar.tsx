import { Dispatch, SetStateAction } from "react";
import FilterContent from "./FilterContent";

interface FilterBarProps {
  setShowFilters: Dispatch<SetStateAction<boolean>>;
}

const FilterBar = (props: FilterBarProps) => {
  const { setShowFilters } = props;
  return (
    <div className="lg:hidden z-30 top-0 fixed w-full h-full bg-white">
      <div className="pt-5 pr-5 flex justify-end">
        <button onClick={() => setShowFilters(false)}>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABSklEQVR4nO2WO04DMRCGv0ukIA9ESRGq0BEOEAkizhHyOAsdKIiCkj6PmxAuAAodWbokSmRpVlqtYnvWu4EU+aWRVrZmP894PDYcdYA6BXrAFJgBv2IzGesCtSKBFeAJWAEbj62BN+AsL/QOiBTAtC2Adih0IBFkhSaj74dEus4BTcLVkVcD0+tKe1kDfikQGttQc2Rs1XsFXALzHXNmrAE0Lb4ryaRVPceqzY+N6in4XMaQhdn8713gicMxCYjhu8Zs/iMX+MOzV2mQFrqRDmeVppq/gYuEzznwpfCL9gH+VPj9HGSqJ/9VXN09HqeOC1xzNJCmp4GYuWuL79LXQIyeFYWS1R5RXvyLAqGmmk9QqqV8cWiuxVstNFa/gIeA6f1Bagem3aT3hpwqAQ9SmZooX7PsqUZVudrGwLu010i+R3JOvUfmKP5aW9phkM5mm0cTAAAAAElFTkSuQmCC" />
        </button>
      </div>
      <div className="max-h-[39rem] md:max-h-screen overflow-y-auto flex-col justify-center px-4 pb-8">
        <div className="mb-8">
          <p className="text-xl text-left">Filter</p>
        </div>
        <FilterContent />
      </div>
    </div>
  );
};

<div className="w-full flex justify-center rounded-xl bg-white"></div>;

export default FilterBar;