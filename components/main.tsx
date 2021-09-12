import React from "react";

export default function Main({ children }: React.ComponentProps<React.FC>) {
  return (
    <>
      <style>
        {`
          main {
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: center;
            align-items: center;
            justify-content: flex-start;
          }
      `}
      </style>
      <main>{children}</main>
    </>
  );
}
