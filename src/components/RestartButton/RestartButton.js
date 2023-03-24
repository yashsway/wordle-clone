import React from "react";
import { clsx } from "../../utils";

function RestartButton({ handleClick, className }) {
  return (
    <button className={clsx(["restart-btn", className])} onClick={handleClick}>
      Restart
    </button>
  );
}

export default RestartButton;
