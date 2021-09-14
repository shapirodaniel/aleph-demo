import React from "react";
import CorporateBlurb from "../components/corporate-blurb.tsx";
import Footer from "../components/footer.tsx";

export default function LandingPage() {
  return (
    <>
      <style>
        {`
        #landingContainer {
          width: 100vw;
          height: auto;
          margin: -1em -1em 0 -1em;
        }
        #landingContainer > div {
          height: 600px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        #landingContainer p {
          width: 100%
          max-width: 600px;
          padding: 0 2em 2em 2em;
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
        #personAndBlurb {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgb(46, 93, 213);
          color: ghostwhite;
        }
        #crop {
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
        #crop img {
          height: 22em;
          width: auto;
          margin-left: 4em;
        }
        @media screen and (max-width: 400px){
          #hero > p {
            font-size: 2em;
            padding: .3em;
          }
          #personAndBlurb {
            flex-direction: column;
          }
          #crop {
            height: 16em;
            width: 16em;
            min-width: 16em;
            margin-right: 0;
          }
          #crop img {
            height: 15em;
            width: auto;
          }
        }
        `}
      </style>
      <section id="landingContainer">
        <div id="hero">
          <p>Sell the problem you solve, not the product.</p>
        </div>
        <div id="personAndBlurb">
          <span id="crop">
            <img src="/assets/corporate-person.jpg" alt="corporate-person" />
          </span>
          <CorporateBlurb />
        </div>
        <Footer />
      </section>
    </>
  );
}
