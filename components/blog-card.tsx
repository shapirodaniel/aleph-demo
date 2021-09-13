import React from "react";
import DateLine from "./date-line.tsx";
import { BlogPost, ParsedDateObject } from "../lib/interfaces.ts";
import shortenPost from "../lib/post-shortener.js";
import getParsedDate from "../lib/date-formatter.js";

export default function BlogCard({
  id,
  title,
  text,
  src,
  createdAt,
}: BlogPost) {
  const { weekday, month, day, year }: ParsedDateObject =
    getParsedDate(createdAt);

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
          border-radius: 5px;
          border: 1px solid rgb(241, 241, 241);
        }
        .blog-card:hover {
          box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
        }
        .blog-card img {
          position: relative;
          top: 0;
          left: 0;
          overflow: hidden;
          width: 300px;
          height: 200px;
          border-radius: inherit;
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
          filter: grayscale(80%);
        }
        .blog-card:hover img {
          filter: none;
        }
        #blogTitle {
          font-size: 1.4em;
          font-weight: 500;
          text-align: left;
        }
        .blog-card p {
          height: 3em;
          width: 100%;
          padding: 1em;
          text-align: left;
          font-style: italic;
        }
        .footer {
          height: auto;
          width: 100%;
          padding: 1em;
          display: flex;
          align-items: center;
          justify-content: flex-end;  
        }
        .footer a {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 32px;
          width: 80px;
          border-radius: 16px;
          border: transparent;
          background-color: darkgrey;
          color: ghostwhite;
          text-decoration: none;
        }
        .footer a:hover {
          cursor: pointer;
          background-color: black;
        }
        `}
      </style>
      <div className="blog-card">
        <img src={src} />
        <DateLine weekday={weekday} month={month} day={day} year={year} />
        <div id="blogTitle">{title}</div>
        <p>{shortenPost(text)}</p>
        <div className="footer">
          <a href={`/blog/${id}`}>Read</a>
        </div>
      </div>
    </>
  );
}
