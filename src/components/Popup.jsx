import React from "react";
import { Data } from "../App";
import { useContext } from "react";

function Popup() {
  const {
    userScore,
    aiScore,
    setUserScore,
    setAiScore,
    setHide,
    setPop,
    setAi,
    setUser,
    setShowBtn,
  } = useContext(Data);

  const clearScore = () => {
    setAiScore(0);
    setUserScore(0);
    setHide(true);
    setPop(false);
    setAi("");
    setUser("");
    setShowBtn(true);
  };
  let runsNeed = aiScore - userScore;
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-12 border border-3 border-dark py-5">
            {userScore > aiScore && (
              <>
                <h2>YOU WON</h2>
                <button className="btn btn-primary" onClick={clearScore}>
                  Clear Score
                </button>
              </>
            )}
            {userScore == aiScore && (
              <>
                <h2>DRAW</h2>
                <button className="btn btn-primary" onClick={clearScore}>
                  Clear Score
                </button>
              </>
            )}
            {userScore < aiScore && (
              <>
                <h2>YOU LOSE</h2>
                <h3>AI BEAT YOU BY {runsNeed} RUNS</h3>
                <button className="btn btn-primary" onClick={clearScore}>
                  Clear Score
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Popup;
