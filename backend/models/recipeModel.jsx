const mongoose = require('mongoose')

const Schema = mongoose.Schema

const recipeSchema = new Schema({
    markDown: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Workout', workoutSchema)