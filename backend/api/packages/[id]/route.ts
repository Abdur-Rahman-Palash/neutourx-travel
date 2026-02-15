import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { PackageSchema } from '@/lib/validators'
import { verifyToken } from '@/lib/auth'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const pkg = await prisma.package.findUnique({
      where: { id: params.id },
      include: {
        tours: true,
        bookings: {
          include: {
            user: {
              select: { id: true, name: true, email: true }
            }
          }
        }
      }
    })

    if (!pkg) {
      return NextResponse.json(
        { success: false, error: 'Package not found' },
        { status: 404 }
      )
    }

    const totalPrice = pkg.basePrice + pkg.tours.reduce((sum, tour) => sum + Number(tour.price), 0)

    return NextResponse.json({
      success: true,
      data: {
        ...pkg,
        totalPrice
      }
    })
  } catch (error) {
    console.error('Package GET error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch package' },
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
    const validatedData = PackageSchema.parse(body)

    const packageData = {
      title: validatedData.title,
      description: validatedData.description,
      basePrice: validatedData.basePrice,
      tours: validatedData.tourIds ? {
        set: validatedData.tourIds.map(id => ({ id }))
      } : undefined
    }

    const pkg = await prisma.package.update({
      where: { id: params.id },
      data: packageData,
      include: {
        tours: true
      }
    })

    return NextResponse.json({
      success: true,
      data: pkg
    })
  } catch (error) {
    console.error('Package PUT error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to update package' },
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

    await prisma.package.delete({
      where: { id: params.id }
    })

    return NextResponse.json({
      success: true,
      message: 'Package deleted successfully'
    })
  } catch (error) {
    console.error('Package DELETE error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to delete package' },
      { status: 500 }
    )
  }
}
