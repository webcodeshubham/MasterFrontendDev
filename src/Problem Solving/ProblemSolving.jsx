import { useState } from "react";
import problemsData from "./problems";
import SCSS from "./ProblemSolving.module.scss";

const ProblemSolving = () => {
  const [showProblems, setShowProblems] = useState(false);
  const [showSpecificProblem, setShowSpecificProblem] = useState();

  function handleShowProblems() {
    setShowProblems(!showProblems);
  }

  function utilityProblemCall(problemData) {
    if (problemData.id == 1) return handleReverseString(problemData.inputValue);
    if (problemData.id == 2) return handleIsPlaindrome(problemData.inputValue);
    if (problemData.id == 3) return firstNonRepeatingCharacter(problemData.inputValue);
    if (problemData.id == 4) return arrayOfEvenNumbers(problemData.inputValue);
    if (problemData.id == 5) return maxOccurCharacter(problemData.inputValue);
  }

  function handleDisplayProblem(problemId) {
    const specificProblem = problemsData.find(
      (problem) => problem.id === problemId);
    setShowSpecificProblem(specificProblem);
  }

  function handleReverseString(originalString) {
    // let reversedString = originalString?.split("").reverse().join("");
    let reversedString = "";
    for (let i = originalString.length - 1; i >= 0; i--) {
      reversedString += originalString[i];
    }
    return reversedString;
  }

  function handleIsPlaindrome(originalString) {
    // let reversedString = originalString?.split("").reverse().join("");
    let reversedString = "";
    for (let i = originalString.length - 1; i >= 0; i--) {
      reversedString += originalString[i];
    }
    if (originalString === reversedString) {
      return "Input is Palindrome";
    } else {
      return "Input is not a Palindrome";
    }
  }

  function firstNonRepeatingCharacter(originalString) {
    let characterCount = {};

    for (let i = 0; i <= originalString.length - 1; i++) {
      let character = originalString[i];
      if (!characterCount[character]) {
        characterCount[character] = 1;
      } else {
        characterCount[character]++;
      }
    }

    for (let i = 0; i <= originalString.length - 1; i++) {
      if (characterCount[originalString[i]] === 1) {
        return `The First Non-Repeating Character is ${originalString[i]}.`;
      }
    }

    return "All characters are repeating...";
  }

  function arrayOfEvenNumbers(originalArray) {
    let evenArray = originalArray.filter((element) => element % 2 == 0);
    return evenArray;
  }

  function maxOccurCharacter(originalString) {
    let characterCount = {};

    for (let i = 0; i <= originalString.length - 1; i++) {
      let character = originalString[i];
      if (!characterCount[character]) {
        characterCount[character] = 1;
      } else {
        characterCount[character]++;
      }
    }

    let maxCount = 0;
    let maxChar = "";

    for (let entity in characterCount) {
      if (characterCount[entity] > maxCount) {
        maxCount = characterCount[entity];
        maxChar = entity;
      }
    }

    console.log("Hello", characterCount);

    return `The most occurring character is "${maxChar}" with ${maxCount} occurrences`;
  }

  console.log(showSpecificProblem);

  return (
    <>
      <h1 className={SCSS.title}>Problem Solving</h1>
      <button
        className={SCSS.problemsListBtn}
        onClick={() => handleShowProblems()}
      >
        {showProblems ? "Hide Problems" : "Show Problems"}
      </button>
      <div
        className={`${SCSS.problemContainerParent} ${
          showProblems ? SCSS.show : ""
        }`}
      >
        {showProblems ? (
          <>
            <div className={SCSS.problemContainer}>
              {problemsData?.map((problem, index) => (
                <button
                  key={index}
                  onClick={() => handleDisplayProblem(problem.id)}
                >
                  {problem.id}
                </button>
              ))}
            </div>
          </>
        ) : (
          <></>
        )}
      </div>

      {showSpecificProblem ? (
        <section className={SCSS.problemSection}>
          <h2 className={SCSS.problemStatement}>
            {`Problem ${showSpecificProblem.id}: ${showSpecificProblem.title}`}
          </h2>
          <div className={SCSS.inputOutput}>
            <div className={SCSS.inputContainer}>
              <div className={SCSS.inputProperty}>Input:</div>
              <div className={SCSS.inputValue}>
                {showSpecificProblem.inputValue}
              </div>
            </div>
            <div className={SCSS.outputContainer}>
              <div className={SCSS.outputProperty}>Output:</div>
              <div className={SCSS.outputValue}>
                {utilityProblemCall(showSpecificProblem)}
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default ProblemSolving;
