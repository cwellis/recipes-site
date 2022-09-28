const express = require('express')
const upload = require('../middleware/multer')
const router = express.Router()
const {
  getRecipes,
  getFeed,
  setRecipe,
  updateRecipe,
  deleteRecipe,
} = require('../controllers/recipeController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getRecipes).post(protect, upload.single("file"), setRecipe)

router.route('/feed').get(protect, getFeed)

router.route('/:id').delete(protect, deleteRecipe).put(protect, updateRecipe)

module.exports = router