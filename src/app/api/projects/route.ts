import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Project from "@/models/Project";

// Fallback data if DB is not connected
const MOCK_PROJECTS = [
    {
        id: 1,
        title: "Pulse of the Night",
        category: "Live Visuals",
        image: "/assets/projects/pulse.png",
        mediaUrl: "https://www.youtube.com/watch?v=qCZakK6W1Yg",
        toolsUsed: ["Resolume", "After Effects"],
        year: "2024",
        client: "Lollapalooza",
        role: "Lead VJ"
    },
    {
        id: 2,
        title: "Techno-Organic Growth",
        category: "Generative Art",
        image: "/assets/projects/techno.png",
        mediaUrl: "https://www.youtube.com/watch?v=qCZakK6W1Yg",
        toolsUsed: ["TouchDesigner", "GLSL"],
        year: "2023",
        client: "Personal Exhibit",
        role: "Artist"
    },
    {
        id: 3,
        title: "Cybernetic Dreams",
        category: "3D Motion",
        image: "/assets/projects/cybernetic.png",
        mediaUrl: "https://www.youtube.com/watch?v=qCZakK6W1Yg",
        toolsUsed: ["Blender", "Octane"],
        year: "2024",
        client: "Nike Digital",
        role: "Motion Designer"
    },
    {
        id: 4,
        title: "Liquid Crystal",
        category: "Abstract Art",
        image: "/assets/projects/liquid.png",
        mediaUrl: "https://www.youtube.com/watch?v=qCZakK6W1Yg",
        toolsUsed: ["Notch", "Houdini"],
        year: "2023",
        client: "Art Basel",
        role: "Visual Designer"
    },
    {
        id: 5,
        title: "Solar Winds",
        category: "Projection Mapping",
        image: "/assets/projects/solar.png",
        mediaUrl: "https://www.youtube.com/watch?v=qCZakK6W1Yg",
        toolsUsed: ["MadMapper", "C4D"],
        year: "2022",
        client: "BMW Launch",
        role: "Mapping Specialist"
    },
    {
        id: 6,
        title: "Glitch Horizon",
        category: "Live VJ Loop",
        image: "/assets/projects/glitch.png",
        mediaUrl: "https://www.youtube.com/watch?v=qCZakK6W1Yg",
        toolsUsed: ["TouchDesigner", "Resolume"],
        year: "2024",
        client: "Underground Bass",
        role: "VJ Artist"
    },
];

export async function GET() {
    try {
        await dbConnect();
        const projects = await Project.find({}).sort({ date: -1 });

        if (projects.length === 0) {
            return NextResponse.json({ success: true, data: MOCK_PROJECTS, source: "mock" });
        }

        return NextResponse.json({ success: true, data: projects, source: "database" });
    } catch (error) {
        console.error("Database Error:", error);
        // Fallback to mock data on error (e.g. invalid URI)
        return NextResponse.json({ success: true, data: MOCK_PROJECTS, source: "fallback" });
    }
}

export async function POST(request: Request) {
    try {
        await dbConnect();
        const body = await request.json();
        const project = await Project.create(body);
        return NextResponse.json({ success: true, data: project }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ success: false, error: (error as Error).message }, { status: 400 });
    }
}
