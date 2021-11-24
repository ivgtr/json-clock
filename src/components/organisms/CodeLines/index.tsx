import classNames from "classnames";
import React from "react";

interface Props {
  lineLength: number;
}

export const CodeLines: React.VFC<Props> = ({ lineLength }) => {
  return (
    <ul>
      {[...Array(lineLength)].map((_, i) => {
        const lineNumber = i + 1;

        return (
          <li key={`line-${lineNumber}`} className={classNames("h-[18px]")}>
            <p
              className={classNames(
                "flex",
                "w-full",
                "h-full",
                "items-center",
                "justify-center",
                "bg-[#1E1E1E]"
              )}
            >
              <span className={classNames("block", "text-xs", "text-[#9E9E9E]")}>{lineNumber}</span>
            </p>
          </li>
        );
      })}
    </ul>
  );
};
