import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Register = () => {
  const [newUser, setNewUser] = useState({});

  // recive register handelar
  const { signUpNewUser, user, error } = useAuth();

  // register by react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => setNewUser(data);

  return (
    <div className="mt-5 pt-5 container">
      <div className="m-4 p-3 border">
        <h2>Please Register</h2>
        <div>
          <form className="" onSubmit={handleSubmit(onSubmit)}>
            <input
              className="form-control mt-4 mx-auto w-50"
              {...register("name", { required: true })}
              placeholder="Your name"
            />
            {errors.name && <span>Name is required</span>}

            <input
              className="form-control mx-auto mt-3 w-50"
              {...register("email", { required: true })}
              placeholder="Your email"
            />
            {errors.email && <span>Email is required</span>}

            <input
              className="form-control mx-auto w-50 mt-3"
              {...register("password", { required: true })}
              placeholder="Password"
            />
            {errors.password && <span>Password id required</span>}

            {!user && <span>{error}</span>}

            <button
              onClick={() => signUpNewUser(newUser)}
              className="btn btn-primary m-3 d-block mx-auto"
              type="submit"
            >
              Register
            </button>
          </form>
        </div>
        <p>
          Already registired?<Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
