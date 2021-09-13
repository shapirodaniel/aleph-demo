import React from "react";

const navLinks = [
  { name: "Home", path: "/home" },
  { name: "About", path: "/about" },
  { name: "Blog", path: "/blog/all" },
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
            padding: 2em;
            background-color: #FFFFFF;
            position: fixed;
            top: 0;
            z-index: 999;
            box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
          }
          nav a {
            font-size: 1.5em;
            color: black;
            margin-left: 1em;
            text-decoration: none;
          }
          nav a.current {
            text-decoration: underline;
          }
          nav a:hover {
            cursor: pointer;
            text-decoration: underline;
          }
      `}
      </style>
      <nav>
        {navLinks.map(({ name, path }, idx) => (
          <a key={idx} href={path} rel="nav" data-active-className="current">
            {name}
          </a>
        ))}
      </nav>
    </>
  );
}
