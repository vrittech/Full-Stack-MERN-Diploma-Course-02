import React, { useState } from "react";

export default function Login() {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    console.log(event, event.target, event.target.value);
    // console.log(event.target.name, event.target.value);
    setState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  const handleSubmit = () => {};
  // console.log(state);
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
}
