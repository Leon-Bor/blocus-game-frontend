import React, { useMemo } from "react";
import { tokens } from "../../game/presets/tokens";
import { Token } from "../token/token";
import "./token-select.scss";

interface IProps {
  [s: string]: any;
}

export const TokenSelect = ({}: IProps) => {
  const sortedTokens = useMemo(() => {
    return tokens.sort(function (a, b) {
      return b.points - a.points;
    });
  }, [tokens]);

  console.log(sortedTokens.length);

  return (
    <div className={`token-select`}>
      {sortedTokens.map((token, index) => {
        return (
          <div key={index} className={`token-select__token`}>
            <Token token={token} />
          </div>
        );
      })}
    </div>
  );
};
