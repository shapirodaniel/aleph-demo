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
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            margin: 0 auto;
          }
      `}
      </style>
      <div className="layout">{children}</div>
    </>
  );
}
