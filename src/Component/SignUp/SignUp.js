import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Img from "../../images/FormImage.jpg";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/logo.jpg";
import { FaArrowRight } from "react-icons/fa";

const SignUp = () => {
  const [step, setStep] = useState(0);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "all" });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    const userInfo = {
      first_name: data.firstName,
      last_Name: data.lastName,
      phone_number: data.number,
      email: data.email,
      password: data.password,
    };

    fetch(" https://test.nexisltd.com/signup", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate("/login");
      })
      .catch((err) => console.log(err.message));
  };

  const completeStep = () => {
    setStep((curr) => curr + 1);
  };

  const completeStepBack = () => {
    setStep((curr) => curr - 1);
  };

  const renderButton = () => {
    if (step > 2) {
      return undefined;
    } else if (step === 1 || step === 0) {
      return (
        <button
          onClick={completeStep}
          className=" gap-3 drop-shadow-lg hover:bg-white hover:text-blue-500 hover:bg-gradient-to-r hover:from-white hover:to-white hover:border hover:border-blue-500 flex w-36 justify-center rounded-2xl text-white font-medium text-md bg-gradient-to-r from-blue-500 to-blue-500   h-12 items-center"
        >
          Next Step
          <FaArrowRight></FaArrowRight>
        </button>
      );
    }
  };

  return (
    <div className="flex  flex-col lg:flex-row items-center gap-36 mx-auto justify-center">
      <div>
        <img src={logo} alt="" />
        <img className="lg:w-[612]px lg:h-[437px] h-full w-full" src={Img} alt="" />
      </div>
      <div className="lg:w-[516px] lg:h-[630px] w-[450px] bg-white shadow-2xl p-16">
        <h2 className="text-2xl font-semibold text-center ">SignUp Form</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {step === 0 && (
            <>
              <div className=" mt-28">
                <input
                  {...register("firstName", { required: true })}
                  name="firstName"
                  placeholder="Write First Name"
                  type="text"
                  className="font-normal pl-4 text-md leading-5 text-gray-500  w-full focus:outline-none border-b border-gray-300"
                />
              </div>
              <div className=" mt-16">
                <input
                  {...register("lastName", { required: true })}
                  name="lastName"
                  placeholder="Write Last Name"
                  type="text"
                  className="font-normal pl-4 text-md leading-5 text-gray-500  w-full focus:outline-none border-b border-gray-300"
                />
              </div>
            </>
          )}
          {step === 0 && (
            <>
              <div className="flex justify-center items-center  mt-20">
                {renderButton()}
              </div>
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
                  {...register("number", { required: true })}
                  name="number"
                  placeholder="+880  1xxxxxxxxx"
                  type="number"
                  className="font-normal pl-4 text-md leading-5 text-gray-500  w-full focus:outline-none border-b border-gray-300"
                />
              </div>

              <div className=" mt-16">
                <input
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Please provide a valid email address",
                    },
                  })}
                  name="email"
                  placeholder="Write Email Address"
                  type="email"
                  className="font-normal pl-4 text-md leading-5 text-gray-500  w-full focus:outline-none border-b border-gray-300"
                />
              </div>
              {errors.email && (
                <small className="text-red-500 pl-4">
                  {errors.email.message}
                </small>
              )}
            </>
          )}
          {step === 1 && (
            <>
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
                  {renderButton()}
                </div>
              </div>
            </>
          )}
          {step === 2 && (
            <>
              <div className=" mt-28 ">
                <input
                  {...register("password", {
                    required: {
                      value: true,
                      message: "password must be 8 characters",
                    },
                  })}
                  name="password"
                  placeholder="Write Password"
                  type="password"
                  className="font-normal pl-4 text-md leading-5 text-gray-500  w-full focus:outline-none border-b border-gray-300"
                />
              </div>

              {errors.password && (
                <small className="text-red-500">
                  {errors.password.message}
                </small>
              )}
            </>
          )}
          {step === 2 && (
            <>
              <div className="flex gap-24 items-center mt-20">
                <Link>
                  <span
                    onClick={completeStepBack}
                    className="font-bold text-gray-500 "
                  >
                    Back
                  </span>
                </Link>

                <button
                  type="submit"
                  className=" gap-3 drop-shadow-lg hover:bg-white hover:text-blue-500 hover:bg-gradient-to-r hover:from-white hover:to-white hover:border hover:border-blue-500 flex w-28 justify-center rounded-2xl text-white font-medium text-md bg-gradient-to-r from-blue-500 to-blue-500   h-12 items-center"
                >
                  Sign Up
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default SignUp;
