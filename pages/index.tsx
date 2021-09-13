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
        .container p {
          width: 100%
          max-width: 600px;
          padding: 0em 2em 1em 2em;
          font-size: 4em;
          text-align: center;
          color: ghostwhite;
        }
        #top {
          background-color: rgb(46, 93, 213);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        #whitespace {
          background-color: transparent;
        }
        #whitespace img {
          border-radius: 50px;
          height: 50%;
          width: auto;
          overflow: hidden;
        }
        #footer {
          height: 200px;
          background-color: black;
          margin-bottom: -1em;
        }
        `}
      </style>
      {/* overrides Layout parent to fill page */}
      <section className="container">
        <div id="top">
          <p>Sell the problem you solve, not the product.</p>
        </div>
        <div id="whitespace">
          <img src="/assets/corporate-person.jpg" alt="corporate-person" />
        </div>
        <div id="footer"></div>
      </section>
    </>
  );
}
