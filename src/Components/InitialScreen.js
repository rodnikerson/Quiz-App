import React from "react";
import AnimatedPage from "./AnimatedPage";

export default function InitialScreen(props) {

    const categories = [
        'Arts and Literature',
        'Film and TV',
        'Food and Drink',
        'General Knowledge',
        'Geography',
        'History',
        'Music',
        'Science',
        'Society and Culture',
        'Sports and Leisure'
    ]

    const categoriesBtns = categories.map((category, index) => {
        return (
            <button key={index} className='button--category--selector' onClick={() => props.setCategory(category)}>
                {category}
            </button>)
    })

    return (
        <AnimatedPage>
            <div className="category--selector">
                <h2>Select a category</h2>
                {categoriesBtns}
            </div>
        </AnimatedPage>
    )

}