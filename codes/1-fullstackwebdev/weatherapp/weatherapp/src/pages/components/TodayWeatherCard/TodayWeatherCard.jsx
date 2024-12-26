import { useEffect, useState } from "react";
import "./TodayWeatherCard.css";


function TodayWeatherCard(props) {
    const [dateNow, setDateNow] = useState(new Date());

    useEffect(() => {
        // setDateNow(new Date());

        const intervalId = setInterval(() => {
            setDateNow(new Date());
        }, 60000);
        return () => clearInterval(intervalId);

    }, []);

    const renderDate = (date) => {
        const options = { day: '2-digit', year: 'numeric', month: 'short', weekday: 'long', hour: '2-digit', minute: '2-digit' };
        const formattedDate = new Intl.DateTimeFormat('en-US', options).format(new Date(date));
        return formattedDate;
    }

    const renderDetails = (icon, details) => {
        return (
            <div className="flex flex-col items-center justify-centern w-[30px] h-[30px]">
                <img src={`/assets/meta_icon/${icon}`} alt={details} />
                <p>{details}</p>
            </div>
        )
    }

    const weathersMap = (weather) => {
        return (
            <img src={weatherIconLg} alt={weather} />
        )
    }

    const {
        city,
        weather,
        water,
        wind,
        sun,
        temp,
        minTemp,
        maxTemp,
        temp_feels_like,
        weatherIconLg,
        sun_set,
        sun_rise
    } = props.data;

    return (
        <div
            className="today-weather-card"
            style={{
                backgroundImage: `url('/assets/background/${weather}_background.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundColor: 'rgba(21, 0, 255, 0.8)',
                backgroundBlendMode: 'overlay',
            }}>
            <p className="text-sm mt-3">{renderDate(dateNow)}</p>

            <h2 className="mt-5 mb-5 text-2xl text-bold">{city}</h2>

            <h2 className="text-bold text-6xl mt-3">{`${temp.toFixed(1)}°C`}</h2>
            <p className="text-sm">{`${minTemp.toFixed(1)}~${maxTemp.toFixed(1)}°`}</p>

            <p className="mt-20 mb-8">{weathersMap(weather)}</p>

            <div className="details">
                <div>{renderDetails('sunrise.svg', sun_rise)}</div>
                <div>{renderDetails('sunset.svg', sun_set)}</div>
                <div>{renderDetails('humidity.svg', water)}</div>
                <div>{renderDetails('wind_speed.svg', wind)}</div>
            </div>
        </div>
    )
}

export default TodayWeatherCard;