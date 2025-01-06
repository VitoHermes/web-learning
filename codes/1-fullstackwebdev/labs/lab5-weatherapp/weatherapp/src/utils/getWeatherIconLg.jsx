
export const getWeatherIconLg = (weather) => {
    const weatherLow = weather.toLowerCase();
    const weatherMap = {
        'clear': 'Sunny',
        'clouds': 'Cloudy',
        'rain': 'Rainy',
        'snow': 'Snow',
        'thunderstorm': 'Thunderstorm',
        'atmosphere': 'Atmosphere'
    }
    return `/assets/weather_icon/${weatherMap[weatherLow]}.png`;
};
