import './SingleCityCard.css';

function SingleCityCard(props) {
    const { city, weather, minTemp, maxTemp } = props;
    return (
        <div className="single-city-card">
            <h1>{city}</h1>
            <p>{weather}</p>
            <p>{`${minTemp}~${maxTemp}°`}</p>
        </div>
    )
}

export default SingleCityCard;