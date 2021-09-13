import React from "react";
import { footerLinks, logoLinks } from "../footer-links.js";

type FooterNameAndLinks = {
  name: string;
  links: string[];
};

export default function Footer() {
  return (
    <>
      <style>
        {`
        #footer {
          height: 200px;
          background-color: black;
          margin-bottom: -1em;
          color: white;
        }
        .footerColumn {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-between;
        }
        .footerColumn span {
          font-weight: bold;
        }
        .footerColumn a {
          color: inherit;
          text-decoration: none;
          line-height: 1.5em;
        }
        .footerColumn a:hover {
          cursor: pointer;
          text-decoration: underline;
        }
      `}
      </style>
      <section id="footer">
        <div id="footerLinks">
          {footerLinks.map(({ name, links }: FooterNameAndLinks, idx) => (
            <div key={idx} className="footerColumn">
              <span>{name}</span>
              {links.map((link: string, idx) => (
                <a href="" key={idx}>
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div></div>
      </section>
    </>
  );
}
