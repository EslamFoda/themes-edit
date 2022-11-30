import React from "react";
import Container from "../../../ui/container";
import cn from "clsx";
import EditorComp from "../../../editor";
import { FaAd, FaUsers, FaBriefcase, FaAsterisk } from "react-icons/fa";
import Button from "../../../ui/Button";
import { EditPopover } from "../../../ui/popover/EditPopover";

const Design1 = ({
  choose,
  device,
  featuredData,
  handleMultiEdit,
  comp,
  icons,
  comps,
  themeData,
}) => {
  const data = [
    {
      icon: <FaAd className="text-red-500" size={choose ? 5 : 40} />,
      title: "Professional Support",
      subTitle:
        "Our team works diligently to ensure that all your questions are answered and your needs met.",
      id: 1,
      button: "Read More",
    },
    {
      icon: <FaUsers className="text-red-500" size={choose ? 5 : 40} />,
      title: "Qualified Team",
      subTitle:
        "From designers to developers to writers, our team is equipped with a diverse set of skills.",
      id: 2,
      button: "Read More",
    },
    {
      icon: <FaBriefcase className="text-red-500" size={choose ? 5 : 40} />,
      title: "High Quality Work",
      subTitle:
        "All our work is executed with the highest degree of efficiency.",
      id: 3,
      button: "Read More",
    },
    {
      icon: <FaAsterisk className="text-red-500" size={choose ? 5 : 40} />,
      title: "Detail-oriented approach",
      subTitle:
        "We focus on every aspect of our clients’ needs to leave nothing to chance.",
      id: 4,
      button: "Read More",
    },
  ];

  const gridClassName = cn(
    "py-16 grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 md:grid-cols-2 gap-10",
    {
      "!grid-cols-1": device === "mobile",
    }
  );

  return (
    <>
      {choose ? (
        <div>
          <Container className="absolute top-1/2  left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-2 md:grid-cols-2  py-1  gap-1">
              {data.map((card) => {
                return (
                  <div
                    key={card.id}
                    className="p-1 flex flex-col space-y-1 text-center items-center  bg-red-100"
                  >
                    <div>{card.icon}</div>
                    <h3 className="text-small font-semibold">{card.title}</h3>
                    <p className="text-very-small">{card.subTitle}</p>
                    <button className="bg-red-500 text-very-small p-[3px]">
                      {card.button}
                    </button>
                  </div>
                );
              })}
            </div>
          </Container>
        </div>
      ) : (
        <div>
          <Container>
            <div className={gridClassName}>
              {featuredData.map((card, index) => {
                const IconComp = icons[card.icon];
                return (
                  <div key={card.id}>
                    <EditPopover
                      themeData={themeData}
                      comps={comps}
                      comp={comp}
                      index={index}
                    >
                      <div className="p-4 flex flex-col space-y-5 text-center items-center">
                        <div className="feat1-icon">
                          <IconComp />
                        </div>
                        <div className="text-4xl">
                          <EditorComp
                            initialValue={card.title}
                            id={card.id}
                            handleMultiEdit={handleMultiEdit}
                            keys="title"
                          />
                        </div>
                        <EditorComp
                          initialValue={card.desc}
                          id={card.id}
                          handleMultiEdit={handleMultiEdit}
                          keys="desc"
                        />
                        <Button rounded={false}>
                          <EditorComp
                            initialValue={card.btn}
                            id={card.id}
                            handleMultiEdit={handleMultiEdit}
                            keys="btn"
                          />
                        </Button>
                      </div>
                    </EditPopover>
                  </div>
                );
              })}
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

export default Design1;
