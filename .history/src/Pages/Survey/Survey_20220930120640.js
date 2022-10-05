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

    render( {
        return (
            <div className='survey-container'>
                {showScore ? (
                    <div className="score-section">
                        امتیاز شما {score} از {questions.length}
                    </div>
                ) : 
                (
                    <div className='survey-form'>

                        <div className='questions-count'>
                            <span>Question {currentQuestion + 1}</span> / {questions.length}
                        </div>
                        <div className='questions-text'>
                            {question[currentQuestion].questionsText}
                        </div>

                        <div className='answer-container'>
                            {question[currentQuestion].anwserQuestion.map(answer => (
                                <button className='btn' onClick={clickHandler(answer.isCorrect)}>{answer.anwserText} </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        )
    
    
}
