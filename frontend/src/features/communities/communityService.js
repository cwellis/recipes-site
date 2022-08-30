import axios from 'axios'

const API_URL = '/api/communities/'

// Create new community
const createCommunity = async (communityData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, communityData, config)

  return response.data
}

// Get user communities
const getCommunities = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

// Update user community
const updateCommunity = async (communityId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.update(API_URL + communityId, config)

  return response.data
}

// Delete user community/
const deleteCommunity = async (communityId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + communityId, config)

  return response.data
}

const communityService = {
  createCommunity,
  getCommunities,
  updateCommunity,
  deleteCommunity,
}

export default communityService