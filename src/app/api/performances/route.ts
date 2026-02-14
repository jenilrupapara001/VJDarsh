import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Performance from "@/models/Performance";

const MOCK_PERFORMANCES = [
    {
        id: 1,
        title: "Sunburn Festival 2024",
        date: "Dec 28-30, 2024",
        location: "Goa, India",
        description: "Main Stage Visuals for 3 consecutive nights.",
        image: "bg-gradient-to-br from-purple-900 to-indigo-900"
    },
    {
        id: 2,
        title: "Neon Jungle Rave",
        date: "Nov 15, 2024",
        location: "Mumbai, India",
        description: "Live VJ set for underground techno collective.",
        image: "bg-gradient-to-br from-pink-900 to-red-900"
    },
    {
        id: 3,
        title: "Corporate Tech Summit",
        date: "Oct 10, 2024",
        location: "Bangalore, India",
        description: "Projection mapping and LED visuals for keynote.",
        image: "bg-gradient-to-br from-blue-900 to-cyan-900"
    }
];

export async function GET() {
    try {
        await dbConnect();
        const performances = await Performance.find({}).sort({ date: -1 });

        if (performances.length === 0) {
            return NextResponse.json({ success: true, data: MOCK_PERFORMANCES, source: "mock" });
        }

        return NextResponse.json({ success: true, data: performances, source: "database" });
    } catch (error) {
        console.error("Database Error:", error);
        return NextResponse.json({ success: true, data: MOCK_PERFORMANCES, source: "fallback" });
    }
}

export async function POST(request: Request) {
    try {
        await dbConnect();
        const body = await request.json();
        const performance = await Performance.create(body);
        return NextResponse.json({ success: true, data: performance }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ success: false, error: (error as Error).message }, { status: 400 });
    }
}
