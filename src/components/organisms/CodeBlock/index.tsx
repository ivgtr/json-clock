import classNames from "classnames";
import React from "react";

type JsonToken = {
  id: number;
  left: string;
  center: string;
  right: string | number;
  indent: number;
};

interface Props {
  jsonToken: JsonToken;
  tokenLength: number;
  index: number;
}

export const CodeBlock: React.VFC<Props> = React.memo(({ jsonToken, tokenLength, index }) => {
  const isObjectKey = React.useMemo(
    () => jsonToken.left !== "{" && jsonToken.left !== "}",
    [jsonToken.left]
  );
  const isEndIndex = React.useMemo(() => index === tokenLength, [index, tokenLength]);

  return (
    <li key={jsonToken.id} className={classNames("h-[18px]")}>
      <p
        className={classNames(
          "flex",
          "gap-1",
          "w-full",
          "h-full",
          "bg-[#1E1E1E]",
          "text-xs",
          "text-[#9E9E9E]"
        )}
        style={{ paddingLeft: `${jsonToken.indent * 16}px` }}
      >
        <span className={classNames(isObjectKey && "text-[#9cdcfe]")}>
          {isObjectKey ? `"${jsonToken.left}"` : jsonToken.left}
        </span>
        {jsonToken.center.length > 0 && <span>{jsonToken.center}</span>}

        {String(jsonToken.right).length > 0 && typeof jsonToken.right === "string" ? (
          <span className={classNames("text-[#ce9178]")}>
            {isObjectKey ? `"${jsonToken.right}"` : jsonToken.right}
          </span>
        ) : (
          <span
            className={classNames(
              isObjectKey && typeof jsonToken.right === "number"
                ? "text-[#b5cea8]"
                : "text-[#569cd6]"
            )}
          >
            {jsonToken.right}
          </span>
        )}
        {isObjectKey && !isEndIndex && <span>{","}</span>}
      </p>
    </li>
  );
});
