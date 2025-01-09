import { useState, useEffect } from "react";
import TodayWeatherCard from "../TodayWeatherCard/TodayWeatherCard";
import ForecastWeatherCard from "../ForecastWeatherCard/ForcastWeatherCard";
import CityWeatherCard from "../CityWeatherCard/CityWeatherCard";
import { GetTempToday } from "../../../utils/getTempToday";
import { getWeathers } from "../../../utils/getTempTodayFromBackend";
import "./MainCard.css";
import { formatLocation } from "../../../utils/formatLocation";



function MainCard(props) {
    const { currentCity, otherCities } = props;
    const currentCityLocation = formatLocation('melbourne');
    const [currentCityData, setCurrentCityData] = useState(null);


    useEffect(() => {
        GetTempToday(currentCityLocation)
            // getWeathers(currentCityLocation)
            .then(currentCityData => {
                setCurrentCityData(currentCityData);
            })
            .catch(error => {
                console.error('Error fetching city data:', error);
            });
    }, []); // Empty dependency array ensures this runs only once on mount 


    return (
        <div className="main-card">
            <div className="today-weather">
                {currentCityData ? (
                    <TodayWeatherCard data={currentCityData} />
                ) : (
                    <div>Loading...</div>
                )}
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