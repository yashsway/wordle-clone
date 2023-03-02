import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ value, answer }) {
  const cells = range(5);
  const checkedGuessLetters = value ? checkGuess(value.guess, answer) : [];

  return (
    <p className="guess">
      {cells.map((_, idx) => {
        const cellClasses = [
          "cell",
          checkedGuessLetters[idx] ? checkedGuessLetters[idx].status : "",
        ]
          .filter((c) => !!c)
          .join(" ");

        return (
          <span key={idx} className={cellClasses}>
            {checkedGuessLetters[idx] ? checkedGuessLetters[idx].letter : ""}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
