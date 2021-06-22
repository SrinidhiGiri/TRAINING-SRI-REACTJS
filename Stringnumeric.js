// WRITE A PROGRAM TO CHECK IF THE INPUT STRING IS NUMERIC OR NOT
console.log(" If string input is numeric")

var val = "1808";
g = isNaN(val);
console.log(g);
if (g == false) {
    console.log("Its a number");
}
var val = "ABC";
g = isNaN(val);
console.log(g);
if (g == false) {
    console.log("Its a number");
}
var val = "Its a string";
g = isNaN(val);
console.log(val + ' ' + g);
if (g == false) {
    console.log("Its a number");
}