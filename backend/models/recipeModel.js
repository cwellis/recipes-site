const mongoose = require('mongoose')

const Schema = mongoose.Schema

const recipeSchema = new Schema(
{
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    title: {
        type: String,
        required: true
    },
    prepTime: {
        type: String,
        required: true
    },
    cookTime: {
        type: String,
        required: true
    },
    ingredients: {
        type: String,
        required: true
    },
    instructions: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    cloudinaryId: {
        type: String,
        required: true
    },
    likes: {
        type: [String],
        default: [],
    }

}, { timestamps: true })

module.exports = mongoose.model('Recipe', recipeSchema)

// test