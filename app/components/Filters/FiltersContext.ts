import { createContext, useContext } from "react";

export type FiltersContextType = {
  selectedFilters: string[]
  setSelectedFilters: React.Dispatch<React.SetStateAction<string[]>>
}

export const FiltersContext = createContext<FiltersContextType>({
  selectedFilters: [],
  setSelectedFilters: () => {}
})

export const useFiltersContext = () => useContext(FiltersContext)
