import Board from "./components/Board";
import "./App.css";
import { useState, useEffect } from "react";
import Popup from "./components/Popup";

const Data = React.createContext();

function App() {
  const [user, setUser] = useState(""); //user choice
  const [ai, setAi] = useState(""); //ai score
  const [userScore, setUserScore] = useState(0); //store user score
  const [aiScore, setAiScore] = useState(0); //store ai score
  const [userIndex, setUserIndex] = useState("");
  const [aiIndex, setAiIndex] = useState("");
  const [pop, setPop] = useState(false);
  let need = aiScore - userScore + 1;
  const [showBtn, setShowBtn] = useState(true);
  const list1 = [
    "https://img.icons8.com/ios/256/one-finger.png",
    "https://img.icons8.com/ios/256/two-fingers.png",
    "https://img.icons8.com/ios/256/three-fingers.png",
    "https://img.icons8.com/ios/256/four-fingers.png",
    "https://img.icons8.com/ios/256/thumb-up.png",
  ];
  const list2 = ["one", "two", "three", "four", "six"];
  const generateAiScore = 0;
  const randomSelect = Math.floor(Math.random(list1) * 5);
  const [hide, setHide] = useState(true);

  const allState = {
    user: user,
    setUser: setUser,
    ai: ai,
    setAi: setAi,
    userScore: userScore,
    setUserScore: setUserScore,
    list1: list1,
    list2: list2,
    generateAiScore: generateAiScore,
    randomSelect: randomSelect,
    userIndex: userIndex,
    setUserIndex: setUserIndex,
    aiIndex: aiIndex,
    setAiIndex: setAiIndex,
    aiScore: aiScore,
    setAiScore: setAiScore,
    need: need,
    hide: hide,
    setHide: setHide,
    pop: pop,
    setPop: setPop,
    showBtn: showBtn,
    setShowBtn: setShowBtn,
  };

  return (
    <div className="App">
      <Data.Provider value={allState}>
        <h1 className="fw-bold">Hand Cricket</h1>
        <Board />
        {pop || aiScore < userScore ? <Popup /> : <></>}
      </Data.Provider>
    </div>
  );
}

export default App;

export { Data };
