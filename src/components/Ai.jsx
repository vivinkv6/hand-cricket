import React from "react";
import { Data } from "../App";
import { useContext } from "react";

function Ai() {
  const { ai, aiScore } = useContext(Data);
  return (
    <div className="border border-3 border-dark">
      <h3 className="fw-bold">AI</h3>
      <div className="row py-4">
        <div className="col-6">
          {ai.length > 0 ? <img src={ai} height={50} width={50} /> : <></>}
        </div>
        <div className="col-6">
          <b style={{ fontSize: "40px" }}>{aiScore}</b>
        </div>
      </div>
    </div>
  );
}

export default Ai;
