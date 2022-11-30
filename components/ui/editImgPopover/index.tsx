import { useRef } from "react";
import * as Popover from "@radix-ui/react-popover";
import { HiCamera } from "react-icons/hi";
import { useDispatch } from "react-redux";
import cn from "clsx";
import {
  editImgOn,
  getCompIndex,
  getItemIndex,
} from "../../../features/edit-image";
import { addSectionTurnOff } from "../../../features/edit-sections";
import { selectCompName } from "../../../features/comp-name";
import { closeColors } from "../../../features/colors";
import { filesOff } from "../../../features/my-files";
import { MdPublishedWithChanges } from "react-icons/md";
import { BiCrop } from "react-icons/bi";
import {
  editEffectsOff,
  stylesEditorOff,
} from "../../../features/stylesEditing";
import { updateDoc } from "firebase/firestore";

const EditImgPopover = ({
  compIndex,
  index,
  setOpen,
  iconPosition = "left",
  themeData,
  comps,
}) => {
  const dispatch = useDispatch();
  const btn = useRef(null);
  const handleChangeImg = async () => {
    if (index) {
      await updateDoc(themeData, {
        itemIndex: index,
        nextIndex: compIndex,
        editImg: true,
        compName:"",
        editFiles:false
      });
    } else {
      await updateDoc(themeData, {
        itemIndex: "",
        nextIndex: compIndex,
        editImg: true,
        compName:"",
        editFiles:false
      });
    }
    // dispatch(editImgOn());
    // dispatch(getCompIndex(compIndex));
    // dispatch(getItemIndex(index));
    dispatch(addSectionTurnOff());
    // dispatch(selectCompName(""));
    dispatch(closeColors());
    // dispatch(filesOff());
    dispatch(editEffectsOff());
    dispatch(stylesEditorOff());
  };
  const handleOpenCrop = async()=>{
    setOpen(true);
    if (index) {
      await updateDoc(themeData, {
        itemIndex: index,
        nextIndex: compIndex,
        editImg: false,
        compName:"",
        editFiles:false
      });
    } else {
      await updateDoc(themeData, {
        itemIndex: "",
        nextIndex: compIndex,
        editImg: false,
        compName:"",
        editFiles:false
      });
    }
    // dispatch(editImgOff());
    // dispatch(getCompIndex(compIndex));
    // dispatch(getItemIndex(index));
    dispatch(addSectionTurnOff());
    // dispatch(selectCompName(""));
    dispatch(closeColors());
    // dispatch(filesOff());
    dispatch(editEffectsOff());
    dispatch(stylesEditorOff());
  }
  const cameraBtnClass = cn("absolute camera-icon  top-4", {
    "left-4": iconPosition === "left",
    "right-4": iconPosition === "right",
  });
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <div ref={btn} className={cameraBtnClass}>
          <HiCamera size={30} />
        </div>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          avoidCollisions={false}
          onMouseLeave={() => {
            btn.current.style.display = "none";
          }}
          onMouseEnter={() => (btn.current.style.display = "block")}
          hideWhenDetached
          className="w-52 overflow-hidden rounded-xl "
          sideOffset={5}
          align={iconPosition === "left" ? "start" : "end"}
        >
          <div className="bg-[#202b39] flex justify-between rounded-t-xl items-center p-3 text-white ">
            <span className="text-sm">image settings</span>
          </div>

          <div
            onClick={handleChangeImg}
            className="flex bg-white cursor-pointer hover:bg-slate-200 px-3 py-2 gap-2 items-center"
          >
            <MdPublishedWithChanges size={18} />
            <span className="text-md">change image</span>
          </div>
          <div
            onClick={handleOpenCrop}
            className="flex bg-white cursor-pointer hover:bg-slate-200 px-3 py-2 gap-2  items-center"
          >
            <BiCrop size={18} />
            <span className="text-md">Crop image</span>
          </div>

          <Popover.Arrow
            color="#202b39"
            className="PopoverArrow fill-[#202b39]"
          />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default EditImgPopover;
