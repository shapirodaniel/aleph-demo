import type { APIHandler } from "aleph/types.d.ts";

// in production, served from FaaS / db endpoint
import blogEntries from "../../src/blog-entries.js";

export const handler: APIHandler = ({ response }) => {
  response.status = 200;
  response.json({ blogEntries });
};
