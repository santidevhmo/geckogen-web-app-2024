import { Dispatch, SetStateAction } from "react";

interface ShopHeaderProps {
  showFilters: boolean;
  showSideFilters: boolean;
  setShowFilters: Dispatch<SetStateAction<boolean>>;
  setShowSideFilters: Dispatch<SetStateAction<boolean>>;
}

const ShopHeader = (props: ShopHeaderProps) => {
  const { showFilters, showSideFilters, setShowFilters, setShowSideFilters } =
    props;
  const toggleFilters = () => {
    setShowFilters(!showFilters);

    // Toggle body scroll lock when the menu is open
    if (!showFilters) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <div className="fixed w-full z-10 h-16 bg-white border-t flex items-center justify-between px-6 mt-[4.5rem] lg:px-10">
      <div>
        <p className="text-2xl lg:text-3xl">Shop</p>
      </div>
      <div className="flex items-center gap-4 lg:hidden">
        <button
          className="flex gap-3 px-3 py-1 rounded-full border border-black"
          onClick={toggleFilters}
        >
          Filters
          <img
            className="h-6 w-6"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAACvUlEQVR4nO2az0obURTGv7WQ7rKomYS+R80DBDQMmM28QluTZ+lO8U/QZfdK36Lu9AUMbtViFlWmBK4wtKD3xnvmnDvz/eCDkE3mnnP/hfkBhBBCCCGEEFIvAwB7AH4CuAbw2+XaffcNQJ9NiU8PwAGAJwDlG3kG8APAJzYiDjmAB4/Cl//kHsCYTXgfMzejQ4tfVlbDlE1Yf+a/p/hlpQlcCYFka2475Svb0SZXgj8nEYtfuhyyAf5XTZ/bThmYJ7eyWskGgC0AEwDFGzkVKH7pMvf4femsajAE8KHO4u8GPOClYAN+GWjAS3ZdbcTZCnywW8EGLAwUvprPdTTAZ9upZinYgKWBolczaVsDHtvYgGHgQy0EG3BjoOjVrLZncVanPQ9h/Ff8VU06qIkNd+D4bEdzwRVwbGDWT9zMr634ofSF/oj9afMfsVCOBBqwrz2o1F7A3Ecs/h2Aj9qDSo1RpK3oGcCO9mBSZRrhhcye9iBSZ7zmdnQHYFv74ZtCF8B3d5PxmfVn3PNlyAB8BXAB4Mq9NXtwn88BfOFVkxBCCEmTAd1THXp0T/XI6Z7qMaN7qkdO91SPjO6pLicCL3zonnrSSvc0xA2VzqlA8UPcU/NuqHQujbinZt1Q6dwack9NuqHSWRpyT026oSk34LEJbqh0FobcU5NuaJsO4Q4MuqHSmSu7p+bdUGn6dE/1ORKY/XRPA6B7aoAR3VN9pnRP9RnTPdWnS/fUBhndU0IIIcSPAV1OHXp0OfXI6XLqMaPLqUdOl1MPupzK0OVUpJUupyU3VNvlLCInOTfUikZSRE4ybqgll7OInCTcUEsuZxE5SbihllzOIsUGDBvkchaRk4Qb2uRDuIME3FBtl7OInOTcULqcBqDLqQxdTgOM6HLqM6XLqc+YLqc+XbqcNsjochJCCCGEEELQcP4CLPnGT9uKlTgAAAAASUVORK5CYII="
          />
        </button>
      </div>
      <div className="hidden lg:flex">
        <button
          className="flex gap-3"
          onClick={() => setShowSideFilters(!showSideFilters)}
        >
          {showSideFilters ? "Hide Filters" : "Show Filters"}
          <img
            className="h-6 w-6"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAACvUlEQVR4nO2az0obURTGv7WQ7rKomYS+R80DBDQMmM28QluTZ+lO8U/QZfdK36Lu9AUMbtViFlWmBK4wtKD3xnvmnDvz/eCDkE3mnnP/hfkBhBBCCCGEEFIvAwB7AH4CuAbw2+XaffcNQJ9NiU8PwAGAJwDlG3kG8APAJzYiDjmAB4/Cl//kHsCYTXgfMzejQ4tfVlbDlE1Yf+a/p/hlpQlcCYFka2475Svb0SZXgj8nEYtfuhyyAf5XTZ/bThmYJ7eyWskGgC0AEwDFGzkVKH7pMvf4femsajAE8KHO4u8GPOClYAN+GWjAS3ZdbcTZCnywW8EGLAwUvprPdTTAZ9upZinYgKWBolczaVsDHtvYgGHgQy0EG3BjoOjVrLZncVanPQ9h/Ff8VU06qIkNd+D4bEdzwRVwbGDWT9zMr634ofSF/oj9afMfsVCOBBqwrz2o1F7A3Ecs/h2Aj9qDSo1RpK3oGcCO9mBSZRrhhcye9iBSZ7zmdnQHYFv74ZtCF8B3d5PxmfVn3PNlyAB8BXAB4Mq9NXtwn88BfOFVkxBCCEmTAd1THXp0T/XI6Z7qMaN7qkdO91SPjO6pLicCL3zonnrSSvc0xA2VzqlA8UPcU/NuqHQujbinZt1Q6dwack9NuqHSWRpyT026oSk34LEJbqh0FobcU5NuaJsO4Q4MuqHSmSu7p+bdUGn6dE/1ORKY/XRPA6B7aoAR3VN9pnRP9RnTPdWnS/fUBhndU0IIIcSPAV1OHXp0OfXI6XLqMaPLqUdOl1MPupzK0OVUpJUupyU3VNvlLCInOTfUikZSRE4ybqgll7OInCTcUEsuZxE5SbihllzOIsUGDBvkchaRk4Qb2uRDuIME3FBtl7OInOTcULqcBqDLqQxdTgOM6HLqM6XLqc+YLqc+XbqcNsjochJCCCGEEELQcP4CLPnGT9uKlTgAAAAASUVORK5CYII="
          />
        </button>
      </div>
    </div>
  );
};

export default ShopHeader;
