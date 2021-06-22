console.log("sort array based on name");
let students = [];

students[0] = { id: "A123", name: "JIN", marks: 45, city: "SEOUL" };
students[1] = { id: "A234", name: "RM", marks: 30, city: "BUSAN" };
students[2] = { id: "A345", name: "SUGA", marks: 28, city: "INCHEON" };
students[3] = { id: "A456", name: "JHOPE", marks: 65, city: "GANGNAM" };
students[4] = { id: "A567", name: "JIMIN", marks: 75, city: "ULSAN" };
students[5] = { id: "A678", name: "V", marks: 45, city: "JEONJU" };

students.sort((a, b) => 
{
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
students.forEach((e) => {
    console.log(`NAME: ${e.name} Stuednt id: ${e.id} Mark: ${e.marks} City: ${e.city}`);
});