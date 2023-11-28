import Accordion from "../Accordion/Accordion";

const FilterContent = () => {
  return (
    <div className="w-full">
      <Accordion
        title="DNA Products"
        content={["Fenotype Test", "Genotype Test", "Sexing Test"]}
      />
      <Accordion
        title="Gecko Species"
        content={[
                  "Correlophus ciliatus (Crested Gecko)", 
                  "Rhacodactylus auriculatus (Gargoyle gecko)", 
                  "Mniarogekko (Chahoua)"]}
      />
      <Accordion title="Microfauna" content={["Isopods"]} />
      <Accordion title="Others" content={["Apparel", "Complete Meal Formula"]} />
    </div>
  );
};

export default FilterContent;
