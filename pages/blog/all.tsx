import React from "react";
import BlogHeader from "../../components/blog-header.tsx";

export default function Blog() {
  return (
    <>
      <style>
        {`
          section {
            height: 100%;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
      `}
      </style>
      <BlogHeader />
      <section>hi im blog page</section>
    </>
  );
}
