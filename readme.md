# 📞 Gestion des Contacts avec MongoDB, Express et Mongoose

Une API REST permettant de gérer une liste de contacts avec **Node.js**, **Express**, **MongoDB** et **Mongoose**.  
L'application permet d'**ajouter**, **rechercher**, **mettre à jour** et **supprimer** des contacts.

---

## 🚀 Fonctionnalités

✅ Ajouter un contact  
✅ Récupérer tous les contacts  
✅ Récupérer un contact par ID  
✅ Mettre à jour un contact  
✅ Supprimer un contact  

---


---

## 🛠️ Installation et Configuration

### 1️⃣ **Cloner le projet**

git clone https://github.com/1306BENIE/contact-app-CRUD-mongoose.git

cd contact-app-CRUD-mongoose

### 2️⃣ Installer les dépendances:
npm install

### 3️⃣ Créer un fichier .env et configurer MongoDB

Dans le fichier .env, ajoute l'URI de connexion à MongoDB, le port et le mot de passe

### 4️⃣ Démarrer le serveur

node main.js 
---
ou avec Nodemon (si installé) :

npm run start
---
Le serveur s'exécutera sur http://localhost:3000

## 📌 API Endpoints

| Méthode | Endpoint       | Description                  |
|---------|--------------|--------------------------------|
| **POST**  | `/contacts`     | Ajouter un nouveau contact  |
| **GET**   | `/contacts`     | Récupérer tous les contacts |
| **GET**   | `/contacts/:id` | Récupérer un contact par ID |
| **PUT**   | `/contacts/:id` | Mettre à jour un contact    |
| **DELETE**| `/contacts/:id` | Supprimer un contact        |



## 🔍 Exemples de Requêtes API
### ➕ Créer un contact

POST /contacts

## 📌 Récupérer tous les contacts

GET /contacts

## 🔄 Mettre à jour un contact

PUT /contacts/:id

## 🗑️ Supprimer un contact

DELETE /contacts/:id

# 🏗️ Technologies Utilisées
**Node.js** (Serveur Backend)

**Express.js** (Framework Web)

**MongoDB** (Base de Données NoSQL)

**Mongoose** (ODM pour MongoDB)

**dotenv** (Gestion des variables d'environnement)

**cors** (Gestion des accès entre origines différentes)



# 📧 Contact

💻 Développeur : **BENIE SYLVESTRE**

📩 Email : sylvestrebenie7829@gmail.com


