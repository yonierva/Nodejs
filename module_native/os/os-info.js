// informacion del sistema operativo con el modulo nativo os
const os = require("node:os")

console.log("informacion de la computadora")
console.log("---------------")

console.log("nombre del sistema operativo",os.platform())
console.log("version del sistema operativo",os.release())
console.log("arquitectura",os.arch())
console.log("cpus",os.cpus())
console.log("memoria libre",os.freemem() /1024 /1024)
console.log("memoria toatl",os.totalmem() /1024 /1024)
console.log("tiempo",os.uptime() /60 /60)