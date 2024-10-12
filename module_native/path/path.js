

const path = require("node:path")

// bara separadora de rutas segun el sytem operativo
console.log(path.sep)

// unir rotas con path.join
const filepath = path.join("hola","gato","animal")
console.log(filepath)

const base = path.basename("/module_native/fs/asincronica/fs_colbas.js")
console.log(base)

const extension = path.extname("/module_native/fs/hello.txt")
console.log(extension)