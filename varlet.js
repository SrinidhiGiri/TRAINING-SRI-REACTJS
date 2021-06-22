console.log("var and let");
for (var i = 0; i < 3; i++) {
    console.log("var inside " + i);
}
console.log("outside loop still accessed" + i);
for (let j = 0; j < 3; j++) {
    console.log("inside loop" + j);

}
// console.log("outside loop"+j);