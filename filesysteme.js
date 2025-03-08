import fs from "fs";
const content = "Hello Node";
fs.writeFileSync("./welcome.txt", content);
fs.readFile("./welcome.txt", (err, date) => {
  if (err) {
    console.log(err);
  } else {
    console.log(date.toString());
  }
});
