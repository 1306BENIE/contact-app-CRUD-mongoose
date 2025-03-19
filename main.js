require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectToDatabase = require('./db-connexion/mongoDBConnexion')
const route = require('./routes/contactRoute')

const app = express();
const PORT = process.env.PORT ||3000

app.use(cors());
app.use(express.json());

// connexion à la qbase de donnés contact
connectToDatabase();

// route pour les contacts
app.use('/contacts', route);


app.listen(PORT, ()=>{
  console.log(`Le serveur a bien demaré sur le port http://localhost:${PORT}`);
})