
export type SurveyQuestion = {
    id: string,
    question: string,
    isRequired: boolean,
    options: string[]
}

export type SurveyAnswer  = {
    surveyAnswer: string | number,
    isMultipleChoice: boolean 
}

export type SurveyParticipant = {
    id: string,
    name: string,
    email?: string,
}

export type SurveyResponse = {
    participant: SurveyParticipant,
    questionId: string,
    answer: SurveyAnswer
}

export type SurveyResponses = Record<string, SurveyAnswer>