import Accordion from "../Accordion/Accordion";

const FilterContent = () => {
  return (
    <div className="w-full">
      <Accordion title="Gecko Food" content={["Complete Meal Formula"]} />
      <Accordion
        title="Gecko Species"
        content={[
          { title: "C (Crested) Species", subFilters: ["Male", "Female", "Unsexed", "Monochromatic"] },
          { title: "C (Chahohua) Species", subFilters: ["Male", "Female", "Unsexed"] },
          { title: "G (Gargoyle) Species", subFilters: ["Male", "Female", "Unsexed"] },
          { title: "B (Blue Tongue Skink) Species", subFilters: ["Male", "Female", "Unsexed"] },
        ]}
      />
      <Accordion
        title="Microfauna"
        content={["Isopods", "Microfauna", { title: "Springtail" }]}
      />
      <Accordion title="Apparel" content={["T-shirt", "Hat"]} />
    </div>
  );
};

export default FilterContent;
