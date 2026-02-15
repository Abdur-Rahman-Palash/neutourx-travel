import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { PackageSchema } from '@/lib/validators'
import { verifyToken } from '@/lib/auth'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const minPrice = searchParams.get('minPrice')
    const maxPrice = searchParams.get('maxPrice')
    
    const where: any = {}
    
    if (minPrice || maxPrice) {
      where.basePrice = {}
      if (minPrice) where.basePrice.gte = parseFloat(minPrice)
      if (maxPrice) where.basePrice.lte = parseFloat(maxPrice)
    }

    const packages = await prisma.package.findMany({
      where,
      include: {
        tours: true,
        bookings: {
          select: { id: true }
        }
      }
    })

    return NextResponse.json({
      success: true,
      data: packages.map(pkg => ({
        ...pkg,
        tourCount: pkg.tours.length,
        bookingCount: pkg.bookings.length,
        totalPrice: pkg.basePrice + pkg.tours.reduce((sum, tour) => sum + Number(tour.price), 0)
      }))
    })
  } catch (error) {
    console.error('Packages GET error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch packages' },
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
    const validatedData = PackageSchema.parse(body)

    const packageData = {
      title: validatedData.title,
      description: validatedData.description,
      basePrice: validatedData.basePrice,
      tours: validatedData.tourIds ? {
        connect: validatedData.tourIds.map(id => ({ id }))
      } : undefined
    }

    const pkg = await prisma.package.create({
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
    console.error('Packages POST error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to create package' },
      { status: 500 }
    )
  }
}
