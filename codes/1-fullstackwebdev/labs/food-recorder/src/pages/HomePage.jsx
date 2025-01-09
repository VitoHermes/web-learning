import Calendar from "../components/Calendar/Calendar";
import Calorie from "../components/Calorie/Calorie";
import RecordList from "../components/RecordList/RecordList";
import FoodRecorder from "../components/FoodRecorder/FoodRecorder";
import ExerciseRecorder from "../components/ExerciseRecorder/ExerciseRecorder";
import '../App.css';

export default function HomePage() {
    return (
        <div className="container">
            <Calendar />
            {/* <Calorie /> */}
            <FoodRecorder />
            <RecordList />
        </div>
    );
}