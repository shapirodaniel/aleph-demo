import React, { ComponentType } from "react";
import Layout from "./components/layout.tsx";
import Nav from "./components/nav.tsx";
import "./style/index.css";

export default function App({
  Page,
  pageProps,
}: {
  Page: ComponentType<any>;
  pageProps: any;
}) {
  return (
    <main>
      <head>
        <meta name="viewport" content="width=device-width" />
      </head>
      <Nav />
      <Layout>
        <Page {...pageProps} />
      </Layout>
    </main>
  );
}
