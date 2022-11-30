import React from "react";
import Container from "../../../ui/container";
import {
  HiOutlineSupport,
  HiOutlineBriefcase,
  HiOutlineUsers,
} from "react-icons/hi";
import { TbAsteriskSimple } from "react-icons/tb";
import cn from "clsx";
import EditorComp from "../../../editor";
import { EditPopover } from "../../../ui/popover/EditPopover";
const Design4 = ({
  choose = false,
  device,
  featuredData,
  handleMultiEdit,
  comp,icons,comps,themeData
}) => {
  const data = [
    {
      icon: (
        <HiOutlineSupport className="text-red-500" size={choose ? 7 : 25} />
      ),
      title: "Professional Support",
      subTitle:
        "Our team works diligently to ensure that all your questions are answered and your needs met.",
      id: 1,
      button: "Read More",
    },
    {
      icon: <HiOutlineUsers className="text-red-500" size={choose ? 7 : 25} />,
      title: "Qualified Team",
      subTitle:
        "From designers to developers to writers, our team is equipped with a diverse set of skills.",
      id: 2,
      button: "Read More",
    },
    {
      icon: (
        <HiOutlineBriefcase className="text-red-500" size={choose ? 7 : 25} />
      ),
      title: "High Quality Work",
      subTitle:
        "All our work is executed with the highest degree of efficiency.",
      id: 3,
      button: "Read More",
    },
    {
      icon: (
        <TbAsteriskSimple className="text-red-500" size={choose ? 7 : 25} />
      ),
      title: "Detail-oriented approach",
      subTitle:
        "We focus on every aspect of our clients’ needs to leave nothing to chance.",
      id: 4,
      button: "Read More",
    },
  ];
  const gridClassName = cn(
    "py-16 grid lg:grid-cols-3  sm:grid-cols-2   grid-cols-1 md-grid-cols-2 gap-4",
    {
      "!grid-cols-1": device === "mobile",
      "!grid-cols-2": device === "tablet",
    }
  );

  return (
    <>
      {choose ? (
        <div>
          <Container className="absolute top-1/2 overflow-hidden left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="grid lg:grid-cols-3  sm:grid-cols-2   grid-cols-1 md-grid-cols-2 py-1  gap-1">
              {data.map((card) => {
                return (
                  <div key={card.id} className="p-1 flex  flex-col space-y-1 items-start  ">
                    <div className="flex flex-col gap-1">
                      <div className="w-4 h-4 bg-primaryBg rounded-full flex justify-center items-center">
                        <div>{card.icon}</div>
                      </div>
                      <h3 className="text-very-small font-semibold">
                        {card.title}
                      </h3>
                    </div>
                    <p className="text-very-small">{card.subTitle}</p>
                  </div>
                );
              })}
            </div>
          </Container>
        </div>
      ) : (
        <div
          
        >
          <Container>
            <div className={gridClassName}>
              {featuredData.map((card, index) => {
                  const IconComp = icons[card.icon]
                return (
                  <div key={card.id}>
                    <EditPopover themeData={themeData} comps={comps} comp={comp} index={index}>
                      <div className="p-4 flex  flex-col space-y-5 items-start  ">
                        <div className="flex flex-col gap-5">
                          <div className="w-12 h-12 bg-primaryBg rounded-full flex justify-center items-center">
                            <div className="feat4-icon"><IconComp/></div>
                          </div>
                          <div className="text-xl">
                            <EditorComp
                              initialValue={card.title}
                              id={card.id}
                              handleMultiEdit={handleMultiEdit}
                              keys="title"
                            />
                          </div>
                        </div>
                        <EditorComp
                          initialValue={card.desc}
                          id={card.id}
                          handleMultiEdit={handleMultiEdit}
                          keys="desc"
                        />
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

export default Design4;
