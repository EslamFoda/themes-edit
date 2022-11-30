import Container from "../../../ui/container";
import { EditPopover } from "../../../ui/popover/EditPopover";
import { TbQuote } from "react-icons/tb";
import cn from "clsx";
import EditorComp from "../../../editor";
import Title from "./common/title";
import SubTitle from "./common/subTitle";
import { testimonialsData } from "../../../../constant";
const Design5 = ({
  device,
  choose,
  testiData,
  handleMultiEdit,
  handleEdit,
  headers,
  comp,
  comps,
  themeData,
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
            <div className="grid lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-x-2 gap-y-1">
              {testimonialsData?.map((client, index) => (
                <div
                  className="odd:bg-primary   testi5  flex  rounded-sm flex-col self-start   even:bg-white odd:text-white"
                  key={client.id}
                >
                  <div className="w-full space-y-1  p-1  shadow-md ">
                    <TbQuote size={10} className="quote-icon" />
                    <p className="text-very-small ">{client.review}</p>
                    <h1 className="text-small">{client.name}</h1>
                    <p className="text-very-small font-semibold">
                      {client.position}
                    </p>
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
            <div className="grid lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-x-10 gap-y-14">
              {testiData?.map((client, index) => (
                <div
                  className="odd:bg-primary   testi5  flex  rounded-md flex-col self-start   even:bg-white odd:text-white"
                  key={client.id}
                >
                  <EditPopover
                    comps={comps}
                    themeData={themeData}
                    comp={comp}
                    index={index}
                  >
                    <div className="w-full space-y-4  p-8  shadow-big ">
                      <TbQuote size={40} className="quote-icon" />
                      <EditorComp
                        id={client.id}
                        initialValue={client.review}
                        handleMultiEdit={handleMultiEdit}
                        keys="review"
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

export default Design5;
