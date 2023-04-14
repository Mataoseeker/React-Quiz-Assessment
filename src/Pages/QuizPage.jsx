import { db} from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";
import { onSnapshot, doc, where, collection } from "firebase/firestore";
import 'firebase/firestore';
import {useEffect, useState } from "react";




const QuizPage = () => {
  const [quizzes, setQuizzes] = useState([]);
  const navigate = useNavigate();


  const { user, logOut } = UserAuth();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/signin");
    } catch (error) {
      console.log(error.message);
    }
  };


  useEffect(() => {
    
    const quizzesQuery = collection(db, "quizzes");
    const unsubscribeQuizzes = onSnapshot(quizzesQuery, (querySnapshot) => {
      let quizzesArr = [];
      querySnapshot.forEach((doc) => {
        quizzesArr.push({ ...doc.data(), id: doc.id });
      });
      setQuizzes(quizzesArr);
    });

    return () => {
      unsubscribeQuizzes();
    };
  }, []);


  //   const quizId = "Iv9sD5dMmKTJrZGvt5m8";
  //   const quizRef = doc(db, "quizzes", quizId);

  //      const unsubscribeQuiz = onSnapshot(quizRef, (doc) => {
  //     if (doc.exists()) {
  //       setQuiz({ ...doc.data(), id: doc.id });
  //     } else {
  //       console.log("Quiz not found");
  //     }
  //   });

  //   return () => {
  //     unsubscribeQuiz();
  //   };
  // }, [user]);
    
 

  const handleClick = () => {
    navigate("/newpage");
  };

  return (
    <div>
      <nav className="p-2 bg-white flex justify-end ">
        <p className="text-slate-500 text-sm md:text-lg m-3 ">
          Hello, {user && user.email}
        </p>
        <Link to="/quiz">
          <button className="border text-black px-4 py-2 m-2 rounded-lg shadow-xl hover:bg-gray-100">
            Create Quiz
          </button>
        </Link>
        <button
          onClick={handleLogout}
          className="border text-black px-4 py-2 m-2 rounded-lg shadow-xl hover:bg-gray-100"
        >
          Logout
        </button>
      </nav>
      <h1 className="text-4xl font-bold text-gray-800 text-center m-5">Quiz Page</h1>

      <div className="max-w-full rounded overflow-hidden shadow-lg m-20 flex flex-row flex-wrap">
      {quizzes.map((quiz) => (
          <div key={quiz.id} className=" border rounded text-white m-5 px-6 py-4 text-center">
            <div className="font-bold text-2xl mb-2">{quiz.quizName}</div>
            <p className="text-white text-lg text-base">{quiz.description}</p>
            <p className="text-gray-700 text-base">Points: {quiz.points}</p>
            <div className="px-6 py-4  text-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleClick}
          >
            Start Quiz
          </button>
        </div>
          </div>
          
        ))}
        
      </div>
    </div>
  );

};

export default QuizPage;
