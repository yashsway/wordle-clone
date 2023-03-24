import React, { useEffect } from "react";

function GuessInput({ addNewGuess, isGameComplete, externalPotentialGuess }) {
  const [potentialGuess, setPotentialGuess] = React.useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();

    addNewGuess(potentialGuess);
    setPotentialGuess("");
  };

  useEffect(() => {
    setPotentialGuess(externalPotentialGuess);
  }, [externalPotentialGuess]);

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        disabled={isGameComplete}
        type="text"
        id="guess-input"
        required
        pattern="[A-Za-z]{5}"
        title="Guess a 5 letter word"
        value={potentialGuess ?? externalPotentialGuess}
        onChange={({ target }) => setPotentialGuess(target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
