
import { useState, useEffect } from "react"
import { SurveyQuestion } from "@/types"

const SurveyQuestionList = () => {
    const [questionList, setQuestionList] = useState<SurveyQuestion[]>([]);

    useEffect(() => {
        getQuestions();
    }, []);

    const getQuestions = async () => {
        try {
          const response = await fetch('/api/questions');
          if (!response.ok) {
            throw new Error('Response was not ok');
          }
    
          const result = (await response.json()) as SurveyQuestion[];
          setQuestionList(result); 
        } catch (error) {
          console.error('Error fetching data:');
        }
    }

    return (
        <div className="max-w-xl mx-auto p-4 bg-white shadow-md my-8 rounded">
          {questionList.map((question) => (
            <>
            <div className="mb-8">
                <h1 className={`text-2xl font-bold mb-4 ${question.isRequired ? 'text-red-500' : ''}`}>
                {question.question}
                </h1>
                <ul className="pl-0">
                {question.options.map((option) => (
                    <li className="mb-2">
                        <label className="flex items-center">
                            <input type="radio" name={question.id} className="mr-2" />
                            {option}
                        </label>
                    </li>
                ))}
                </ul>
                <hr className="my-8 border-t border-gray-300" /> 
            </div>
            </>
              
            ))} 
          
        </div>
      );
    }

export default SurveyQuestionList;
