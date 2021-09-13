import React from "react";
import CorporateBlurb from "../components/corporate-blurb.tsx";
import Footer from "../components/footer.tsx";

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
        .container > div {
          height: 600px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .container p {
          width: 100%
          max-width: 600px;
          padding: 2em;
          font-size: 4em;
          text-align: center;
          color: black;
        }
        #hero {
          background-color: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        #center {
          background-color: rgb(46, 93, 213);
          color: ghostwhite;
        }
        .crop {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          height: 20em;
          width: 20em;
          min-width: 20em;
          overflow: hidden;
          border: 5px solid white;
          margin-right: 2em;
        }
        .crop img {
          height: 22em;
          width: auto;
          margin-left: 4em;
        }
        #footer {
          height: 200px;
          background-color: black;
          margin-bottom: -1em;
        }
        `}
      </style>
      <section className="container">
        <div id="hero">
          <p>Sell the problem you solve, not the product.</p>
        </div>
        <div id="center">
          <span className="crop">
            <img src="/assets/corporate-person.jpg" alt="corporate-person" />
          </span>
          <CorporateBlurb />
        </div>
        <Footer />
      </section>
    </>
  );
}
