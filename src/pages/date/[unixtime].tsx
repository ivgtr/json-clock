import type { GetServerSidePropsContext } from "next";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";
import envJson from "../../assets/jsons/env.json";

type ServerSideProps = {
  unixtime: string;
};

export async function getServerSideProps(context: GetServerSidePropsContext<ServerSideProps>) {
  if (context.params?.unixtime) {
    const unixtime = context.params.unixtime;
    return {
      props: {
        unixtime,
      },
    };
  }
  return {
    notFound: true,
  };
}

const RedirectUnixTimePage: NextPage<ServerSideProps> = ({ unixtime }) => {
  const title = "date.json | json-clock";
  const description = "⏰ json時計で現在の時刻を確認してください。";
  const router = useRouter();

  const ogUrl = useMemo(() => {
    const url = new URL(`${envJson.url}/data`);
    return url.toString();
  }, []);

  const ogpImageUrl = useMemo(() => {
    console.log(typeof unixtime);
    if (unixtime && typeof unixtime === "string") {
      const url = new URL(`${envJson.url}/api/ogp`);
      url.searchParams.set("unixtime", unixtime);
      return url.toString();
    } else return envJson.url;
  }, [unixtime]);

  useEffect(() => {
    router.push("/date");
  }, [router]);

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
        <meta property="og:image" content={ogpImageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@ivgtr" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <div>RedirectPage</div>
    </>
  );
};

export default RedirectUnixTimePage;
