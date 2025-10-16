# Agrégation de données & API REST 

Ce projet **Node.js** permet de générer des **profils utilisateurs complets** à partir de plusieurs APIs publiques, puis de les exposer via une **API REST Express**.  
Il combine des données issues de plusieurs sources (`RandomUser`, `Randommer`, etc.) et calcule des **dark data dérivées**.

---

# Fonctionnalités

* via `randomuser.me`
- Génération d’un **profil utilisateur complet** (nom, email, photo, location, etc.)

* via `randommer.io`
- Numéro de téléphone 
- IBAN bancaire aléatoire
- Carte de crédit fictive
- Prénom aléatoire 

* via `api.thedogapi`
- Type de chien de compagnie

* via `official-joke-api`
- Une blague 

* via `zenquotes.io`
- Quote 

---
## L’API

### Endpoint principal : `/profile`
- **Méthode :** GET  
- **Description :** Retourne un profil complet agrégé depuis plusieurs APIs.

#### Exemple de requête :
```bash
GET http://localhost:3000/profile

Voici un exemple de réponse obtenue depuis l’API `/profile` :

[Résultat de l’API](./Api_result.PNG)
```



### Dark Data

*ibanCountry	: Déduit le pays à partir des deux premières lettres de l’IBAN
*userNameLength	:	Nombre de caractères dans le nom complet
*registrationDuration	:	Durée d’inscription (en années)
* ageCategory	:	Catégorise l’utilisateur : Jeune, Adulte ou Senior

## Requirements
Node.js
npm
Express.js
Axios
Dotenv
APIs publiques externes 
git

## Lancer L'API

```bash
Dans le fichier .env, remplacez `VOTRE_CLE_ICI` par votre clé API RANDOMMER_API_KEY, générée sur https://randommer.io/
```

```bash
Pour lancer le projet executer la commande suivante : node server.mjs
```

