import ControlBtns from "./controlBtns";
import { containersData } from "../../../constant/data";
import DeleteContainers from "../../deleteContainers";
import useAnimation from "../../../hooks/useAnimation";
import { doc } from "firebase/firestore";
import { db } from "../../../utlis/firebase";
const Preview = ({
  comps,
  device,
  editSections,
  animate,
  themeId,
}) => {
  const effect = useAnimation();
  const themeData = doc(db, "themes", themeId);

  return (
    <div className="flex h-full flex-col">
      {comps?.map((comp, i) => {
        const Component = containersData[comp.compName];
        return (
          <div className="relative demo-inline" id={comp.id} key={comp.id}>
            <Component
              animate={animate}
              comp={comp}
              comps={comps}
              themeId={themeId}
              index={i}
              themeData={themeData}
              device={device}
              editSections={editSections}
            />

            <>
              <DeleteContainers index={i} themeData={themeData} comps={comps} />
              <ControlBtns
                themeData={themeData}
                id={comp.id}
                comps={comps}
                i={i}
                comp={comp}
              />
            </>
          </div>
        );
      })}
    </div>
  );
};

export default Preview;
