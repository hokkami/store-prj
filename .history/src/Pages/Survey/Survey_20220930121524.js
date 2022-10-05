import React, { useState, Component ,useContext} from 'react'
import productsContext from '../../Context/ProductsContext'
import './Survey.css'


export default function Survey() {

    const contextData = useContext(question);
    const [question, setQuestion] = useState(contextData)
    let currentQuestion = 0
    const [showScore, setShowScore] = useState(false)
    const [score, setsCore] = useState(0)

    const clickHandler = (isCorrect) => {
        if (isCorrect) {
            setsCore(prevState => {
                return {
                    score: prevState.score + 1
                }
            })
        }

        if (currentQuestion === 3) {
            setShowScore(true)
        } else {

            this.setState(prevState => {
                return {
                    currentQuestion: prevState.currentQuestion + 1
                }
            })
        }
    }

    return (
        <div className='survey-container'>
            {showScore ? (
                <div className="score-section">
                    امتیاز شما {score} از {question.length}
                </div>
            ) : (
                <div className='survey-form'>
                    
                    <div className='questions-count'>
                        <span>Question {currentQuestion + 1}</span> / {question.length}
                    </div>
                    <div className='questions-text'>
                        {question[currentQuestion].questionsText}
                    </div>

                    <div className='anwser-container'>
                        {question[currentQuestion].anwserQuestion.map(anwser => (
                            <button className='btn' onClick={this.clickHandler.bind(this, anwser.isCorrect)}>{anwser.anwserText} </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}
