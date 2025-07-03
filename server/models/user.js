// Example User model (if you're using MongoDB/Mongoose)
const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  about: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  phone: {
    type: String,
    trim: true,
  },
  footerDescription: {
    type: String,
    trim: true,
  },
  socialLinks: {
    linkedin: String,
    facebook: String,
    twitter: String,
    instagram: String,
    github: String,
  },
  isMainUser: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model("User", userSchema)
