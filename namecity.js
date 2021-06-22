console.log("sort based on name and city");
console.log("SORTING BASED ON NAME");
let student = [];

student[0] = { id: "A123", name: "V", marks: 45, city: "BUSAN" };
student[1] = { id: "A234", name: "RM", marks: 30, city: "SEOUL" };
student[2] = { id: "A345", name: "SUGA", marks: 28, city: "ULSAN" };
student[3] = { id: "A456", name: "JIMIN", marks: 65, city: "INCHEON" };
student[4] = { id: "A567", name: "JIN", marks: 75, city: "GANGNAM" };
student[5] = { id: "A678", name: "JHOPE", marks: 45, city: "JEONJU" };

student.sort((a, b) => {
    let fa = a.name.toLowerCase(),
        fb = b.name.toLowerCase();

    if (fa < fb) {
        return -1;
    }
    if (fa > fb) {
        return 1;
    }
    return 0;
});
student.forEach((e) => {
    console.log(`NAME: ${e.name} Stuednt id: ${e.id} Mark: ${e.marks} City: ${e.city}`);
});
console.log("SORTING BASED ON CITY");
student.sort((a, b) => {
    let fa = a.city.toLowerCase(),
        fb = b.city.toLowerCase();

    if (fa < fb) {
        return -1;
    }
    if (fa > fb) {
        return 1;
    }
    return 0;
});
student.forEach((e) => {
    console.log(`NAME: ${e.name} Stuednt id: ${e.id} Mark: ${e.marks} City: ${e.city}`);
});
