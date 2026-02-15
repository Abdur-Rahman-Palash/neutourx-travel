import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { FlightSchema } from '@/lib/validators'
import { verifyToken } from '@/lib/auth'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const origin = searchParams.get('origin')
    const destination = searchParams.get('destination')
    const date = searchParams.get('date')
    
    const where: any = {}
    
    if (origin) where.origin = { contains: origin, mode: 'insensitive' }
    if (destination) where.destination = { contains: destination, mode: 'insensitive' }
    if (date) {
      const startDate = new Date(date)
      const endDate = new Date(date)
      endDate.setDate(endDate.getDate() + 1)
      where.departureTime = { gte: startDate, lt: endDate }
    }

    const flights = await prisma.flight.findMany({
      where,
      orderBy: { departureTime: 'asc' },
      include: {
        bookings: {
          select: { id: true }
        }
      }
    })

    return NextResponse.json({
      success: true,
      data: flights.map(flight => ({
        ...flight,
        availableSeats: 100 - flight.bookings.length // Assuming 100 seats per flight
      }))
    })
  } catch (error) {
    console.error('Flights GET error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch flights' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const token = request.headers.get('Authorization')?.replace('Bearer ', '')
    const user = token ? verifyToken(token) : null
    
    if (!user || user.role !== 'ADMIN') {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const body = await request.json()
    const validatedData = FlightSchema.parse(body)

    const flight = await prisma.flight.create({
      data: {
        ...validatedData,
        departureTime: new Date(validatedData.departureTime),
        arrivalTime: new Date(validatedData.arrivalTime),
        price: validatedData.price
      }
    })

    return NextResponse.json({
      success: true,
      data: flight
    })
  } catch (error) {
    console.error('Flights POST error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to create flight' },
      { status: 500 }
    )
  }
}
