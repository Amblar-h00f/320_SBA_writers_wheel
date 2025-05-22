import { NextResponse } from "next/server"
import { getTopics, getTopicById, generateNewTopic } from "@/lib/api"


// GET /api/topics - Get all topics
export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url)
        const id = searchParams.get("id")

        if (id) {
            const topic = await getTopicById(id)
            return NextResponse.json(topic)
        }
const topics = await getTopics()
return NextResponse.json(topics)
} catch (error) {
        console.error("Error fetching topics:", error)
        return NextResponse.json({ error: "Failed to fetch topics" }, { status: 500})
    }
}

//POST /api/topics - Generate a new topic
export async function POST(request) {
    try {
        const body = await request.json()
        const { category } = body 

        const newTopic = await generateNewTopic(category)

        return NextResponse.json(newTopic, { status: 201 })
    } catch (error) {
        console.error("Error generating topic:", error)
        return NextResponse.json({ error: "Failed to generate topic"}, { status: 500 })
    }
}
