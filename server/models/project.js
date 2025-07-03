// Example Project model (if you're using MongoDB/Mongoose)
const mongoose = require("mongoose")

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
  },
  technologies: [
    {
      type: String,
      trim: true,
    },
  ],
  category: {
    type: String,
    enum: ["design", "development", "mobile"],
    required: true,
  },
  githubUrl: {
    type: String,
    trim: true,
  },
  liveUrl: {
    type: String,
    trim: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model("Project", projectSchema)
