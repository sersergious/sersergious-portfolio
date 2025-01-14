import React from "react";

/**
 * Represents the About component.
 * This component displays information about the website owner and their portfolio.
 *
 * @returns {JSX.Element} The rendered About component.
 */
const About = () => {
  return (
    <div name="about" className=" w-full h-screen bg-[#ffffff] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full ">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-teal-400">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>
                Hey! I'm Serhii, thank you for dropping by. Grab yourself some
                coffee and enjoy your day! Make sure to take a look at what I
                got.
              </p>
            </div>
            <div>
    
              <p>
                Welcome to my portfolio website! As a software engineer, I have
                a passion for developing modern and user-friendly websites. With
                my skills in web development, I strive to create interactive and
                engaging websites that provide a great user experience. Browse
                through my projects and experience to see how I can help bring
                your ideas to life.
              </p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
