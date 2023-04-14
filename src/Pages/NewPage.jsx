    import { db } from "../firebase";
    import QuizTimer from "../Components/QuizTimer";
    import { useNavigate } from "react-router-dom";
    import { UserContext } from "../Context/AuthContext";
    import {
        query,
        collection,
        onSnapshot,
        doc,
        where,
    } from "firebase/firestore";
    import { useContext, useEffect, useState } from "react";
    
    const NewPage = () => {
        const [questions, setQuestions] = useState([]);
        const [question, setQuestion] = useState([])
        const [currentQuestion, setCurrentQuestion] = useState(0);
        const [optionChosen, setOptionChosen] = useState("");

        const {score, setScore} = useContext(UserContext);

        const navigate = useNavigate();

        const NextQuestion = () => {
            if (questions[currentQuestion].correctAnswer === optionChosen) {
            setScore(score + 1);
            }
            setCurrentQuestion(currentQuestion + 1);
        }

        const finishQuiz = () => {
            if (questions[currentQuestion].correctAnswer === optionChosen) {
                setScore(score + 1);
            }
            navigate("/endScreen")
        }

    const handleTimerComplete = () => {
        setCurrentQuestion(prevQuestion => prevQuestion + 1);
    };


    useEffect(() => {
        const questionsQuery = collection(db, "questions");
        const unsubscribeQuestions = onSnapshot(questionsQuery, (querySnapshot) => {
            let questionsArr = [];
            querySnapshot.forEach((doc) => {
                questionsArr.push({ ...doc.data(), id: doc.id });

            });
            setQuestions(questionsArr);
        });

        return () => {
            unsubscribeQuestions();
        };
    }, []);
    
        return ( 
            <div>
            {
            questions.map((question) => {
            return (
                <div key={question.id} className='bg-gray-200 px-6 py-4 m-10 text-center'>
                    <QuizTimer minutes={2} onTimerComplete={handleTimerComplete} />
                    <h2>Question {currentQuestion + 1}</h2>
                <div className='font-bold text-xl mb-2'>{questions[currentQuestion].question}</div>
                <div className='text-gray-700 text-base flex flex-col'>
                    <button  onClick={() => setOptionChosen("option1")} className='bg-blue-800 text-white px-4 py-2 m-3 rounded-lg shadow-xl hover:bg-blue-600'>
                    {questions[currentQuestion].option1}</button>
                    <button  onClick={() => setOptionChosen("option2")} className='bg-blue-800 text-white px-4 py-2 m-3 rounded-lg shadow-xl hover:bg-blue-600'>
                    {questions[currentQuestion].option2}</button>
                    <button  onClick={() => setOptionChosen("option3")} className='bg-blue-800 text-white px-4 py-2 m-3 rounded-lg shadow-xl hover:bg-blue-600'>
                    {questions[currentQuestion].option3}</button>
                    <button  onClick={() => setOptionChosen("option4")} className='bg-blue-800 text-white px-4 py-2 m-3 rounded-lg shadow-xl hover:bg-blue-600'>
                    {questions[currentQuestion].option4}</button>

                    {currentQuestion == questions.length - 1 ? (
            <button className='bg-slate-800 text-white px-4 py-2 m-3 rounded-lg shadow-xl hover:bg-slate-600' onClick={finishQuiz}>Finish Quiz</button>
        ): (
            <button className='bg-gray-800 text-white px-4 py-2 m-3 rounded-lg shadow-xl hover:bg-gray-600' onClick={NextQuestion}>Next Question</button>
        )}
        
                    </div>
                </div>
            )
            }
             )
         }
            </div>
        );
    }
    
    export default NewPage;