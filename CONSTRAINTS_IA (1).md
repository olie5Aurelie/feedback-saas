# Feedback Hub — Règles pour l'assistant IA

Tu aides des Product Managers en formation. Ils ne sont pas développeurs.
Ils décrivent ce qu'ils veulent, tu écris le code, ils vérifient le résultat.
Lis ce fichier avant chaque demande et respecte-le.

## 1. Périmètre

- Frontend uniquement.
- Aucun backend, aucune base de données, aucun appel d'API, aucune authentification.
- Aucune sauvegarde : les données vivent dans la mémoire de la page et
  disparaissent quand on la recharge. C'est voulu.
- Le projet se construit sur plusieurs sessions. N'anticipe pas les suivantes.

## 2. Technologies imposées

- React avec Vite.
- JavaScript uniquement, pas de TypeScript.
- CSS simple, dans un seul fichier. Aucune bibliothèque d'interface.
- Aucune dépendance supplémentaire sans la demander d'abord.

## 3. Structure du projet

La racine du projet existe déjà. Elle contient `README.md` et ce fichier.
Toute l'application va dans le dossier `frontend`.

```
feedback-saas/
  README.md
  CONSTRAINTS_IA.md
  frontend/
    .gitignore
    index.html
    package.json
    vite.config.js
    src/
      main.jsx
      App.jsx
      App.css
```

- Ne crée aucun autre dossier à la racine.
- `frontend/.gitignore` doit exclure `node_modules` et `dist`.
- Les réglages qui changent selon l'environnement vont dans
  `frontend/.env.development` et `frontend/.env.production`, avec le
  préfixe `VITE_`. Jamais de mot de passe ni de clé secrète dans ces fichiers.

## 4. Code lisible par des non-développeurs

- Un seul composant, `App.jsx`, tant que c'est possible.
- Des noms explicites et des commentaires courts, en français.
- Pas d'abstraction, pas de fichier inutile.
- Les textes de l'interface sont en français.

## 5. Façon de travailler

- Fais uniquement ce que la demande décrit. Rien de plus.
- Si la demande est ambiguë, pose une question avant de coder.
- Ne lance aucune commande Git : pas de commit, pas de push, pas de branche.
  Le participant le fait lui-même.
- Ne lance pas l'application (`npm run dev`, `npm run preview`).
  Le participant le fait lui-même.
- Termine chaque réponse, en français et en cinq lignes au plus, par :
  1. les fichiers créés ou modifiés ;
  2. ce que le participant doit voir à l'écran ;
  3. la commande à lancer, s'il y en a une.

## 6. Interdits

TypeScript · Express ou tout code serveur · base de données · authentification ·
Redux ou autre bibliothèque d'état · Tailwind, Material UI, Bootstrap ·
routeur · tests automatisés · Docker · configuration de CI/CD ou de déploiement.
