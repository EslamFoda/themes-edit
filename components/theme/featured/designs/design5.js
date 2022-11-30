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
const Design5 = ({
  choose = false,
  device,
  featuredData,
  handleMultiEdit,
  handleEdit,
  featuredHeader,
  comp,
  icons,comps,themeData
}) => {
  const data = [
    {
      icon: (
        <HiOutlineSupport className="text-red-500" size={choose ? 7 : 20} />
      ),
      title: "Professional Support",
      subTitle:
        "Our team works diligently to ensure that all your questions are answered and your needs met.",
      id: 1,
      button: "Read More",
    },
    {
      icon: <HiOutlineUsers className="text-red-500" size={choose ? 7 : 20} />,
      title: "Qualified Team",
      subTitle:
        "From designers to developers to writers, our team is equipped with a diverse set of skills.",
      id: 2,
      button: "Read More",
    },
    {
      icon: (
        <HiOutlineBriefcase className="text-red-500" size={choose ? 7 : 20} />
      ),
      title: "High Quality Work",
      subTitle:
        "All our work is executed with the highest degree of efficiency.",
      id: 3,
      button: "Read More",
    },
    {
      icon: (
        <TbAsteriskSimple className="text-red-500" size={choose ? 7 : 20} />
      ),
      title: "Detail-oriented approach",
      subTitle:
        "We focus on every aspect of our clients’ needs to leave nothing to chance.",
      id: 4,
      button: "Read More",
    },
  ];
  const gridClassName = cn(
    "py-16 grid lg:grid-cols-3  sm:grid-cols-2   grid-cols-1 md:grid-cols-2 gap-10",
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
            <h1 className="text-small text-center pb-2">features</h1>
            <div className="grid lg:grid-cols-3  sm:grid-cols-2   grid-cols-1 md-grid-cols-2 py-1  gap-2">
              {data.map((card) => {
                return (
                  <div key={card.id} className="flex  flex-col space-y-1 items-start  ">
                    <div className="flex gap-2">
                      <div>
                        <div className="w-3 h-3  bg-primaryBg rounded-full flex justify-center items-center">
                          <div>{card.icon}</div>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-small font-semibold">
                          {card.title}
                        </h3>
                        <p className="text-very-small">{card.subTitle}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </div>
      ) : (
        <div
         
        >
          <Container className="py-10">
            <EditorComp
              initialValue={featuredHeader}
              handleEdit={handleEdit}
              keys="header"
            />
            <div className={gridClassName}>
              {featuredData.map((card, index) => {
                const IconComp = icons[card.icon];
                return (
                  <div key={card.id}>
                    <EditPopover themeData={themeData} comps={comps} comp={comp} index={index}>
                      <div className="flex flex-col space-y-5 items-start  ">
                        <div className="flex gap-4">
                          <div>
                            <div className="w-12 h-12  bg-primaryBg rounded-full flex justify-center items-center">
                              <div className="feat5-icon">
                                <IconComp />
                              </div>
                            </div>
                          </div>
                          <div className="space-y-4">
                            <div className="text-xl">
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
                          </div>
                        </div>
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

export default Design5;
