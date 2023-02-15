import React from "react";
import { useContext } from "react";
import { Data } from "../App";

function Target() {
  const { aiScore, hide } = useContext(Data);

  return <>{!hide ? <h3>Target: {aiScore + 1}</h3> : <></>}</>;
}

export default Target;
