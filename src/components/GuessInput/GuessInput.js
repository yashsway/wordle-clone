import React from "react";

function GuessInput() {
  const [guess, setGuess] = React.useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();

    console.log(guess);
    setGuess("");
  };

  return (
    <form class="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        type="text"
        id="guess-input"
        required
        pattern="[A-Za-z]{5}"
        value={guess}
        onChange={({ target }) => setGuess(target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
