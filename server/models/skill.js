// Example Skill model (if you're using MongoDB/Mongoose)
const mongoose = require("mongoose")

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  level: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
  category: {
    type: String,
    enum: ["frontend", "backend", "design", "tools"],
    required: true,
  },
  icon: {
    type: String,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model("Skill", skillSchema)
