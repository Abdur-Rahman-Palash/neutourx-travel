
import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { CheckoutSchema, BookingSchema } from '@/lib/validators'
import { verifyToken, getUserByEmail } from '@/lib/auth'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20'
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = CheckoutSchema.parse(body)

    // Get or create user
    let user = await getUserByEmail(validatedData.customerInfo.email)
    if (!user) {
      user = await prisma.user.create({
        data: {
          email: validatedData.customerInfo.email,
          name: validatedData.customerInfo.name
        }
      })
    }

    // Calculate total amount
    let totalAmount = 0
    const bookings: any[] = []

    for (const item of validatedData.items) {
      let price = 0
      let bookingData: any = {
        userId: user.id,
        totalAmount: 0
      }

      switch (item.type) {
        case 'FLIGHT':
          const flight = await prisma.flight.findUnique({
            where: { id: item.id }
          })
          if (!flight) {
            return NextResponse.json(
              { success: false, error: `Flight ${item.id} not found` },
              { status: 404 }
            )
          }
          price = Number(flight.price)
          bookingData.flightId = item.id
          break

        case 'TOUR':
          const tour = await prisma.tour.findUnique({
            where: { id: item.id }
          })
          if (!tour) {
            return NextResponse.json(
              { success: false, error: `Tour ${item.id} not found` },
              { status: 404 }
            )
          }
          price = Number(tour.price)
          bookingData.tourId = item.id
          break

        case 'PACKAGE':
          const pkg = await prisma.package.findUnique({
            where: { id: item.id },
            include: { tours: true }
          })
          if (!pkg) {
            return NextResponse.json(
              { success: false, error: `Package ${item.id} not found` },
              { status: 404 }
            )
          }
          price = Number(pkg.basePrice) + pkg.tours.reduce((sum: number, tour: any) => sum + Number(tour.price), 0)
          bookingData.packageId = item.id
          break
      }

      bookingData.totalAmount = price * item.quantity
      totalAmount += bookingData.totalAmount
      bookings.push(bookingData)
    }

    // Create Stripe payment intent
    let paymentIntent = null
    if (validatedData.paymentMethod === 'STRIPE') {
      paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(totalAmount * 100), // Convert to cents
        currency: 'usd',
        metadata: {
          userId: user.id,
          items: JSON.stringify(validatedData.items)
        }
      })
    }

    // Create bookings
    const createdBookings = await Promise.all(
      bookings.map(booking => 
        prisma.booking.create({
          data: {
            ...booking,
            status: 'PENDING'
          }
        })
      )
    )

    // Send confirmation email (mock implementation)
    await sendConfirmationEmail(user.email, createdBookings, totalAmount)

    return NextResponse.json({
      success: true,
      data: {
        bookings: createdBookings,
        totalAmount,
        paymentIntent,
        message: 'Booking created successfully'
      }
    })
  } catch (error) {
    console.error('Checkout POST error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to process checkout' },
      { status: 500 }
    )
  }
}

async function sendConfirmationEmail(email: string, bookings: any[], totalAmount: number) {
  // Mock email implementation - integrate with your email service
  console.log(`Sending confirmation email to ${email}`)
  console.log(`Bookings: ${JSON.stringify(bookings)}`)
  console.log(`Total: $${totalAmount}`)
  
  // Example with nodemailer:
  // const transporter = nodemailer.createTransport({
  //   service: 'gmail',
  //   auth: {
  //     user: process.env.EMAIL_USER,
  //     pass: process.env.EMAIL_PASS
  //   }
  // })
  // 
  // await transporter.sendMail({
  //   from: process.env.EMAIL_USER,
  //   to: email,
  //   subject: 'Booking Confirmation',
  //   html: generateBookingConfirmationHTML(bookings, totalAmount)
  // })
}
