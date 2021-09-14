import {
  assertObjectMatch,
  assertEquals,
} from "https://deno.land/std@0.100.0/testing/asserts.ts";
import getParsedDate from "./date-formatter.js";
import shortenPost from "./post-shortener.js";
import splitContentAtNewline from "./split-content.ts";

Deno.test(
  "Date Formatter getParsedDate() takes in a UTCTimeStamp: string and returns an object { weekday, month, day, year }, all of which are strings",
  () => {
    const UTCTimeStamp = "14 Jun 2020 15:00:00 PDT";
    const parsedDateObject = getParsedDate(UTCTimeStamp);
    const expected = {
      weekday: "Sunday",
      month: "June",
      day: "14",
      year: "2020",
    };

    assertObjectMatch(parsedDateObject, expected);
  }
);

Deno.test(
  "Post Shortener shortenPost() returns a 50-char-max string with an ellipsis appended",
  () => {
    const paragraph =
      "Ipsum pariatur eu ipsum aute cupidatat occaecat ut sit. Et tempor laborum quis fugiat labore et ex sit qui proident cupidatat esse. Veniam cupidatat Lorem aute ipsum ea duis veniam velit magna fugiat voluptate cillum ipsum. Incididunt laboris incididunt fugiat tempor sint sunt nisi. Cupidatat voluptate eu id ea velit ea ullamco proident. Et ullamco in proident enim velit et eiusmod sit sunt. Magna qui incididunt non et dolor minim cillum.";
    const shortened = shortenPost(paragraph);
    const expected = "Ipsum pariatur eu ipsum aute cupidatat occaecat ut...";

    assertEquals(shortened, expected);
  }
);

// custom assertion to support typechecking Splitter test below
const assertIsArray = (input) => {
  if (!Array.isArray(input)) {
    throw "Input is not array";
  }
};

Deno.test(
  "Splitter splitContentAtNewline() takes in a string with single newlines and returns an array of paragraphs",
  () => {
    const stringWithNewlines = "This\nstring\nhas\nnewlines";
    const paragraphArray = splitContentAtNewline(stringWithNewlines);
    const expected = ["This", "string", "has", "newlines"];

    assertIsArray(paragraphArray);
    assertEquals(paragraphArray, expected);
  }
);
