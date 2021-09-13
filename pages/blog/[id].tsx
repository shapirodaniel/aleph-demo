import React from "react";
import { BlogPost, ParsedDateObject } from "../../lib/interfaces.ts";
import { useRouter } from "https://deno.land/x/aleph/framework/react/mod.ts";
import getParsedDate from "../../lib/date-formatter.js";

// temp populate blog by choosing id from blogEntries
import blogEntries from "../../blog-entries.js";

const selectBlogPost = (id: string) => {
  return blogEntries.find((blog: BlogPost) => blog.id === +id);
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
          font-size: 1.6em;
          line-height: 1.5em;
          padding: 1em;
        }
      `}
      </style>
      <header id="blogHeader">
        <div id="blogTitle">{blog?.title}</div>
        <div id="blogDate">{`${weekday} ${month} ${day}, ${year}`}</div>
      </header>
      <p id="blogContent">{blog?.text || "oops, no blog post found"}</p>
    </>
  );
}
