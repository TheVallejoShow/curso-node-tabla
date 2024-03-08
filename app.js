const { crearArchivo } =  require("./helpers/multiplicar.js");
const argv = require("./config/yargs.js");
require('colors');

console.clear();

// const [ , , arg3 = "base=4" ] = process.argv;
// const [ , base = 4 ] = arg3.split("=");

// const base = 8;
crearArchivo( argv.base, argv.listar, argv.hasta )
    .then( nombreArchivo => console.log(nombreArchivo, "creado".yellow))
    .catch( err => console.log(err));

// fs.writeFile( `tabla-${number}.txt`, salida, (err) => {
//     if ( err ) throw err;
//     console.log(`Tabla del ${number} creada`);
// });

