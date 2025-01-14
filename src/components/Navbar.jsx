import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsPersonLinesFill } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import {Link} from "react-scroll"

import logo from "../assets/imgs/logo.png";

export default function Navbar () {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <section className=" bg-[#ffffff] text-gray-400 ">
      <nav className="fixed w-full flex justify-between items-center px-4 shadow-2xl backdrop-filter backdrop-blur-lg">
        
        {/*Logo*/}
        <div>
          <img src={logo} alt="logo" className="w-auto h-20" />
        </div>

        {/*Menu*/}
        <div className="hidden md:flex space-x-4 text-xl px-2">
          <p className="hover:text-gray-100 cursor-pointer">
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </p>
          <p className="hover:text-gray-100 cursor-pointer">
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </p>

          {/*<p>Experience</p>*/}
          <p className="hover:text-gray-100 cursor-pointer">
            <Link to="experience" smooth={true} duration={500}>
              Experience
            </Link>
          </p>
          <p className="hover:text-gray-100 cursor-pointer">
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </p>
        </div>

        {/*Hamburger*/}
        <div
          onClick={handleClick}
          className="md:hidden z-10 px-2 hover:text-gray-100 cursor-pointer"
        >
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/*Mobile menu*/}
        <AnimatePresence>
          {nav && (
            <div className="fixed top-0 left-0 w-full h-screen bg-[#0f172a] text-gray-400">
              <motion.div
                className="w-full h-screen flex flex-col justify-center items-center"
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: "0%" }}
                transition={{ duration: 0.3 }}
                exit={{ opacity: 0, x: "100%" }}
              >
                <div className="flex flex-col items-center">
                  <div className=" py-6">
                    <span className=" text-4xl cursor-pointer hover:text-gray-100">
                      <Link to="home" smooth={true} duration={500}>
                        Home
                      </Link>
                    </span>
                  </div>

                  <div className="py-6 ">
                    <span className=" text-4xl cursor-pointer hover:text-gray-100">
                      <Link to="about" smooth={true} duration={500}>
                        About
                      </Link>
                    </span>
                  </div>

                  <div className="py-6">
                    <span className=" text-4xl cursor-pointer hover:text-gray-100">
                      <Link to="experience" smooth={true} duration={500}>
                        Experience
                      </Link>
                    </span>
                  </div>

                  {/* <div className="py-6">
                    <Link to="projects" smooth={true} duration={500}>
                      <span className="text-4xl">Projects</span>
                    </Link>
                  </div> */}

                  <div className="py-6">
                    <span className=" text-4xl cursor-pointer hover:text-gray-100">
                      <Link to="contact" smooth={true} duration={500}>
                        Contact
                      </Link>
                    </span>
                  </div>
                </div>

                {/*Socials*/}
                <div className="flex flex-row pt-10 mb-0">
                  {/*LinkedIn*/}
                  <div className="px-4 cursor-pointer ">
                    <a
                      href="https://www.linkedin.com/in/serhii-kuzmin-160951190"
                      className="flex justify-between items-center w-full hover:text-gray-100"
                    >
                      <FaLinkedin size={30} />
                    </a>
                  </div>

                  {/*Github*/}
                  <div className="px-4 cursor-pointer ">
                    <a
                      href="https://github.com/sersergious"
                      className="flex justify-between items-center w-full hover:text-gray-100"
                    >
                      <FaGithub size={30} />
                    </a>
                  </div>

                  {/* Email
                  <div className="px-4 cursor-pointer ">
                    <a
                      href="/"
                      className="flex justify-between items-center w-full hover:text-gray-100"
                    >
                      <HiOutlineMail size={30} />
                    </a>
                  </div> */}

                  {/*Resume*/}
                  <div className="px-4 cursor-pointer ">
                    <a
                      href="/"
                      download={
                        "portfolio-website/src/assets/docs/resume Serhii Kuzmin.docx"
                      }
                      className="flex justify-between items-center w-full hover:text-gray-100"
                    >
                      <BsPersonLinesFill size={30} />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </nav>

      {/*Socials Menu*/}
      <aside className="hidden md:flex fixed flex-col top-[35%] left-0 ">
        {/*LinkedIn*/}
        <div className=" w-[160px] h-[60px] flex justify-between items-center px-4 cursor-pointer ml-[-100px] hover:ml-[010px] duration-300 hover:text-gray-100">
          <a href="https://www.linkedin.com/in/serhii-kuzmin-160951190" className="flex justify-between items-center w-full">
            LinkedIn <FaLinkedin size={30} />
          </a>
        </div>

        {/*Github*/}
        <div className=" w-[160px] h-[60px] flex justify-between items-center px-4 cursor-pointer ml-[-100px] hover:ml-[010px] duration-300 hover:text-gray-100">
          <a href="https://github.com/sersergious" className="flex justify-between items-center w-full">
            Github <FaGithub size={30} />
          </a>
        </div>

        {/* Email
        <div className=" w-[160px] h-[60px] flex justify-between items-center px-4 cursor-pointer ml-[-100px] hover:ml-[010px] duration-300 hover:text-gray-100">
          <a href="./" className="flex justify-between items-center w-full">
            Email <HiOutlineMail size={30} />
          </a>
        </div> */}

        {/*Resume*/}
        <div className=" w-[160px] h-[60px] flex justify-between items-center px-4 cursor-pointer ml-[-100px] hover:ml-[010px] duration-300 hover:text-gray-100">
          <a
            href="/"
            download={
              "portfolio-website/src/assets/docs/resume Serhii Kuzmin.docx"
            }
            className="flex justify-between items-center w-full"
          >
            Resume <BsPersonLinesFill size={30} />
          </a>
        </div>

      </aside>
    </section>
  );
};
