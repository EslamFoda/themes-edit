import { updateDoc } from "firebase/firestore";
import { useState, useEffect } from "react";

const useBgColor = (index, comps, themeData) => {
  const [color, setColor] = useState(null);

  const handleChangeColor = async () => {
    color ? (comps[index].backgroundColor = color.rgb) : null;
    await updateDoc(themeData, {
      allSections: [...comps],
    });
  };

  const handleReset = async () => {
    setColor({
      rgb: {
        r: 255,
        g: 255,
        b: 255,
        a: 1,
      },
    });
    comps[index].backgroundColor = color.rgb;
    await updateDoc(themeData, {
      allSections: [...comps],
    });
  };

  useEffect(() => {
    if (comps) {
      handleChangeColor();
    }
  }, [color]);

  return { color, setColor, handleReset };
};

export default useBgColor;
