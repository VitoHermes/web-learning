const express = require("express");

// create a router instance
const weatherRouter = express.Router();


let weatherData = [
    {
        "date": "2024-03-20",
        "city": "Melbourne",
        "weather": "Cloudy",
        "water": 85,
        "wind": 9,
        "sun": 75,
        "minTemp": 10,
        "maxTemp": 20
    },
    {
        "date": "2024-03-21",
        "city": "Melbourne",
        "day": "Monday",
        "weather": "Rain",
        "water": 85,
        "wind": 9,
        "sun": 75,
        "minTemp": 10,
        "maxTemp": 20
    },
    {
        "date": "2024-03-22",
        "city": "Melbourne",
        "day": "Tuesday",
        "weather": "Cloudy",
        "water": 85,
        "wind": 9,
        "sun": 75,
        "minTemp": 10,
        "maxTemp": 20
    },
    {
        "date": "2024-03-23",
        "city": "Melbourne",
        "day": "Wednesday",
        "weather": "Cloudy_day",
        "water": 85,
        "wind": 9,
        "sun": 75,
        "minTemp": 10,
        "maxTemp": 20
    },
    {
        "date": "2024-03-24",
        "city": "Melbourne",
        "day": "Thursday",
        "weather": "Sunny",
        "water": 85,
        "wind": 9,
        "sun": 75,
        "minTemp": 10,
        "maxTemp": 20
    }
]

module.exports = weatherRouter;

// get weather data
//http://localhost:8000/api/list
weatherRouter.get('/list', (req, res) => {
    res.send(weatherData);
});

// get items by query and date
//http://localhost:8000/api/item?city=Melbourne&date=2024-03-20
weatherRouter.get('/item', (req, res) => {
    const { city, date } = req.query;
    if (!city || !date) {
        res.status(400).send("City and date are required");
    }
    const weather = weatherData.find(item => item.city === city && item.date === date);
    if (!weather) {
        res.status(404).send("Weather data not found");
    }
    res.send(weather);
});

// post add a new item
//http://localhost:8000/api/additem
weatherRouter.post('/additem', (req, res) => {
    console.log(req.body);
    const { date, city, day, weather, water, wind, sun, minTemp, maxTemp } = req.body;
    if (!date || !city || !day || !weather || !water || !wind || !sun || !minTemp || !maxTemp) {
        res.status(400).send("All fields are required");
    }
    const newItem = { date, city, day, weather, water, wind, sun, minTemp, maxTemp };
    weatherData.push(newItem);
    res.status(201).send({ message: "Item added successfully" });
});


//get weather data by weather condition api/weather/:condition/rainy
//http://localhost:8000/api/weather/rainy
weatherRouter.get('/weather/:condition', (req, res) => {
    const { condition } = req.params;
    const weather = weatherData.filter(item => item.weather === condition);
    res.send(weather);
});

//get weather data by city
//http://localhost:8000/api/city/Melbourne
weatherRouter.get('/city/:city', (req, res) => {
    const { city } = req.params;
    const weather = weatherData.filter(item => item.city === city);
    res.send(weather);
});

//Delete weather data by city
//http://localhost:8000/api/city/Melbourne
weatherRouter.delete('/city/:city', (req, res) => {
    const { city } = req.params;
    weatherData = weatherData.filter(item => item.city !== city);
    res.send({ message: "Item deleted successfully" });
});


