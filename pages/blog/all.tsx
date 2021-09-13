import React from "react";
import BlogCard from "../../components/blog-card.tsx";
import blogEntries from "../../blog-entries.js";
import BlogPost from "../../lib/types.ts";

export default function Blog() {
  return (
    <>
      <style>
        {`
          section {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            flex-wrap: wrap;
          }
      `}
      </style>
      <section>
        {blogEntries.map(({ id, text, src, createdAt }: BlogPost) => (
          <BlogCard
            key={id}
            id={id}
            text={text}
            src={src}
            createdAt={createdAt}
          />
        ))}
      </section>
    </>
  );
}
