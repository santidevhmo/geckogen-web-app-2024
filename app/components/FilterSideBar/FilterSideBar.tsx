import Accordion from "../Accordion/Accordion"
import FilterHeader from "../FilterHeader.tsx/FilterHeader"

const FilterSideBar = () => {
  return (
    <div className="sticky z-0 top-40 mr-10 hidden lg:block lg:max-w-[25rem]">
      <div className="mb-5">
        <p className="text-2xl">Filters</p>
      </div>
      <Accordion
        title="Correlophus ciliatus (Crested Gecko)" 
        content={["Unsexed", "Female", "Male"]}/>
      <Accordion
        title="Rhacodactylus auriculatus (Gargoyle gecko)" 
        content={["Unsexed", "Female", "Male"]}/>
      <Accordion
        title="Sarasinorum"/>
      <Accordion
        title="Leachianus"/>
      <Accordion
        title="Main Land Chahoua (Grand Terre)"/>
      <Accordion
        title="Blue Tongue Skink" 
        content={["Northern Blue Tongue Skink", "Merauke blue tongue skink"]}/>
      <Accordion
        title="Apparel"/>
      <Accordion
        title="Complete Meal Formula"/>
      <Accordion
        title="MicroFauna" 
        content={["Springtails", "Isopods"]}/>
    </div>
  )
}

export default FilterSideBar