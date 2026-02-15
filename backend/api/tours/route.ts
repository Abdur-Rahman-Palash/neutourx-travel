
# ⚡ TOURS API ENDPOINT

import { NextResponse } from 'next/server';
// import { prisma } from '@/lib/prisma'; -> Example backend usage

export async function GET(request: Request) {
    // Query parameters: location, maxPrice, rating
    const { searchParams } = new URL(request.url);
    const location = searchParams.get('location');

    const tours = [
        { id: '1', title: 'Kyoto Tea Ceremony', location: 'Japan', price: 450 },
        { id: '2', title: 'Paris Private Louvre', location: 'France', price: 180 },
    ];

    /* 
      const where = {};
      if (location) where.location = { contains: location };
      const tours = await prisma.tour.findMany({ where });
    */

    return NextResponse.json(tours);
}
