import classNames from "classnames";
import type { NextPage } from "next";
import Head from "next/head";
import React, { useMemo } from "react";
import envJson from "../../assets/jsons/env.json";
import { CodeLines } from "../../components/organisms/CodeLines";
import { JsonClock } from "../../components/organisms/JsonClock";
import { DefaultLayout } from "../../layouts/DefaultLayout";
import { getJsonTimeTokens } from "../../utils/getJsonTimeToken";

const defaultClockInfo = getJsonTimeTokens(0);

const Pankuzu: React.VFC = () => (
  <p className={classNames("flex", "gap-2", "pl-3", "py-1", "text-[#9E9E9E]", "text-xs")}>
    <span className={classNames("text-[#7A7A37]")}>{"{}"}</span>
    <span>date.json</span>
    <span>{">"}</span>
    <span>...</span>
  </p>
);

const DatePage: NextPage = () => {
  const title = "date.json | json-clock";
  const description = "⏰ json時計で現在の時刻を確認してください。";
  const ogUrl = useMemo(() => {
    return envJson.url;
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}></meta>
        <meta name="viewport" content="width=device-width,height=device-height" key="viewport" />
        <meta name="theme-color" content="#087da1" key="themeColor" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={ogUrl} />
        <meta property="og:site_name" content={title} />
        {/* <meta property="og:image" content={ogpImageUrl} /> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@ivgtr" />
        <link rel="shortcut icon" href="/favicon.ico" />
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
