"use client"

import ShopHeader from "../components/ShopHeader/ShopHeader";
import Catalog from "../components/Catalog/Catalog";
import FilterSideBar from "../components/FilterSideBar/FilterSideBar";
import { useState } from "react";
import FilterHeader from "../components/FilterHeader.tsx/FilterHeader";

export default function Shop() {
  const [showFilters, setShowFilters] = useState(true)

  return (
    <div className="h-auto">
      <ShopHeader setShowFilters={setShowFilters} showFilters={showFilters}/>
      <div className="lg:flex lg:items-start lg:px-10 pt-[8.5rem]">
          {showFilters && <FilterSideBar/>}
        <div className="flex w-full justify-center mb-8">
          <div>
            {/* <div className="lg:hidden flex justify-center mt-3 mb-3 px-3">
              <p className="text-md text-center text-gray-600">All geckos</p>
            </div> */}
            <div className="flex justify-center">
              <FilterHeader/>
            </div>
            <Catalog/>
          </div>
        </div>
      </div>
    </div>
  );
}
