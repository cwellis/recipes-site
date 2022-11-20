const express = require('express')
const upload = require('../middleware/multer')
const router = express.Router()
const {
  getRecipes,
  getFeed,
  setRecipe,
  updateRecipe,
  deleteRecipe,
  likeRecipe
} = require('../controllers/recipeController')

const { protect } = require('../middleware/authMiddleware')

// /recipes
router.route('/').get(protect, getRecipes).post(protect, upload.single("file"), setRecipe)

// /recipes/feed
router.route('/feed').get(protect, getFeed)

// /recipes/:id
router.route('/:id').delete(protect, deleteRecipe).put(protect, updateRecipe).put(likeRecipe)

module.exports = router