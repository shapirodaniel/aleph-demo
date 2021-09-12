import React, { ComponentType } from "react";
import Nav from "./components/nav.tsx";

export default function App({
  Page,
  pageProps,
}: {
  Page: ComponentType<any>;
  pageProps: any;
}) {
  return (
    <main style={{ height: "100vh", width: "100vw", padding: 0 }}>
      <head>
        <meta name="viewport" content="width=device-width" />
      </head>
      <Nav />
      <Page {...pageProps} />
    </main>
  );
}
