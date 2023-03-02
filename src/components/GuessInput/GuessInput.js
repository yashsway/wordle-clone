import React from "react";

function GuessInput({ addNewGuess }) {
  const [potentialGuess, setPotentialGuess] = React.useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();

    addNewGuess(potentialGuess);
    setPotentialGuess("");
  };

  return (
    <form class="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        type="text"
        id="guess-input"
        required
        pattern="[A-Za-z]{5}"
        title="Guess a 5 letter word"
        value={potentialGuess}
        onChange={({ target }) => setPotentialGuess(target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
