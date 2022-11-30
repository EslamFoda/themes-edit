import React from "react";
import Container from "../../../ui/container";
import cn from "clsx";
import EditorComp from "../../../editor";
import { useState } from "react";

const Design4 = ({
  device,
  choose = false,
  footerData,
  handleEdit,
  compIndex,
  comp,
}) => {
  const rootClassName = cn("", {
    "bg-black": device === "mobile",
    "bg-blue-500": device === "tablet",
    "bg-white": device === "desktop",
  });
  return (
    <>
      {choose ? (
        <div className=""></div>
      ) : (
        <div>
          <Container className="py-10 text-center">
            <div className="py-8">
              <EditorComp
                handleEdit={handleEdit}
                initialValue={footerData.copyRight}
                keys="copyRight"
              />
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

export default Design4;
