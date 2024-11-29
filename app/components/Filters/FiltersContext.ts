import { createContext, useContext } from "react";

export type FilterOption = {
  species?: string;
  sex?: string;
};

export type FiltersContextType = {
  selectedFilters: FilterOption[];
  setSelectedFilters: React.Dispatch<React.SetStateAction<FilterOption[]>>;
};

export const FiltersContext = createContext<FiltersContextType>({
  selectedFilters: [],
  setSelectedFilters: () => {},
});

export const useFiltersContext = () => useContext(FiltersContext);