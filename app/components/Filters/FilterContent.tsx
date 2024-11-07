import Accordion from "../Accordion/Accordion";

const FilterContent = () => {
  return (
    <div className="w-full">
      <Accordion title="Gecko Food" content={["Complete Meal Formula"]} />
      <Accordion
        title="Gecko Species"
        content={[
          "C (Crested) Species",
          "C (Chahohua) Species",
          "G (Gargoyle) Species",
          "B (Blue Tongue Skink) Species"
        ]}
      />
      <Accordion title="Isopods" content={["Porcellio"]} />
      {/* Microfauna as a selectable filter with Springtail as its sub-filter */}
      <Accordion
        title="Microfauna"
        content={["Microfauna", { title: "Springtail" }]}
      />
      <Accordion title="Apparel" content={["T-shirt", "Hat"]} />
    </div>
  );
};

export default FilterContent;
