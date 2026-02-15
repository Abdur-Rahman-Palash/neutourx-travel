const mysql = require('mysql2/promise');
const bcrypt = require('bcryptjs');
require('dotenv').config();

// Database connection
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'neutourx_db',
  port: process.env.DB_PORT || '3306',
  connectionLimit: 10,
});

// Sample data for seeding
const sampleUsers = [
  {
    id: 1,
    email: 'admin@neutourx.com',
    password: 'admin123',
    name: 'Admin User',
    role: 'admin',
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    id: 2,
    email: 'user@neutourx.com',
    password: 'user123',
    name: 'Test User',
    role: 'user',
    created_at: new Date(),
    updated_at: new Date()
  }
];

const sampleDestinations = [
  {
    id: 1,
    name: 'Dubai',
    country: 'UAE',
    description: 'Luxury city with modern architecture and desert adventures',
    price: 1299,
    image_url: 'https://images.unsplash.com/photo-1512453979798-5ea936a7b7f?q=80&w=1000&auto=format&fit=crop',
    featured: true,
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    id: 2,
    name: 'London',
    country: 'United Kingdom',
    description: 'Historic city with royal experiences and cultural heritage',
    price: 999,
    image_url: 'https://images.unsplash.com/photo-1513635269975-5ea936a7b7f?q=80&w=1000&auto=format&fit=crop',
    featured: true,
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    id: 3,
    name: 'New York',
    country: 'USA',
    description: 'The city that never sleeps with iconic skyline and Broadway shows',
    price: 1450,
    image_url: 'https://images.unsplash.com/photo-1496442226666-8d4d0e5b7f?q=80&w=1000&auto=format&fit=crop',
    featured: true,
    created_at: new Date(),
    updated_at: new Date()
  }
];

const sampleBookings = [
  {
    id: 1,
    user_id: 2,
    destination_id: 1,
    check_in: '2024-02-15',
    check_out: '2024-02-20',
    guests: 2,
    total_price: 2598,
    status: 'confirmed',
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    id: 2,
    user_id: 2,
    destination_id: 2,
    check_in: '2024-03-10',
    check_out: '2024-03-15',
    guests: 1,
    total_price: 999,
    status: 'pending',
    created_at: new Date(),
    updated_at: new Date()
  }
];

// Seed function
const seedDatabase = async () => {
  try {
    console.log('🌱 Starting database seeding...');

    // Hash passwords
    for (const user of sampleUsers) {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(user.password, salt);
    }

    // Insert users
    for (const user of sampleUsers) {
      await pool.execute(
        'INSERT INTO users (id, email, password, name, role, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?)',
        [user.id, user.email, user.password, user.name, user.role, user.created_at, user.updated_at]
      );
      console.log(`✅ Created user: ${user.name}`);
    }

    // Insert destinations
    for (const destination of sampleDestinations) {
      await pool.execute(
        'INSERT INTO destinations (id, name, country, description, price, image_url, featured, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [destination.id, destination.name, destination.country, destination.description, destination.price, destination.image_url, destination.featured, destination.created_at, destination.updated_at]
      );
      console.log(`✅ Created destination: ${destination.name}`);
    }

    // Insert bookings
    for (const booking of sampleBookings) {
      await pool.execute(
        'INSERT INTO bookings (id, user_id, destination_id, check_in, check_out, guests, total_price, status, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [booking.id, booking.user_id, booking.destination_id, booking.check_in, booking.check_out, booking.guests, booking.total_price, booking.status, booking.created_at, booking.updated_at]
      );
      console.log(`✅ Created booking: ${booking.id}`);
    }

    console.log('🎉 Database seeding completed successfully!');
    console.log('📊 Summary:');
    console.log(`   - Users: ${sampleUsers.length}`);
    console.log(`   - Destinations: ${sampleDestinations.length}`);
    console.log(`   - Bookings: ${sampleBookings.length}`);

  } catch (error) {
    console.error('❌ Database seeding failed:', error);
  } finally {
    await pool.end();
    console.log('🔌 Database connection closed');
  }
};

// Run seeding if called directly
if (require.main === module) {
  seedDatabase();
}

module.exports = { seedDatabase };
