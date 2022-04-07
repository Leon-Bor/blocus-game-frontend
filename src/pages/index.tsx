import React from "react";
import { Gamepad } from "../components/gamepad/gamepad";
import { GameWrapper } from "../components/gameWrapper/gameWrapper";

interface IProps {
  [s: string]: any;
}

export const IndexPage = ({}: IProps) => {
  return (
    <div className={`index-page`}>
      <Gamepad>
        <GameWrapper></GameWrapper>
      </Gamepad>
    </div>
  );
};
