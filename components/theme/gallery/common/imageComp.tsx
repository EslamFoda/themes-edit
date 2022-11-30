import { useState, FC, useEffect } from "react";
import ImageEditor from "../../../imageEditor";
import EditImgPopover from "../../../ui/editImgPopover";
import cn from "clsx";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../../../utlis/firebase";

interface Props {
  image: string;
  index?: number;
  design?: "design5";
  iconPosition?: "right" | "left";
  themeData: any;
}

const ImageComp: FC<Props> = ({
  image,
  index,
  design,
  iconPosition = "left",
  themeData,
}) => {
  const [open, setOpen] = useState(false);
  const rootClassName = cn(
    "h-full w-full relative hover:outline hover:outline-solid outline-[#23cba5]",
    {
      "hover:outline-none": design === "design5",
    }
  );
  const [comps, setComps] = useState(null);
  const [nextIndex, setNextIndex] = useState(null);
  const [itemIndex, setItemIndex] = useState(null);
  useEffect(() => {
    onSnapshot(collection(db, "themes"), (snapshot) => {
      snapshot.docs.forEach((doc) => {
        setComps(doc.data().allSections);
        setNextIndex(doc.data().nextIndex);
        setItemIndex(doc.data().itemIndex);
      });
    });
  }, []);

  return (
    <div className={rootClassName}>
      {open ? (
        <ImageEditor
          itemIndex={itemIndex}
          compIndex={nextIndex}
          themeData={themeData}
          comps={comps}
          image={image}
          setOpen={setOpen}
        />
      ) : (
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="bg-no-repeat relative service-img bg-center h-full w-full bg-cover "
        >
          <EditImgPopover
            themeData={themeData}
            comps={comps}
            compIndex={nextIndex}
            index={index}
            setOpen={setOpen}
            iconPosition={iconPosition}
          />
        </div>
      )}
    </div>
  );
};

export default ImageComp;
