import FilterContent from "./FilterContent";

const FilterSideBar = ({filterCount}: {filterCount: number}) => {
  return (
    <div className="mr-5 mt-8 pl-10 hidden lg:block lg:min-w-[23rem] h-screen overflow-y-auto scrollbar">
      <div className="mb-5">
        {filterCount > 0 ?
        <p className="text-2xl">{`Filters (${filterCount})`}</p>
       : (
        <p className="text-2xl">Filters</p>
       )}
      </div>
      <FilterContent />
    </div>
  );
};

export default FilterSideBar;
