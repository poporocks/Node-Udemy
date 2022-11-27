const fs = require('fs');

const crearArchivo = (base = 5) => {
    let salida = '';

    salida += '===================\n';
    salida += `    Tabla de: ${base}    \n`;
    salida += '===================\n';

    for(let i = 1; i <= 10; i++){
        salida += `${base} x ${i} =  ${base * i}\n`;
    }

    console.log(salida);

    fs.writeFileSync(`Tabla-${base}.txt`, salida);
    console.log(`Tabla-${base}.txt creado.`);
}

module.exports = {
    crearArchivo
}