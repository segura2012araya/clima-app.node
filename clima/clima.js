const axios = require('axios');

const getClima = async(lat, lng) => {

    const respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=9d7332139e245a708ba78bf0168abc9e&units=mtric`)
    return respuesta.data.main.temp;

}

module.exports = {
    getClima
}