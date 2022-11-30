import React from "react";
import { useSelector } from "react-redux";
import DragAndDrop from "./common/dragAndDrop";
import Preview from "./common/preview";
import Editable from "./common/editable";
const MainContainer = ({
  comps,
  animate,
  themeId,
  editSections,
}) => {
  // const editSections = useSelector((state) => state.editSections.value);
  const device = useSelector((state) => state.mainWidth.device);

  return (
    <>
      {themeId && (
        <Preview
          animate={animate}
          comps={comps}
          device={device}
          editSections={editSections}
          themeId={themeId}
        />
      )}
    </>
  );
};

export default MainContainer;
