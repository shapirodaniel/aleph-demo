import React from "react";
import { BlogPost } from "../../lib/interfaces.ts";
import { useRouter } from "https://deno.land/x/aleph/framework/react/mod.ts";
import getParsedDate from "../../lib/date-formatter.js";

// temp populate blog by choosing id from blogEntries
import blogEntries from "../../blog-entries.js";

const selectBlogPost = (id: string) => {
  return blogEntries.find((blog: BlogPost) => blog.id === +id);
};

// render paragraphs from blog.text strings "...\n..."
const splitContentAtNewline = (text: string): Array<string> => {
  return text.split("\n");
};

export default function FullPageBlog() {
  const { params } = useRouter();
  const blog = selectBlogPost(params.id);
  const { weekday, month, day, year } = getParsedDate(blog?.createdAt);

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
