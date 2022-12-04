import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Img from "../../images/FormImage.jpg";
import { Link } from "react-router-dom";
import logo from "../../images/logo.jpg";
import { FaArrowRight } from "react-icons/fa";

const LogIn = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));
  return (
    <div className="flex items-center gap-36 mx-auto justify-center">
      <div>
        <img src={logo} alt="" />
        <img className="w-[612]px h-[437px]" src={Img} alt="" />
      </div>
      <div className="w-[516px] h-[630px] bg-white shadow-2xl p-16">
        <h2 className="text-2xl font-semibold text-center ">LogIn Form</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" mt-28">
            <input
              name="email"
              required
              placeholder="Write Email Address"
              type="email"
              className="font-normal pl-4 text-md leading-5 text-gray-400  w-full focus:outline-none border-b border-gray-300"
            />
          </div>
          {errors.exampleRequired && <span>This field is required</span>}
          <div className=" mt-16">
            <input
              name="password"
              required
              placeholder="Write Password"
              type="password"
              className="font-normal pl-4 text-md leading-5 text-gray-400  w-full focus:outline-none border-b border-gray-300"
            />
          </div>
          <small className="text-gray-400 pl-4">
            Your password must be 8 character
          </small>
          {errors.exampleRequired && <span>This field is required</span>}
          <div className="flex justify-center items-center mt-20">
            <button className=" gap-3 drop-shadow-lg hover:bg-white hover:text-blue-500 hover:bg-gradient-to-r hover:from-white hover:to-white hover:border hover:border-blue-500 flex w-28 justify-center rounded-2xl text-white font-medium text-md bg-gradient-to-r from-blue-500 to-blue-500   h-12 items-center">
              Log In
            </button>
          </div>
          <div className=" flex gap-2 mt-24 justify-end items-center ">
            <h1>Don't have an account? </h1>
            <Link to="/signup">
              <span className="uppercase underline font-semibold leading-4 text-blue-500">
                signup here!
              </span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
