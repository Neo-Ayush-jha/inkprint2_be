import React, { useState, useRef, useEffect } from "react";
import Logo from "../assets/img/Logo.png";
import Login from "../authentication/Login";
import { FiSearch } from "react-icons/fi";
import {
  BsTelephone,
  BsFillPersonFill,
  BsPerson,
  BsCart3,
} from "react-icons/bs";
import { IoMdCart } from "react-icons/io";
import navImg from "../assets/img/navImg.png";
import { BsArrowUpRight } from "react-icons/bs";

import navPaperBag from "../assets/img/navPaperBag.png";
import tissuePapers from "../assets/img/tissuePapers.png";
import navButterPaper from "../assets/img/navButterPaper.png";
import navHangTags from "../assets/img/navHangTags.png";
import navHeaderCards from "../assets/img/navHeaderCards.png";
import navMailerBoxes from "../assets/img/navMailerBoxes.png";
import navPrintedTapes from "../assets/img/navPrintedTapes.png";
import navProductLables from "../assets/img/navProductLabels.png";
import navThankYouCard from "../assets/img/navThankYouCard.png";
import navWrappingCard from "../assets/img/navWrappingCard.png";
import Cart from '../assets/img/cart_icon.png'

import { Menu, MenuButton, MenuList, IconButton } from "@chakra-ui/react";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

import { RxTextAlignJustify } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [bulk, setBulk] = useState(false);
  const [a1, setA1] = useState(false);
  const [a2, setA2] = useState(false);
  const [a3, setA3] = useState(false);
  const [a4, setA4] = useState(false);
  const [a5, setA5] = useState(false);
  const [a6, setA6] = useState(false);
  const modalRef = useRef();
  const Token = localStorage.getItem("token");
  const RegToken = localStorage.getItem("Register_token");

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setShowLogin(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    if (Token || RegToken) {
      setShowLogin(false);
    }
  }, [Token, RegToken]);

  return (
    <>
      <div className="shadow-[0_2px_2px_0px_rgba(175,196,12,0.08)] px-[20px] py-[15px] block md:hidden">
        <div className="w-full">
          <div className="flex justify-between">
            <Link to="/">
              <div className="logo ml-10">
                <img src={Logo} alt="Logo" className="w-[150px] h-[60px]" />
              </div>
            </Link>

            <div className="flex items-center w-2/3">
              <div className="flex items-center py-[10px] h-[37px] px-[24px] border rounded-full w-[500px] border-grayMid">
                <input
                  placeholder="Search Products..."
                  className="w-full focus:outline-none"
                />
                <FiSearch className="text-2xl text-custom-text-grey cursor-pointer" />
              </div>
              <div
                className={`text-custom-text flex items-center mx-[25px] ml-[40px]   w-[22vw] transition-all ${
                  bulk ? "hidden" : ""
                } font-semibold`}
                onMouseOver={() => setBulk(true)}
              >
                <BsTelephone className="mr-2" />
                <span className="text-[14px]">Contact us for bulk order</span>
              </div>
              <div
                className={`text-custom-text flex items-center mx-[40px] w-[215px] transition-all ${
                  bulk ? "" : "hidden"
                } font-semibold`}
                onMouseLeave={() => setBulk(false)}
              >
                <BsTelephone className="mr-2" />
                <span>
                  <a href="tel:9772906080">+91 9772 9060 80</a>
                </span>
              </div>
              {Token || RegToken ? (
                <button className="border-blue text-[15px] mr-3 border-[1px] rounded-[4px] text-custom-text w-[180px] flex pl-3 pt-[8px] h-[40px] font-medium ">
                  My Account{" "}
                  <BsPerson className="border-blue w-4 h-4   mr-2 ml-2 mt-[3px]" />
                </button>
              ) : (
                <button
                  className="bg-custom-btn text-white pb-1 w-[115px] mr-4 h-[35px] rounded"
                  onClick={handleLoginClick}
                >
                  Log in
                </button>
              )}
              <div className="text-custom-text-green font-semibold cursor-pointer">
                <img src={Cart} className="w-9 h-7 mt-1 cursor-pointer"/>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-[50px] my-[10px]">
          <ul className="flex w-full justify-between text-custom-navbarGrey font-medium">
            <li className="border-r-2 px-[10px] py-[8px]">
              <p className="px-[15px] py-[8px] border-b-2 pr-5 border-white hover:border-blue hover:text-custom-text cursor-pointer transition duration-300 text-center">
                All Products
              </p>
            </li>
            <li className="px-[10px] py-[8px] text-center">
              <p className="px-[15px] py-[10px] hover:border-b-2 hover:border-blue hover:text-custom-text cursor-pointer transition duration-300 text-center">
                Visiting Cards
              </p>
            </li>
            <li className="px-[10px] py-[8px]">
              <p className="px-[15px] py-[10px] hover:border-b-2 hover:border-blue hover:text-custom-text cursor-pointer transition duration-300 text-center">
                Business Essentials
              </p>
            </li>
            <li className="px-[10px] py-[8px]">
              <p className="px-[15px] py-[10px] hover:border-b-2 hover:border-blue hover:text-custom-text cursor-pointer transition duration-300 text-center">
                Packaging Printing
              </p>
            </li>
            <li className="px-[10px] py-[8px]">
              <p className="px-[15px] py-[10px] hover:border-b-2 hover:border-blue hover:text-custom-text cursor-pointer transition duration-300 text-center">
                Marketing essentials
              </p>
            </li>
            <li className="px-[10px] py-[8px]">
              <p className="px-[15px] py-[10px] hover:border-b-2 hover:border-blue hover:text-custom-text cursor-pointer transition duration-300 text-center">
                Display Product
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden md:block mx-[16px]">
        <div className="flex justify-between items-center">
          <img src={Logo} alt="Logo" className="w-[128px]" />
          <div className="flex items-center justify-between w-1/4">
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<RxTextAlignJustify />}
                variant="outline"
                className="text-custom-text text-2xl"
              />
              <MenuList className="mt-6 w-[90vw] mx-[16px] bg-white shadow-md flex flex-col p-[12px]">
                <Accordion allowToggle>
                  <AccordionItem>
                    <h2>
                      <AccordionButton
                        onClick={() => {
                          a1 ? setA1(false) : setA1(true);
                        }}
                        className={`${
                          a1
                            ? "border-b-2 border-blue text-custom-text"
                            : "text-custom-text-darkGrey"
                        } px-[12px] py-[8px] mb-[12px]`}
                      >
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          className="font-semibold text-[12px]"
                        >
                          All Products
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton
                        onClick={() => {
                          a2 ? setA2(false) : setA2(true);
                        }}
                        className={`${
                          a2
                            ? "border-b-2 border-blue text-custom-text"
                            : "text-custom-text-darkGrey"
                        } px-[12px] py-[8px] mb-[12px]`}
                      >
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          className="font-semibold text-[12px]"
                        >
                          Visiting Cards
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton
                        onClick={() => {
                          a3 ? setA3(false) : setA3(true);
                        }}
                        className={`${
                          a3
                            ? "border-b-2 border-blue text-custom-text"
                            : "text-custom-text-darkGrey"
                        } px-[12px] py-[8px] mb-[12px]`}
                      >
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          className="font-semibold text-[12px]"
                        >
                          Business Essentials
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton
                        onClick={() => {
                          a4 ? setA4(false) : setA4(true);
                        }}
                        className={`${
                          a4
                            ? "border-b-2 border-blue text-custom-text"
                            : "text-custom-text-darkGrey"
                        } px-[12px] py-[8px] mb-[12px]`}
                      >
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          className="font-semibold text-[12px]"
                        >
                          Packaging Printing
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <div className="flex mb-[16px]">
                        <div className="flex items-center py-[2px] px-[4px] w-[152px]">
                          <img
                            src={navPaperBag}
                            alt="Paper bag"
                            className="h-[40px] w-[40px]"
                          />
                          <span className="text-[12px] text-custom-text-grey ml-[8px]">
                            Paper Bags
                          </span>
                        </div>
                        <div className="flex items-center py-[2px] px-[4px]">
                          <img
                            src={tissuePapers}
                            alt="tissue papers"
                            className="h-[40px] w-[40px]"
                          />
                          <span className="text-[12px] text-custom-text-grey ml-[8px]">
                            Tissue papers
                          </span>
                        </div>
                      </div>
                      <div className="flex mb-[16px]">
                        <div className="flex items-center py-[2px] px-[4px] w-[152px]">
                          <img
                            src={navPrintedTapes}
                            alt="Paper bag"
                            className="h-[40px] w-[40px]"
                          />
                          <span className="text-[12px] text-custom-text-grey ml-[8px]">
                            Printed tapes
                          </span>
                        </div>
                        <div className="flex items-center py-[2px] px-[4px]">
                          <img
                            src={navHangTags}
                            alt="tissue papers"
                            className="h-[40px] w-[40px]"
                          />
                          <span className="text-[12px] text-custom-text-grey ml-[8px]">
                            Hang tags
                          </span>
                        </div>
                      </div>
                      <div className="flex mb-[16px]">
                        <div className="flex items-center py-[2px] px-[4px] w-[152px]">
                          <img
                            src={navMailerBoxes}
                            alt="Paper bag"
                            className="h-[40px] w-[40px]"
                          />
                          <span className="text-[12px] text-custom-text-grey ml-[8px]">
                            Mailer Boxes
                          </span>
                        </div>
                        <div className="flex items-center py-[2px] px-[4px]">
                          <img
                            src={navHeaderCards}
                            alt="tissue papers"
                            className="h-[40px] w-[40px]"
                          />
                          <span className="text-[12px] text-custom-text-grey ml-[8px]">
                            Header cards/
                            <br /> Bag toppers
                          </span>
                        </div>
                      </div>
                      <div className="flex mb-[16px]">
                        <div className="flex items-center py-[2px] px-[4px] w-[152px]">
                          <img
                            src={navProductLables}
                            alt="Paper bag"
                            className="h-[40px] w-[40px]"
                          />
                          <span className="text-[12px] text-custom-text-grey ml-[8px]">
                            Product labels <br />
                            &amp; Stickers
                          </span>
                        </div>
                        <div className="flex items-center py-[2px] px-[4px]">
                          <img
                            src={navButterPaper}
                            alt="tissue papers"
                            className="h-[40px] w-[40px]"
                          />
                          <span className="text-[12px] text-custom-text-grey ml-[8px]">
                            Printed
                            <br /> butter papers
                          </span>
                        </div>
                      </div>
                      <div className="flex mb-[16px]">
                        <div className="flex items-center py-[2px] px-[4px] w-[152px]">
                          <img
                            src={navThankYouCard}
                            alt="Paper bag"
                            className="h-[40px] w-[40px]"
                          />
                          <span className="text-[12px] text-custom-text-grey ml-[8px]">
                            Thank you cards
                          </span>
                        </div>
                        <div className="flex items-center py-[2px] px-[4px]">
                          <img
                            src={navWrappingCard}
                            alt="tissue papers"
                            className="h-[40px] w-[40px]"
                          />
                          <span className="text-[12px] text-custom-text-grey ml-[8px]">
                            Wrapping
                            <br /> papers
                          </span>
                        </div>
                      </div>
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton
                        onClick={() => {
                          a5 ? setA5(false) : setA5(true);
                        }}
                        className={`${
                          a5
                            ? "border-b-2 border-blue text-custom-text"
                            : "text-custom-text-darkGrey"
                        } px-[12px] py-[8px] mb-[12px]`}
                      >
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          className="font-semibold text-[12px]"
                        >
                          Marketing essentials
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton
                        onClick={() => {
                          a6 ? setA6(false) : setA6(true);
                        }}
                        className={`${
                          a6
                            ? "border-b-2 border-blue text-custom-text"
                            : "text-custom-text-darkGrey"
                        } px-[12px] py-[8px] mb-[12px]`}
                      >
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          className="font-semibold text-[12px]"
                        >
                          Display Product
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
                <div className="relative px-[12px] py-[18px] h-[10rem] mt-[100px]">
                  <img
                    src={navImg}
                    alt="navbar shopnow img"
                    className="absolute top-0 left-0 w-full h-full"
                  />
                  <div className="text-[12px] text-white z-10 absolute h-full">
                    <h5 className="font-semibold mb-[12px]">
                      Create Your Unique Custom Box
                    </h5>
                    <p>
                      Tailor-Made Packaging
                      <br /> Solutions for Your Brand
                    </p>
                    <button className="flex items-center justify-between w-[5rem] px-[8px] py-[4px] bg-custom-btn text-[10px] rounded mt-[30px]">
                      Shop Now <BsArrowUpRight />
                    </button>
                  </div>
                </div>
              </MenuList>
            </Menu>
            <FiSearch className="text-custom-text-grey" />
            <IoMdCart className="text-custom-text-green" />
          </div>
        </div>
        <div className="bg-custom-btn text-white">
          <p className="flex items-center justify-center text-[10px]">
            <BsTelephone className="mr-2" />
            Contact us for bulk order{" "}
            <a href="tel:9772906080">&nbsp; +91 9772 9060 80</a>
          </p>
        </div>
      </div>
      {showLogin && (
        <div ref={modalRef}>
          <Login setShowLogin={setShowLogin} />
        </div>
      )}
    </>
  );
};

export default Navbar;