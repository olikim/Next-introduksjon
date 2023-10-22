
import { useState, useEffect } from "react"
import { SurveyQuestion, SurveyResponse } from "@/types"

const SurveyQuestionList = () => {
    const [questions, setQuestions] = useState<SurveyQuestion[]>([]);
    const [answer, setAnswer] = useState<{ [questionId: string]: SurveyResponse }>({});
    useEffect(() => {
        fetchQuestions();
    }, []);

    const fetchQuestions = async () => {
        try {
          const response = await fetch('/api/questions');
          if (!response.ok) {
            throw new Error('Response was not ok');
          }
    
          const result = (await response.json()) as SurveyQuestion[];
          setQuestions(result); 
        } catch (error) {
          console.error('Error fetching data:');
        }
    }

    const handleSelectedAnswer = (questionId, answerOption) => {
      setAnswer((prevAnswers) => ({
        ...prevAnswers,
        [questionId]: { surveyAnswer: answerOption },
      }));
    };

    const submitAnswer = async () => {

      try {
        const answers = questions.map((question) => ({
          questionId: question.id,
          answer: answer[question.id]
        }));

        const response = await fetch('/api/questions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(answers)
        })

        const result = await response.json();
        console.log('API Response: ', result)
      }
      catch (error) {
        console.error('Error submitting answers:', error);
      }  
    };
    

    return (
      <div className="max-w-xl mx-auto p-4 bg-white shadow-md my-8 rounded">
        {questions.map((question) => (
          <div className="mb-8">
              <h1 className={`text-2xl font-bold mb-4 ${question.isRequired ? 'text-red-500' : ''}`}>
                {question.question}
              </h1>
              <ul className="pl-0">
                {question.options.map((option) => (
                <li className="mb-2">
                    <label className="flex items-center">
                        <input 
                        type="radio" 
                        name={question.id} 
                        className="mr-2"
                        onChange={() => handleSelectedAnswer(question.id, option)} />
                        {option}
                    </label>
                </li>
              ))}
              </ul>
              <hr className="my-8 border-t border-gray-300" /> 
          </div>     
        ))} 
        <button onClick={submitAnswer} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Send inn</button>
      </div>
      );
    }

export default SurveyQuestionList;
