import React, { ReactChild } from "react";

type LayoutProps = {
  children?: ReactChild | ReactChild[];
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <style>
        {`
          .layout {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: flex-start;
            width: 100%;
            margin: 0 auto;
            margin-top: 4em;
            padding: 1em;
          }
      `}
      </style>
      <div className="layout">{children}</div>
    </>
  );
}
