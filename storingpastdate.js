console.log("STORE PAST DATE");
const today = new Date()
const yesterday = new Date(today)

yesterday.setDate(yesterday.getDate() - 1)

today.toDateString()
yesterday.toDateString()
console.log("Yesterday's date::" + yesterday);