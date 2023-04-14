import { useContext } from "react";
import { UserContext } from "../Context/AuthContext";

import { useNavigate } from "react-router-dom";

const EndScreen = () => {

    const navigate = useNavigate();

    const {score, setScore} = useContext(UserContext);
    const restartQuiz = () => {
        setScore(0)
        navigate("/quizpage")
    }

    return ( 
        <div className="flex justify-center m-20 items-center">
            <div className="bg-gray-200  p-20 rounded-lg shadow-2xl">
            <h1 className="text-3xl font-bold">Quiz Completed</h1>

            <h2 className="text-xl">Here is your score:</h2>
            <h2 className="bg-white-200 text-2xl text-center px-2 py-2 m-2 rounded-lg shadow-xl hover:bg-blue-600">{score} </h2>
            <button className="bg-blue-500 text-white px-4 py-2 m-5 rounded-lg shadow-xl hover:bg-blue-600" onClick={restartQuiz}>Restart Quiz</button>
        </div>
        </div>
     );
}
 
export default EndScreen;