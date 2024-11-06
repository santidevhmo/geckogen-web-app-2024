import Accordion from "../Accordion/Accordion";

const FilterContent = () => {
  return (
    <div className="w-full">
      <Accordion
        title="DNA Products"
        content={["Porcellio", "Complete Meal Formula"]}
      />
      <Accordion
        title="Gecko Species"
        content={[
                  "C-Species", 
                  "G-Species" 
                  // "Mniarogekko (Chahoua)"]}
                  ]}
      />
      <Accordion title="Microfauna" content={["Isopod", "Springtail"]} />
      <Accordion title="Apparel" content={["T-shirt", "Hat"]} />
    </div>
  );
};

export default FilterContent;
