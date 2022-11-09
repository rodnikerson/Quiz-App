import React from "react";
import AnimatedPage from "./AnimatedPage";

export default function FinalScreen(props) {

    const restartQuiz = () => {
        props.setCategory('')
        props.setData([])
        props.setCurrentQuestion(0)
        props.setScore(0)
    }

    return (
        <AnimatedPage>
            <div className="score--container">
                <h3>Well done, you've reached the end of the quiz.</h3>
                <h2>You scored <span>{props.score}</span>/5.</h2>
                <button className="restart--button" onClick={(setCategory, setScore, setCurrentQuestion, setData) => restartQuiz()}>Restart</button>
            </div>
        </AnimatedPage>
    )

}