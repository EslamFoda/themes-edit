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
const Design1 = ({
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
    "grid gap-10 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1",
    {
      "!grid-cols-1": device === "mobile",
    }
  );
  return (
    <>
      {choose ? (
        <Container className="py-0 pt-2">
          <div className="text-center space-y-1  mb-2">
            <Title choose={choose} />
            <SubTitle choose={choose} />
          </div>
          <div
            className={
              "grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 w-full"
            }
          >
            {servicesData.map((service) => (
              <div key={service.id} className="text-center space-y-1">
                <div
                  style={{ backgroundImage: `url(${service.imgUrl})` }}
                  className="bg-no-repeat bg-center bg-cover overflow-hidden m-auto h-5 w-5 rounded-full"
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
          <Container className="py-16  ">
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
                    <div key={service.id} className="text-center space-y-5">
                      <EditPopover
                        themeData={themeData}
                        comp={comp}
                        compIndex={compIndex}
                        editImage
                        index={index}
                      >
                        <div
                          style={{ backgroundImage: `url(${service.pic})` }}
                          className="bg-no-repeat bg-center bg-cover overflow-hidden m-auto h-40 w-40 rounded-full"
                        ></div>
                      </EditPopover>
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

export default Design1;
