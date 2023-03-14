import React, { useState } from "react";
import { Button } from "react-bootstrap";
import ModalBox from "./components/ModelBox";

const Component1 = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };
  console.log("state", showModal);
  return (
    <div>
      component1
      <Button variant="primary" onClick={handleClick}>
        Open Modal
      </Button>
      <br />
      <ModalBox
        title="Modal heading 1"
        showModal={showModal}
        handleClose={handleClose}
      />
    </div>
  );
};

export default Component1;
