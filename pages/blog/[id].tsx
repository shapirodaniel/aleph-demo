import React from "react";
import { BlogPost } from "../../lib/interfaces.ts";
import { useRouter } from "https://deno.land/x/aleph/framework/react/mod.ts";

// temp populate blog by choosing id from blogEntries
import blogEntries from "../../blog-entries.js";

const selectBlogPost = (id: string) => {
  return blogEntries.find((blog: BlogPost) => blog.id === +id);
};

export default function FullPageBlog() {
  const { params } = useRouter();
  const blog = selectBlogPost(params.id);
  return (
    <>
      <div>hi im full page blog with id {blog?.id}</div>
      <p>{blog?.text || "oops, no blog post found"}</p>
    </>
  );
}
