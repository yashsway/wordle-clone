import React from "react";
import { clsx, range } from "../../utils";

function Cell({ letter, status }) {
  const cellClasses = clsx(["cell", status || ""]);

  return <span className={cellClasses}>{letter || ""}</span>;
}

function Guess({ value }) {
  const cells = range(5);
  const checkedGuessLetters = value ? value.checkedGuess : [];

  return (
    <p className="guess">
      {cells.map((_, idx) => {
        const { letter, status } = checkedGuessLetters[idx] || {};

        return <Cell key={idx} letter={letter} status={status} />;
      })}
    </p>
  );
}

export default Guess;
