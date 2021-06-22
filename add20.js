let Student = [];

Student[0] = { id: "A123", name: "V", marks: 45, city: "BUSAN" };
Student[1] = { id: "A234", name: "RM", marks: 30, city: "SEOUL" };
Student[2] = { id: "A345", name: "SUGA", marks: 28, city: "ULSAN" };
Student[3] = { id: "A456", name: "JIMIN", marks: 65, city: "INCHEON" };
Student[4] = { id: "A567", name: "JIN", marks: 75, city: "GANGNAM" };
Student[5] = { id: "A678", name: "JHOPE", marks: 45, city: "JEONJU" };
console.log("add 20 marks to all stuednts");

let addmarks = Student.map(addmarks => {
    let mar = addmarks.marks + 20;

    console.log(`NAME: ${addmarks.name} Stuednt id: ${addmarks.id} Mark: ${mar} City: ${addmarks.city}`);

});