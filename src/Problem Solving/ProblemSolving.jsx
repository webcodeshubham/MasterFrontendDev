import { useState } from "react";
import SCSS from "./ProblemSolving.module.scss";

const ProblemSolving = () => {
  const [showProblems, setShowProblems] = useState(false);
  // const [problems, setProblems] = useState([1, 2, 3, 4, 5]);
  let problems = [1, 2, 3, 4, 5]

  // function handleCallProblems(problem) {}

  function handleShowProblems() {
    setShowProblems(!showProblems);
  }

  // let inputValue = "adgjlkjfsdlaskfghj";
  // let inputArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  // Problem Functions

  // function handleReverseString(originalString) {
  //   // let reversedString = originalString?.split("").reverse().join("");
  //   let reversedString = ""
  //   for(let i = originalString.length - 1; i >= 0; i--) {
  //     reversedString += originalString[i]
  //   }
  //   return reversedString;
  // }

  // function handleIsPlaindrome(originalString) {
  //   // let reversedString = originalString?.split("").reverse().join("");
  //   let reversedString = ""
  //   for(let i = originalString.length - 1; i >= 0; i--) {
  //     reversedString += originalString[i]
  //   }
  //   if(originalString === reversedString){
  //     return "Input is Palindrome"
  //   } else {
  //     return "Input is not a Palindrome"
  //   }
  // }

  // function firstNonRepeatingCharacter(originalString) {
  //   let characterCount = {};

  //   for (let i = 0; i <= originalString.length - 1; i++) {
  //     let character = originalString[i];
  //     if (!characterCount[character]) {
  //       characterCount[character] = 1;
  //     } else {
  //       characterCount[character]++;
  //     }
  //   }

  //   for (let i = 0; i <= originalString.length - 1; i++) {
  //     if (characterCount[originalString[i]] === 1) {
  //       return `The First Non-Repeating Character is ${originalString[i]}.`;
  //     }
  //   }

  //   return "All characters are repeating...";
  // }

  // function arrayOfEvenNumbers(originalArray){
  //   let evenArray = originalArray.filter((element) => element % 2 == 0)
  //   return evenArray
  // }

  return (
    <>
      <h1 className={SCSS.title}>Problem Solving</h1>
      <button
        className={SCSS.problemsListBtn}
        onClick={() => handleShowProblems()}
      >
        {showProblems ? "Hide Problems" : "Show Problems"}
      </button>
      {showProblems ? (
        <>
          <div className={SCSS.problemContainer}>
            {problems?.map((problem, index) => (
              <button key={index}>
                {problem}
              </button>
            ))}
          </div>
        </>
      ) : (
        <></>
      )}
      {/* <section className={SCSS.problemSection}>
        <h2 className={SCSS.problemStatement}>Problem 1: Reverse a String</h2>
        <div className={SCSS.inputOutput}>
          <div className={SCSS.inputContainer}>
            <div className={SCSS.inputProperty}>Input:</div>
            <div className={SCSS.inputValue}>{inputValue}</div>
          </div>
          <div className={SCSS.outputContainer}>
            <div className={SCSS.outputProperty}>Output:</div>
            <div className={SCSS.outputValue}>
              {handleReverseString(inputValue)}
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className={SCSS.problemSection}>
        <h2 className={SCSS.problemStatement}>Problem 2: Check if a String is a Palindrome</h2>
        <div className={SCSS.inputOutput}>
          <div className={SCSS.inputContainer}>
            <div className={SCSS.inputProperty}>Input:</div>
            <div className={SCSS.inputValue}>{inputValue}</div>
          </div>
          <div className={SCSS.outputContainer}>
            <div className={SCSS.outputProperty}>Output:</div>
            <div className={SCSS.outputValue}>
              {handleIsPlaindrome(inputValue)}
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className={SCSS.problemSection}>
        <h2 className={SCSS.problemStatement}>
          Problem 3: Find the First Non-Repeating Character
        </h2>
        <div className={SCSS.inputOutput}>
          <div className={SCSS.inputContainer}>
            <div className={SCSS.inputProperty}>Input:</div>
            <div className={SCSS.inputValue}>{inputValue}</div>
          </div>
          <div className={SCSS.outputContainer}>
            <div className={SCSS.outputProperty}>Output:</div>
            <div className={SCSS.outputValue}>
              {firstNonRepeatingCharacter(inputValue)}
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className={SCSS.problemSection}>
        <h2 className={SCSS.problemStatement}>
          Problem 4: Returns an Array of Even Numbers
        </h2>
        <div className={SCSS.inputOutput}>
          <div className={SCSS.inputContainer}>
            <div className={SCSS.inputProperty}>Input:</div>
            <div className={SCSS.inputValue}>{inputArray}</div>
          </div>
          <div className={SCSS.outputContainer}>
            <div className={SCSS.outputProperty}>Output:</div>
            <div className={SCSS.outputValue}>
              {arrayOfEvenNumbers(inputArray)}
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default ProblemSolving;
