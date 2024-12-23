import './SingleCityCard.css';

function SingleCityCard(props) {

    const { city, weather, minTemp, maxTemp } = props;
    const weathersMap = (weather) => {
        return (
            <img src={`/assets/weather_icon/${weather}.png`} alt={weather} className="w-11 h-11" />
        )
    }

    const cityWeatherCardBackground = (city) => {
        return (
            `/assets/City/${city}.png`
        )
    }

    return (
        <div
            className="single-city-card"
            style={{
                backgroundImage: `url('/assets/City/${city}.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundColor: 'rgba(21, 0, 255, 0.5)',
                backgroundBlendMode: 'overlay',
            }}>
            <p>{weathersMap(weather)}</p>
            <h1 className="text-lg font-bold">{city}</h1>

            <p>{`${minTemp}~${maxTemp}°`}</p>
        </div>
    )
}

export default SingleCityCard;