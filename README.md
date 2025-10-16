# API Pipeline 

Ce projet Node.js permet de générer des **profils utilisateurs complets** à partir de plusieurs APIs publiques. Il combine des données comme nom, email, numéro de téléphone, IBAN, carte bancaire, un random nom.

---

# Fonctionnalités

* via `randomuser.me`
- Génération d’un **profil utilisateur complet** (nom, email, photo, location, etc.)

* via `randommer.io`
- Numéro de téléphone 
- IBAN bancaire aléatoire
- Carte de crédit fictive
- Prénom aléatoire

* via `random-word-api`
- Mot aléatoire 

* via `api.thedogapi`
- Type de chien de compagnie

* via `official-joke-api`
- Une blague 

* via `zenquotes.io`
- Quote 

---
## Exemple de sortie

```json
User: {
  name: 'Thomas Gardner',
  email: 'thomas.gardner@example.com',
  gender: 'male',
  location: 'Albany, Australia',
  picture: 'https://randomuser.me/api/portraits/men/72.jpg'
}
Phone number: +33 7 56 28 21 20
IBAN: FR446120019365I8718Z3AL9915
Credit Card: {
  cardNumber: '370190364191784',
  type: 'AmericanExpress',
  Expiration: '2028-10-16T08:34:40.8840406+00:00',
  cvv: '806'
}
Random name: Baylei
Random word: dwining
Pet: Swedish Vallhund
Joke: {
  type: 'programming',
  content: 'What do you get when you cross a React developer with a mathematician? A function component.'
}
Quote: "I will love the light for it shows me the way, yet I will endure the darkness because it shows me the stars." — Og Mandino
```

```bash
Dans le fichier .env, remplacez `VOTRE_CLE_ICI` par votre clé API RANDOMMER_API_KEY, générée sur https://randommer.io/
```

```bash
Pour lancer le projet executer la commande suivante : node pipeline.mjs
```
