import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function Signup() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Signup Data:", data);

    // Save signup data in localStorage
    localStorage.setItem("user", JSON.stringify(data));

    alert("Signup successful!");

    // Go to login page
    navigate("/login");
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="border-[2px] shadow-md p-5 rounded-md relative">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Close button */}
          <Link
            to="/login"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </Link>

          {/* Heading */}
          <h3 className="font-bold text-lg">SignUp</h3>

          {/* Name */}
          <div className="mt-4 space-y-2">
            <span>Name</span>
            <br />

            <input
              type="text"
              placeholder="Enter your fullname"
              className="w-80 px-3 py-1 border rounded-md outline-none"
              {...register("name", {
                required: "Name is required",
              })}
            />

            {errors.name && (
              <p className="text-red-500 text-sm">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="mt-4 space-y-2">
            <span>Email</span>
            <br />

            <input
              type="email"
              placeholder="Enter your mail"
              className="w-80 px-3 py-1 border rounded-md outline-none"
              {...register("email", {
                required: "Email is required",
                validate: (value) =>
                  value.includes("@") || "Email must contain @",
              })}
            />

            {errors.email && (
              <p className="text-red-500 text-sm">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="mt-4 space-y-2">
            <span>Password</span>
            <br />

            <input
              type="password"
              placeholder="Enter your Password"
              className="w-80 px-3 py-1 border rounded-md outline-none"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />

            {errors.password && (
              <p className="text-red-500 text-sm">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Button */}
          <div className="flex justify-around mt-4 items-center">
            <button
              type="submit"
              className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
            >
              SignUp
            </button>

            <p>
              Have account?{" "}
              <Link
                to="/login"
                className="underline text-blue-500 cursor-pointer"
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;