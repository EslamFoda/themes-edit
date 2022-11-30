import Container from "../../../ui/container";
import { EditPopover } from "../../../ui/popover/EditPopover";
import cn from "clsx";
import EditorComp from "../../../editor";
import UserPic from "./common/userPic";
import Title from "./common/title";
import SubTitle from "./common/subTitle";
import TestiGridData from "./common/testiGridData";
import { testimonialsData } from "../../../../constant";
const Design2 = ({
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
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-x-1 gap-y-1">
              {testimonialsData?.map((client) => (
                <div key={client.id}>
                  <div>
                    <div className="w-full bg-white flex flex-col gap-1 self-start   p-2 pb-3 rounded-md  shadow-md relative">
                      <div
                        style={{ backgroundImage: `url(${client.pic})` }}
                        className="w-4 h-4 bg-no-reapeat bg-cover bg-center bg-white shadow-md absolute -bottom-2 rounded-full left-2 border-1 border-[#dfe0e1]"
                      ></div>
                      <p className="text-very-small ">{client.review}</p>
                    </div>
                    <div className="p-2 pt-3">
                      <h1 className="text-small">{client.name}</h1>
                      <p className="text-very-small font-semibold">
                        {client.position}
                      </p>
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
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-x-10 gap-y-14">
              {testiData?.map((client, index) => (
                <div key={client.id}>
                  <EditPopover comps={comps} themeData={themeData} comp={comp} index={index}>
                    <div>
                      <div className="w-full bg-white flex flex-col gap-4 self-start  p-8 pb-12 rounded-md  shadow-big relative">
                        <UserPic
                          themeData={themeData}
                          testi={client}
                          comp={comp}
                          compIndex={compIndex}
                          design="design2"
                          index={index}
                        />
                        <EditorComp
                          id={client.id}
                          initialValue={client.review}
                          handleMultiEdit={handleMultiEdit}
                          keys="review"
                        />
                      </div>
                      <div className="p-8 pt-12">
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

export default Design2;
