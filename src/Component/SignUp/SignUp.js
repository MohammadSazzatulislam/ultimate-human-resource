import React, { useState } from "react";
import { useForm } from "react-hook-form";
import formImg from "../../images/img.jpg";
import { Link } from "react-router-dom";
import logo from "../../images/logo.jpg";
import { FaArrowRight } from "react-icons/fa";

const SignUp = () => {
  const [step, setStep] = useState(0);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it
  return (
    <div className="flex items-center gap-36 mx-auto justify-center">
      <div>
        <img src={logo} alt="" />
        <img className="w-[612]px h-[437px]" src={formImg} alt="" />
      </div>
      <div className="w-[516px] h-[630px] bg-white shadow-2xl p-16">
        <h2 className="text-2xl font-semibold text-center ">SignUp Form</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <div className=" mt-28">
            <input
              name="fristName"
              required
              placeholder="Write First Name"
              type="text"
              className="font-normal text-md leading-5 text-gray-400  w-full focus:outline-none border-b border-gray-300"
            />
          </div>
          {errors.exampleRequired && <span>This field is required</span>}
          <div className=" mt-16">
            <input
              name="lastName"
              required
              placeholder="Write Last Name"
              type="text"
              className="font-normal text-md leading-5 text-gray-400  w-full focus:outline-none border-b border-gray-300"
            />
          </div>
          {errors.exampleRequired && <span>This field is required</span>}
          <div className="flex justify-center items-center mt-20">
            <button className=" gap-3 drop-shadow-lg flex w-36 justify-center rounded-2xl text-white font-medium text-md bg-gradient-to-r from-blue-500 to-blue-500   h-12 items-center">
              Next Step
              <FaArrowRight></FaArrowRight>
            </button>
          </div>
        </form>
        <div className=" flex gap-2 mt-28 justify-end items-center ">
          <h1>Already have an account? </h1>
          <Link>
            <span className="uppercase underline font-semibold leading-4 text-blue-500">login here!</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
