import axios from 'axios';
import { getWeatherIconLg } from './getWeatherIconLg';
import { useEffect, useState } from 'react';
export const GetTempToday = (props) => {
    const { latitude, longitude } = props;
    const apiKey = '31f0270f73eec09e278e668dbaabb991';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&lang=zh_cn&units=metric`;
    const [tempData, setTempData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(url);
            const data = response.data;

            // 更新状态或处理数据
            setTempData(data);
        }
        fetchData();
    }, []);

    const [
        temp,
        temp_min,
        temp_max,
        humidity,
        weather,
        weather_description,
        weather_icon,
        wind_speed,
        temp_feels_like,
        sun_set,
        sun_rise
    ] = [
            tempData.main.temp,
            tempData.main.temp_min,
            tempData.main.temp_max,
            tempData.main.humidity,
            tempData.weather[0].main,
            tempData.weather[0].description,
            tempData.weather[0].icon,
            tempData.wind.speed,
            tempData.main.feels_like,
            tempData.sys.sunset,
            tempData.sys.sunrise
        ];

    // console.log(temp, temp_min, temp_max, humidity, weather, weather_description, weather_icon, wind_speed, temp_feels_like);
    // console.log(data);
    const weatherIconLg = getWeatherIconLg(weather);

    const getDate = (timestamp) => {
        const date = new Date(timestamp * 1000);
        const formattedDate = date.toISOString().split('T')[0];
        return formattedDate;
    }

    const getTime = (timestamp) => {
        const date = new Date(timestamp * 1000);
        const formattedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        return formattedTime;
    }

    return {
        'date': getDate(tempData.dt),
        'city': tempData.name,
        'temp': temp,
        'minTemp': temp_min,
        'maxTemp': temp_max,
        'weather': weather,
        'weather_description': weather_description,
        'weather_icon': weather_icon,
        'weatherIconLg': weatherIconLg,
        'water': humidity,
        'wind': wind_speed,
        'temp_feels_like': temp_feels_like,
        'sun_set': getTime(sun_set),
        'sun_rise': getTime(sun_rise)
    };
};

// "today": {
//     "date": "2024-03-20",
//     "city": "Melbourne",
//     "weather": "Cloudy",
//     "water": 85,
//     "wind": 9,
//     "sun": 75,
//     "minTemp": 10,
//     "maxTemp": 20
// },