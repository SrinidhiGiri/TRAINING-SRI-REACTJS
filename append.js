console.log("append san for names starting with Dr");
const usernames = ["CHEN", "BAEKH", "SUHO", "SEHUN",];
const alters = usernames.map((unames, idx) => {
    if (idx % 2 == 0) {
        return 'Er.' + unames;
    }
    else {
        return 'Dr.' + unames;
    }
}
);

var formatted = [];
for (let i = 0; i < alters.length; i++) {
    if (alters[i].startsWith("Dr")) {
        console.log(alters[i] + "San");

    }
    else {
        console.log(alters[i]);
    }

}