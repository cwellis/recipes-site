const asyncHandler = require('express-async-handler')
const cloudinary = (require('../middleware/cloudinary'))

const Recipe = require('../models/recipeModel')
const User = require('../models/userModel')

// @desc    Get recipes
// @route   GET /api/recipes
// @access  Private
const getRecipes = asyncHandler(async (req, res) => {
  const recipes = await Recipe.find({ user: req.user.id })

  res.status(200).json(recipes)
})

// @desc    Set recipe
// @route   POST /api/recipes
// @access  Private
const setRecipe = asyncHandler(async (req, res) => {
  if (!req.body.title || !req.body.prepTime || !req.body.cookTime || !req.body.ingredients || !req.body.instructions) {
    res.status(400)
    throw new Error('Please enter all fields')
  }

  try {

    const result = await cloudinary.uploader.upload(req.file.path)
  
    const recipe = await Recipe.create({
      title: req.body.title,
      prepTime: req.body.prepTime,
      cookTime: req.body.cookTime,
      ingredients: req.body.ingredients,
      instructions: req.body.instructions,
      image: result.secure_url,
      user: req.user.id,
    })
  
    console.log('post had been added')
    res.status(200).json(recipe)
    
  } catch (error) {

    console.log(err)
    console.log('not working')
    
  }

})

// @desc    Update recipe
// @route   PUT /api/recipes/:id
// @access  Private
const updateRecipe = asyncHandler(async (req, res) => {
  const recipe = await Recipe.findById(req.params.id)

  if (!recipe) {
    res.status(400)
    throw new Error('Recipe not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the recipe user
  if (recipe.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedRecipe)
})

// @desc    Delete recipe
// @route   DELETE /api/recipes/:id
// @access  Private
const deleteRecipe = asyncHandler(async (req, res) => {
  const recipe = await Recipe.findById(req.params.id)

  if (!recipe) {
    res.status(400)
    throw new Error('Recipe not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the recipe user
  if (recipe.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  await recipe.remove()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getRecipes,
  setRecipe,
  updateRecipe,
  deleteRecipe,
}