import React from "react";

export default function LandingPage() {
  return (
    <>
      <style>
        {`
        .container {
          width: 100vw;
          height: auto;
          margin: -1em -1em 0 -1em;
        }
        .container div {
          height: 600px;
        }
        #top {
          background-color: rgb(46, 93, 213);
        }
        #whitespace {
          background-color: transparent;
        }
        #footer {
          height: 200px;
          background-color: black;
          margin-bottom: -1em;
        }
        `}
      </style>
      <section className="container">
        <div id="top"></div>
        <div id="whitespace"></div>
        <div id="footer"></div>
      </section>
    </>
  );
}
