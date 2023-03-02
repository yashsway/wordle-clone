import React from "react";

import { sample } from "../../utils";
import { checkGuess } from "../../game-helpers";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import GameCompleteBanner from "../GameCompleteBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("playing"); // one of 'won', 'lost', or 'playing'

  // derived states
  const hasWon = gameStatus === "won";
  const isPlaying = gameStatus === "playing";

  const addNewGuess = (guess) => {
    const newGuess = {
      id: crypto.randomUUID(),
      guess,
      checkedGuess: checkGuess(guess, answer) || [],
    };
    const nextGuesses = [...guesses, newGuess];

    // update the guessest first
    setGuesses(nextGuesses);

    // if every letter in the guess is correct, the player has won
    if (guess.toUpperCase() === answer.toUpperCase()) {
      setGameStatus("won");
      return;
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      // if this is the last possible guess, the player has lost
      setGameStatus("lost");
    }

    // otherwise, the player is allowed to keep guessing...
  };

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput addNewGuess={addNewGuess} isGameComplete={!isPlaying} />
      {!isPlaying && (
        <GameCompleteBanner hasWon={hasWon} guesses={guesses} answer={answer} />
      )}
    </>
  );
}

export default Game;
