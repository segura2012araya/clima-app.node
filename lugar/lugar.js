const axios = require('axios');

const getLugarLatLon = async(direccion) => {
    const direccionURL = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${direccionURL}`,
        headers: { 'x-rapidapi-key': 'f292873482msh3c7449f53c1969dp12af63jsn10e68d4f7059' }
    })

    const respuesta = await instance.get();
    if (respuesta.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${direccionURL}`);
    }
    const datos = respuesta.data.Results[0];
    const direccionpais = datos.name;
    const lat = datos.lat;
    const lng = datos.lon;
    return {
        direccion: direccionpais,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLon
}