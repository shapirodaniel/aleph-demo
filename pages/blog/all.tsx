import React from "react";
import BlogCard from "../../components/blog-card.tsx";
import { BlogPost } from "../../lib/interfaces.ts";
import { useDeno } from "https://deno.land/x/aleph@v0.3.0-beta.12/framework/react/mod.ts";

export default function Blog() {
  const { blogEntries } = useDeno(async () => {
    return await (await fetch(`http://localhost:8080/api/blog/all`)).json();
  });

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
            // convert Date as Deno fetch returns stringified val since props originate from server and are passed via SSR
            createdAt={new Date(createdAt)}
          />
        ))}
      </section>
    </>
  );
}
