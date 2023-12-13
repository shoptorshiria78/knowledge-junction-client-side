
import { useRef, useState } from "react";
import './Quiz.css'
import quizAnimation from '../assets/quizAnimation.json'
import Lottie from "lottie-react";


const allQuiz = [
    {
        "question": "What is the capital of Japan?",
        "option1": "Tokyo",
        "option2": "Seoul",
        "option3": "Beijing",
        "option4": "Bangkok",
        "ans": 1
    },
    {
        "question": "Which planet is known as the Red Planet?",
        "option1": "Earth",
        "option2": "Mars",
        "option3": "Venus",
        "option4": "Jupiter",
        "ans": 2
    },
    {
        "question": "What is the largest mammal on Earth?",
        "option1": "Elephant",
        "option2": "Giraffe",
        "option3": "Blue Whale",
        "option4": "Polar Bear",
        "ans": 3
    },
    {
        "question": "Who wrote 'Romeo and Juliet'?",
        "option1": "Charles Dickens",
        "option2": "William Shakespeare",
        "option3": "Jane Austen",
        "option4": "Mark Twain",
        "ans": 2
    },
    {
        "question": "Which programming language is this website built with?",
        "option1": "Java",
        "option2": "Python",
        "option3": "JavaScript",
        "option4": "C++",
        "ans": 3
    },
    {
        "question": "What is the chemical symbol for water?",
        "option1": "Wt",
        "option2": "H2O",
        "option3": "CO2",
        "option4": "O2",
        "ans": 2
    },
    {
        "question": "Which country is known as the 'Land of the Rising Sun'?",
        "option1": "China",
        "option2": "South Korea",
        "option3": "Japan",
        "option4": "Vietnam",
        "ans": 3
    },
    {
        "question": "What is the square root of 64?",
        "option1": "6",
        "option2": "7",
        "option3": "8",
        "option4": "9",
        "ans": 3
    },
    {
        "question": "Which element has the chemical symbol 'O'?",
        "option1": "Oxygen",
        "option2": "Gold",
        "option3": "Silver",
        "option4": "Iron",
        "ans": 1
    },
    {
        "question": "Who developed the theory of relativity?",
        "option1": "Isaac Newton",
        "option2": "Albert Einstein",
        "option3": "Galileo Galilei",
        "option4": "Stephen Hawking",
        "ans": 2
    }
]

const Quiz = () => {

    let [index, setIndex] = useState(0);
    const [question, setQuestion] = useState(allQuiz[index]);

    const [lock, setLock] = useState(false);
    const [score, setScore] = useState(0);
    const [result, setResult] = useState(false);

    const option1 = useRef(null);
    const option2 = useRef(null);
    const option3 = useRef(null);
    const option4 = useRef(null);

    const option_array = [option1, option2, option3, option4]



    const checkAns = (e, ans) => {
        if (!lock) {
            if (question.ans === ans) {
                e.target.classList.add('correct')
                setLock(true)
                setScore(prev => prev + 1);
            }
            else {
                e.target.classList.add('wrong')
                setLock(true)
                option_array[question.ans - 1].current.classList.add('correct');
            }
        }

    }


    const next = () => {
        if (lock) {
            if (index === allQuiz.length) {
                setResult(true);
                return 0;
            }
            setIndex(++index)
            setQuestion(allQuiz[index])
            setLock(false);
            option_array.map(option => {
                option.current.classList.remove("wrong");
                option.current.classList.remove("correct");
                return null;
            })
        }
    }

    const reset = () => {
        setIndex(0);
        setQuestion(allQuiz[0]);
        setScore(0);
        setLock(false);
        setResult(false);
    }

    return (
        <div className="max-w-[1200px] mx-auto ">

            <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
                <div className="w-full">
                    <Lottie animationData={quizAnimation}></Lottie>
                </div>
                <div className="w-full">
                    <div className="max-w-[450px] mx-auto  my-20">
                        <h1 className="text-2xl font-bold text-emerald-500">Start Your Quiz..</h1>
                        <div className="divider"></div>
                        {
                            result ? <>
                                <h1 className="text-2xl text-fuchsia-700 font-bold text-center">Your Score {score} out of {allQuiz.length}</h1>
                                <button className="py-2 w-[250px] bg-emerald-600 text-white my-4" onClick={reset} >Reset</button>
                            </> : <>
                                <h1 className="text-xl font-medium text-green-500 my-3">{index + 1}.{question.question}</h1>
                                <ul className="max-w-[450px] ">
                                    <li className="border-2 my-1 border-gray-400  py-2 px-3 w-full" ref={option1} onClick={(e) => checkAns(e, 1)}>{question.option1}</li>
                                    <li className="border-2 my-1 border-gray-400  py-2 px-3 w-full" ref={option2} onClick={(e) => checkAns(e, 2)}>{question.option2}</li>
                                    <li className="border-2 my-1 border-gray-400  py-2 px-3 w-full" ref={option3} onClick={(e) => checkAns(e, 3)}>{question.option3}</li>
                                    <li className="border-2 my-1 border-gray-400  py-2 px-3 w-full" ref={option4} onClick={(e) => checkAns(e, 4)}>{question.option4}</li>
                                </ul>
                                <button className="py-2 w-full bg-emerald-600 text-white my-4 " onClick={next}>Next</button>
                                <h1 className="text-lg text-emerald-700 font-medium">{index + 1} of {allQuiz.length} Questions</h1></>
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quiz;