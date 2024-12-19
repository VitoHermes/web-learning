import './SingleDayCard.css';

function SingleDayCard(props) {
    const { date, day, weather, minTemp, maxTemp } = props;
    return (
        <div className="single-day-card">
            <h1>{date}</h1>
            <p>{day}</p>
            <p>{weather}</p>
            <p>{`${minTemp}~${maxTemp}°`}</p>
        </div>
    )
}

export default SingleDayCard;