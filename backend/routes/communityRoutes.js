const express = require('express')
const router = express.Router()
const {
  getCommunities,
  setCommunity,
  updateCommunity,
  deleteCommunity,
} = require('../controllers/communityController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getCommunities).post(protect, setCommunity)
router.route('/:id').delete(protect, deleteCommunity).put(protect, updateCommunity)

module.exports = router