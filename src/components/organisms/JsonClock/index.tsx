import React, { useCallback, useEffect, useRef, useState } from "react";
import { getJsonTimeToken } from "../../../utils/getJsonTimeToken";
import { CodeBlock } from "../CodeBlock";

type JsonToken = {
  id: number;
  left: string;
  center: string;
  right: string | number;
  indent: number;
};

interface Props {
  defaultJsonClockTokens: JsonToken[];
}

export const JsonClock: React.VFC<Props> = ({ defaultJsonClockTokens }) => {
  const refRequestAnimationFrame = useRef<ReturnType<typeof requestAnimationFrame>>();
  const nowTime = Math.floor(Date.now());
  const [jsonClockTokens, setJsonClockTokens] = useState<JsonToken[]>(defaultJsonClockTokens);
  const tokenLength = React.useMemo(
    () => defaultJsonClockTokens.length - 2,
    [defaultJsonClockTokens]
  );

  const animate = useCallback(() => {
    setJsonClockTokens(getJsonTimeToken(nowTime));
    refRequestAnimationFrame.current = requestAnimationFrame(animate);
  }, [nowTime]);

  useEffect(() => {
    refRequestAnimationFrame.current = requestAnimationFrame(animate);
    return () => {
      if (refRequestAnimationFrame.current) {
        return cancelAnimationFrame(refRequestAnimationFrame.current);
      }
    };
  }, [animate]);

  return (
    <ul>
      {jsonClockTokens.map((item, index) => {
        return <CodeBlock key={index} {...{ index, tokenLength }} jsonToken={item} />;
      })}
    </ul>
  );
};
