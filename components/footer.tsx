import React from "react";
import {
  getInTouchLinks,
  opportunitiesLinks,
  logoLinks,
} from "../footer-links.js";

interface FooterLinksObj {
  name: string;
  links: string[];
}

const StackedLinks = ({ name, links }: FooterLinksObj) => {
  return (
    <>
      <style>
        {`
        .footerColumn {
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-around;
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
      <div className="footerColumn">
        <span>{name}</span>
        <br />
        {links.map((item: string, idx: number) => (
          <a href="" key={idx}>
            {item}
          </a>
        ))}
      </div>
    </>
  );
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
          display: flex;
          align-items: center;
          justify-content: space-around;
        }
        .footerLinks {
          padding: .5em;
        }
        .footerLinks img {
          height: 32px;
          width: 32px;
          background: transparent;
          margin: 1em;
        }
      `}
      </style>
      <section id="footer">
        <div className="footerLinks">
          <StackedLinks
            name={getInTouchLinks.name}
            links={getInTouchLinks.links}
          />
        </div>
        <div className="footerLinks">
          <StackedLinks
            name={opportunitiesLinks.name}
            links={opportunitiesLinks.links}
          />
        </div>
        <div className="footerLinks">
          {logoLinks.map((src, idx) => (
            <img key={idx} src={src} alt={src} />
          ))}
        </div>
      </section>
    </>
  );
}
