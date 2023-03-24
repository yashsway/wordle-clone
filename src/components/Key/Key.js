import React from "react";
import { clsx } from "../../utils";

function Key({ letter, status }) {
  return (
    <button className={clsx(["key", status])}>
      {(letter ?? "").toUpperCase()}
    </button>
  );
}

export default Key;
