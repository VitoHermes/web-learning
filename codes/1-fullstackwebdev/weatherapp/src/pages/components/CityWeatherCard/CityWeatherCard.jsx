import SingleCityCard from './components/SingleCityCard';
import './CityWeatherCard.css';
import CitySearch from './components/CitySearch';

function CityWeatherCard(props) {

    const { data } = props;
    return (
        <div className="other-city-weather-card">
            <CitySearch />
            <div className="other-city-weather-card-list">
                {data.map((item) => (
                    <SingleCityCard key={item.city} city={item.city} weather={item.weather} minTemp={item.minTemp} maxTemp={item.maxTemp} />
                ))}
            </div>
        </div>
    )
}

export default CityWeatherCard;