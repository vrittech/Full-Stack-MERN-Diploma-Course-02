import { useEffect, useState } from "react";
import "./App.css";
import Component1 from "./Compoent1";
import Component3 from "./Component3";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [person, setPerson] = useState({
    name: "Arjun",
    age: 20,
    address: "KTM",
  });

  const handleChange = () => {
    setPerson((prevPerson) => ({
      ...prevPerson,
      age: 30,
    }));
  };

  const handleModal = () => {
    setShowModal(!showModal);
  };

  // useEffect(() => {
  //   console.log("1 Without empty array");
  // });

  // useEffect(() => {
  //   console.log("2 with empty array");
  // }, []);

  // useEffect(() => {
  //   console.log("3 array with  state person");
  // }, [person]);

  // useEffect(() => {
  //   console.log("4 array with  state showmodal");
  // }, [showModal]);

  // useEffect(() => {
  //   console.log("5 array with  state person showmodal");
  // }, [person, showModal]);

  return (
    <div className="App">
      {/* <p> {person.name}</p>
      <p> {person.age}</p>
      <p> {person.address}</p>
      <button onClick={handleChange}>Change person</button>
      <button onClick={handleModal}>Change Modal</button> */}
      {/* <Component1 /> */}
      <Component3 />
    </div>
  );
}

export default App;
