import React, { useEffect } from "react";

import { sample } from "../../utils";
import { checkGuess } from "../../game-helpers";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import Banner from "../Banner";
import Keyboard from "../Keyboard";
import RestartButton from "../RestartButton";

function Game() {
  // pick a random word as the answer
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("playing"); // one of 'won', 'lost', or 'playing'
  const [potentialGuess, setPotentialGuess] = React.useState("");

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

  const handleKeyPress = (letter) => {
    const newPotentialGuess = potentialGuess + letter.toUpperCase();

    if (newPotentialGuess.length >= 5) {
      addNewGuess(newPotentialGuess);
      setPotentialGuess("");
      return;
    }

    setPotentialGuess(newPotentialGuess);
  };

  const handleRestart = () => {
    setAnswer(sample(WORDS));
    setGuesses([]);
    setPotentialGuess("");
    setGameStatus("playing");
  };

  // To make debugging easier, we'll log the solution in the console.
  useEffect(() => {
    console.info({ answer });
  }, [answer]);

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput
        addNewGuess={addNewGuess}
        isGameComplete={!isPlaying}
        externalPotentialGuess={potentialGuess}
      />
      <Keyboard guesses={guesses} handleKeyPress={handleKeyPress} />
      {hasWon && (
        <Banner className="happy">
          <p style={{ display: "inline-block" }}>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>
              {guesses.length === 1 ? "1 guess" : `${guesses.length} guesses`}
            </strong>
            .
          </p>
          <RestartButton handleClick={handleRestart} className="ml-10" />
        </Banner>
      )}
      {!hasWon && !isPlaying && (
        <Banner className="sad">
          <p style={{ display: "inline-block" }}>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
          <RestartButton handleClick={handleRestart} className="ml-10" />
        </Banner>
      )}
    </>
  );
}

export default Game;
