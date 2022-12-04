import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Img from "../../images/FormImage.jpg";
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

  console.log(watch("example")); 


  const completeStep = () => {
    setStep(curr=> curr + 1)
  }

  
  const completeStepBack = () => {
    setStep((curr) => curr - 1);
  };





  const renderButton = () => {
    if (step > 2) {
      return undefined;
    }
    else if (step === 1) {
      return (
        <div className="flex gap-24 items-center mt-20">
          <Link>
            <span
              onClick={completeStepBack}
              className="font-bold text-gray-500 "
            >
              Back
            </span>
          </Link>
          <div className="flex justify-center items-center">
            <button
              onClick={completeStep}
              className=" gap-3 drop-shadow-lg hover:bg-white hover:text-blue-500 hover:bg-gradient-to-r hover:from-white hover:to-white hover:border hover:border-blue-500 flex w-36 justify-center rounded-2xl text-white font-medium text-md bg-gradient-to-r from-blue-500 to-blue-500   h-12 items-center"
            >
              Next Step
              <FaArrowRight></FaArrowRight>
            </button>
          </div>
        </div>
      );
    } else if (step === 2) {
      return (
        <div className="flex gap-24 items-center mt-20">
          <Link>
            <span
              onClick={completeStepBack}
              className="font-bold text-gray-500 "
            >
              Back
            </span>
          </Link>
          <button className=" gap-3 drop-shadow-lg hover:bg-white hover:text-blue-500 hover:bg-gradient-to-r hover:from-white hover:to-white hover:border hover:border-blue-500 flex w-28 justify-center rounded-2xl text-white font-medium text-md bg-gradient-to-r from-blue-500 to-blue-500   h-12 items-center">
            Sign Up
          </button>
        </div>
      );
    } else {
      return (
        <div className="flex justify-center items-center mt-20">
          <button
            onClick={completeStep}
            className=" gap-3 drop-shadow-lg hover:bg-white hover:text-blue-500 hover:bg-gradient-to-r hover:from-white hover:to-white hover:border hover:border-blue-500 flex w-36 justify-center rounded-2xl text-white font-medium text-md bg-gradient-to-r from-blue-500 to-blue-500   h-12 items-center"
          >
            Next Step
            <FaArrowRight></FaArrowRight>
          </button>
        </div>
      );
    }
  }


  return (
    <div className="flex items-center gap-36 mx-auto justify-center">
      <div>
        <img src={logo} alt="" />
        <img className="w-[612]px h-[437px]" src={Img} alt="" />
      </div>
      <div className="w-[516px] h-[630px] bg-white shadow-2xl p-16">
        <h2 className="text-2xl font-semibold text-center ">SignUp Form</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {step === 0 && (
            <>
              <div className=" mt-28">
                <input
                  name="fristName"
                  required
                  placeholder="Write First Name"
                  type="text"
                  className="font-normal pl-4 text-md leading-5 text-gray-400  w-full focus:outline-none border-b border-gray-300"
                />
              </div>
              {errors.exampleRequired && <span>This field is required</span>}
              <div className=" mt-16">
                <input
                  name="lastName"
                  required
                  placeholder="Write Last Name"
                  type="text"
                  className="font-normal pl-4 text-md leading-5 text-gray-400  w-full focus:outline-none border-b border-gray-300"
                />
              </div>
              {errors.exampleRequired && <span>This field is required</span>}
              {renderButton()}
              <div className=" flex gap-2 mt-28 justify-end items-center ">
                <h1>Already have an account? </h1>
                <Link to="/login">
                  <span className="uppercase underline font-semibold leading-4 text-blue-500">
                    login here!
                  </span>
                </Link>
              </div>
            </>
          )}
          {step === 1 && (
            <>
              <div className=" mt-28 flex gap-1 ">
                <input
                  name="number"
                  readOnly
                  defaultValue={"+880"}
                  placeholder="+880"
                  type="number"
                  className="font-normal pl-4 w-20 text-md leading-5 text-gray-400 focus:outline-none border-b border-gray-300"
                />
                <input
                  name="number"
                  required
                  placeholder="1xxxxxxxxx"
                  type="number"
                  className="font-normal  text-md leading-5 text-gray-400  w-full focus:outline-none border-b border-gray-300"
                />
              </div>
              {errors.exampleRequired && <span>This field is required</span>}
              <div className=" mt-16">
                <input
                  name="lastName"
                  required
                  placeholder="Write Email Address"
                  type="email"
                  className="font-normal pl-4 text-md leading-5 text-gray-400  w-full focus:outline-none border-b border-gray-300"
                />
              </div>
              {errors.exampleRequired && <span>This field is required</span>}
              {renderButton()}
            </>
          )}
          {step === 2 && (
            <>
              <div className=" mt-28 ">
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
              {renderButton()}
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default SignUp;
