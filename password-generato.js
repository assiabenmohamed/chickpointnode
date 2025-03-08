import { generate } from "generate-password";
var password = generate({
  length: 10,
  numbers: true,
});

console.log(password);
