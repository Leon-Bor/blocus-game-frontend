import React, { useMemo } from "react";
import "./token.scss";
import { IToken } from "../../game/presets/tokens";

interface IProps {
  token: IToken;
}

export const Token = ({ token }: IProps) => {
  const gridTemplateArea = useMemo(() => {
    let s = "";

    token.template.map((row, rowIndex) => {
      let temp = "";

      row.map((cell, cellIndex) => {
        if (cell) {
          temp += `cell-${rowIndex}-${cellIndex}-${token.id} `;
        } else {
          temp += `. `;
        }
      });
      s += `"${temp}" `;
    });

    return s;
  }, [token]);

  return (
    <div
      className={`token`}
      style={{
        gridTemplateAreas: gridTemplateArea,
      }}
    >
      {token.template.map((row, rowIndex) => {
        return row.map((cell, cellIndex) => {
          return (
            cell == 1 && (
              <div
                key={`${rowIndex}-${cellIndex}`}
                className="token__cell"
                style={{
                  gridArea: `cell-${rowIndex}-${cellIndex}-${token.id}`,
                }}
              ></div>
            )
          );
        });
      })}
    </div>
  );
};
