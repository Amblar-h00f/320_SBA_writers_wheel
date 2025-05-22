import { NextResponse } from "next/server"
import { updateTopicsFromCurrentEvents } from "@/lib/api"

//Post/ api/topics/refresh - Update topics based on current events
export async function POST() {
    try {
        await updateTopicsFromCurrentEvents()

        return NextResponse.json({ message: "Topics refreshed successfully" },
            { status: 200 }) 
        } catch (error) {
            console.error("Error refreshing topics:", error)
            return NextResponse.json({ error: "Failed to refresh topics" }, { status: 500 })
        }
    }