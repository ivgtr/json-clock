import classNames from "classnames";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { DefaultLayout } from "../../layouts/DefaultLayout";

export const getServerSideProps: GetServerSideProps = async () => {
  console.log(new Date(Date.now() + (new Date().getTimezoneOffset() + 9 * 60) * 60 * 1000));

  return {
    props: {},
  };
};

const SettingsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>settings.json | json-clock</title>
      </Head>

      <DefaultLayout>
        <div className={classNames("w-full", "bg-[#1E1E1E]")}>
          <p className={classNames("flex", "gap-2", "pl-3", "py-1", "text-[#9E9E9E]", "text-xs")}>
            <span>settings.json</span>
            <span>{">"}</span>
            <span>...</span>
          </p>
        </div>
        <div>
          <p>test</p>
        </div>
      </DefaultLayout>
    </>
  );
};

export default SettingsPage;
