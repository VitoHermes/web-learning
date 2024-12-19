import TodayWeatherCard from "../TodayWeatherCard/TodayWeatherCard";
import ForecastWeatherCard from "../ForecastWeatherCard/ForcastWeatherCard";
import CityWeatherCard from "../CityWeatherCard/CityWeatherCard";

import "./MainCard.css";

function MainCard(props) {
    const { currentCity, otherCities } = props;
    return (
        <div className="main-card">
            <div className="today-weather">
                <TodayWeatherCard data={currentCity.today} />
            </div>
            <div className="divider">
                <div className="forecast-weather">
                    <ForecastWeatherCard data={currentCity.forecast} />
                </div>
                <div className="city-weather">
                    <CityWeatherCard data={otherCities} />
                </div>
            </div>
        </div>
    )
}

export default MainCard;