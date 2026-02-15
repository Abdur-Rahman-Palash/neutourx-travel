
# ⚡ PACKAGES ENDPOINT

import { NextResponse } from 'next/server';
// import { prisma } from '@/lib/prisma'; // Use this singleton

export async function POST(request: Request) {
    const { destination, Flight, Hotel, Tours } = await request.json();

    // 1. Calculate price dynamically
    // 2. Validate availability
    // 3. Create provisional Booking ID (Status: PENDING)

    const newPackage = {
        id: 'pkg_' + Date.now(),
        destination,
        totalItems: 3,
        price: '£3,450',
        status: 'Created'
    };

    return NextResponse.json(newPackage, { status: 201 });
}
