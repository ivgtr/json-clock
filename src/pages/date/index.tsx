import classNames from "classnames";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { CodeLines } from "../../components/organisms/CodeLines";
import { DefaultLayout } from "../../layouts/DefaultLayout";

const clockInfo = [
  {
    id: 0,
    left: "{",
    center: "",
    right: "",
    indent: 0,
  },
  {
    id: 1,
    left: "year",
    center: ":",
    right: "2021",
    indent: 1,
  },
  {
    id: 2,
    left: "monthIndex",
    center: ":",
    right: "Nov",
    indent: 1,
  },
  {
    id: 3,
    left: "day",
    center: ":",
    right: "24",
    indent: 1,
  },
  {
    id: 4,
    left: "hours",
    center: ":",
    right: "18",
    indent: 1,
  },
  {
    id: 5,
    left: "minutes",
    center: ":",
    right: "05",
    indent: 1,
  },
  {
    id: 6,
    left: "seconds",
    center: ":",
    right: "05",
    indent: 1,
  },
  {
    id: 7,
    left: "thema",
    center: ":",
    right: "monokai",
    indent: 1,
  },
  {
    id: 8,
    left: "}",
    center: "",
    right: "",
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
            <ul>
              {clockInfo.map((item) => {
                const isObjectKey = item.left !== "{" && item.left !== "}";
                return (
                  <li key={item.id} className={classNames("h-[18px]")}>
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
                      style={{ paddingLeft: `${item.indent * 16}px` }}
                    >
                      <span className={classNames(isObjectKey && "text-[#9cdcfe]")}>
                        {isObjectKey ? `"${item.left}"` : item.left}
                      </span>
                      <span>{item.center}</span>
                      <span className={classNames(isObjectKey && "text-[#ce9178]")}>
                        {isObjectKey ? `"${item.right}"` : item.right}
                      </span>
                      {isObjectKey && <span>{","}</span>}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};

export default DatePage;
