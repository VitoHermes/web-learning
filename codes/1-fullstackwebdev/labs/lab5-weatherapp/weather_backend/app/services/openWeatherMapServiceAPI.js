const axios = require("axios");
const config = require("../config");


exports.getWeathers = async (req, res) => {
    const { latitude, longitude } = req.body;
    return axios.get(`http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${config.weatherAPIKey}`)
}