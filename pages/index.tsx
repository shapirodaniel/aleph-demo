import { useDeno } from "aleph/react";
import React from "react";
import Nav from "../components/nav.tsx";
import Main from "../components/main.tsx";

export default function Home() {
  return (
    <>
      <Nav />
      <Main />
    </>
  );
}
