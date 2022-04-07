import React from "react";

import "./icon.scss";
import { ReactComponent as confirm } from "../../assets/icons/confirm.svg";
import { ReactComponent as redo } from "../../assets/icons/redo.svg";
import { ReactComponent as rightArrow } from "../../assets/icons/rightArrow.svg";
import { ReactComponent as leftArrow } from "../../assets/icons/leftArrow.svg";
import { ReactComponent as upArrow } from "../../assets/icons/upArrow.svg";
import { ReactComponent as downArrow } from "../../assets/icons/downArrow.svg";
import { ReactComponent as token } from "../../assets/icons/token.svg";
import { ReactComponent as setting } from "../../assets/icons/setting.svg";

const icons = {
  confirm,
  redo,
  rightArrow,
  leftArrow,
  upArrow,
  downArrow,
  token,
  setting,
};

interface IProps {
  name:
    | "confirm"
    | "redo"
    | "rightArrow"
    | "leftArrow"
    | "upArrow"
    | "downArrow"
    | "token"
    | "setting";
  size?: "small" | "medium" | "large";
  color?: 1 | 2 | 3 | 4 | 5;
  type?: "round" | "square";
  className?: string;
  [s: string]: any;
}

export const Icon = ({
  name,
  size = "medium",
  color = 2,
  type = "round",
  className = "",
}: IProps) => {
  const IconComponent = icons[name];

  return (
    <div
      className={`icon icon--${size} icon--${name} icon--${type} ${className}`}
      style={{
        gridArea: name,
        backgroundColor: `var(--main-${color}-color)`,
      }}
    >
      <IconComponent fill="red" stroke="green" />
    </div>
  );
};
