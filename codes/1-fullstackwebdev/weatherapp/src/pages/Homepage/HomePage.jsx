import MainCard from "../components/MainCard/MainCard";
import "./HomePage.css";
const currentCity = {
    today: {
        date: new Date(),
        city: "Melbourne",
        weather: "Snow",
        water: 85,
        wind: 9,
        sun: 75,
        minTemp: 10,
        maxTemp: 20
    },
    forecast: [
        {
            date: '24 July',
            day: "Monday",
            weather: "Sunny",
            water: 85,
            wind: 9,
            sun: 75,
            minTemp: 10,
            maxTemp: 20
        },
        {
            date: '25 July',
            day: "Tuesday",
            weather: "Sunny",
            water: 85,
            wind: 9,
            sun: 75,
            minTemp: 10,
            maxTemp: 20
        }, {
            date: '26 July',
            day: "Wednesday",
            weather: "Sunny",
            water: 85,
            wind: 9,
            sun: 75,
            minTemp: 10,
            maxTemp: 20
        },
        {
            date: '27 July',
            day: "Thursday",
            weather: "Sunny",
            water: 85,
            wind: 9,
            sun: 75,
            minTemp: 10,
            maxTemp: 20
        },

    ]
};

const otherCities = [
    {
        'city': 'Sydney',
        'weather': 'Sunny',
        'minTemp': 10,
        'maxTemp': 20,
    },
    {
        'city': 'Shanghai',
        'weather': 'Sunny',
        'minTemp': 10,
        'maxTemp': 20,
    },
    {
        'city': 'New York',
        'weather': 'Sunny',
        'minTemp': 10,
        'maxTemp': 20,
    },
    {
        'city': 'London',
        'weather': 'Sunny',
        'minTemp': 10,
        'maxTemp': 20,
    }
]


function HomePage() {
    return (
        <div className="home-page">
            <MainCard currentCity={currentCity} otherCities={otherCities} />
        </div>
    )
}

export default HomePage;