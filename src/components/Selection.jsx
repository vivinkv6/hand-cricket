import React from "react";
import { useContext, useEffect } from "react";
import { Data } from "../App";

function Selection() {
  const {
    setUser,
    setAi,
    list1,
    randomSelect,
    setUserIndex,
    setAiIndex,
    list2,
    userIndex,
    aiIndex,
    setUserScore,
    hide,
    setHide,
    setPop,
    setShowBtn,
  } = useContext(Data);
  let { need } = useContext(Data);
  console.log(`UserIndex: ${userIndex}`);
  console.log(`AiIndex: ${aiIndex}`);

  useEffect(() => {
    if (userIndex == "one" && aiIndex == "one") {
      setUserScore((userScore) => userScore);
      setHide(true);
      setPop(true);
      setShowBtn(true);
    } else if (userIndex == "one" && aiIndex == "two") {
      setUserScore((userScore) => userScore + 1);
      need -= 1;
    } else if (userIndex == "one" && aiIndex == "three") {
      setUserScore((userScore) => userScore + 1);
      need -= 1;
    } else if (userIndex == "one" && aiIndex == "four") {
      setUserScore((userScore) => userScore + 1);
      need -= 1;
    } else if (userIndex == "one" && aiIndex == "six") {
      setUserScore((userScore) => userScore + 1);
      need -= 1;
    } else if (userIndex == "two" && aiIndex == "one") {
      setUserScore((userScore) => userScore + 2);
      need -= 2;
    } else if (userIndex == "two" && aiIndex == "two") {
      setUserScore((userScore) => userScore);
      setHide(true);
      setPop(true);
      setShowBtn(true);
    } else if (userIndex == "two" && aiIndex == "three") {
      setUserScore((userScore) => userScore + 2);
      need -= 2;
    } else if (userIndex == "two" && aiIndex == "four") {
      setUserScore((userScore) => userScore + 2);
      need -= 2;
    } else if (userIndex == "two" && aiIndex == "six") {
      setUserScore((userScore) => userScore + 2);
      need -= 2;
    } else if (userIndex == "three" && aiIndex == "one") {
      setUserScore((userScore) => userScore + 3);
      need -= 3;
    } else if (userIndex == "three" && aiIndex == "two") {
      setUserScore((userScore) => userScore + 3);
      need -= 3;
    } else if (userIndex == "three" && aiIndex == "three") {
      setUserScore((userScore) => userScore);
      setHide(true);
      setPop(true);
      setShowBtn(true);
    } else if (userIndex == "three" && aiIndex == "four") {
      setUserScore((userScore) => userScore + 3);
      need -= 3;
    } else if (userIndex == "three" && aiIndex == "six") {
      setUserScore((userScore) => userScore + 3);
      need -= 3;
    } else if (userIndex == "four" && aiIndex == "one") {
      setUserScore((userScore) => userScore + 4);
      need -= 4;
    } else if (userIndex == "four" && aiIndex == "two") {
      setUserScore((userScore) => userScore + 4);
      need -= 4;
    } else if (userIndex == "four" && aiIndex == "three") {
      setUserScore((userScore) => userScore + 4);
      need -= 4;
    } else if (userIndex == "four" && aiIndex == "four") {
      setUserScore((userScore) => userScore);
      setHide(true);
      setPop(true);
      setShowBtn(true);
    } else if (userIndex == "four" && aiIndex == "six") {
      setUserScore((userScore) => userScore + 4);
      need -= 4;
    } else if (userIndex == "six" && aiIndex == "one") {
      setUserScore((userScore) => userScore + 6);
      need -= 6;
    } else if (userIndex == "six" && aiIndex == "two") {
      setUserScore((userScore) => userScore + 6);
      need -= 6;
    } else if (userIndex == "six" && aiIndex == "three") {
      setUserScore((userScore) => userScore + 6);
      need -= 6;
    } else if (userIndex == "six" && aiIndex == "four") {
      setUserScore((userScore) => userScore + 6);
      need -= 6;
    } else if (userIndex == "six" && aiIndex == "six") {
      setUserScore((userScore) => userScore);
      setHide(true);
      setPop(true);
      setShowBtn(true);
    }
  }, [userIndex, aiIndex]);

  return (
    <>
      {!hide ? (
        <div>
          <button
            className="btn btn-primary me-2 mt-2"
            onClick={() => {
              setUser("https://img.icons8.com/ios/256/one-finger.png");
              setAi(list1[randomSelect]);
              setUserIndex(list2[0]);
              setAiIndex(list2[randomSelect]);
            }}
          >
            <img
              src="https://img.icons8.com/ios/256/one-finger.png"
              height={30}
              width={30}
              alt="One"
            />
          </button>
          <button
            className="btn btn-primary me-2 mt-2"
            onClick={() => {
              setUser("https://img.icons8.com/ios/256/two-fingers.png");
              setAi(list1[randomSelect]);
              setUserIndex(list2[1]);
              setAiIndex(list2[randomSelect]);
            }}
          >
            <img
              src="https://img.icons8.com/ios/256/two-fingers.png"
              height={30}
              width={30}
              alt="Two"
            />
          </button>

          <button
            className="btn btn-primary me-2 mt-2"
            onClick={() => {
              setUser("https://img.icons8.com/ios/256/three-fingers.png");
              setAi(list1[randomSelect]);
              setUserIndex(list2[2]);
              setAiIndex(list2[randomSelect]);
            }}
          >
            <img
              src="https://img.icons8.com/ios/256/three-fingers.png"
              height={30}
              width={30}
              alt="Three"
            />
          </button>
          <button
            className="btn btn-primary me-2 mt-2"
            onClick={() => {
              setUser("https://img.icons8.com/ios/256/four-fingers.png");
              setAi(list1[randomSelect]);
              setUserIndex(list2[3]);
              setAiIndex(list2[randomSelect]);
            }}
          >
            <img
              src="https://img.icons8.com/ios/256/four-fingers.png"
              height={30}
              width={30}
              alt="Four"
            />
          </button>
          <button
            className="btn btn-primary me-2 mt-2"
            onClick={() => {
              setUser("https://img.icons8.com/ios/256/thumb-up.png");
              setAi(list1[randomSelect]);
              setUserIndex(list2[4]);
              setAiIndex(list2[randomSelect]);
            }}
          >
            <img
              src="https://img.icons8.com/ios/256/thumb-up.png"
              height={30}
              width={30}
              alt="Six"
            />
          </button>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default Selection;
