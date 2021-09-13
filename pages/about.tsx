import React from "react";
import { CorporateLogo } from "../lib/interfaces.ts";

const corporateLogos = [
  { id: 2, name: "company-2", src: "/assets/company-logo-2.jpg" },
  { id: 1, name: "company-1", src: "/assets/company-logo-1.jpg" },
  { id: 3, name: "company-3", src: "/assets/company-logo-3.jpg" },
];

export default function About() {
  return (
    <>
      <style>
        {`
        #about {
          width: 100%;
        }
        #about p {
          width: 100%
          max-width: 600px;
          padding: .5em 2em 1em 2em;
          font-size: 3em;
          text-align: center;
        }
        #logos {
          display: flex;
          justify-content: center;
          width: 100%;
        }
        #logos img {
          height: auto;
          object-fit: cover;
          overflow: hidden;
          width: 12em;
          overflow: hidden;
        }
        @media screen and (max-width: 400px) {
          #about p {
            font-size: 1.4em;
            padding: 2em;
          }
        }
      `}
      </style>
      <section id="about">
        <p>Companies love working with us, because we love companies.</p>
        <div id="logos">
          {corporateLogos.map(({ id, name, src }: CorporateLogo) => (
            <img key={id} src={src} alt={name} />
          ))}
        </div>
      </section>
    </>
  );
}
