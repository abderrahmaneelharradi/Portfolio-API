const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// CRUD pour plusieurs utilisateurs
router.get('/', userController.getUsers); // Voir tous les utilisateurs
router.post('/', userController.createUser); // Ajouter un utilisateur
router.put('/:id', userController.updateUser); // Modifier un utilisateur via son ID
router.delete('/:id', userController.deleteUser); // Supprimer un utilisateur via son ID

module.exports = router;