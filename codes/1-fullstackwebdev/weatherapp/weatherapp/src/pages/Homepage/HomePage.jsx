import MainCard from "../components/MainCard/MainCard";
import "./HomePage.css";
import currentCity from "../../mock-data/currentCity.json";
import otherCities from "../../mock-data/otherCities.json";



function HomePage() {
    return (
        <div className="home-page">
            <MainCard currentCity={currentCity} otherCities={otherCities} />
        </div>
    )
}

export default HomePage;