import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

//login by react hook form
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="mt-5 pt-5 container">
      <div className="py-3 m-5 text-dark card mx-auto">
        <h2 className="my-3 pb-3">Please Login</h2>
        <div>
          <form className="" onSubmit={handleSubmit(onSubmit)}>
            <input
              className="form-control mx-auto w-75"
              {...register("email", { required: true })}
              placeholder="Your email"
            />
            {errors.email && <span>Email is required</span>}

            <input
              className="form-control mx-auto w-75 mt-3"
              {...register("password", { required: true })}
              placeholder="Password"
            />
            {errors.password && <span>Password id required</span> }

            <input
              className="btn btn-primary m-3 d-block mx-auto"
              type="submit"
            />
          </form>
        </div>
        <p>New User?<Link to="/register">Register</Link></p>
        <hr />
        <button className="btn mx-auto w-25 btn-danger">Login with Google</button>
      </div>
      
    </div>
  );
};

export default Login;
