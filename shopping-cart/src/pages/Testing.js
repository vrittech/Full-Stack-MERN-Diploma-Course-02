import React from "react";

export default function Testing() {
  throw new Error("I crashed!");
  return <div>Testing</div>;
}
