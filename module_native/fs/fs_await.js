// informacion de un archivo con el modulo nativo fs
//de manera asincrona con await 
// lo forma de hacer funcionar es con el .mjs 
// o con una funcion autoinvocada
const {readFile} = require("node:fs/promises");

// IEFE - Inmeditly Invoked function Expression 
(
    async () =>{
        const read1 = await readFile("./hello.txt", "utf-8")
        console.log(read1);

        console.log("pronto saldra el primer texto");

        const read2 = await readFile("./object.txt", "utf-8")    
        console.log(read2);

        console.log("y luego algunos objetos:");
    }
)()


