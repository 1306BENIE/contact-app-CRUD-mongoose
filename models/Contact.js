const mongoose = require("mongoose");

//  Définition du schéma Contact

const contactSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: Number, required: true },
    birthDate: { type: Date, required: true},
}, { timestamps: true });

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact
