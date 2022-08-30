const mongoose = require('mongoose')

const Schema = mongoose.Schema

const communitySchema = new Schema(
{
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    communityName: {
        type: String,
        required: true
    }

}, { timestamps: true })

module.exports = mongoose.model('Community', communitySchema)