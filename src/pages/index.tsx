import { NextPage } from "next";
import Router from "next/router";

const RedirectPage: NextPage = () => {
  return <div>RedirectPage</div>;
};

RedirectPage.getInitialProps = async ({ res }) => {
  if (typeof window === "undefined" && res) {
    res.writeHead(302, { Location: "/date" });
    res.end();
  } else {
    Router.push("/date");
  }

  return {};
};

export default RedirectPage;
