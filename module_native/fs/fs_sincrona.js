// informacion de un archivo con el modulo nativo fs
const fs = require("node:fs")
// de manera sincronica
const stats = fs.statSync("./hello.txt") // para ver los caracteristicas de un documento 
const read = fs.readFileSync("./hello.txt", "utf-8") // para leer lo tenga el documento

console.log(
    stats.isFile(), // si es un fichero
    stats.isDirectory(), // si e sun directorio
    stats.isSymbolicLink(), // si es un enlace simbolico
    stats.size ,// el tamaño en bytes  
    read // lectura del documento
)