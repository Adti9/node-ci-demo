const { greet } = require('./app');
if (greet("DevOps") !== "Hello, DevOps!") {
  console.error("Test Failed!");
  process.exit(1);
}
console.log("All unit tests passed successfully!");
