import React from "react";
import { range } from "../../utils";

function Guess({ value }) {
  const cells = range(5);
  const letters = value ? value.guess.split("") : [];

  return (
    <p className="guess">
      {cells.map((_, idx) => (
        <span key={idx} className="cell">
          {letters[idx] || ""}
        </span>
      ))}
    </p>
  );
}

export default Guess;
