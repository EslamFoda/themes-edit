import React from "react";
import { useEffect } from "react";
import MainContainer from "../mainContainer";
import { useSelector } from "react-redux";
import { useStickyState } from "../../hooks/useStickyState";
import useMainData from "../../hooks/useMainData";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../utlis/firebase";

const colors = [
  "Captain-Green",
  "Masr",
  "Egyption-Blue",
  "Custard-With-Mustard",
  "Ron-Burgundy",
  "Baby-Blue",
  "Black-Panther",
  "Blue-Sky",
  "Barbie-Girl",
  "Juice-Box",
  "Rose-Flower",
  "Teal",
  "Emerald",
  "Indigo",
  "Violet",
  "Gray",
  "Lime",
];

const fonts = [
  "sans",
  "Poppins",
  "Tillana",
  "Montserrat",
  "rubek",
  "hind",
  "Saira",
  "Roboto",
  "Amatic",
  "Bangers",
  "Kdam",
  "Krub",
  "Lato",
  "Lora",
  "Nerko",
  "Roboto",
  "Roboto-Mono",
  "Ropa-Sans",
  "Russo-One",
  "Saira-Condensed",
  "Secular-One",
];

const effects = ["no-animation", "fade-up", "zoom-in-up", "flip-up"];

const modes = ["light", "dark"];

const MainEditor = () => {
  const { comps, editSections, themeId, themeColor, themeFont } = useMainData();

  const [currentColor, setCurrentColor] = useStickyState(
    colors[0],
    "theme-color"
  );
  const [currentEffect, setCurrentEffect] = useStickyState(
    effects[0],
    "theme-effects"
  );

  const containerWidth = useSelector((state: any) => state.mainWidth.width);

  return (
    <div
      style={{ height: "100%" }}
      className={[themeColor && `theme-${themeColor}`, `theme-light`]
        .filter(Boolean)
        .join(" ")}
    >
      <div
        style={{ height: "100%" }}
        className={[
          `font font-choosedFont`,
          themeFont && `fontName-${themeFont}`,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <MainContainer
          editSections={editSections}
          themeId={themeId}
          animate={currentEffect}
          comps={comps}
        />
      </div>
    </div>
  );
};

export default MainEditor;
