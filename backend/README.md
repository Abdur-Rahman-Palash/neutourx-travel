# Neutourx Backend

A comprehensive travel booking backend built with Next.js API Routes, Prisma ORM, and PostgreSQL.

## 🚀 Features

### API Routes
- **`/api/flights`** - Flight management with search, filtering, and CRUD operations
- **`/api/tours`** - Tour management with location, price, and rating filters
- **`/api/packages`** - Travel packages with tour combinations
- **`/api/checkout`** - Payment processing with Stripe integration
- **`/api/users`** - User authentication and profile management

### Database Models
- **User** - Authentication and user management
- **Flight** - Flight information with booking relationships
- **Tour** - Tour activities with pricing and ratings
- **Package** - Travel packages with multiple tours
- **Booking** - Central booking model linking all entities

### Integrations Ready
- ✅ **Stripe** - Payment processing
- ✅ **JWT Authentication** - Secure user sessions
- ✅ **Email System** - Booking confirmations (Nodemailer ready)
- 🔄 **Flight APIs** - Structured for Amadeus/Sabre integration
- 🔄 **Payment Gateways** - PayPal ready structure

## 📋 Setup Instructions

### 1. Environment Setup
```bash
cp .env.example .env
# Fill in your environment variables
```

### 2. Database Setup
```bash
# Install dependencies
npm install

# Generate Prisma client
npm run db:generate

# Run database migrations
npm run db:migrate

# (Optional) Open Prisma Studio
npm run db:studio
```

### 3. Start Development Server
```bash
npm run dev
```

## 🔐 Authentication

### Register User
```http
POST /api/users/register
Content-Type: application/json

{
  "email": "user@example.com",
  "name": "John Doe",
  "password": "securepassword"
}
```

### Login
```http
POST /api/users/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securepassword"
}
```

### Protected Routes
Add Authorization header:
```http
Authorization: Bearer <jwt-token>
```

## 📊 API Examples

### Flights
```http
# Get all flights
GET /api/flights

# Search flights
GET /api/flights?origin=NYC&destination=LAX&date=2024-06-15

# Create flight (Admin only)
POST /api/flights
Authorization: Bearer <admin-token>
Content-Type: application/json

{
  "airline": "Delta Airlines",
  "flightNumber": "DL123",
  "origin": "NYC",
  "destination": "LAX",
  "departureTime": "2024-06-15T10:00:00Z",
  "arrivalTime": "2024-06-15T13:00:00Z",
  "price": 299.99
}
```

### Tours
```http
# Get tours with filters
GET /api/tours?location=Paris&minPrice=50&maxPrice=200&minRating=4

# Create tour (Admin only)
POST /api/tours
Authorization: Bearer <admin-token>

{
  "title": "Eiffel Tower Tour",
  "location": "Paris",
  "duration": 120,
  "price": 89.99,
  "rating": 4.5
}
```

### Packages
```http
# Get all packages
GET /api/packages

# Create package (Admin only)
POST /api/packages
Authorization: Bearer <admin-token>

{
  "title": "Paris Adventure",
  "description": "Complete Paris experience",
  "basePrice": 199.99,
  "tourIds": ["tour_1", "tour_2"]
}
```

### Checkout
```http
POST /api/checkout
Content-Type: application/json

{
  "items": [
    {
      "type": "FLIGHT",
      "id": "flight_1",
      "quantity": 1
    },
    {
      "type": "TOUR",
      "id": "tour_1",
      "quantity": 2
    }
  ],
  "paymentMethod": "STRIPE",
  "customerInfo": {
    "email": "customer@example.com",
    "name": "Jane Smith",
    "phone": "+1234567890"
  }
}
```

## 🔧 Deployment

### Hostinger Static Export
The project is configured for static export:

1. **Frontend**: Static files ready for Hostinger
2. **Backend**: Deploy separately or use serverless functions

### Environment Variables for Production
- Set all environment variables in your hosting platform
- Ensure `DATABASE_URL` points to your PostgreSQL instance
- Configure Stripe keys for production

## 🎯 Performance Optimizations

- **Static Export**: Optimized for Hostinger deployment
- **Code Splitting**: Dynamic imports for heavy components
- **Lazy Loading**: Images and components loaded on demand
- **Bundle Optimization**: Tree shaking and minification
- **Image Optimization**: Next.js Image component with fallbacks

## 🔒 Security Features

- **JWT Authentication**: Secure token-based auth
- **Input Validation**: Zod schemas for all inputs
- **Rate Limiting**: Ready for express-rate-limit
- **CORS Configuration**: Secure cross-origin requests
- **SQL Injection Prevention**: Prisma ORM protection

## 📈 Monitoring & Analytics

Ready for integration with:
- **Error Tracking**: Sentry ready
- **Performance**: Vercel Analytics compatible
- **Logging**: Structured logging setup
- **Health Checks**: API status endpoints

## 🤝 Future Integrations

### Flight APIs
```javascript
// Amadeus integration ready
const amadeus = new Amadeus({
  clientId: process.env.AMADEUS_API_KEY,
  clientSecret: process.env.AMADEUS_API_SECRET
})
```

### Email Systems
```javascript
// SendGrid integration ready
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
```

### Payment Gateways
```javascript
// PayPal integration ready
const paypal = require('@paypal/checkout-server-sdk')
```

## 📝 License

MIT License - see LICENSE file for details
