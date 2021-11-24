import classNames from "classnames";
import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { CodeBlock } from "../../components/organisms/CodeBlock";
import { CodeLines } from "../../components/organisms/CodeLines";
import { DefaultLayout } from "../../layouts/DefaultLayout";

const jsonSettingsTokens = [
  {
    id: 0,
    left: "{",
    center: "",
    right: "",
    indent: 0,
  },
  {
    id: 1,
    left: "Other Features",
    center: ":",
    right: "comming soon...",
    indent: 1,
  },
  {
    id: 2,
    left: "}",
    center: "",
    right: "",
    indent: 0,
  },
];

const Pankuzu: React.VFC = () => (
  <p className={classNames("flex", "gap-2", "pl-3", "py-1", "text-[#9E9E9E]", "text-xs")}>
    <span className={classNames("text-[#7A7A37]")}>{"{}"}</span>

    <span>settings.json</span>
    <span>{">"}</span>
    <span>...</span>
  </p>
);

const SettingsPage: NextPage = () => {
  const tokenLength = React.useMemo(() => jsonSettingsTokens.length - 2, []);

  return (
    <>
      <Head>
        <title>settings.json | json-clock</title>
      </Head>

      <DefaultLayout>
        <div className={classNames("w-full", "bg-[#1E1E1E]")}>
          <Pankuzu />
        </div>
        <div className={classNames("flex", "w-full", "h-full", "bg-[#1E1E1E]")}>
          <div className={classNames("w-[66px]", "h-full", "bg-[#1E1E1E]")}>
            <CodeLines lineLength={jsonSettingsTokens.length} />
          </div>
          <div className={classNames("w-full", "h-full", "bg-[#1E1E1E]")}>
            <ul>
              {jsonSettingsTokens.map((item, index) => {
                return <CodeBlock key={index} {...{ index, tokenLength }} jsonToken={item} />;
              })}
            </ul>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};

export default SettingsPage;
