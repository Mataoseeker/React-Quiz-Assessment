import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore'

function QuizForm() {
  const [quizName, setQuizName] = useState('');
  const [description, setDescription] = useState('');
  const [points, setPoints] = useState(0);
  const [timeLimit, setTimeLimit] = useState(0);

  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const docRef = await addDoc(collection(db, "quizzes"), {
        quizName,
        description,
        points,
        timeLimit,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }

    setQuizName('');
    setDescription('');
    setPoints();
    setTimeLimit();

    navigate('/displayquiz')
  };

  return (
    <div>
      <div className=" bg-white p-2 text-white">
        <nav className="m-auto">
          <ul className="flex justify-end">
            <Link to="/quizpage">
              <button className="border text-black px-4 py-2 m-2 rounded-lg shadow-xl hover:bg-gray-100">
                Quiz Page
              </button>
            </Link>
          </ul>
        </nav>
      </div>
      
    <div className="max-w-[600px] mx-auto my-10 p-4">
      <h1 className="text-2xl font-bold py-2 text-center">Create a new quiz</h1>

    <form onSubmit={handleSubmit}>
      <div className="flex flex-col py-2">
      <input
      className="border p-2 rounded text-center"
        type="text"
        id="quizName"
        placeholder='Enter quiz name'
        value={quizName}
        onChange={(event) => setQuizName(event.target.value)}
        required
      />
      </div>
      
    <div className="flex flex-col py-2">
    <textarea
      className="border p-2 rounded text-center"
        id="description"
        placeholder='Enter quiz description'
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        required
      />
    </div>
      
    <div className="flex flex-col py-2">
    <label htmlFor="points">Points/Grading System:</label>
      <input
      className="border p-2 rounded text-center"
        type="number"
        id="points"
        value={points}
        onChange={(event) => setPoints(event.target.value)}
        required
      />
    </div>
      
    <div className="flex flex-col py-2">
    <label htmlFor="timeLimit">Time Limit (in minutes):</label>
      <input
      className="border p-2 rounded text-center"
        type="number"
        id="timeLimit"
        value={timeLimit}
        onChange={(event) => setTimeLimit(event.target.value)}
        required
      />
    </div>
      
      <button 
      className="border rounded border-blue-400 bg-blue-600
      hover:bg-blue-500 w-full p-2 my-2 text-white"
      type="submit">Create Quiz</button>
    </form>
    </div>
    </div>
  );
}

export default QuizForm;
