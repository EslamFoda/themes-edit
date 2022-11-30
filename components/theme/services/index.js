import React from "react";
import ChangeSection from "../../edit/changeSection";
import AddSection from "../../edit/addSection";
import Design1 from "./designs/design1";
import Design2 from "./designs/design2";
import Design3 from "./designs/design3";
import Design4 from "./designs/design4";
import Design5 from "./designs/design5";
import useBgColor from "../../../hooks/useBgColor";
import EditBackground from "../../mainContainer/common/editBackground";
import { updateDoc } from "firebase/firestore";
const MainServices = ({
  comps,
  index,
  setComps,
  comp,
  device,
  editSections,
  animate,
  themeData,
}) => {
  const { compName, designNum, compData, backgroundColor } = comp;
  const { handleReset, setColor } = useBgColor(index, comps, themeData);

  const designs = {
    design1: Design1,
    design2: Design2,
    design3: Design3,
    design4: Design4,
    design5: Design5,
  };

  const ServicesComp = designs[`design${designNum}`];

  const handleMultiEdit = async (value, id, keys) => {
    const update = compData.items.map((item) =>
      item.id === id ? { ...item, [keys]: value } : item
    );
    comp.compData.items = update;
    await updateDoc(themeData, {
      allSections: [...comps],
    });
  };
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
      className={`relative group transition ease-in-out duration-700 hover:shadow-[#23cba5] hover:shadow-inside  w-full `}
    >
      <div data-aos={animate}>
        <ServicesComp
          themeData={themeData}
          compIndex={index}
          comp={comp}
          comps={comps}
          backgroundColor={backgroundColor}
          device={device}
          serviceData={compData.items}
          handleMultiEdit={handleMultiEdit}
          handleEdit={handleEdit}
          serviceHeaders={compData.headers}
        />
      </div>
      <ChangeSection
        comp={comp}
        compName={compName}
        comps={comps}
        index={index}
        designNum={designNum}
        setComps={setComps}
        themeData={themeData}
      />

      <EditBackground
        backgroundColor={backgroundColor}
        handleReset={handleReset}
        setColor={setColor}
      />
      <AddSection index={index} themeData={themeData} />
    </div>
  );
};

export default MainServices;
