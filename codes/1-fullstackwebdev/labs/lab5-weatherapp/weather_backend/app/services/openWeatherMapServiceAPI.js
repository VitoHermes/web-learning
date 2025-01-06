const axios = require("axios");
const config = require("../config");

exports.getWeather = async (req, res) => {
    return axios.get(`http://api.openweathermap.org/data/2.5/forecast?lat=35&lon=139&appid=${config.weatherAPIKey}`)
}