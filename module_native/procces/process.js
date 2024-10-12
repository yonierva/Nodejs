// da informacion del proceso actual

// argumentos de entrada
// console.log(process.argv)

// controlar el proceso y su salida
// 0 = todo bien y termina
// 1 = algo a salido mal, sal de ahi 

process.exit(0)

// controlar lo eventos del procesos 
process.on("exit",() =>{
    // que haga algo 
})

// current working directory
// dice desde que carpeta se esta ejecutando el proceso 
console.log(process.cwd)

// variables de entorno
console.log(process.env.pe)
