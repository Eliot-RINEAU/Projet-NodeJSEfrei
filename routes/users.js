const express = require('express');
const router = express.Router();
const { getAllUsers, createNewUser, updateUser, deleteUser } = require("../controllers/usersControllers");
const db = require("../database");



// GET : LIRE tous les utilisateurs
router.get("/", getAllUsers);

// GET : LIRE un utilisateur spécifique
router.get("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id === id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ msg: "utilisateur non trouvé" });
    }
});

// POST : CRÉER un nouvel utilisateur
router.post("/", createNewUser);

// PUT : METTRE À JOUR un utilisateur
router.put("/:id", updateUser);

// DELETE : SUPPRIMER un utilisateur
router.delete("/:id", deleteUser);

module.exports = router;
