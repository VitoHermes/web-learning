import MainCard from "../components/MainCard/MainCard";
import "./HomePage.css";
import currentCity from "../../mock-data/currentCity.json";
import otherCities from "../../mock-data/otherCities.json";
import { getWeathers } from "../../utils/getTempTodayFromBackend";
import { formatLocalDate } from "../../utils/formatLocation";
import { useState, useEffect } from "react";


function HomePage() {
    // const [data, setData] = useState(null);
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(null);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             setLoading(true);
    //             const result = await getWeathers();
    //             setData(result.data);
    //             console.log("result.data获取成功", result.data);
    //         } catch (error) {
    //             console.error("Error fetching weather data:", error);
    //             setError("无法连接到天气服务，请稍后再试。");
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     fetchData();
    // }, []);

    return (
        <div className="home-page">
            <MainCard currentCity={currentCity} otherCities={otherCities} />
        </div>
    )
}

export default HomePage;