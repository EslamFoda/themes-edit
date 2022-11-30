import Container from "../../../ui/container";
import Title from "../common/title";
import SubTitle from "../common/subTitle";
import ServiceTitle from "../common/serviceTitle";
import ServiceSubTilte from "../common/serviceSubTitle";
import { servicesData } from "../../../../constant/";
import cn from "clsx";
import EditorComp from "../../../editor";
import Button from "../../../ui/Button";
import { EditPopover } from "../../../ui/popover/EditPopover";
import ImageComp from "../common/imageComp";
const Design2 = ({
  device,
  choose,
  serviceData,
  handleEdit,
  handleMultiEdit,
  serviceHeaders,
  comp,
  compIndex,
  themeData,comps
}) => {
  const gridClassName = cn(
    "grid gap-10 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1",
    {
      "!grid-cols-1": device === "mobile",
    }
  );
  const headersClassName = cn(
    "grid lg:grid-cols-2 gap-4 md:grid-cols-2 grid-cols-1 mb-16",
    { "!grid-cols-1": device === "mobile" }
  );

  return (
    <>
      {choose ? (
        <Container className="py-2 ">
          <div
            className={"grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 mb-3"}
          >
            <Title choose={choose} />
            <SubTitle choose={choose} />
          </div>
          <div
            className={
              "grid gap-2 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1"
            }
          >
            {servicesData.map((service) => (
              <div key={service.id} className=" space-y-1">
                <div
                  style={{ backgroundImage: `url(${service.imgUrl})` }}
                  className="bg-no-repeat bg-center bg-cover   h-12 w-full"
                ></div>
                <ServiceTitle choose={choose} title={service.title} />
                <ServiceSubTilte choose={choose} subTitle={service.subTitle} />
                <button className="text-red-600 text-small">READ MORE</button>
              </div>
            ))}
          </div>
        </Container>
      ) : (
        <div>
          <Container className="py-16 ">
            <div className={headersClassName}>
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
              {serviceData.map((service, index) => (
                <div key={service.id}>
                  <EditPopover comps={comps} themeData={themeData} index={index} comp={comp}>
                    <div className="group space-y-5">
                      <ImageComp
                        themeData={themeData}
                        compIndex={compIndex}
                        index={index}
                        comp={comp}
                        image={service.pic}
                      />
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
                      <Button variant="link">
                        <EditorComp
                          id={service.id}
                          initialValue={service.btn}
                          handleMultiEdit={handleMultiEdit}
                          keys="btn"
                        />
                      </Button>
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
