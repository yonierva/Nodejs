// informacion de un archivo con el modulo nativo fs
const fs = require("node:fs")
//de manera asincrona con colbas
fs.readFile("./hello.txt", "utf-8" , (err, read) =>{
    console.log(read)
}) 

console.log("pronto saldra el primer texto")

fs.readFile("./object.txt", "utf-8" , (err, read) =>{
    console.log(read)
}) 

console.log("y luego algunos objetos:")