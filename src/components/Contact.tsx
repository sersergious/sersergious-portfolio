import React from "react";

const Contact = () => {
  return (
    <section name="contact" className="bg-[#ffffff] w-full h-screen flex items-center justify-center">
      <div className="flex flex-col justify-center w-full px-4 max-w-[1000px] mx-auto md:px-16 h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-teal-300 text-gray-300 ">
            Contact
          </p>
        </div>
        <div className="w-full flex justify-center py-8">
          <form
            method="POST"
            action="https://getform.io/f/f52c37b0-7767-4e7e-a82b-30878cf0cef0"
            className="flex flex-col max-w-[700px] w-full"
          >
            <input
              className="bg-[#ccd6f6] p-2 rounded"
              type="text"
              placeholder="Name"
              name="name"
            />
            <input
              className="my-4 p-2 bg-[#ccd6f6] rounded"
              type="email"
              placeholder="Email"
              name="email"
            />
            <textarea
              name="message"
              id=""
              cols="100"
              rows="10"
              className="bg-[#ccd6f6] p-2 rounded"
              placeholder="Message"
            ></textarea>
            <button className="text-gray-400 border-2 hover:bg-teal-400 hover:border-teal-400 px-4 py-3 my-8 mx-auto flex items-center rounded">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
