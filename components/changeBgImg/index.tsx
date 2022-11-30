import { IoImagesOutline } from "react-icons/io5";
import { FC } from "react";

import { updateDoc } from "firebase/firestore";

interface Props {
  compIndex: number;
  index: number;
  themeData: any;
}

const ChangeBgImg: FC<Props> = ({
  compIndex,
  index = undefined,
  themeData,
}) => {
  const handleChangeImg = async () => {
    if (index) {
      await updateDoc(themeData, {
        nextIndex: compIndex,
        itemIndex: index,
        compName: "",
        editImg: true,
        editFiles: false,
        addSection: false,
        colorsEdit: false,
      });
    } else {
      await updateDoc(themeData, {
        nextIndex: compIndex,
        compName: "",
        editImg: true,
        editFiles: false,
        addSection: false,
        colorsEdit: false,
      });
    }
  };

  return (
    <>
      <div
        onClick={handleChangeImg}
        className="absolute z-40 floating-img-editor top-5 left-5 transform -translate-x-1/2 -translate-y-1/2 "
      >
        <div className="expand-container">
          <div className="icon-container">
            <span className="expand-icon">
              <IoImagesOutline size={20} />
            </span>
            <span className="text">Edit Image</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangeBgImg;
