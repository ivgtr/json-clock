import classNames from "classnames";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { CodeLines } from "../../components/organisms/CodeLines";
import { DefaultLayout } from "../../layouts/DefaultLayout";

const clockInfo = [
  {
    id: 0,
    content: "{",
    indent: 0,
  },
  {
    id: 1,
    content: "year: 2021",
    indent: 1,
  },
  {
    id: 2,
    content: "monthIndex: Nov",
    indent: 1,
  },
  {
    id: 3,
    content: "day: 24",
    indent: 1,
  },
  {
    id: 4,
    content: "hours: 17",
    indent: 1,
  },
  {
    id: 5,
    content: "minutes: 10",
    indent: 1,
  },
  {
    id: 6,
    content: "seconds: 10",
    indent: 1,
  },
  {
    id: 7,
    content: "thema: monokai",
    indent: 1,
  },
  {
    id: 8,
    content: "}",
    indent: 0,
  },
];

export const getServerSideProps: GetServerSideProps = async () => {
  console.log(new Date(Date.now() + (new Date().getTimezoneOffset() + 9 * 60) * 60 * 1000));

  return {
    props: {},
  };
};

const DatePage: NextPage = () => {
  console.log(new Date(Date.now() + (new Date().getTimezoneOffset() + 9 * 60) * 60 * 1000));
  return (
    <>
      <Head>
        <title>date.json | json-clock</title>
      </Head>

      <DefaultLayout>
        <div className={classNames("w-full", "bg-[#1E1E1E]")}>
          <p className={classNames("flex", "gap-2", "pl-3", "py-1", "text-[#9E9E9E]", "text-xs")}>
            <span className={classNames("text-[#7A7A37]")}>{"{}"}</span>
            <span>date.json</span>
            <span>{">"}</span>
            <span>...</span>
          </p>
        </div>
        <div className={classNames("flex", "w-full", "h-full", "bg-[#1E1E1E]")}>
          <div className={classNames("w-[66px]", "h-full", "bg-[#1E1E1E]")}>
            <CodeLines lineLength={clockInfo.length} />
          </div>
          <div className={classNames("w-full", "h-full", "bg-[#1E1E1E]")}>
            <p>right</p>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};

export default DatePage;
