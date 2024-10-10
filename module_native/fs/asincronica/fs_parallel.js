// informacion de un archivo con el modulo nativo fs
//de manera asincrona paralelo
// tambien se puede con la extension .mjs utilzando ES module
const {readFile} = require("node:fs/promises");

Promise.all([
    readFile("../hello.txt", "utf-8"),
    readFile("../object.txt", "utf-8")
]).then(([text1,text2]) => {
    console.log(text1)
    console.log(text2)
})


