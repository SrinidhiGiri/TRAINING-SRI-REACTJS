console.log("add 20 marks to all stuednts and add 15 marks whose pincode is 600053");

let Students = [];

Students[0] = { id: "A123", name: "RAJ", marks: 45, city: "Chennai" ,pincode:600053};
Students[1] = { id: "A234", name: "TEJU", marks: 30, city: "Madurai" ,pincode:620053};
Students[2] = { id: "A345", name: "SAN", marks: 28, city: "Trichy",pincode:639003 };
Students[3] = { id: "A456", name: "ARU", marks: 65, city: "Chennai",pincode:600053 };
Students[4] = { id: "A567", name: "SRI", marks: 75, city: "Salem",pincode:600014 };
Students[5] = { id: "A678", name: "VARADA", marks: 45, city: "Banglore",pincode:560002 };


let addmark = Students.map(addmarks => {

    let mar ;
    if(addmarks.pincode==600053)
    {
    mar=addmarks.marks + 35;
    }
    else
    {
        mar=addmarks.marks+20

    }
    
    console.log(`NAME: ${addmarks.name} Stuednt id: ${addmarks.id} Mark: ${mar} City: ${addmarks.city} Pincode: ${addmarks.pincode}`);

});