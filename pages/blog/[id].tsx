import React from "react";
import {
  useDeno,
  useRouter,
} from "https://deno.land/x/aleph@v0.3.0-beta.12/framework/react/mod.ts";
import getParsedDate from "../../lib/date-formatter.js";

// render paragraphs from blog.text strings "...\n..."
const splitContentAtNewline = (text: string): Array<string> => {
  return text.split("\n");
};

export default function FullPageBlog() {
  const { params } = useRouter();

  const { blog } = useDeno(async () => {
    return await (
      await fetch(`http://localhost:8080/api/blog/${params.id}`)
    ).json();
  });

  // convert blog.createdAt as SSR returns stringified UTC timestamp
  const { weekday, month, day, year } = getParsedDate(new Date(blog.createdAt));

  return (
    <>
      <style>
        {`
        #blogHeader {
          background-color: black;
          color: white;
          padding: 2em;
          width: 100%;
          margin-bottom: 2em;
        }
        #blogTitle {
          font-size: 3em;
        }
        #blogDate {
          margin-top: 2em;
          text-align: right;
        }
        #blogContent {
          font-size: 1.4em;
          line-height: 1.5em;
          padding: 1em;
        }
        #blogContent > p:not(:first-child) {
          margin-top: .5em;
        }
        @media screen and (max-width: 400px) {
          #blogContent {
            font-size: 1.5em;
            line-height: 1.3em;
            padding-top: 0;
          }
        }
      `}
      </style>
      <header id="blogHeader">
        <div id="blogTitle">{blog?.title}</div>
        <div id="blogDate">{`${weekday} ${month} ${day}, ${year}`}</div>
      </header>
      <div id="blogContent">
        {splitContentAtNewline(blog!.text).map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        )) || "oops, no blog post found"}
      </div>
    </>
  );
}
