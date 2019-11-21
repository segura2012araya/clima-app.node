const lugar = require('./lugar/lugar');
const clima = require('./clima/clima')

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


const getinfo = async(direccion) => {

    try {
        const cordenadas = await lugar.getLugarLatLon(direccion);
        const temperatura = await clima.getClima(cordenadas.lat, cordenadas.lng);
        console.log('este ->' + cordenadas.direccion);

        return `El clima de ${cordenadas.direccion} es ${temperatura}`;

    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`;
    }


}

getinfo(argv.direccion)
    .then(console.log)
    .catch(console.log)