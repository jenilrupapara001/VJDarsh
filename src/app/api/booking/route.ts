import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        // Return mock success for static architecture
        return NextResponse.json({
            success: true,
            data: body,
            message: "Booking received (Static Mode)"
        }, { status: 201 });
    } catch (error) {
        return NextResponse.json({
            success: false,
            error: (error as Error).message
        }, { status: 400 });
    }
}
