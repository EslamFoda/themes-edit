import Container from "../../../ui/container";
import cn from "clsx";
import EditorComp from "../../../editor";
import { EditPopover } from "../../../ui/popover/EditPopover";
import UserPic from "./common/userPic";
import Title from "./common/title";
import SubTitle from "./common/subTitle";
import { testimonialsData } from "../../../../constant";
const Design3 = ({
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
            <div className="text-center space-y-1 mb-2">
              <Title />
              <SubTitle />
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-x-2 gap-y-1">
              {testimonialsData?.map((client) => (
                <div key={client.id}>
                  <div className="w-full flex bg-white rounded-md flex-col gap-1 self-start items-center text-center  p-1   shadow-md relative">
                    <div
                      style={{ backgroundImage: `url(${client.pic})` }}
                      className="w-4 h-4 bg-no-reapeat bg-cover bg-center bg-white shadow-md  rounded-full border-1 border-[#dfe0e1]"
                    ></div>
                    <h1 className="text-small">{client.name}</h1>
                    <p className="text-very-small font-semibold">
                      {client.position}
                    </p>
                    <p className="text-very-small ">{client.review}</p>
                  </div>
                </div>
              ))}
            </div>
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
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-10 ">
              {testiData?.map((client, index) => (
                <div key={client.id}>
                  <EditPopover comps={comps} themeData={themeData} comp={comp} index={index}>
                    <div className="w-full flex bg-white rounded-md flex-col gap-4 self-start items-center text-center  p-10   shadow-big relative">
                      <UserPic
                        themeData={themeData}
                        testi={client}
                        comp={comp}
                        compIndex={compIndex}
                        design="design3"
                        index={index}
                      />
                      <EditorComp
                        id={client.id}
                        initialValue={client.userName}
                        handleMultiEdit={handleMultiEdit}
                        keys="userName"
                      />
                      <EditorComp
                        id={client.id}
                        initialValue={client.position}
                        handleMultiEdit={handleMultiEdit}
                        keys="position"
                      />
                      <EditorComp
                        id={client.id}
                        initialValue={client.review}
                        handleMultiEdit={handleMultiEdit}
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

export default Design3;
