import React, {useState, Component } from 'react'
import './Survey.css'

export default function Survey () {

    const[currentQuestion , setCurrentQuestion]=useState
    let showScore= false
    let score= 0

    const clickHandler(isCorrect) {
        if (isCorrect) {
            this.setState(prevState => {
                return {
                    score: prevState.score + 1
                }
            })
        }

        if (this.state.currentQuestion === 3) {
            this.setState({ showScore: true })
        } else {

            this.setState(prevState => {
                return {
                    currentQuestion: prevState.currentQuestion + 1
                }
            })
        }
    }


    render() {
        return (
            <div className='survey-container'>
                {this.state.showScore ? (
                    <div className="score-section">
                        امتیاز شما {state.score} از {state.questions.length}
                    </div>
                ) : (
                    <div className='survey-form'>
                        
                        <div className='questions-count'>
                            <span>Question {this.state.currentQuestion + 1}</span> / {this.state.questions.length}
                        </div>
                        <div className='questions-text'>
                            {this.state.questions[this.state.currentQuestion].questionsText}
                        </div>

                        <div className='anwser-container'>
                            {this.state.questions[this.state.currentQuestion].anwserQuestion.map(anwser => (
                                <button className='btn' onClick={this.clickHandler.bind(this, anwser.isCorrect)}>{anwser.anwserText} </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        )
    }

}
