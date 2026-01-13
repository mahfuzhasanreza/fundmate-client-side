import API_BASE_URL from '../config/api'

export const createCampaign = async (campaignData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/campaigns`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(campaignData),
    })
    if (!response.ok) throw new Error('Failed to create campaign')
    return await response.json()
  } catch (error) {
    console.error('Create campaign error:', error)
    throw error
  }
}

export const getAllCampaigns = async (filters = {}) => {
  try {
    const queryParams = new URLSearchParams(filters)
    const url = `${API_BASE_URL}/api/campaigns${queryParams.toString() ? '?' + queryParams : ''}`
    const response = await fetch(url)
    if (!response.ok) throw new Error('Failed to fetch campaigns')
    const result = await response.json()
    return Array.isArray(result) ? result : (result.campaigns || [])
  } catch (error) {
    console.error('Get campaigns error:', error)
    throw error
  }
}

export const getCampaignById = async (campaignId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/campaigns/${campaignId}`)
    if (!response.ok) throw new Error('Failed to fetch campaign')
    return await response.json()
  } catch (error) {
    console.error('Get campaign error:', error)
    throw error
  }
}
