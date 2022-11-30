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
          <Container className="py-10">
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6 border-b border-solid py-5 border-b-[#96999d]">
              <EditorComp
                handleEdit={handleEdit}
                initialValue={footerData.desc}
                keys="desc"
              />
              <ul className="flex  gap-5">
                <li>
                  <span
                    className="block cursor-pointer font-bold text-black"
                    aria-current="page"
                  >
                    Home
                  </span>
                </li>
                <li>
                  <span className="block  cursor-pointer font-bold text-black">
                    About
                  </span>
                </li>
                <li>
                  <span className="block  cursor-pointer font-bold text-black">
                    Services
                  </span>
                </li>
                <li>
                  <span className="block cursor-pointer  font-bold text-black">
                    Pricing
                  </span>
                </li>
                <li>
                  <span className="block  cursor-pointer font-bold text-black">
                    Contact
                  </span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2  gap-6 py-5">
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
