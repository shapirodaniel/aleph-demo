import React from "react";
import { ParsedDateObject } from "../lib/interfaces.ts";

export default function DateLine({
  weekday,
  month,
  day,
  year,
}: ParsedDateObject) {
  return (
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
}
