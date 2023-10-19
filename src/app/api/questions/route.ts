import { SurveyQuestion } from "@/types"
import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

const data: SurveyQuestion[] = [
    {
      id: "qm1",
      question: "Hvilken type universitetsutdanning forfølger du?",
      isRequired: true,
      options: ["Dette er et svar", "Svar 2", "Svar 3"],
    },
    {
        id: "qm2",
        question: "Hvor mange timer bruker du daglig på skolearbeid?",
        isRequired: false,
        options: ["Mindre enn 1 time", "1-2 timer", "2-4 timer", "Mer enn 4 timer"],
    }
]

export function GET() {
    return NextResponse.json(data, { status: 200 })
  }

export async function POST(request: NextRequest) {
    const data = await request.json()
    return NextResponse.json(data, { status: 200} )
}
