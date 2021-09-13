import React, { ComponentType } from "react";
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
      <Page {...pageProps} />
    </main>
  );
}
