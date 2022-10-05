import React, { Component } from 'react'
import './Survey.css'

export default function Survey () {

    constructor(prop) {
        super(prop)

        this.state = {
            questions: [
                {
                    questionsText: 'کیفیت سایت چگونه است؟',
                    anwserQuestion: [
                        { id: 1, anwserText: 'برجسته', isCorrect: true },
                        { id: 2, anwserText: 'خوب', isCorrect: false },
                        { id: 3, anwserText: 'بد', isCorrect: false },
                        { id: 4, anwserText: 'بسیار بد', isCorrect: false },
                    ]

                },
                {
                    questionsText: 'چگونگی تارنما چگونه است؟',
                    anwserQuestion: [
                        { id: 1, anwserText: 'برجسته', isCorrect: true },
                        { id: 2, anwserText: 'خوب', isCorrect: false },
                        { id: 3, anwserText: 'بد', isCorrect: false },
                        { id: 4, anwserText: 'بسیار بد', isCorrect: false },
                    ]

                },
                {
                    questionsText: 'از فروش برخط تارنما خوشنود هستید؟',
                    anwserQuestion: [
                        { id: 1, anwserText: 'برجسته', isCorrect: true },
                        { id: 2, anwserText: 'خوب', isCorrect: false },
                        { id: 3, anwserText: 'بد', isCorrect: false },
                        { id: 4, anwserText: 'بسیار بد', isCorrect: false },
                    ]

                },
                {
                    questionsText: 'از پشتیبانی همکاران ما خرسند هستید؟',
                    anwserQuestion: [
                        { id: 1, anwserText: 'برجسته', isCorrect: true },
                        { id: 2, anwserText: 'خوب', isCorrect: false },
                        { id: 3, anwserText: 'بد', isCorrect: false },
                        { id: 4, anwserText: 'بسیار بد', isCorrect: false },
                    ]

                }
            ],
            currentQuestion: 0,
            showScore: false,
            score: 0

        }
    }

    clickHandler(isCorrect) {
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
                        امتیاز شما {this.state.score} از {this.state.questions.length}
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
