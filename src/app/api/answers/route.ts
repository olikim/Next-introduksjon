import { SurveyResponse } from "@/types"
import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

const data: SurveyResponse[] = [
    {
        questionId: "test",
        answer: "Test"
    }
]

export function GET() {
    return NextResponse.json(data, { status: 200 })
  }

export async function POST(request: NextRequest) {
    const data = await request.json()
    return NextResponse.json(data, { status: 200} )
}
