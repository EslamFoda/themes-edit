import Container from "../../../ui/container";
import Title from "../common/title";
import SubTitle from "../common/subTitle";
import ServiceTitle from "../common/serviceTitle";
import ServiceSubTilte from "../common/serviceSubTitle";
import { servicesData } from "../../../../constant/";
import { EditPopover } from "../../../ui/popover/EditPopover";
import cn from "clsx";
import EditorComp from "../../../editor";
import ChangeBgImg from "../../../changeBgImg";
const Design3 = ({
  device,
  choose,
  serviceData,
  handleEdit,
  handleMultiEdit,
  serviceHeaders,
  comp,
  compIndex,
  themeData,
  comps,
}) => {
  const gridClassName = cn(
    "grid gap-10 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1",
    {
      "!grid-cols-1": device === "mobile",
      "!gap-2": choose,
    }
  );

  return (
    <>
      {choose ? (
        <Container className="py-2 ">
          <div className="text-center space-y-1 mb-3">
            <Title choose={choose} />
            <SubTitle choose={choose} />
          </div>
          <div className={gridClassName}>
            {servicesData.map((service) => (
              <div key={service.id} className=" space-y-1">
                <div
                  style={{ backgroundImage: `url(${service.imgUrl})` }}
                  className="bg-no-repeat bg-center bg-cover p-1  flex items-end   h-16 w-full"
                >
                  {" "}
                  <div className="space-y-0 bg-white shadow-custom  p-1">
                    <ServiceTitle choose={choose} title={service.title} />
                    <ServiceSubTilte
                      choose={choose}
                      subTitle={service.subTitle}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      ) : (
        <div>
          <Container className="py-16 ">
            <div className="text-center space-y-4 mb-16">
              <EditorComp
                initialValue={serviceHeaders.title}
                handleEdit={handleEdit}
                keys="title"
              />
              <EditorComp
                initialValue={serviceHeaders.subTitle}
                handleEdit={handleEdit}
                keys="subTitle"
              />
            </div>
            <div className={gridClassName}>
              {serviceData?.map((service, index) => (
                <div key={service.id}>
                  <EditPopover
                    comps={comps}
                    themeData={themeData}
                    comp={comp}
                    index={index}
                  >
                    <div className=" space-y-5 img-editor-container  relative">
                      <ChangeBgImg
                        themeData={themeData}
                        compIndex={compIndex}
                        index={index}
                      />
                      <div
                        style={{ backgroundImage: `url(${service.pic})` }}
                        className="bg-no-repeat bg-center bg-cover p-5  flex items-end   h-96 w-full"
                      >
                        {" "}
                        <div className="space-y-4 bg-white shadow-custom  p-6">
                          <EditorComp
                            id={service.id}
                            initialValue={service.title}
                            handleMultiEdit={handleMultiEdit}
                            keys="title"
                          />
                          <EditorComp
                            id={service.id}
                            initialValue={service.desc}
                            handleMultiEdit={handleMultiEdit}
                            keys="desc"
                          />
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

export default Design3;
