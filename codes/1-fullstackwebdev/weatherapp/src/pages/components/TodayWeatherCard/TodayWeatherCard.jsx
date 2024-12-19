import "./TodayWeatherCard.css";


function TodayWeatherCard(props) {
    const renderDate = (date) => {
        const options = { day: '2-digit', year: 'numeric', month: 'short', weekday: 'long', hour: '2-digit', minute: '2-digit' };
        const formattedDate = new Intl.DateTimeFormat('en-US', options).format(new Date(date));
        return formattedDate;
    }

    const renderDetails = (icon, details) => {
        return (
            <div className="flex flex-col items-center justify-centern">
                <img src={`/assets/meta_icon/${icon}`} alt={details} />
                <p>{details}</p>
            </div>
        )
    }

    const weathersMap = (weather) => {
        return (
            <img src={`/assets/weather_icon/${weather}.png`} alt={weather} />
        )
    }

    const {
        date,
        city,
        weather,
        water,
        wind,
        sun,
        minTemp,
        maxTemp
    } = props.data;

    return (
        <div className="today-weather-card">
            <p className="text-sm mt-3">{renderDate(date)}</p>

            <h2 className="mt-5 mb-5 text-2xl text-bold">{city}</h2>

            <h2 className="text-bold text-6xl mt-3">{`${minTemp}°C`}</h2>
            <p className="text-sm">{`${minTemp}~${maxTemp}°`}</p>

            <p className="mt-20 mb-8">{weathersMap(weather)}</p>

            <div className="details">
                <div>{renderDetails('humidity.svg', water)}</div>
                <div>{renderDetails('wind_speed.svg', wind)}</div>
                <div>{renderDetails('PM2.5.svg', sun)}</div>
                <div>{renderDetails('Somatosensory_temperature.svg', minTemp)}</div>
            </div>
        </div>
    )
}

export default TodayWeatherCard;