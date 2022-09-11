const asyncHandler = require('express-async-handler')

const Community = require('../models/communityModel')
const User = require('../models/userModel')

// @desc    Get communities
// @route   GET /api/communities
// @access  Private
const getCommunities = asyncHandler(async (req, res) => {
  const communities = await Community.find({ user: req.user.id })

  res.status(200).json(communities)
})

// @desc    Set communtiy
// @route   POST /api/communities
// @access  Private
const setCommunity = asyncHandler(async (req, res) => {
  if (!req.body.communityName) {
    res.status(400)
    throw new Error('Please enter all fields')
  }

  const community = await Community.create({
    communityName: req.body.communityName,
    user: req.user.id
  })

  res.status(200).json(community)
})

// @desc    Update community
// @route   PUT /api/communities/:id
// @access  Private
const updateCommunity = asyncHandler(async (req, res) => {
  const community = await Community.findById(req.params.id)

  if (!community) {
    res.status(400)
    throw new Error('Community not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the community user
  if (community.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  const updatedCommunity = await Community.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedCommunity)
})

// @desc    Delete community
// @route   DELETE /api/communities/:id
// @access  Private
const deleteCommunity = asyncHandler(async (req, res) => {
  const community = await Community.findById(req.params.id)

  if (!community) {
    res.status(400)
    throw new Error('Community not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the community user
  if (community.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  await community.remove()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getCommunities,
  setCommunity,
  updateCommunity,
  deleteCommunity,
}