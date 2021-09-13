export default (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]/gi, "")
    .replace(/\s|\_/gi, "-");
};
