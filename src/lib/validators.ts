import { z } from 'zod'

export const FlightSchema = z.object({
  id: z.string().optional(),
  airline: z.string().min(1, 'Airline is required'),
  flightNumber: z.string().min(1, 'Flight number is required'),
  origin: z.string().min(1, 'Origin is required'),
  destination: z.string().min(1, 'Destination is required'),
  departureTime: z.string().datetime(),
  arrivalTime: z.string().datetime(),
  price: z.number().min(0, 'Price must be positive'),
})

export const TourSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1, 'Title is required'),
  location: z.string().min(1, 'Location is required'),
  duration: z.number().min(1, 'Duration must be positive'),
  price: z.number().min(0, 'Price must be positive'),
  rating: z.number().min(0).max(5).default(0),
})

export const PackageSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  basePrice: z.number().min(0, 'Base price must be positive'),
  tourIds: z.array(z.string()).optional(),
})

export const CheckoutSchema = z.object({
  customerInfo: z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    phone: z.string().optional(),
  }),
  items: z.array(z.object({
    id: z.string(),
    type: z.enum(['FLIGHT', 'TOUR', 'PACKAGE']),
    quantity: z.number().min(1),
  })),
  paymentMethod: z.enum(['STRIPE', 'PAYPAL']),
  specialRequests: z.string().optional(),
})

export const BookingSchema = z.object({
  userId: z.string(),
  flightId: z.string().optional(),
  tourId: z.string().optional(),
  packageId: z.string().optional(),
  totalAmount: z.number(),
  status: z.enum(['PENDING', 'CONFIRMED', 'CANCELLED']).default('PENDING'),
})

export type CheckoutInput = z.infer<typeof CheckoutSchema>
export type BookingInput = z.infer<typeof BookingSchema>
export type FlightInput = z.infer<typeof FlightSchema>
export type TourInput = z.infer<typeof TourSchema>
export type PackageInput = z.infer<typeof PackageSchema>
