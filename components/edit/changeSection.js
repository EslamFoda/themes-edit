import { useSelector } from "react-redux";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { updateDoc } from "firebase/firestore";
const ChangeSection = ({
  compName,
  designNum,
  comps,
  index,
  setComps,
  comp,
  themeData,
}) => {
  const device = useSelector((state) => state.mainWidth.device);

  const handlePrev = async () => {
    if (designNum >= 2) {
      const objectIndex = comps.findIndex((obj) => obj.id === comp.id);
      comps[objectIndex].designNum -= 1;
      await updateDoc(themeData, {
        allSections: [...comps],
        nextIndex: index,
        compName: compName,
        editFiles: false,
        editImg: false,
        addSection: false,
        colorsEdit: false,
        editEffects: false,
        fontEdit: false,
        stylesEditing: false,
      });
    }
  };

  const handleNext = async () => {
    if (designNum <= 4) {
      const objectIndex = comps.findIndex((obj) => obj.id === comp.id);
      comps[objectIndex].designNum += 1;
      await updateDoc(themeData, {
        allSections: [...comps],
        nextIndex: index,
        compName: compName,
        editFiles: false,
        editImg: false,
        addSection: false,
        colorsEdit: false,
        editEffects: false,
        fontEdit: false,
        stylesEditing: false,
      });
    }
  };

  return (
    <>
      <div className="hidden group-hover:flex absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-40">
        <div
          style={{ boxShadow: "0 1px 6px 1px rgba(2,18,43,.25)" }}
          className={`cursor-pointer coolBeans flex items-center duration-300  btn btn-3  transition-all ${
            device === "mobile" ? "w-11" : "lg:w-48 md:w-48 w-11"
          } justify-between  px-4 py-1 rounded-full`}
          onClick={handlePrev}
        >
          <FaChevronLeft />
          {device === "mobile" ? null : (
            <span className="text-sm hidden lg:block md:block">
              Previous Design
            </span>
          )}
        </div>
        <div
          style={{ boxShadow: "0 1px 6px 1px rgba(2,18,43,.25)" }}
          className={`cursor-pointer coolBeans flex items-center duration-300  btn btn-3  transition-all ${
            device === "mobile" ? "w-11" : "lg:w-48 md:w-48 w-11"
          } justify-between  px-4 py-1 rounded-full`}
          onClick={handleNext}
        >
          {device === "mobile" ? null : (
            <span className="text-sm hidden lg:block md:block">
              Next Design
            </span>
          )}
          <FaChevronRight />
        </div>
      </div>
    </>
  );
};

export default ChangeSection;
