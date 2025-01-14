import React from "react";
import CSS from "../assets/imgs/css.png";
import HTML from "../assets/imgs/html.png";
import JS from "../assets/imgs/js.png";
import Java from "../assets/imgs/java.png";
import PHP from "../assets/imgs/php.png";
import Python from "../assets/imgs/python.png";

const Experience = () => {
  return (
    <section name="experience" className="bg-[#ffffff] w-full h-screen">
      <div className="max-w-[1000px] mx-auto md:px-16 px-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-teal-300 text-gray-300 ">Experience</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 justify-between text-center py-12 ">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#1e293b] rounded-full flex items-center justify-center p-4 m-auto">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#1e293b] rounded-full flex items-center justify-center p-4 m-auto">
            <img className="w-20 mx-auto" src={CSS} alt="HTML icon" />
            
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#1e293b] rounded-full flex items-center justify-center p-4 m-auto">
            <img className="w-20 mx-auto" src={JS} alt="HTML icon" />
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#1e293b] rounded-full flex items-center justify-center p-4 m-auto">
            <img className="w-20 mx-auto" src={Java} alt="HTML icon" />
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#1e293b] rounded-full flex items-center justify-center p-4 m-auto">
            <img className="w-20 mx-auto" src={Python} alt="HTML icon" />
            
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#1e293b] rounded-full flex items-center justify-center p-4 m-auto">
            <img className="w-20 mx-auto" src={PHP} alt="HTML icon" />
            
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
