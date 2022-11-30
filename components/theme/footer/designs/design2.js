import React from "react";
import Container from "../../../ui/container";
import cn from "clsx";
import EditorComp from "../../../editor";
import { useState } from "react";

const Design1 = ({
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
            <div className=" border-b border-solid py-5 border-b-[#96999d]">
              <EditorComp
                handleEdit={handleEdit}
                initialValue={footerData.desc}
                keys="desc"
              />
             
            </div>
            <div className="  gap-6 py-5">
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

export default Design1;
