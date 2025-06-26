const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: { type: String, required: true },
  level: String
});

module.exports = mongoose.model('Skill', skillSchema);