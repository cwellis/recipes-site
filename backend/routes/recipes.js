const express = require('express')
const {
    createRecipe,
    getRecipe,
    getRecipes,
    deleteRecipe,
    updateRecipe
} = require('../controllers/recipeController')
const Recipe = require('../models/recipeModel')

const router = express.Router()

// GET all recipes
router.get('/', getRecipes)

// GET a single recipe
router.get('/:id', getRecipe)

// POST a new recipe
router.post('/', createRecipe)

// DELETE a recipe
router.delete('/:id', deleteRecipe)

// UPDATE a recipe
router.patch('/:id', updateRecipe)

module.exports = router