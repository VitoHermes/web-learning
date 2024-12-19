import SingleCityCard from './components/SingleCityCard';
import './CityWeatherCard.css';


// {
//     'city': 'London',
//     'weather': 'Sunny',
//     'minTemp': 10,
//     'maxTemp': 20,
// }

function CityWeatherCard(props) {

    const { data } = props;
    return (
        <div className="other-city-weather-card">
            {data.map((item) => (
                <SingleCityCard key={item.city} city={item.city} weather={item.weather} minTemp={item.minTemp} maxTemp={item.maxTemp} />
            ))}
        </div>
    )
}

export default CityWeatherCard;