import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({ letter, status }) {
  const cellClasses = ["cell", status || ""].filter((c) => !!c).join(" ");

  return <span className={cellClasses}>{letter || ""}</span>;
}

function Guess({ value, answer }) {
  const cells = range(5);
  const checkedGuessLetters = value ? checkGuess(value.guess, answer) : [];

  return (
    <p className="guess">
      {cells.map((_, idx) => {
        const { letter, status } = checkedGuessLetters[idx] || {};

        return <Cell letter={letter} status={status} />;
      })}
    </p>
  );
}

export default Guess;
