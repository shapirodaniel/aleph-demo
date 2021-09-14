// render paragraphs from blog.text strings "...\n..."
export default (text: string): Array<string> => {
  return text!.split("\n");
};
