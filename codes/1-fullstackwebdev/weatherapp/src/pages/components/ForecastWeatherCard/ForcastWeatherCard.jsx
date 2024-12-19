import SingleDayCard from './components/SingleDayCard';
import './ForecastWeatherCard.css';

function ForcastWeatherCard(props) {
    const { data } = props;
    console.log(data);
    return (
        <div className="forecast-weather-card">
            {data.map((item) => (
                <SingleDayCard
                    key={item.date}
                    date={item.date}
                    day={item.day}
                    weather={item.weather}
                    minTemp={item.minTemp}
                    maxTemp={item.maxTemp}
                />
            ))}
        </div>
    )
}

export default ForcastWeatherCard;