import Container from "../../../ui/container";
import Title from "../common/title";
import { clientsData } from "../../../../constant/";
import cn from "clsx";
import Image from "next/image";
import SubTitle from "../common/subTitle";
import EditorComp from "../../../editor";
import { EditPopover } from "../../../ui/popover/EditPopover";
import ClientPic from "../common/clientPic";
const Design4 = ({
  device,
  choose,
  handleEdit,
  clientData,
  comp,
  compIndex,themeData,comps
}) => {
  const gridClassName = cn(
    "grid lg:grid-cols-3 md:grid-cols-3  grid-cols-1 gap-4",
    {
      "!grid-cols-1": device === "mobile",
    }
  );
  return (
    <>
      {choose ? (
        <Container className="absolute top-1/2  left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          <div className="grid lg:grid-cols-3 md:grid-cols-3  grid-cols-1 gap-1">
            <div className="self-center">
              <div className="  space-y-4 ">
                <Title choose={choose} title={"Our Clients"} />
                <SubTitle
                  choose={choose}
                  subTitle={
                    "Some of the world’s biggest brands trust us with their services"
                  }
                />
              </div>
            </div>
            <div className="col-span-2">
              <div className={"flex  flex-wrap items-center"}>
                {clientsData.map((client) => (
                  <div key={client.id} className="p-1 items-center  ">
                    <div className="relative h-4 w-6">
                      <Image
                        src={client.img}
                        layout="fill"
                        objectFit="contain"
                        className="absolute"
                        alt="client picture"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      ) : (
        <div>
          <Container className="py-16 ">
            <div className={gridClassName}>
              <div className="self-center">
                <div className="  space-y-4 ">
                  <EditorComp
                    initialValue={clientData.title}
                    handleEdit={handleEdit}
                    keys="title"
                  />
                  <EditorComp
                    initialValue={clientData.subTitle}
                    handleEdit={handleEdit}
                    keys="subtitle"
                  />
                </div>
              </div>
              <div className="col-span-2">
                <div className={"flex  flex-wrap items-center"}>
                  {clientData.items.map((client, index) => (
                    <div key={client.id}>
                      <EditPopover themeData={themeData} comps={comps} comp={comp} index={index}>
                        <div className="p-2 items-center ">
                          <ClientPic 
                          themeData={themeData}
                            design="design4"
                            client={client}
                            comp={comp}
                            compIndex={compIndex}
                            index={index}
                          />
                        </div>
                      </EditPopover>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

export default Design4;
