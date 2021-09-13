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
        section {
          width: 100%;
        }
        p {
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
      `}
      </style>
      <section>
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
