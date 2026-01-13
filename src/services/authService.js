import API_BASE_URL from '../config/api'

/**
 * Register a new user
 * @param {Object} userData - User registration data
 * @param {string} userData.fullName - Full name of the user
 * @param {string} userData.Email - Email address
 * @param {string} userData.Phone - Phone number
 * @param {string} userData.Password - Password
 * @returns {Promise<Object>} Registration response
 */
export const registerUser = async (userData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fullName: userData.fullName,
        Email: userData.Email,
        Phone: userData.Phone,
        Password: userData.Password,
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message || 'Registration failed')
    }

    return data
  } catch (error) {
    console.error('Registration error:', error)
    throw error
  }
}

/**
 * Login user
 * @param {Object} credentials - User login credentials
 * @param {string} credentials.Email - Email address
 * @param {string} credentials.Password - Password
 * @returns {Promise<Object>} Login response
 */
export const loginUser = async (credentials) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Email: credentials.Email,
        Password: credentials.Password,
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message || 'Login failed')
    }

    // Store auth token if provided
    if (data.token) {
      localStorage.setItem('authToken', data.token)
    }

    // Store user data if provided
    if (data.user) {
      localStorage.setItem('userData', JSON.stringify(data.user))
    }

    return data
  } catch (error) {
    console.error('Login error:', error)
    throw error
  }
}

/**
 * Logout user
 */
export const logoutUser = () => {
  localStorage.removeItem('authToken')
  localStorage.removeItem('userData')
}

/**
 * Get current user from localStorage
 * @returns {Object|null} User data or null
 */
export const getCurrentUser = () => {
  const userData = localStorage.getItem('userData')
  return userData ? JSON.parse(userData) : null
}

/**
 * Get auth token from localStorage
 * @returns {string|null} Auth token or null
 */
export const getAuthToken = () => {
  return localStorage.getItem('authToken')
}

/**
 * Check if user is authenticated
 * @returns {boolean} Authentication status
 */
export const isAuthenticated = () => {
  return !!getAuthToken()
}
