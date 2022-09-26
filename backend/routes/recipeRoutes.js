const express = require('express')
const upload = require('../middleware/multer')
const router = express.Router()
const {
  getRecipes,
  setRecipe,
  updateRecipe,
  deleteRecipe,
} = require('../controllers/recipeController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getRecipes).post(protect, upload.single("file"), setRecipe)
router.route('/:id').delete(protect, deleteRecipe).put(protect, updateRecipe)

module.exports = router