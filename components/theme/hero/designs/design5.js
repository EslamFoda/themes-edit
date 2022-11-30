import Container from "../../../ui/container";
import { useState } from "react";
import cn from "clsx";
import EditorComp from "../../../editor";
import Button from "../../../ui/Button";
import ImageComp from "../../gallery/common/imageComp";
const Design5 = ({
  device,
  choose,
  heroData,
  handleEdit,
  compIndex,
  comp,
  themeData,
}) => {
  const [openNav, setOpenNav] = useState(false);
  const imageClassName = cn("lg:h-[450px] md:h-[400px] h-80  w-full  ", {
    "!h-80": device === "mobile",
  });
  const headerClassName = cn(
    "lg:text-4xl md:text-3xl text-2xl font-semibold max-w-3xl",
    {
      "!text-4xl": device === "mobile",
    }
  );

  const flexClassName = cn(
    "flex pt-20 flex-col justify-center items-center lg:gap-20 md:gap-20 gap-10",
    {
      "!gap-10": device === "mobile",
    }
  );

  const gridClassName = cn(
    "grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 lg:gap-24 md:gap-24 gap-5",
    {
      "!gap-5 !grid-cols-1": device === "mobile",
    }
  );
  const btnFlexClassName = cn(
    "flex flex-col lg:flex-row md:flex-col items-center w-full justify-center gap-4 mt-4",
    {
      "!flex-col": device === "tablet",
      "!flex-col": device === "mobile",
    }
  );

  return (
    <div>
      {choose ? (
        <div className="flex pt-6  flex-col justify-center items-center gap-2">
          <Container>
            <div className="grid pb-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1  gap-1">
              <div>
                <h1 className=" text-small font-semibold max-w-3xl">
                  clothes is a leading business in the clothes industry
                </h1>
                <p className="text-very-small">
                  Learn about our services and join our community today
                </p>
              </div>
              <div className="flex flex-col lg:flex-row md:flex-col items-center w-full justify-center gap-1 ">
                <button className="bg-red-500   w-full  text-white p-[1px] text-small">
                  Get in Touch
                </button>
                <button className=" border border-solid   w-full border-red-500 p-[1px] text-small">
                  learn more
                </button>
              </div>
            </div>
          </Container>
          <div
            style={{
              backgroundImage:
                "url(https://image.shutterstock.com/shutterstock/photos/2025365270/display_1500/stock-photo-beautiful-attractive-asia-lady-choosing-clothes-on-clothes-rack-dressing-looking-herself-in-mirror-2025365270.jpg)",
              backgroundSize: "cover",
              MozBackgroundSize: "center center",
              backgroundRepeat: "no-repeat",
            }}
            className="h-20  w-full"
          ></div>
        </div>
      ) : (
        <>
          <Container>
            <nav className=" border-gray-200 px-2 sm:px-4 py-2.5 rounded ">
              <div className="container flex flex-wrap items-center justify-between lg:justify-start md:justify-start gap-5 mx-auto">
                <span className="flex items-center">
                  <img
                    src="https://flowbite.com/docs/images/logo.svg"
                    className="h-6 mr-3 sm:h-9"
                    alt="Flowbite Logo"
                  />
                  <span className="self-center text-xl font-semibold whitespace-nowrap text-gray-400">
                    Logo
                  </span>
                </span>
                <button
                  onClick={() => {
                    setOpenNav(!openNav);
                  }}
                  data-collapse-toggle="navbar-default"
                  type="button"
                  className="inline-flex items-center p-2 ml-3 text-sm text-gray rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray dark:hover:bg-primary hover:text-white dark:focus:ring-secondary"
                  aria-controls="navbar-default"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
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
                <div
                  className={`${
                    openNav ? "block" : "hidden"
                  } w-full md:block md:w-auto`}
                  id="navbar-default"
                >
                  <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0  md:text-sm md:font-medium md:border-0 md:bg-white  md:dark:bg-transparent dark:border-primary">
                    <li>
                      <span
                        className="block cursor-pointer md:px-2  py-2 pl-3 pr-4 text-white bg-unset rounded md:bg-unset  text-lg md:text-primary md:p-0 dark:text-primary"
                        aria-current="page"
                      >
                        Home
                      </span>
                    </li>
                    <li>
                      <span className="block text-lg cursor-pointer py-2 pl-3 pr-4 text-gray-700 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray md:dark:hover:text-black dark:hover:bg-secondary dark:hover:text-white md:dark:hover:bg-transparent">
                        About
                      </span>
                    </li>
                    <li>
                      <span className="block text-lg cursor-pointer py-2 pl-3 pr-4 text-gray-700 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray md:dark:hover:text-black dark:hover:bg-secondary dark:hover:text-white md:dark:hover:bg-transparent">
                        Services
                      </span>
                    </li>
                    <li>
                      <span className="block text-lg cursor-pointer py-2 pl-3 pr-4 text-gray-700 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray md:dark:hover:text-black dark:hover:bg-secondary dark:hover:text-white md:dark:hover:bg-transparent">
                        Pricing
                      </span>
                    </li>
                    <li>
                      <span className="block text-lg cursor-pointer py-2 pl-3 pr-4 text-gray-700 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray md:dark:hover:text-black dark:hover:bg-secondary dark:hover:text-white md:dark:hover:bg-transparent">
                        Contact
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </Container>
          <div className={flexClassName}>
            <Container>
              <div className={gridClassName}>
                <div>
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
                </div>
                <div className={btnFlexClassName}>
                  <Button full>
                    <EditorComp
                      handleEdit={handleEdit}
                      initialValue={heroData.primaryBtn}
                      keys="primaryBtn"
                    />
                  </Button>
                  <Button full variant="outline">
                    <EditorComp
                      handleEdit={handleEdit}
                      initialValue={heroData.secondaryBtn}
                      keys="secondaryBtn"
                    />
                  </Button>
                </div>
              </div>
            </Container>
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
        </>
      )}
    </div>
  );
};

export default Design5;
