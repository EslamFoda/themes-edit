import React, { useState } from "react";
import EditorComp from "../../../editor";
import Container from "../../../ui/container";
import Button from "../../../ui/Button";
import ChangeBgImg from "../../../changeBgImg";

const Design2 = ({
  choose = false,
  heroData,
  handleEdit,
  compIndex,
  themeData,
  editSections,
}) => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <>
      {choose ? (
        <>
          <div
            className="h-20 py-16 "
            style={{
              backgroundImage:
                "url(https://image.shutterstock.com/shutterstock/photos/2025365270/display_1500/stock-photo-beautiful-attractive-asia-lady-choosing-clothes-on-clothes-rack-dressing-looking-herself-in-mirror-2025365270.jpg)",
              backgroundSize: "cover",
              MozBackgroundSize: "center center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Container className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className=" w-small bg-white space-y-2 p-2">
                <h1 className="text-small">
                  clothes is a leading business in the clothes industry
                </h1>
                <span className="block text-very-small">
                  Learn about our services and join our community today
                </span>
                <button className="w-full p-1 bg-blue-500 text-small">
                  shop now
                </button>
              </div>
            </Container>
          </div>
        </>
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
          <div
            className="h-[90vh] relative img-editor-container py-16 "
            style={{
              backgroundImage: `url(${heroData.pic})`,
              backgroundSize: "cover",
              MozBackgroundSize: "center center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <ChangeBgImg
              compIndex={compIndex}
              themeData={themeData}
            />
            <Container>
              <div className="max-w-sm bg-white space-y-10 p-8">
                <EditorComp
                  handleEdit={handleEdit}
                  initialValue={heroData.title}
                  keys="title"
                />
                <EditorComp
                  handleEdit={handleEdit}
                  initialValue={heroData.subTitle}
                  keys="subTitle"
                />
                <Button full>
                  <EditorComp
                    handleEdit={handleEdit}
                    initialValue={heroData.primaryBtn}
                    keys="primaryBtn"
                  />
                </Button>
              </div>
            </Container>
          </div>
        </>
      )}
    </>
  );
};

export default Design2;
