import Container from "../../../ui/container";
import EditorComp from "../../../editor";
import { EditPopover } from "../../../ui/popover/EditPopover";
import cn from "clsx";
import UserPic from "./common/userPic";
import TestiGridData from "./common/testiGridData";
import Title from "./common/title";
import SubTitle from "./common/subTitle";
const Design1 = ({
  device,
  choose,
  testiData,
  handleMultiEdit,
  handleEdit,
  headers,
  comp,
  compIndex,
  themeData,comps
}) => {
  const gridClassName = cn(
    "grid gap-10 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1",
    {
      "!grid-cols-1": device === "mobile",
    }
  );
  return (
    <>
      {choose ? (
        <div>
          <Container className="p-1">
            <div className="text-center space-y-1 mb-4">
              <Title />
              <SubTitle />
            </div>
            <TestiGridData />
          </Container>
        </div>
      ) : (
        <div>
          <Container className="py-16">
            <div className="text-center space-y-4 mb-16">
              <EditorComp
                initialValue={headers?.title}
                handleEdit={handleEdit}
                keys="title"
              />
              <EditorComp
                initialValue={headers?.subTitle}
                handleEdit={handleEdit}
                keys="subTitle"
              />
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-x-10 gap-y-14">
              {testiData?.map((client, index) => (
                <div key={client.id}>
                  <EditPopover comps={comps} themeData={themeData} comp={comp} index={index}>
                    <div className="w-full bg-white flex flex-col gap-4 self-start  p-10 pt-12  shadow-big relative">
                      <UserPic
                        themeData={themeData}
                        testi={client}
                        comp={comp}
                        compIndex={compIndex}
                        design="design1"
                        index={index}
                      />
                      <EditorComp
                        id={client.id}
                        handleMultiEdit={handleMultiEdit}
                        initialValue={client.userName}
                        keys="userName"
                      />
                      <EditorComp
                        id={client.id}
                        handleMultiEdit={handleMultiEdit}
                        initialValue={client.position}
                        keys="position"
                      />
                      <EditorComp
                        id={client.id}
                        handleMultiEdit={handleMultiEdit}
                        initialValue={client.review}
                        keys="review"
                      />
                    </div>
                  </EditPopover>
                </div>
              ))}
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

export default Design1;
