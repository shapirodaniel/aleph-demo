import React from "react";

const navLinks = [{ text: "Home" }, { text: "About" }, { text: "Blog" }];

export default function Nav() {
  return (
    <>
      <header></header>
      <nav>
        {navLinks.map(({ text }, idx) => (
          <a key={idx}>{text}</a>
        ))}
      </nav>
    </>
  );
}
