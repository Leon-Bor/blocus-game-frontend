import React from "react";
import { GameWrapper } from "../gameWrapper/gameWrapper";
import { Icon } from "../icon/icon";
import css from "./gamepad.module.scss";
interface IProps {
  children?: JSX.Element;
}
export const Gamepad = ({ children }: IProps) => {
  return (
    <div className={css.gamepad}>
      <div className={css.left}>
        <Icon name="rightArrow" size="medium" type="round" />
        <Icon name="upArrow" size="medium" type="round" />
        <Icon name="leftArrow" size="medium" type="round" />
        <Icon name="downArrow" size="medium" type="round" />
      </div>
      <div>{children}</div>
      <div className={css.right}>
        <Icon name="confirm" size="medium" type="round" />
        <Icon name="redo" size="large" type="round" />
        <Icon name="token" size="medium" type="round" />
      </div>
    </div>
  );
};
