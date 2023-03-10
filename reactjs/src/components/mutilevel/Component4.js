import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../../redux/appSlice";

export default function Component4() {
  const { name, counter } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  return (
    <div>
      Component4 {counter} {name}
      <br />
      <button onClick={() => dispatch(changeName())}>Change name</button>
    </div>
  );
}
