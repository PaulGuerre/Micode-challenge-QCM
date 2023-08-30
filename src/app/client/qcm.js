'use client'

import React, { useEffect, useState } from 'react';

export default function Qcm({questions}) {
    const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
    const [currentAnswer, setCurrentAnswer] = useState(null);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);

    useEffect(() => {
        setCurrentQuestion(questions[questionIndex]);
        setCurrentAnswer(null);
    }, [questionIndex, questions]);

    const setAnswer = (index) => {
        setCurrentAnswer(index);
    }

    const nextQuestion = () => {
        setQuestionIndex(questionIndex + 1);
        if (currentAnswer === currentQuestion.correctAnswer) {
            setScore(score + 1);
        }
    }

    return (
        <div className='qcm'>
            {
                questionIndex !== questions.length
                ? (
                    <>
                        <div>
                            <h2 className='qcm-question'>{currentQuestion.question}</h2>
                            <div className='qcm-answers'>
                                {
                                    currentQuestion.answers.map((answer, index) => (
                                        <div key={index} onClick={() => setAnswer(index)} className={currentAnswer === index ? 'qcm-answer qcm-answer-selected' : 'qcm-answer'}>{answer}</div>
                                    ))
                                }
                            </div>
                        </div>

                        <button onClick={nextQuestion} disabled={currentAnswer === null} className='qcm-button'>Suivant</button>
                    </>
                )
                : (
                    <div>
                        <h2 className='qcm-score-title'>Votre score</h2>
                        <div className='qcm-score-value'>{score}/{questions.length}</div>
                    </div>
                )
            }
        </div>
    )
}
