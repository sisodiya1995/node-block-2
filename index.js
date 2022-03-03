const moment = require("moment");

console.log(moment("20111031", "YYYYMMDD").fromNow());

console.log(moment().subtract(10, 'days').calendar()); // 02/21/2022
console.log(moment().subtract(6, 'month').calendar());
console.timeLog(moment().add(7, 'year').calendar());