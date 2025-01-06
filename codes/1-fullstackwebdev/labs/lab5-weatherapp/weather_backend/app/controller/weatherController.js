const openWeatherMapServiceAPI = require("../services/openWeatherMapServiceAPI");
exports.index = async (req, res) => {
    const result = await openWeatherMapServiceAPI.getWeather();
    res.send(result.data);
}