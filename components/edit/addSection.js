import { FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addSectionTurnOn } from "../../features/edit-sections";
import { selectCompName } from "../../features/comp-name";
import { getNextIndex, selectSectionOff } from "../../features/add-section";
import { editImgOff } from "../../features/edit-image";
import { filesOff } from "../../features/my-files";
import { closeColors } from "../../features/colors";
import {
  editEffectsOff,
  fontEditOff,
  stylesEditorOff,
} from "../../features/stylesEditing";
import { updateDoc } from "firebase/firestore";
const AddSection = ({ index, themeData }) => {
  const dispatch = useDispatch();

  return (
    <div className="absolute transition-all hidden group-hover:flex  z-10 duration-300 -bottom-21 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
      <div
        onClick={async () => {
          const nextIndex = index + 1;
          await updateDoc(themeData, {
            nextIndex: nextIndex,
            compName: "",
            editFiles: false,
            editImg: false,
            addSection: true,
            editEffects: false,
            fontEdit: true,
            stylesEditing: false,
            colorsEdit: false,
            selectSection:false
          });
          // dispatch(getNextIndex(nextIndex));
          // dispatch(selectSectionOff());
          // dispatch(addSectionTurnOn());
          // dispatch(selectCompName(""));
          // dispatch(editImgOff());
          // dispatch(filesOff());
          // dispatch(editEffectsOff());
          // dispatch(fontEditOff());
          // dispatch(stylesEditorOff());
          // dispatch(closeColors());
        }}
        class="add-section fb "
      >
        <div className="h-full flex justify-center items-center">
          <FaPlus
            className="add-icon"
            style={{ transition: "all .3s ease-in-out" }}
          />
        </div>
        <span> add section</span>
      </div>
    </div>
  );
};

export default AddSection;
