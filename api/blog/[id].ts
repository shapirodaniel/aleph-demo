import type { APIHandler } from "aleph/types.d.ts";
import { BlogPost } from "../../lib/interfaces.ts";
import blogEntries from "../../src/blog-entries.js";

const selectBlogPost = (id: string) => {
  return blogEntries.find((blog: BlogPost) => blog.id === +id);
};

export const handler: APIHandler = ({ router, response }) => {
  const { id } = router.params;
  const blog = selectBlogPost(id);
  response.status = 200;
  response.json({ blog });
};
