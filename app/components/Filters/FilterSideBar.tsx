import FilterContent from "./FilterContent";

const FilterSideBar = () => {
  return (
    <div className="sticky z-0 top-40 mr-10 hidden lg:block lg:min-w-[23rem] h-[40rem] overflow-y-scroll overflow-x-hidden pb-8">
      <div className="mb-5">
        <p className="text-2xl">Filters</p>
      </div>
      <FilterContent />
    </div>
  );
};

export default FilterSideBar;
