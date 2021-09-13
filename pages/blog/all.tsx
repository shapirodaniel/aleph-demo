import React from "react";
import BlogCard from "../../components/blog-card.tsx";
import { BlogPost } from "../../lib/interfaces.ts";
import blogEntries from "../../blog-entries.js";

export default function Blog() {
  return (
    <>
      <style>
        {`
        section {
          margin: 0 auto;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
        }
      `}
      </style>
      <section>
        {blogEntries.map(({ id, title, text, src, createdAt }: BlogPost) => (
          <BlogCard
            key={id}
            id={id}
            title={title}
            text={text}
            src={src}
            createdAt={createdAt}
          />
        ))}
      </section>
    </>
  );
}
