console.log(process.argv);

const num1 = parseInt(process.argv[2]);
const num2 = parseInt(process.argv[4]);
const op = process.argv[3];

console.log(op);

if (op === "divide") {
  console.log(num1 / num2);
}