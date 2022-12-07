import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import Img from "../../images/FormImage.jpg";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/logo.jpg";
import { UserInfoContext } from "../../Context/UserContext/UserContext";

const LogIn = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { setUserEmail } = useContext(UserInfoContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    fetch(" https://test.nexisltd.com/login ", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          localStorage.setItem("access_token", data.access_token);
          navigate("/attendance");
        }
      })
      .catch((err) => console.log(err.message));
    setUserEmail(data.email);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center gap-36 mx-auto justify-center">
      <div>
        <img src={logo} alt="" />
        <img className="lg:w-[612]px lg:h-[437px] h-full w-full " src={Img} alt="" />
      </div>
      <div className="lg:w-[516px] lg:h-[630px] w-[450px] bg-white shadow-2xl p-16">
        <h2 className="text-2xl font-semibold text-center ">LogIn Form</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" mt-28">
            <input
              {...register("email", { required: true })}
              name="email"
              placeholder="Write Email Address"
              type="email"
              className="font-normal pl-4 text-md leading-5 text-gray-400  w-full focus:outline-none border-b border-gray-300"
            />
          </div>
          {errors.email && (
            <small className="text-red-500 pl-4">{errors.email.message}</small>
          )}
          <div className=" mt-16">
            <input
              {...register("password", { required: true })}
              name="password"
              placeholder="Write Password"
              type="password"
              className="font-normal pl-4 text-md leading-5 text-gray-400  w-full focus:outline-none border-b border-gray-300"
            />
          </div>
          <small className="text-gray-400 pl-4">
            Your password must be 8 character
          </small>
          {errors.password && (
            <small className="text-red-500 pl-4">
              {errors.password.message}
            </small>
          )}
          <div className="flex justify-center items-center mt-20">
            <button
              type="submit"
              className=" gap-3 drop-shadow-lg hover:bg-white hover:text-blue-500 hover:bg-gradient-to-r hover:from-white hover:to-white hover:border hover:border-blue-500 flex w-28 justify-center rounded-2xl text-white font-medium text-md bg-gradient-to-r from-blue-500 to-blue-500   h-12 items-center"
            >
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
