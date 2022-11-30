import Container from "../../../ui/container";
import { EditPopover } from "../../../ui/popover/EditPopover";
import cn from "clsx";
import EditorComp from "../../../editor";
import UserPic from "./common/userPic";
import Title from "./common/title";
import SubTitle from "./common/subTitle";
import { testimonialsData } from "../../../../constant";
const Design4 = ({
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
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-2">
              {testimonialsData?.map((client, index) => (
                <div key={client.id}>
                  <div className="flex">
                    <div className="w-full h-full justify-between flex flex-col gap-1   p-1  rounded-md   border-gray-border border">
                      <p className="text-very-small ">{client.review}</p>
                      <div className="flex items-center gap-1">
                        <div
                          style={{ backgroundImage: `url(${client.pic})` }}
                          className="w-4 h-4 bg-no-reapeat bg-cover bg-center bg-white shadow-md  rounded-full border-1 border-[#dfe0e1]"
                        ></div>

                        <div className="space-y-1 flex-1">
                          <h1 className="text-small">{client.name}</h1>
                          <p className="text-very-small font-semibold">
                            {client.position}
                          </p>
                        </div>
                      </div>
                    </div>
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
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-8">
              {testiData?.map((client, index) => (
                <div key={client.id}>
                  <EditPopover comps={comps} themeData={themeData} comp={comp} index={index}>
                    <div className="flex">
                      <div className="w-full h-full justify-between flex flex-col gap-4   p-6  rounded-md   border-gray-border border">
                        <EditorComp
                          id={client.id}
                          initialValue={client.review}
                          handleMultiEdit={handleMultiEdit}
                          keys="review"
                        />
                        <div className="flex items-center gap-4">
                          <UserPic
                            themeData={themeData}
                            testi={client}
                            comp={comp}
                            compIndex={compIndex}
                            design="design4"
                            index={index}
                          />
                          <div className="space-y-4 flex-1">
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
                          </div>
                        </div>
                      </div>
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

export default Design4;
