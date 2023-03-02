import React from "react";
import { clsx } from "../../utils";

function Banner({ className, children }) {
  return <div className={clsx([className, "banner"])}>{children}</div>;
}

export default Banner;
