const { format } = require("date-fns");
const { v6: uuid } = require("uuid");

console.log(format(new Date(), "dd-MM-yyyy\tHH:mm:ss"));

console.log(uuid(), "uuid");
