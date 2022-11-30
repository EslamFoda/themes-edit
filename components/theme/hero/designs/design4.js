import Container from "../../../ui/container";
import cn from "clsx";
import { useState } from "react";
import EditorComp from "../../../editor";
import Button from "../../../ui/Button";
import ImageComp from "../../gallery/common/imageComp";
const Design4 = ({
  device,
  choose,
  heroData,
  handleEdit,
  compIndex,
  comp,
  themeData,
}) => {
  const [openNav, setOpenNav] = useState(false);
  const imageClassName = cn("lg:h-[550px] md:h-[500px] h-80  w-full  ", {
    "!h-80": device === "mobile",
  });
  const headerClassName = cn(
    "lg:text-6xl md:text-5xl text-4xl font-semibold max-w-3xl",
    {
      "!text-4xl": device === "mobile",
    }
  );

  const flexClassName = cn(
    "flex py-20 flex-col justify-center items-center text-center lg:gap-20 md:gap-20 gap-10",
    {
      "!gap-10": device === "mobile",
    }
  );

  return (
    <div>
      {choose ? (
        <Container className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex  flex-col justify-center items-center text-center  gap-1">
            <div className="space-y-1  max-w-[120px]">
              <h1 className=" text-small font-semibold">
                clothes is a leading business in the clothes industry
              </h1>
              <p className=" text-very-small">
                Learn about our services and join our community today
              </p>
              <div className="flex items-center w-full justify-center gap-4 ">
                <button className="bg-red-500 text-small text-white p-[2px]">
                  Get in Touch
                </button>
                <button className=" border border-solid text-small border-red-500 p-[2px]">
                  learn more
                </button>
              </div>
            </div>
            <div
              style={{
                backgroundImage:
                  "url(https://image.shutterstock.com/shutterstock/photos/2025365270/display_1500/stock-photo-beautiful-attractive-asia-lady-choosing-clothes-on-clothes-rack-dressing-looking-herself-in-mirror-2025365270.jpg)",
                backgroundSize: "cover",
                MozBackgroundSize: "center center",
                backgroundRepeat: "no-repeat",
              }}
              className="h-16  w-4/5"
            ></div>
          </div>
        </Container>
      ) : (
        <>
          <div className={"border-b border-black border-solid"}>
            <Container>
              <nav className="border-gray-200 px-2 sm:px-4 py-2.5 rounded">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                  <span className="flex items-center">
                    <img
                      src="https://flowbite.com/docs/images/logo.svg"
                      className="h-6 mr-3 sm:h-9"
                      alt="Flowbite Logo"
                    />
                    <span className="self-center text-sm font-semibold whitespace-nowrap dark:text-gray-400">
                      Flowbite
                    </span>
                  </span>
                  <div className="flex md:order-2">
                    <button
                      type="button"
                      className="text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-secondary dark:hover:bg-primary dark:focus:ring-blue-800"
                    >
                      Get started
                    </button>
                    <button
                      onClick={() => {
                        setOpenNav(!openNav);
                      }}
                      data-collapse-toggle="navbar-cta"
                      type="button"
                      className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-primary  hover:text-white"
                      aria-controls="navbar-cta"
                      aria-expanded="false"
                    >
                      <span class="sr-only">Open main menu</span>
                      <svg
                        className="w-6 h-6"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <div
                    className={`${
                      openNav ? "block" : "hidden"
                    } items-center justify-between  w-full md:flex md:w-auto md:order-1`}
                    id="navbar-cta"
                  >
                    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0  md:text-sm md:font-medium md:border-0 md:bg-white  md:dark:bg-transparent dark:border-primary">
                      <li>
                        <span
                          className="block cursor-pointer md:px-2  py-2 pl-3 pr-4 text-white bg-unset rounded md:bg-unset  text-md md:text-primary md:p-0 dark:text-primary"
                          aria-current="page"
                        >
                          Home
                        </span>
                      </li>
                      <li>
                        <span className="block text-md cursor-pointer py-2 pl-3 pr-4 text-gray-700 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray md:dark:hover:text-black dark:hover:bg-secondary dark:hover:text-white md:dark:hover:bg-transparent">
                          About
                        </span>
                      </li>
                      <li>
                        <span className="block text-md cursor-pointer py-2 pl-3 pr-4 text-gray-700 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray md:dark:hover:text-black dark:hover:bg-secondary dark:hover:text-white md:dark:hover:bg-transparent">
                          Services
                        </span>
                      </li>
                      <li>
                        <span className="block text-md cursor-pointer py-2 pl-3 pr-4 text-gray-700 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray md:dark:hover:text-black dark:hover:bg-secondary dark:hover:text-white md:dark:hover:bg-transparent">
                          Pricing
                        </span>
                      </li>
                      <li>
                        <span className="block text-md cursor-pointer py-2 pl-3 pr-4 text-gray-700 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray md:dark:hover:text-black dark:hover:bg-secondary dark:hover:text-white md:dark:hover:bg-transparent">
                          Contact
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </Container>
          </div>
          <Container>
            <div className={flexClassName}>
              <div className="space-y-8">
                <div className={headerClassName}>
                  <EditorComp
                    handleEdit={handleEdit}
                    initialValue={heroData.title}
                    keys="title"
                  />
                </div>
                <EditorComp
                  handleEdit={handleEdit}
                  initialValue={heroData.subTitle}
                  keys="subTitle"
                />
                <div className="flex items-center w-full justify-center gap-4 mt-4">
                  <Button>
                    <EditorComp
                      handleEdit={handleEdit}
                      initialValue={heroData.primaryBtn}
                      keys="primaryBtn"
                    />
                  </Button>
                  <Button variant="outline">
                    <EditorComp
                      handleEdit={handleEdit}
                      initialValue={heroData.secondaryBtn}
                      keys="secondaryBtn"
                    />
                  </Button>
                </div>
              </div>
              <div className={imageClassName}>
                {" "}
                <ImageComp
                  themeData={themeData}
                  comp={comp}
                  compIndex={compIndex}
                  image={heroData.pic}
                />
              </div>
            </div>
          </Container>
        </>
      )}
    </div>
  );
};

export default Design4;
