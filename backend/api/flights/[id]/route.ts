import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { FlightSchema } from '@/lib/validators'
import { verifyToken } from '@/lib/auth'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const flight = await prisma.flight.findUnique({
      where: { id: params.id },
      include: {
        bookings: {
          include: {
            user: {
              select: { id: true, name: true, email: true }
            }
          }
        }
      }
    })

    if (!flight) {
      return NextResponse.json(
        { success: false, error: 'Flight not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      data: flight
    })
  } catch (error) {
    console.error('Flight GET error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch flight' },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
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

    const flight = await prisma.flight.update({
      where: { id: params.id },
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
    console.error('Flight PUT error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to update flight' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const token = request.headers.get('Authorization')?.replace('Bearer ', '')
    const user = token ? verifyToken(token) : null
    
    if (!user || user.role !== 'ADMIN') {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      )
    }

    await prisma.flight.delete({
      where: { id: params.id }
    })

    return NextResponse.json({
      success: true,
      message: 'Flight deleted successfully'
    })
  } catch (error) {
    console.error('Flight DELETE error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to delete flight' },
      { status: 500 }
    )
  }
}
