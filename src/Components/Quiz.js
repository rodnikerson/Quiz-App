import React from "react";
import AnimatedPage from "./AnimatedPage";

export default function Quiz(props) {

    const query = props.data[props.currentQuestion].question

    const correctAnswer = props.data[props.currentQuestion].correctAnswer
    const incorrectAnswer = props.data[props.currentQuestion].incorrectAnswers
    const possibleAnswers = [...incorrectAnswer, correctAnswer]

    for (let i = 0; i < possibleAnswers.length; i++) {
        const randomNum = Math.floor(Math.random() * possibleAnswers.length)
        let keeper = possibleAnswers[i]
        possibleAnswers[i] = possibleAnswers[randomNum]
        possibleAnswers[randomNum] = keeper
    }

    const nextAction = (option) => {
        option === correctAnswer ? props.setScore(prevScore => prevScore + 1) : props.setScore(prevScore => prevScore + 0)
        props.setCurrentQuestion(prevQuestion => prevQuestion + 1)
    }

    const mappingAnswersButton = possibleAnswers.map((alternative, index) => {
        return <button key={index} className="answer--button" onClick={(setScore, currentQuestion, setCurrentQuestion) => nextAction(alternative)}>
            {alternative}
        </button>
    })

    return (
        <AnimatedPage>
            <div className="quiz--container">

                <div className="question--container">
                    <h4>{props.currentQuestion + 1} - {query}</h4>
                </div>

                <div className="answers--container">

                    {mappingAnswersButton}

                </div>

            </div>
        </AnimatedPage>
    )

}