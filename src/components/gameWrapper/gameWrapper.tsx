import React, { useEffect } from "react";
import { GameConfig } from "../../game/config";
import { Game } from "../../game/game";
import css from "./gameWrapper.module.scss";

export const GameWrapper = () => {
  useEffect(() => {
    const game = new Game(GameConfig);
  }, []);

  return (
    <div className={css.gameWrapper}>
      <div id="game"></div>
    </div>
  );
};
