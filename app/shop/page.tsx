"use client";

import { useState } from "react";
import ShopHeader from "../components/ShopHeader/ShopHeader";
import Catalog from "../components/Catalog/Catalog";
import FilterSideBar from "../components/Filters/FilterSideBar";
import FilterHeader from "../components/FilterHeader.tsx/FilterHeader";
import FilterBar from "../components/Filters/FilterBar";
import { FiltersContext } from "../components/Filters/FiltersContext";

export default function Shop() {
  const [showSideFilters, setShowSideFilters] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  return (
    <div className="h-auto">
      <ShopHeader
        showSideFilters={showSideFilters}
        setShowFilters={setShowFilters}
        setShowSideFilters={setShowSideFilters}
        filterCount={selectedFilters.length}
      />
      <FiltersContext.Provider value={{ selectedFilters, setSelectedFilters }}>
        <div className="lg:flex lg:items-start pt-[8.5rem]">
          {showSideFilters && <FilterSideBar filterCount={selectedFilters.length} />}
          {showFilters && <FilterBar setShowFilters={setShowFilters} />}
          <div className="flex w-full justify-center mb-8">
            <div>
              <FilterHeader />
              <Catalog />
            </div>
          </div>
        </div>
      </FiltersContext.Provider>
    </div>
  );
}
