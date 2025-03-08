import { createServer } from "http";
const server = createServer((req, res) => {
  res.end("<h1>Hello Node!!!!</h1>");
});
server.listen(3000, () => {
  console.log("server is running on port 3000");
});
