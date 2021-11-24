import classNames from "classnames";
import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { CodeLines } from "../../components/organisms/CodeLines";
import { JsonClock } from "../../components/organisms/JsonClock";
import { DefaultLayout } from "../../layouts/DefaultLayout";
import { getJsonTimeToken } from "../../utils/getJsonTimeToken";

const defaultClockInfo = getJsonTimeToken(0);

const Pankuzu: React.VFC = () => (
  <p className={classNames("flex", "gap-2", "pl-3", "py-1", "text-[#9E9E9E]", "text-xs")}>
    <span className={classNames("text-[#7A7A37]")}>{"{}"}</span>
    <span>date.json</span>
    <span>{">"}</span>
    <span>...</span>
  </p>
);

const DatePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>date.json | json-clock</title>
      </Head>

      <DefaultLayout>
        <div className={classNames("w-full", "bg-[#1E1E1E]")}>
          <Pankuzu />
        </div>
        <div className={classNames("flex", "w-full", "h-full", "bg-[#1E1E1E]")}>
          <div className={classNames("w-[66px]", "h-full", "bg-[#1E1E1E]")}>
            <CodeLines lineLength={defaultClockInfo.length} />
          </div>
          <div className={classNames("w-full", "h-full", "bg-[#1E1E1E]")}>
            <JsonClock defaultJsonClockTokens={defaultClockInfo} />
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};

export default DatePage;
