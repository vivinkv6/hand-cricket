import React from "react";
import { Data } from "../App";
import { useContext } from "react";

function AiScoreButton() {
  const { setAiScore, setHide, setPop, setShowBtn, showBtn } = useContext(Data);
  let { need } = useContext(Data);
  let { generateAiScore } = useContext(Data);
  const generatingScore = () => {
    setPop(false);
    generateAiScore = Math.floor(Math.random() * 80);
    setAiScore(generateAiScore);
    setHide(false);
    setShowBtn(false);
  };
  return (
    <>
      {showBtn ? (
        <>
          <button className="btn btn-primary" onClick={generatingScore}>
            AI Score
          </button>
          <br />
          <br />
        </>
      ) : (
        <></>
      )}
      {!showBtn ? <h6>You Need {need < 0 ? 0 : need} Runs more</h6> : <></>}
    </>
  );
}

export default AiScoreButton;
