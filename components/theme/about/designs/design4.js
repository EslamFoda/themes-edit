import React from "react";
import EditorComp from "../../../editor";
import Button from "../../../ui/Button";
import Container from "../../../ui/container";
const Design4 = ({ choose = false, handleEdit, aboutData }) => {
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
              <button className="bg-red-500 p-[1px] text-small rounded-sm text-white">
                more
              </button>
            </div>
          </Container>
        </div>
      ) : (
        <div className="py-14">
          <Container>
            <div
              className={
                "flex  h-[55vh] justify-center  flex-col text-center items-center"
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
                <Button className="self-start">
                  <EditorComp
                    initialValue={aboutData.btn}
                    handleEdit={handleEdit}
                    keys="btn"
                  />
                </Button>
              </div>
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

export default Design4;
