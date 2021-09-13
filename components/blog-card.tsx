import React from "react";
import BlogPost from "../lib/types.ts";
import shorten from "../lib/post-shortener.js";
import formatDate from "../lib/date-formatter.js";

export default function BlogCard({ id, text, src, createdAt }: BlogPost) {
  return (
    <>
      <style>
        {`
        .blog-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: auto;
          width: 300px;
          margin: 10px;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
        }
        .blog-card img {
          position: relative;
          top: 0;
          left: 0;
          overflow: hidden;
          width: 300px;
          height: 200px;
          border-radius: inherit;
          filter: grayscale(80%);
        }
        .blog-card:hover img {
          filter: none;
        }
        .blog-card p {
          height: 40px;
          width: 100%;
          padding: 1em;
          text-align: left;
        }
        .footer {
          height: 36px;
          width: 100%;
          padding: 2px 0;
          display: flex;
          align-items: center;
          justify-content: flex-end;  
        }
        .footer button {
          height: 32px;
          width: 80px;
          border-radius: 16px;
          border: transparent;
          background-color: darkgrey;
          color: ghostwhite;
        }
        .footer button:hover {
          cursor: pointer;
          background-color: black;
        }
        `}
      </style>
      <div className="blog-card">
        <img src={src} />
        <div>
          <span>{formatDate(createdAt)}</span>
        </div>
        <p>{shorten(text)}</p>
        <div className="footer">
          <button>Read</button>
        </div>
      </div>
    </>
  );
}
