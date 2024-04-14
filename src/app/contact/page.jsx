"use client";
import React from "react";

const contact = () => {
  return (
    <div className=" flex justify-center items-center bg-gray-100 gap-20 p-8">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-xl w-full ">
        <h1 className="text-2xl font-semibold mb-6">Contact Us</h1>
        <form className="space-y-4">
          {/* Your form inputs */}
          <div>
            <label htmlFor="name" className="block">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
            />
          </div>
          <div>
            <label htmlFor="name" className="block">
              Last Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
            />
          </div>
          <div>
            <label htmlFor="email" className="block">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
            />
          </div>
          <div>
            <label htmlFor="email" className="block">
              Phone No:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
            />
          </div>
          <div>
            <label htmlFor="message" className="block">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#7D007D] text-white px-4 py-2 rounded-md hover:bg-[#8f408f] transition-colors duration-300 w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default contact;
