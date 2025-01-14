import React from "react";

const Home = () => {
    return(
        <section name='home' className="bg-[#ffffff] w-full h-screen">
            <div className="max-w-[1000px] mx-auto md:px-16 px-4 flex flex-col justify-center h-full">
                <div className="py-4">
                    <p className="text-gray-300 text-4xl font-bold inline border-b-4 border-teal-400">Hi, my name is</p>
                </div>
                <h1 className=" text-4xl sm:7xl text-gray-300 font-bold">
                    Serhii Kuzmin
                </h1>
                <h2 className="text-4xl sm:7xl text-gray-300 font-bold">
                    I'm a Full Stack Web Developer
                </h2>
                <p className="text-gray-300 py-4 max-w-[700px]">
                    I'm currently studying Computer Science
                    at the University of Scranton.
                    I work with modern web technologies such as
                    ReactJs, NodeJs, Nextjs, Go, Java, and Python
                </p>
            </div>
        </section>
    );
}

export default Home;