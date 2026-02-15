import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

interface DatabaseConfig {
  host: string;
  user: string;
  password: string;
  database: string;
  port?: number;
  connectionLimit?: number;
  acquireTimeout?: number;
  timeout?: number;
}

const config: DatabaseConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'neutourx_db',
  port: parseInt(process.env.DB_PORT || '3306'),
  connectionLimit: 10,
  acquireTimeout: 60000,
  timeout: 60000,
};

// Create connection pool
const pool = mysql.createPool(config);

// Test database connection
const testConnection = async () => {
  try {
    const connection = await pool.getConnection();
    console.log('✅ Database connected successfully!');
    console.log(`📊 Connected to database: ${config.database}`);
    connection.release();
  } catch (error) {
    console.error('❌ Database connection failed:', error);
    throw error;
  }
};

// Execute query with error handling
const executeQuery = async (query: string, params?: any[]) => {
  try {
    const [rows] = await pool.execute(query, params);
    return rows;
  } catch (error) {
    console.error('❌ Query execution failed:', error);
    throw error;
  }
};

// Get single record
const getSingleRecord = async (query: string, params?: any[]) => {
  try {
    const [rows] = await pool.execute(query, params);
    return rows.length > 0 ? rows[0] : null;
  } catch (error) {
    console.error('❌ Get single record failed:', error);
    throw error;
  }
};

// Insert record
const insertRecord = async (query: string, params?: any[]) => {
  try {
    const [result] = await pool.execute(query, params);
    return result.insertId;
  } catch (error) {
    console.error('❌ Insert record failed:', error);
    throw error;
  }
};

// Update record
const updateRecord = async (query: string, params?: any[]) => {
  try {
    const [result] = await pool.execute(query, params);
    return result.affectedRows;
  } catch (error) {
    console.error('❌ Update record failed:', error);
    throw error;
  }
};

// Delete record
const deleteRecord = async (query: string, params?: any[]) => {
  try {
    const [result] = await pool.execute(query, params);
    return result.affectedRows;
  } catch (error) {
    console.error('❌ Delete record failed:', error);
    throw error;
  }
};

// Close connection pool
const closeConnection = async () => {
  try {
    await pool.end();
    console.log('🔌 Database connection closed');
  } catch (error) {
    console.error('❌ Error closing database connection:', error);
  }
};

export {
  pool,
  testConnection,
  executeQuery,
  getSingleRecord,
  insertRecord,
  updateRecord,
  deleteRecord,
  closeConnection,
  config
};
