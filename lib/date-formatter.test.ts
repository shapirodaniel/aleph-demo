import { assertObjectMatch } from "https://deno.land/std@0.100.0/testing/asserts.ts";
import getParsedDate from "./date-formatter.js";

Deno.test(
  "Date Formatter getParsedDate() returns an object { weekday, month, day, year }, all of which are strings",
  () => {
    const dateObj = new Date("14 Jun 2020 15:00:00 PDT");
    const parsedDateObject = getParsedDate(dateObj);
    const expectedDateObject = {
      weekday: "Sunday",
      month: "June",
      day: "14",
      year: "2020",
    };
    assertObjectMatch(parsedDateObject, expectedDateObject);
  }
);
