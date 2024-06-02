import React, { useState } from 'react';

function App() {
  const questions = [
    {
      questionText: 'What is the capital of France?',
      answerOptions: [
        { answerText: 'New York', isCorrect: false },
        { answerText: 'London', isCorrect: false },
        { answerText: 'Paris', isCorrect: true },
        { answerText: 'Dublin', isCorrect: false },
      ],
    },
    {
      questionText: 'Who is CEO of Tesla?',
      answerOptions: [
        { answerText: 'Jeff Bezos', isCorrect: false },
        { answerText: 'Elon Musk', isCorrect: true },
        { answerText: 'Bill Gates', isCorrect: false },
        { answerText: 'Tony Stark', isCorrect: false },
      ],
    },
    {
      questionText: 'The iPhone was created by which company?',
      answerOptions: [
        { answerText: 'Apple', isCorrect: true },
        { answerText: 'Intel', isCorrect: false },
        { answerText: 'Amazon', isCorrect: false },
        { answerText: 'Microsoft', isCorrect: false },
      ],
    },
    {
      questionText: 'How many Harry Potter books are there?',
      answerOptions: [
        { answerText: '1', isCorrect: false },
        { answerText: '4', isCorrect: false },
        { answerText: '6', isCorrect: false },
        { answerText: '7', isCorrect: true },
      ],
    },
    {
      questionText: 'What is the capital of Japan?',
      answerOptions: [
        { answerText: 'Seoul', isCorrect: false },
        { answerText: 'Beijing', isCorrect: false },
        { answerText: 'Tokyo', isCorrect: true },
        { answerText: 'Bangkok', isCorrect: false },
      ],
    },
    {
      questionText: 'What is the largest planet in our solar system?',
      answerOptions: [
        { answerText: 'Earth', isCorrect: false },
        { answerText: 'Jupiter', isCorrect: true },
        { answerText: 'Mars', isCorrect: false },
        { answerText: 'Saturn', isCorrect: false },
      ],
    },
    {
      questionText: 'Who wrote "To Kill a Mockingbird"?',
      answerOptions: [
        { answerText: 'Harper Lee', isCorrect: true },
        { answerText: 'Mark Twain', isCorrect: false },
        { answerText: 'Ernest Hemingway', isCorrect: false },
        { answerText: 'F. Scott Fitzgerald', isCorrect: false },
      ],
    },
    {
      questionText: 'What is the smallest country in the world?',
      answerOptions: [
        { answerText: 'Monaco', isCorrect: false },
        { answerText: 'Vatican City', isCorrect: true },
        { answerText: 'San Marino', isCorrect: false },
        { answerText: 'Liechtenstein', isCorrect: false },
      ],
    },
    {
      questionText: 'What is the chemical symbol for gold?',
      answerOptions: [
        { answerText: 'Au', isCorrect: true },
        { answerText: 'Ag', isCorrect: false },
        { answerText: 'Pb', isCorrect: false },
        { answerText: 'Fe', isCorrect: false },
      ],
    },
    {
      questionText: 'Who painted the Mona Lisa?',
      answerOptions: [
        { answerText: 'Vincent van Gogh', isCorrect: false },
        { answerText: 'Pablo Picasso', isCorrect: false },
        { answerText: 'Leonardo da Vinci', isCorrect: true },
        { answerText: 'Claude Monet', isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="app min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 font-sans">
      <div className="w-full max-w-2xl bg-white shadow-2xl rounded-xl p-8 transform transition duration-500">
        {showScore ? (
          <div className="score-section text-3xl font-extrabold text-center text-gray-800">
            You scored {score} out of {questions.length}
            <div className="mt-6">
              <button
                className="bg-teal-500 text-white py-3 px-6 rounded-lg hover:bg-teal-600 transition duration-300"
                onClick={() => {
                  setScore(0);
                  setCurrentQuestion(0);
                  setShowScore(false);
                }}
              >
                Restart Again
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="question-section mb-8">
              <div className="question-count text-xl font-semibold text-gray-700">
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="question-text text-2xl font-bold text-gray-900 mt-2">
                {questions[currentQuestion].questionText} 
              </div>
            </div>
            <div className="answer-section flex flex-col space-y-4">
              {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                <button
                  className="bg-teal-500 text-white py-3 px-4 rounded-lg shadow-md transition duration-300 transform hover:scale-105 hover:bg-teal-600"
                  onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}
                  key={index}
                >
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
