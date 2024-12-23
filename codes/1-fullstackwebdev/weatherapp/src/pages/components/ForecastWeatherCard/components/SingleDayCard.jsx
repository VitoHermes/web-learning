import './SingleDayCard.css';

function SingleDayCard(props) {
    const weathersMap = (weather) => {
        return (
            <img src={`/assets/weather_icon/${weather}.png`} alt={weather} />
        )
    }

    const { date, day, weather, minTemp, maxTemp } = props;
    return (
        <div className="single-day-card">
            <h1 className="text-lg font-bold">{day}</h1>
            <p className="text-sm mb-3">{date}</p>
            <p className="text-sm">{weathersMap(weather)}</p>
            <p className="text-sm mb-3">{`${minTemp}~${maxTemp}°`}</p>
        </div>
    )
}

export default SingleDayCard;