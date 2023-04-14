import QuizForm from './Pages/QuizForm'
import './App.css'
import { Route, Routes} from "react-router-dom"
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import { AuthContextProvider } from './Context/AuthContext'
import ProtectedRoute from './Components/ProtectedRoute'
import HomePage from './Pages/HomePage'
import DisplayQuiz from './Pages/DisplayQuiz'
import NewPage from './Pages/NewPage'
import { Suspense } from 'react';
import QuizPage from './Pages/QuizPage'
import EndScreen from './Pages/EndScreen'
import NotFound from './Pages/404Page'
import { ErrorBoundary } from 'react-error-boundary'


function App() {
    function Loading() {
    return <h2>🌀 Loading...</h2>;
  }

  function ErrorFallback({error}) {
    return (
      <div role="alert">
        <p>Something went wrong:</p>
        <pre style={{color:'red'}}>{error.message}</pre>
      </div>
    )
  }

  return (
    <div className="App">
      <AuthContextProvider>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/quiz" element={<ProtectedRoute> <QuizForm /> </ProtectedRoute>} />
        <Route path="/quizpage" element={<ProtectedRoute> <QuizPage /> </ProtectedRoute>} />
        <Route path="/displayquiz" element={<ProtectedRoute> <DisplayQuiz /> </ProtectedRoute>} />
        <Route path="/newpage" element={<ProtectedRoute> <NewPage /> </ProtectedRoute>} />
        <Route path="/endscreen" element={<ProtectedRoute> <EndScreen /> </ProtectedRoute>} />

      </Routes>
      </Suspense>
      </ErrorBoundary>
      </AuthContextProvider>
   
    </div>
  )
}

export default App
