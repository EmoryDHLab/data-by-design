export const authors = [
  "Lauren Klein",
  "Tanvi Sharma",
  "Jay Varner",
  "Shiyao Li",
  "Margy Adams",
  "Nicholas Yang",
  "Dan Jutan",
  "Jianing Fu",
  "Anna Mola",
  "Zhou Fang",
  "Yang Li",
  "Silas Munro",
];

export const authorsString = `${authors
  .slice(0, authors.length - 1)
  .join(", ")}, and ${authors[authors.length - 1]}`;
