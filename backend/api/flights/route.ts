
# ⚡ HOSTINGER API ROUTE REFERENCE 
# 
# These files are intended to serve as the backend logic for your Next.js application.
# However, for STATIC EXPORT(output: 'export') on Hostinger, standard Next.js API routes 
#(in /src/app / api) DO NOT WORK.
# 
# YOU MUST:
# 1. Deploy this logic to a separate Node.js server(e.g.Vercel, Railway, Render) OR
# 2. Use Hostinger VPS ensuring Node.js runtime is active(not shared hosting static).
# 
# For now, the frontend uses MOCK services.

    import { NextResponse } from 'next/server';
// import { prisma } from '@/lib/prisma'; // Use this singleton in real app

export async function GET(request: Request) {
    // Mock Data Return
    const flights = [
        { id: 'f1', airline: 'Emirates', from: 'LHR', to: 'DXB', price: 650 },
        { id: 'f2', airline: 'British Airways', from: 'LHR', to: 'JFK', price: 720 },
    ];

    // Real Implementation:
    // const flights = await prisma.flight.findMany();

    return NextResponse.json(flights);
}

export async function POST(request: Request) {
    const body = await request.json();
    // Validate body with Zod
    // const newFlight = await prisma.flight.create({ data: body });
    return NextResponse.json({ message: "Flight created (Mock)", data: body });
}
