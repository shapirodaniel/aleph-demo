import React from "react";

const navLinks = [{ text: "home" }, { text: "about" }, { text: "blog" }];

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
          nav span {
            font-size: 1.5em;
            color: black;
            margin-left: 1em;
            text-decoration: none;
          }
          nav span:hover {
            cursor: pointer;
            text-decoration: underline;
          }
      `}
      </style>
      <nav>
        {navLinks.map(({ text }, idx) => (
          <span key={idx}>{text}</span>
        ))}
      </nav>
    </>
  );
}
