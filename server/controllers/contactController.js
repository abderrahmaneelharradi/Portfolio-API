const Contact = require('../models/contact');

exports.getAllContacts = async (req, res) => {
  try {
    const messages = await Contact.find();
    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createContact = async (req, res) => {
  try {
    const newMsg = new Contact(req.body);
    const saved = await newMsg.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};