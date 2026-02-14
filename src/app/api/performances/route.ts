import { NextResponse } from "next/server";

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
    return NextResponse.json({ success: true, data: MOCK_PERFORMANCES, source: "static" });
}
