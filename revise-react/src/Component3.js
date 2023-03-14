import React from "react";
import ModalBox from "./components/ModelBox";
import Hoc from "./Hoc";

const Component3 = (props) => {
  console.log(props);
  return <div>component 3{/* <ModalBox title="Modal heading 3" /> */}</div>;
};

export default Hoc(Component3);
