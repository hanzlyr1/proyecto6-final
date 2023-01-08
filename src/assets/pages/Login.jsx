import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import "./style/login.css";

const Login = () => {
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(false);
  const { handleSubmit, register, reset } = useForm();
  const [name, setname] = useState();

  const submit = (data) => {
    const URL = "https://e-commerce-api.academlo.tech/api/v1/users/login";
    axios
      .post(URL, data)
      .then((res) => {
        setname(res.data.data);
        localStorage.setItem("token", res.data.data.token);
        //si ya me logueo cambia a true
        setIsLogged(true);
        navigate("/");
      })
      .catch((err) => console.log(err));
    reset({
      email: "",
      password: "",
    });
  };
  console.log(name);
  useEffect(() => {
    const condition = localStorage.getItem("token") ? true : false;
    setIsLogged(condition);
  }, []);
  console.log(isLogged);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLogged(false);
  };

  if (isLogged) {
    return (
      <div className="title">
        <h1 className="logaut"> {name?.firstName} ❤ </h1>
        <button onClick={handleLogout}>User logout</button>
      </div>
    );
  }

  return (
    <div className="login-container">
      <div className="login__div-container">
        <h2 className="sign-in">Log In</h2>
        <div className="login__div-data">
          <h3 className="login__title-data">Test Data</h3>
          <div className="login__title-datas">
            <p className="login__gmail-data">
              <i class="fa-regular fa-envelope iconss"></i>jorgediaz@gmail.com
            </p>
            <p className="login__password-data">
              <i class="fa-solid fa-lock iconss"></i>12345678
            </p>
          </div>
        </div>
        <form className="login__form" onSubmit={handleSubmit(submit)}>
          <div className="login__div-email">
            <label className="login__label-email">Email</label>
            <input
              required
              placeholder="ej: jose@mail.com"
              className="login__email"
              type="text"
              id="email"
              {...register("email")}
            />
          </div>
          <div className="login__div-password">
            <label className="login__label-password">Password</label>
            <input
              required
              className="login__password"
              type="password"
              id="password"
              {...register("password")}
            />
          </div>
          <div className="div__login-btn">
            <button className="login__btn">Login</button>
          </div>
        </form>
        <p className="login__parrafo">Don't have an account?</p>
        <div className="div__login-btn-create">
          <button className="login__btn-create">
            <Link className="link" to="/createUser">
              To Register
            </Link>{" "}
          </button>
        </div>
      </div>
    </div>
    // <div>
    //   <form onSubmit={handleSubmit(submit)}>
    //     <div>
    //       <label htmlFor="email">Email</label>
    //       <input type="text" id="email" {...register("email")} />
    //     </div>
    //     <div>
    //       <label htmlFor="password">Password</label>
    //       <input type="password" id="password" {...register("password")} />
    //     </div>
    //     <button>Login</button>
    //   </form>
    // </div>
  );
};

export default Login;
