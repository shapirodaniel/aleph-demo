import React from "react";
import BlogHeader from "../../components/blog-header.tsx";
import BlogCard from "../../components/blog-card.tsx";
import blogEntries from "../../blog-entries.js";
import BlogPost from "../../lib/types.ts";

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
      <section>
        {blogEntries.map(({ id, text, src }: BlogPost) => (
          <BlogCard key={id} id={id} text={text} src={src} />
        ))}
      </section>
    </>
  );
}
