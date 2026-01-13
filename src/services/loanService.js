import API_BASE_URL from '../config/api'

/**
 * Create a new loan request
 * @param {Object} loanData - Loan request data
 * @returns {Promise<Object>} Created loan request response
 */
export const createLoanRequest = async (loanData) => {
  try {
    console.log('📤 Creating loan request...', loanData)
    
    const response = await fetch(`${API_BASE_URL}/api/loan-requests`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loanData),
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message || 'Failed to create loan request')
    }

    console.log('✅ Loan request created successfully:', data)
    return data
  } catch (error) {
    console.error('❌ Create loan request error:', error)
    throw error
  }
}

/**
 * Get all loan requests with optional filters
 * @param {Object} filters - Optional filters (userEmail, status)
 * @returns {Promise<Array>} Array of loan requests
 */
export const getAllLoanRequests = async (filters = {}) => {
  try {
    console.log('📥 Fetching loan requests with filters:', filters)
    
    // Build query string from filters
    const queryParams = new URLSearchParams()
    if (filters.userEmail) queryParams.append('userEmail', filters.userEmail)
    if (filters.status) queryParams.append('status', filters.status)
    
    const queryString = queryParams.toString()
    const url = `${API_BASE_URL}/api/loan-requests${queryString ? `?${queryString}` : ''}`
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch loan requests')
    }

    console.log('✅ Loan requests fetched successfully:', data.length || 0, 'items')
    return data
  } catch (error) {
    console.error('❌ Fetch loan requests error:', error)
    throw error
  }
}

/**
 * Get a single loan request by ID
 * @param {string} id - Loan request ID
 * @returns {Promise<Object>} Loan request data
 */
export const getLoanRequestById = async (id) => {
  try {
    console.log('📥 Fetching loan request by ID:', id)
    
    const response = await fetch(`${API_BASE_URL}/api/loan-requests/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch loan request')
    }

    console.log('✅ Loan request fetched successfully:', data)
    return data
  } catch (error) {
    console.error('❌ Fetch loan request error:', error)
    throw error
  }
}

/**
 * Get loan requests for the current user
 * @param {string} userEmail - User's email address
 * @returns {Promise<Array>} Array of user's loan requests
 */
export const getUserLoanRequests = async (userEmail) => {
  return getAllLoanRequests({ userEmail })
}

/**
 * Get loan requests by status
 * @param {string} status - Loan status (pending, approved, rejected)
 * @returns {Promise<Array>} Array of loan requests with the specified status
 */
export const getLoanRequestsByStatus = async (status) => {
  return getAllLoanRequests({ status })
}
