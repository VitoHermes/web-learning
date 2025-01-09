import axios from 'axios';
import { getWeatherIconLg } from './getWeatherIconLg';

export const getWeathers = async (props) => {
    const { latitude, longitude } = props;
    const url = `http://localhost:8000/api/v1/weathers?latitude=${latitude}&longitude=${longitude}`;
    // const url1 = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&lang=zh_cn&units=metric`;

    const response = await axios.get(url);
    const data = response.data;

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
            data.main.temp,
            data.main.temp_min,
            data.main.temp_max,
            data.main.humidity,
            data.weather[0].main,
            data.weather[0].description,
            data.weather[0].icon,
            data.wind.speed,
            data.main.feels_like,
            data.sys.sunset,
            data.sys.sunrise
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
        'date': getDate(data.dt),
        'city': data.name,
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