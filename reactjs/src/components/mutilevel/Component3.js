import React, { Component, useContext } from "react";
import AppContext from "../../context/AppContext";
import Component4 from "./Component4";

// class Component3 extends Component {
//   render() {
//     return (
//       <AppContext.Consumer>
//         {(data) => {
//           return <p>Good morning, {data.name}</p>;
//         }}
//       </AppContext.Consumer>
//     );
//   }
// }
// export default Component3;

export default function Component3() {
  const data = useContext(AppContext);
  console.log(data);
  return (
    <div>
      <p>Good morning, {data.name}</p>
    </div>
  );
}
