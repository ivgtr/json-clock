import classNames from "classnames";
import Link from "next/link";
import React from "react";

interface Props {
  path: string;
  isActive: boolean;
}

export const TabButton: React.VFC<Props> = ({ path, isActive }) => {
  return (
    <Link href={`/${path}`}>
      <a
        className={classNames(
          "flex",
          "w-full",
          "h-full",
          "gap-2",
          "items-center",
          "justify-center",
          isActive ? "bg-[#1E1E1E]" : "bg-[#252526]"
        )}
      >
        <span className={classNames("block", "text-xs", "text-[#7A7A37]")}>{"{}"}</span>
        <span
          className={classNames("block", "text-xs", isActive ? "text-white" : "text-[#9E9E9E]")}
        >
          {path}.json
        </span>
      </a>
    </Link>
  );
};
