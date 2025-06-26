const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

router.get('/', contactController.getAllContacts); // pour le propriétaire
router.post('/', contactController.createContact); // pour les visiteurs

module.exports = router;
