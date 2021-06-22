console.log("remove stuednts who are not from chennai and banglore");
Student[0] = { id: "A123", name: "Abi", marks: 45, city: "Chennai" };
Student[1] = { id: "A234", name: "Var", marks: 30, city: "CBE" };
Student[2] = { id: "A345", name: "Achu", marks: 28, city: "Trichy" };
Student[3] = { id: "A456", name: "Sri", marks: 65, city: "Banglore" };
Student[4] = { id: "A567", name: "Vishal", marks: 75, city: "Chennai" };
Student[5] = { id: "A678", name: "Vibhav", marks: 45, city: "Banglore" };


var result = Student.filter(citysort => {
    return citysort.city == "Chennai" || citysort.city == "Banglore";
});

console.log(result);