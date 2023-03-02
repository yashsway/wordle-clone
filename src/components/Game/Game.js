import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  const addNewGuess = (guess) => {
    setGuesses((prevGuesses) => [
      ...prevGuesses,
      {
        id: crypto.randomUUID(),
        guess,
      },
    ]);
  };

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput addNewGuess={addNewGuess} />
    </>
  );
}

export default Game;
