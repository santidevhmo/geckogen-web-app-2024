"use client";

import { useState } from 'react';
import ShopHeader from "../components/ShopHeader/ShopHeader";
import Catalog from "../components/Catalog/Catalog";
import FilterSideBar from "../components/Filters/FilterSideBar";
import FilterHeader from "../components/FilterHeader.tsx/FilterHeader";
import FilterBar from "../components/Filters/FilterBar";

export default function Shop() {
  const [showSideFilters, setShowSideFilters] = useState(true);
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="h-auto">
      <ShopHeader
        showSideFilters={showSideFilters}
        setShowFilters={setShowFilters}
        setShowSideFilters={setShowSideFilters}
      />
      <div className="lg:flex lg:items-start pt-[8.5rem]">
        {showSideFilters && <FilterSideBar />}
        {showFilters && <FilterBar setShowFilters={setShowFilters} />}
        <div className="flex w-full justify-center mb-8">
          <div>
            <FilterHeader />
            <Catalog />
          </div>
        </div>
      </div>
    </div>
  );
}
