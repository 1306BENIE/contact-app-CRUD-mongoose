const express = require("express");
const Contact = require("../models/Contact");

const router = express.Router();

// 1. Créer un utilisateur (CREATE)
router.post("/", async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    const savedContact = await newContact.save();
    res.status(201).json(savedContact);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 2. Lire tous les utilisateurs (READ)
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 3. Lire un utilisateur par ID (READ)
router.get("/:id", async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact)
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    res.status(200).json(contact);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 4. Mettre à jour un utilisateur (UPDATE)
router.put("/:id", async (req, res) => {
  try {
    const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedContact)
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    res.status(200).json(updatedContact);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 5. Supprimer un utilisateur (DELETE)
router.delete("/:id", async (req, res) => {
  try {
    const deletedContact = await Contact.findByIdAndDelete(req.params.id);
    if (!deletedContact)
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    res.status(200).json({ message: "Utilisateur supprimé avec succès" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;