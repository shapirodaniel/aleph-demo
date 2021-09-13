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
          display: flex;
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
