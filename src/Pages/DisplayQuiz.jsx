import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const DisplayQuiz = () => {
  const [question, setQuestion] = useState('');
  const [option1, setOption1] = useState('');
  const [option2, setOption2] = useState('');
  const [option3, setOption3] = useState('');
  const [option4, setOption4] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const docRef = await addDoc(collection(db, 'questions'), {
        question,
        option1,
        option2,
        option3,
        option4,
        correctAnswer,
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (error) {
      console.error('Error adding document: ', error);
    }

    setQuestion('');
    setOption1('');
    setOption2('');
    setOption3('');
    setOption4('');
    setCorrectAnswer('');

    navigate('/quizpage');
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
      <h1 className="text-center text-lg bold m-2 ">Enter Quiz Details</h1>
      <form onSubmit={handleSubmit} className="flex flex-col p-10 bg-slate-300 max-w-xl mx-auto  rounded">
        <label className="text-center font-serif " htmlFor="quizName">
          Question
        </label>
        <input
          className="p-2 rounded text-center "
          type="text"
          id="question"
          name="question"
          onChange={(event)=> setQuestion(event.target.value) }
        />
        <label className="text-center font-serif " htmlFor="quizName">
          Option 1
        </label>
        <input
          className="p-2 rounded text-center "
          type="text"
          id="option1"
          name="option1"
          onChange={(event)=> setOption1(event.target.value) }
        />
        <label className="text-center font-serif " htmlFor="quizName">
          Option 2
        </label>
        <input
          className="p-2 rounded text-center "
          type="text"
          id="option2"
          name="option2"
          onChange={(event)=> setOption2(event.target.value) }
        />
        <label className="text-center font-serif " htmlFor="quizName">
          Option 3
        </label>
        <input
          className="p-2 rounded text-center "
          type="text"
          id="option3"
          name="option3"
          onChange={(event)=> setOption3(event.target.value) }
        />
        <label className="text-center font-serif " htmlFor="quizName">
          Option 4
        </label>
        <input
          className="p-2 rounded text-center "
          type="text"
          id="option4"
          name="option4"
          onChange={(event)=> setOption4(event.target.value) }
        />
        <label className="text-center font-serif " htmlFor="quizName">
          Correct Answer
        </label>
        <input
          className="p-2 rounded text-center "
          type="text"
          id="correctAnswer"
          name="correctAnswer"
          onChange={(event)=> setCorrectAnswer(event.target.value) }
        />
        <button className="max-w-xl my-2 bg-slate-800 p-2 rounded text-white">
          Submit
        </button>
      </form>
    </div>
  );
};

export default DisplayQuiz;
