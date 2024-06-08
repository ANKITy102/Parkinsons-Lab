"use client";
import { useState } from "react";

export default function Form() {
  const initialFormData = { name: "", age: "", gender: "" };
  const [formData, setFormData] = useState(initialFormData);
  // console.log(formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form className="max-w-[55%] ml-[6rem] mt-[4rem]">
      <div className="text-[2.6rem] font-extrabold mb-[2.5rem] text-[#03A9F4]">
        Details
      </div>
      <div className="relative z-0 w-full mb-[4rem] group">
        <input
          type="text"
          name="name"
          id="name"
          className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
          onChange={handleChange}
        />
        <label
          htmlFor="name"
          className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Name
        </label>
      </div>
      <div className="relative z-0 w-full mb-[4rem] group">
        <input
          type="number"
          name="age"
          id="age"
          className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
          onChange={handleChange}
        />
        <label
          htmlFor="age"
          className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Age
        </label>
      </div>
      <fieldset>
        <div className="text-lg text-gray-400 mb-[2rem]">Gender</div>
        <div className="flex items-center mb-[1.5rem]">
          <input
            id="gender-male"
            type="radio"
            name="gender"
            value="male"
            className="w-4 h-4 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
            onChange={handleChange}
          />
          <label
            htmlFor="gender-male"
            className="block ms-2 text-md font-medium text-gray-200"
          >
            Male
          </label>
        </div>
        <div className="flex items-center mb-[1.5rem]">
          <input
            id="gender-female"
            type="radio"
            name="gender"
            value="female"
            className="w-4 h-4 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
            onChange={handleChange}
          />
          <label
            htmlFor="gender-female"
            className="block ms-2 text-md font-medium text-gray-200"
          >
            Female
          </label>
        </div>
        <div className="flex items-center mb-[1.5rem]">
          <input
            id="gender-others"
            type="radio"
            name="gender"
            value="others"
            className="w-4 h-4 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
            onChange={handleChange}
          />
          <label
            htmlFor="gender-others"
            className="block ms-2 text-md font-medium text-gray-200"
          >
            Others
          </label>
        </div>
      </fieldset>
      <button
        type="submit"
        className="text-white bg-[#03A9F4] hover:bg-blue-800 focus:ring-4 focus:outline-none mt-[2rem] focus:ring-blue-300 font-medium rounded-lg text-md w-[20%] px-5 py-2.5 text-center dark:bg-[#03A9F4] dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Take Test
      </button>
    </form>
  );
}
