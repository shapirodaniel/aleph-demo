import React from "react";
import BlogPost from "../lib/types.ts";
import shortenPost from "../lib/post-shortener.js";
import getParsedDate from "../lib/date-formatter.js";

interface ParsedDateObject {
  weekday: string;
  month: string;
  day: number;
  year: number;
}

const Date = ({ weekday, month, day, year }: ParsedDateObject) => (
  <>
    <style>
      {`
      .container {
        display: flex;
        width: 100%;
        align-items: baseline;
        justify-content: space-between;
        padding: 1em;
      }
      #day-and-month {
        font-size: 16px;
      }
      #day-and-month span {
        font-weight: bold;
      }
      #year {
        font-size: 16px;
        opacity: .6
      }
      `}
    </style>
    <section className="container">
      <div id="day-and-month">
        <span>{weekday}</span>
        {`, ${month} ${day}`}
      </div>
      <div id="year">{year}</div>
    </section>
  </>
);

export default function BlogCard({ id, text, src, createdAt }: BlogPost) {
  const { weekday, month, day, year } = getParsedDate(createdAt);

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
        .blog-card p {
          height: 3em;
          width: 100%;
          padding: 1em;
          text-align: left;
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
        <Date weekday={weekday} month={month} day={day} year={year} />
        <p>{shortenPost(text)}</p>
        <div className="footer">
          <a href={`/blog/${id}`}>Read</a>
        </div>
      </div>
    </>
  );
}
