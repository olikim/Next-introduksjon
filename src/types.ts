
export type SurveyQuestion = {
    id: string,
    question: string,
    isRequired: boolean,
    options: string[]
}

export type SurveyAnswer  = {
    surveyAnswer: string 
}

export type SurveyParticipant = {
    id: string,
    name: string,
    email?: string,
}

export type SurveyResponse = {
    questionId: string,
    answer: string
}

export type SurveyResponses = Record<string, SurveyAnswer>