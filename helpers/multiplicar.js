const colors = require('colors');
const fs = require("fs");

// Como lo hice yo
/*
const crearArchivo = ( base = 1 ) => {
    const promesa = new Promise( (resolve, reject) => {
        if(typeof base === "number"){
            console.log("=======================");
            console.log(`     Tabla del ${base}`);
            console.log("=======================");
            
            let salida = "";
            
            for (let i = 1; i <= 10; i++){
                salida += `${ base } x ${ i } = ${ base * i}\n`;
            };

            console.log(salida);
            const nameFile = `tabla-${base}.txt`;
            fs.writeFileSync( nameFile, salida );
            resolve(nameFile);
        } else {
            reject("No se pudo crear la tabla porque no se recibio un número")
        };
    });

    return promesa;
};
*/

const crearArchivo = async ( base = 1, listar = false, hasta = 10 ) => {
    try {  
        let salida = "";
        let consola = "";
                
        for (let i = 1; i <= hasta; i++){
            salida += `${ base } x ${ i } = ${ base * i }\n`;
            consola += `${ base } ${colors.red("x")} ${ i } ${ "=".red } ${ base * i }\n`;
        };

        if(listar) {
            console.log("=======================".green);
            console.log(`     Tabla del ${base}`.rainbow);
            console.log("=======================".green);
            console.log(consola);
        };

        const nameFile = `./salida/tabla-${base}.txt`;
        fs.writeFileSync( nameFile, salida );
    
        return `tabla-${base}.txt`.rainbow;
    } catch ( err ) {
        throw err;
    };
};

module.exports = {
    crearArchivo
};