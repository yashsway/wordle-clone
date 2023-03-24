import React from "react";
import Key from "../Key";

function Keyboard({ guesses }) {
  const keysByRow = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
  const guessesLettersMap =
    guesses
      .flatMap((guess) => guess.checkedGuess)
      .reduce((mapping, currGuess) => {
        // incorrect/correct letters are always finalistic. misplaced letters could change.
        if (
          mapping[currGuess.letter] &&
          mapping[currGuess.letter] !== "misplaced"
        ) {
          return mapping;
        }

        mapping[currGuess.letter] = currGuess.status;
        return mapping;
      }, {}) ?? {};

  return (
    <div className="keyboard">
      {keysByRow.map((rowKeys, idx) => (
        <div key={idx} className="keyboard-row">
          {rowKeys.split("").map((letter) => {
            return (
              <Key
                key={letter}
                letter={letter}
                status={guessesLettersMap[letter.toUpperCase()]}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
