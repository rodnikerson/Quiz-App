import './App.css';
import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import InitialScreen from './Components/InitialScreen';
import Quiz from './Components/Quiz';
import FinalScreen from './Components/FinalScreen';
import Loading from './Components/Loading';

function App() {

  const [category, setCategory] = useState('')
  const [data, setData] = useState([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function getQuestions() {
      setLoading(true)

      await Axios.get(`https://the-trivia-api.com/api/questions?categories=${category.replaceAll(' ', '_')}&limit=5`).then((res) => {
        setData(res.data)
      })

      setLoading(false)
    }
    getQuestions()
  }, [category])

  return (
    <div className="App">

      {category === '' ?
        <InitialScreen
          setCategory={setCategory}
        />
        :
        (loading) ?
          <Loading />
          :
          currentQuestion < 5 ?
            <Quiz
              data={data}
              currentQuestion={currentQuestion}
              setCurrentQuestion={setCurrentQuestion}
              score={score}
              setScore={setScore}
            />
            :
            <FinalScreen
              score={score}
              setScore={setScore}
              setCategory={setCategory}
              setCurrentQuestion={setCurrentQuestion}
              setData={setData}
            />
      }

    </div>
  );
}

export default App;