import React from "react";
import Design1 from "./designs/design1";
import Design2 from "./designs/design2";
import Design3 from "./designs/design3";
import Design4 from "./designs/design4";
import Design5 from "./designs/design5";
import ChangeSection from "../../edit/changeSection";
import AddSection from "../../edit/addSection";
import EditBackground from "../../mainContainer/common/editBackground";
import useBgColor from "../../../hooks/useBgColor";
import { updateDoc } from "firebase/firestore";
const MainAbout = ({
  index,
  comps,
  setComps,
  comp,
  device,
  editSections,
  animate,
  themeData,
}) => {
  const { compName, designNum, compData, backgroundColor } = comp;
  const designs = {
    design1: Design1,
    design2: Design2,
    design3: Design3,
    design4: Design4,
    design5: Design5,
  };
  const AboutComp = designs[`design${designNum}`];
  const { setColor, handleReset } = useBgColor(index, comps, themeData);

  const handleEdit = async (value, keys) => {
    const objectIndex = comps.findIndex((obj) => obj.id === comp.id);
    if (objectIndex === index) {
      comp.compData[keys] = value;
    }
    await updateDoc(themeData, {
      allSections: [...comps],
    });
  };
  return (
    <div
      style={{
        backgroundColor: `rgba(${backgroundColor?.r}, ${backgroundColor?.g}, ${backgroundColor?.b}, ${backgroundColor?.a})`,
      }}
      className={`relative group transition ease-in-out duration-700  hover:shadow-[#23cba5] hover:shadow-inside   w-full `}
    >
      <div data-aos={animate}>
        <AboutComp
          comps={comps}
          comp={comp}
          compIndex={index}
          backgroundColor={backgroundColor}
          aboutData={compData}
          handleEdit={handleEdit}
          choose={false}
          device={device}
          themeData={themeData}
        />
      </div>
      <ChangeSection
        themeData={themeData}
        comp={comp}
        compName={compName}
        comps={comps}
        index={index}
        designNum={designNum}
        setComps={setComps}
      />

      <>
        <EditBackground
          backgroundColor={backgroundColor}
          handleReset={handleReset}
          setColor={setColor}
        />
        <AddSection index={index} themeData={themeData} />
      </>
    </div>
  );
};

export default MainAbout;
