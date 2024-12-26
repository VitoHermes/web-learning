
export const formatLocation = (city) => {
    // console.log(city);
    const cityName = city.toLowerCase();
    const cityLocation = {
        'melbourne': {
            latitude: -37.8136,
            longitude: 144.9631
        },
        'sydney': {
            latitude: -33.8688,
            longitude: 151.2153
        },
        'London': {
            latitude: 51.5074,
            longitude: -0.1278
        },
        'paris': {
            latitude: 48.8566,
            longitude: 2.3522
        },
        'new york': {
            latitude: 40.7128,
            longitude: -74.0060
        },
        'tokyo': {
            latitude: 35.6828,
            longitude: 139.6922
        },
        'beijing': {
            latitude: 39.9042,
            longitude: 116.3975
        }
    }
    // console.log(cityLocation[cityName]);
    if (!cityLocation[cityName]) {
        return null;
    }
    return { latitude: cityLocation[cityName].latitude, longitude: cityLocation[cityName].longitude };
};
