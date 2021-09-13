export default (date) => {
  const weekday = date.toLocaleDateString("en-us", { weekday: "long" });
  const month = date.toLocaleDateString("en-us", { month: "long" });
  const day = date.toLocaleDateString("en-us", { day: "numeric" });
  const year = date.toLocaleDateString("en-us", { year: "numeric" });
  return { weekday, month, day, year };
};
