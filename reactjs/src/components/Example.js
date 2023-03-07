import { useState } from "react";
import Header from "./Header";
import NavigationMenu from "./NavigationMenu";

function Example() {
  const [name, setName] = useState("Arjun");

  const handleChangeName = () => {
    setName("Ram");
  };

  const information = {
    name: "Arjun",
    address: "KTM",
    age: 20,
  };

  return (
    <div className="App">
      <p>{name}</p>
      <Header
        //  information={information}
        // {...information}
        name={name}
      />
      <NavigationMenu />
      <button onClick={handleChangeName}>Change Name</button>
    </div>
  );
}

export default Example;
