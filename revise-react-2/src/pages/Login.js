import React, { useState } from "react";
import useLocalStorage from "../useLocalStorage";
import { Navigate, useNavigate } from "react-router-dom";
import Hoc from "../Hoc";

const DEFAULT_EMAIL = "admin@gmail.com";
const DEFAULT_PASSWORD = "admin";

const Login = (props) => {
  const { setLocalData, getLocalData } = useLocalStorage();
  const navigate = useNavigate();

  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    setState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  const handleSubmit = () => {
    if (state.email === DEFAULT_EMAIL && state.password === DEFAULT_PASSWORD) {
      setLocalData("isLoggedIn", true);
      navigate("/dashboard");
    }
  };
  if (getLocalData("isLoggedIn")) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div>
      <input
        placeholder="Enter your email address"
        name="email"
        onChange={handleChange}
      />
      <br />
      <br />
      <input
        type="password"
        placeholder="Enter your password"
        name="password"
        onChange={handleChange}
      />
      <br />
      <br />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
};

export default Login;
