require('dotenv').config()

const { leerInput, inquirerMenu, pausa, listarlugares } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");


const main = async() => {
    let opt = 0;
    const busquedas = new Busquedas();

    do {
        opt = await inquirerMenu();

        switch(opt) {
            case 1:
                // Mostrar mensaje
                const ciudad = await leerInput('Ciudad: ');
                //Buscar los lugares
                const lugares = await busquedas.buscarCiudad(ciudad);
                //Seleccionar el lugar
                const id = await listarlugares(lugares);
                if (id === '0') continue;
                //console.log({id});
                const lugarSel = lugares.find(l => l.id === id);
                busquedas.agregarHistorial(lugarSel.nombre);
                //Clima
                const clima = await busquedas.buscarClima(lugarSel.lat, lugarSel.lon);
                //Mostrar resultado
                console.clear();
                console.log('\nInformación de la ciudad\n'.green);
                console.log('Ciudad: ', lugarSel.nombre.green);
                console.log('Lat: ', lugarSel.lat);
                console.log('Lng: ', lugarSel.lon);
                console.log('Temp: ', clima.temp);
                console.log('Min: ', clima.temp_min);
                console.log('Max: ', clima.temp_max);
                console.log('¿Cómo está el clima?: ', clima.desc.green);
                break;
            case 2:
                busquedas.historialCapitalizado.forEach((lugar, i) => {
                    console.log(`${(i + 1 + '.').green} ${lugar}`);
                })
                break;
        }

        if (opt !== 0) await pausa();
    } while(opt !== 0);
}

main();