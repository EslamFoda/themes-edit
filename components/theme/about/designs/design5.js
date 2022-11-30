import React from "react";
import EditorComp from "../../../editor";
import Button from "../../../ui/Button";
import Container from "../../../ui/container";
import ImageComp from "../../gallery/common/imageComp";
const Design5 = ({
  choose = false,
  handleEdit,
  aboutData,
  compIndex,
  comp,
  themeData,
  comps,
}) => {
  return (
    <>
      {choose ? (
        <div>
          <Container className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div
              className={
                "flex  justify-center flex-col text-center space-y-2 items-center"
              }
            >
              <h1 className="text-small font-bold">About us</h1>
              <p className="text-very-small max-w-[150px]">
                Write a background about your work including your history your
                accomplishments and any awards you have received Use this
                section to showcase the features of your brand
              </p>
              <button className="text-red-500  text-small ">more</button>
            </div>
          </Container>
        </div>
      ) : (
        <div className="py-16">
          <Container>
            <div
              className={
                "flex justify-center flex-col text-center space-y-8 items-center"
              }
            >
              <div className="max-w-2xl  space-y-8">
                <EditorComp
                  initialValue={aboutData.title}
                  handleEdit={handleEdit}
                  keys="title"
                />

                <EditorComp
                  initialValue={aboutData.subTitle}
                  handleEdit={handleEdit}
                  keys="subTitle"
                />
                <Button variant="outline">
                  <EditorComp
                    initialValue={aboutData.btn}
                    handleEdit={handleEdit}
                    keys="btn"
                  />
                </Button>
                <div className="h-96 lg:w-full">
                  <ImageComp
                    themeData={themeData}
                    comps={comps}
                    comp={comp}
                    compIndex={compIndex}
                    image={aboutData.pic}
                  />
                </div>
              </div>
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

export default Design5;
