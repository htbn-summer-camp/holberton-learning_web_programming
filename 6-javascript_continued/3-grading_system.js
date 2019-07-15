var a = process.argv[2];
if (a >= 95) {
  console.log("You received an A+");
} else if (a >= 90) {
  console.log("You received a A");
} else if (a >= 85) {
  console.log("You received a B+");
} else if (a >= 80) {
  console.log("You received a B");
} else if (a >= 75) {
  console.log("You received a C+");
} else if (a >= 70) {
  console.log("You received a C");
} else if (a <= 65) {
  console.log("You received a D");
}
