import React from "react";
import { clsx } from "../../utils";

function Key({ letter, status, handleClick }) {
  const handleKeyPress = (evt) => {
    if (handleClick) handleClick(evt.target.innerText);
  };

  return (
    <button className={clsx(["key", status])} onClick={handleKeyPress}>
      {(letter ?? "").toUpperCase()}
    </button>
  );
}

export default Key;
