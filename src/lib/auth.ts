// Mock authentication - database removed
export interface User {
  id: string
  email: string
  name: string | null
  role: string
  createdAt: Date
  updatedAt: Date
}

export const verifyToken = async (token: string): Promise<User | null> => {
  try {
    // Mock implementation - replace with your actual JWT verification
    if (token === 'mock-token') {
      return {
        id: 'mock-user-id',
        email: 'user@example.com',
        name: 'Mock User',
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    }
    return null
  } catch (error) {
    console.error('Failed to get user by token:', error)
    return null
  }
}

export const getUserByEmail = async (email: string): Promise<User | null> => {
  try {
    // Mock implementation - replace with actual database query
    if (email === 'user@example.com') {
      return {
        id: 'mock-user-id',
        email: 'user@example.com',
        name: 'Mock User',
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    }
    return null
  } catch (error) {
    console.error('Failed to get user by email:', error)
    return null
  }
}

export const createUser = async (userData: {
  email: string
  name?: string
  role?: string
}): Promise<User> => {
  try {
    // Mock implementation - replace with actual database query
    const newUser = {
      id: 'new-user-id',
      email: userData.email,
      name: userData.name || 'New User',
      role: userData.role || 'user',
      createdAt: new Date(),
      updatedAt: new Date()
    }
    return newUser
  } catch (error) {
    console.error('Failed to create user:', error)
    throw error
  }
}
