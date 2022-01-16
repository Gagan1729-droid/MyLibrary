const mongoose = require('mongoose')

const path = require('path')
const coverImageBasePath = 'uploads/bookCovers'
const bookSchema  = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    publishDate: {
        type: String,
        required: true
    },
    pageCount: {
        type: String,
        required: true
    },
    createdAt: {
        type: String,
        required: true,
        default: Date.now
    },
    coverImageName: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Author'
    }
})

bookSchema.virtual('coverImagePath').get(function() {
    if(this.coverImageName!= null){
        return path.join('/', coverImageBasePath, this.coverImageName)
    }
})
module.exports = mongoose.model('Book', bookSchema)
module.exports.coverImageBasePath = coverImageBasePath