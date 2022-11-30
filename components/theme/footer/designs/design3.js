import React from "react";
import Container from "../../../ui/container";
import cn from "clsx";
import EditorComp from "../../../editor";
import { useState } from "react";

const Design3 = ({
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
              <ul className="flex justify-center flex-wrap gap-5">
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

export default Design3;
