import React from "react";

const navLinks = [
  { text: "Home", path: "/home" },
  { text: "About", path: "/about" },
  { text: "Blog", path: "/blog/all" },
];

export default function Nav() {
  return (
    <>
      <style>
        {`
          nav {
            height: 2em;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-end;
          }
          nav a {
            font-size: 1.5em;
            color: black;
            margin-left: 1em;
            text-decoration: none;
          }
          nav a:hover {
            cursor: pointer;
            text-decoration: underline;
          }
      `}
      </style>
      <nav>
        {navLinks.map(({ text, path }, idx) => (
          <a key={idx} href={path}>
            {text}
          </a>
        ))}
      </nav>
    </>
  );
}
