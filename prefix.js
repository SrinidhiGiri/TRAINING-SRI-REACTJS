console.log(" er for even elements dr for odd elements");
const username = ["V", "RM", "SUGA", "JHOPE"];
const alter = username.map((uname, idx) => {
    if (idx % 2 == 0) {
        return 'Er.' + uname;
    }
    else {
        return 'Dr.' + uname;
    }
}
);
for (let i = 0; i < alter.length; i++) {
    console.log(alter[i]);
}