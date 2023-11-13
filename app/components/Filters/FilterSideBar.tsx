import FilterContent from "./FilterContent";

const FilterSideBar = () => {
  return (
    <div className="sticky top-0 mr-5 mt-8 pl-10 hidden lg:block lg:min-w-[25rem] h-screen overflow-y-auto scrollbar">
      <div className="mb-5">
        <p className="text-2xl">Filters</p>
      </div>
      <FilterContent />
    </div>
  );
};

export default FilterSideBar;
