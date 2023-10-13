import Accordion from "../Accordion/Accordion";

const FilterContent = () => {
  return (
    <div className="w-full">
      <Accordion
        title="Correlophus ciliatus (Crested Gecko)"
        content={["Unsexed", "Female", "Male"]}
      />
      <Accordion
        title="Rhacodactylus auriculatus (Gargoyle gecko)"
        content={["Unsexed", "Female", "Male"]}
      />
      <Accordion title="Sarasinorum" />
      <Accordion title="Leachianus" />
      <Accordion title="Main Land Chahoua (Grand Terre)" />
      <Accordion
        title="Blue Tongue Skink"
        content={["Northern Blue Tongue Skink", "Merauke blue tongue skink"]}
      />
      <Accordion title="Apparel" />
      <Accordion title="Complete Meal Formula" />
      <Accordion title="MicroFauna" content={["Springtails", "Isopods"]} />
    </div>
  );
};

export default FilterContent;
