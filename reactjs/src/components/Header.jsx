import React, { useState } from "react";
import PropTypes from "prop-types";

const Header = (props) => {
  console.log("PROPS", props);
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>Header </h1>
      <p>{counter}</p>
      <button>{props.name}</button>
    </div>
  );
};

export default Header;

Header.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

Header.defaultProps = {
  name: "Shyam",
  age: 20,
};
