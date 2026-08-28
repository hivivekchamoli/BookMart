import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>

            {/* Close button */}
            <button
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() =>
                document.getElementById("my_modal_3").close()
              }
            >
              ✕
            </button>

            {/* Heading */}
            <h3 className="font-bold text-lg">
              Login
            </h3>

            {/* Email */}
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />

              <input
                type="text"
                placeholder="Enter your mail"
                className="w-80 px-3 py-1 border rounded-md outline-none bg-base-100 text-base-content placeholder:text-base-content/50"
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
                className="w-80 px-3 py-1 border rounded-md outline-none bg-base-100 text-base-content placeholder:text-base-content/50"
                {...register("password", {
                  required: "Password is required",
                })}
              />

              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Login button + Signup */}
            <div className="flex justify-around mt-4 items-center">
              <button
                type="submit"
                className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
              >
                Login
              </button>

              <p>
                Not registered?{" "}
                <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer"
                >
                  SignUp
                </Link>
              </p>
            </div>

          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;