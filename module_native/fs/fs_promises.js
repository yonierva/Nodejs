// informacion de un archivo con el modulo nativo fs
const fs = require("node:fs/promises");
//de manera asincrona con promises
fs.readFile("./hello.txt", "utf-8")
    .then((read) => {
        console.log(read);
    });

console.log("pronto saldra el primer texto");

fs.readFile("./object.txt", "utf-8")
    .then((read) => {
        console.log(read);
    });

console.log("y luego algunos objetos:");
