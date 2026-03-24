# WebMobUI - Projet Spotlified recap
Structure de départ pour le recap du projet Spotlified du cours [WebMobUI](https://github.com/lgavillet/webmobui).
## Objectif
L'objectif est d'obtenir une application web fonctionnelle déployée sur Netlify similaire à celle-ci : https://calimomilo-spotlified.netlify.app/

Le résultat obtenu lors du recap se trouve sur la branche `solution` et peut être atteint à l'adresse suivante : https://calimomilo-spotlified-recap.app/
## Programme
### Initialisation ([Partie 1, 00:00](https://hessoit.sharepoint.com/:v:/s/2025-26M532ok/IQAU73hG4x32S7ehazbMUpwYAeIK9Vzxk_XuEcyuvjjE07w?e=Dqr2yM&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifSwicGxheWJhY2tPcHRpb25zIjp7fX0%3D))
forker et cloner ce repo

pour installer les dépendances : `npm install`

pour lancer le serveur : `npm start`
### Comprendre la structure des fichiers ([08:10](https://hessoit.sharepoint.com/:v:/s/2025-26M532ok/IQAU73hG4x32S7ehazbMUpwYAeIK9Vzxk_XuEcyuvjjE07w?e=HKaiox&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifSwicGxheWJhY2tPcHRpb25zIjp7InN0YXJ0VGltZUluU2Vjb25kcyI6NDkwLjk0fX0%3D))
suit plus ou moins le modèle MVC
- à la racine : comment on interagit avec certains éléments : API, player, LocalStorage
- dossiers `elements` et `pages` : comment on affiche les pages (+ intéraction avec ces pages)
- `index.js` : routeur → définit quelle page on affiche en fonction de l'url (`index.js`)
### Router ([09:48](https://hessoit.sharepoint.com/:v:/s/2025-26M532ok/IQAU73hG4x32S7ehazbMUpwYAeIK9Vzxk_XuEcyuvjjE07w?e=q5OYkl&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifSwicGxheWJhY2tPcHRpb25zIjp7InN0YXJ0VGltZUluU2Vjb25kcyI6NTg4LjJ9fQ%3D%3D))
fonction `router()`
- récupère le hash de l'url → sépare en plusieurs parties
- opérateur par défaut `||`
- en fonction du contenu du hash, change le contenu du main

eventListener `hashchange` → appelle `router`

⇒ pourquoi est-ce qu'on appelle `router()` en bas de la page ?
### Custom HTML ([13:25](https://hessoit.sharepoint.com/:v:/s/2025-26M532ok/IQAU73hG4x32S7ehazbMUpwYAeIK9Vzxk_XuEcyuvjjE07w?e=oib55Q&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifSwicGxheWJhY2tPcHRpb25zIjp7InN0YXJ0VGltZUluU2Vjb25kcyI6ODA1LjZ9fQ%3D%3D))
- `page-home.js` → utilisation d'une classe pour créer un élément HTML custom
- `spot-footer.js` → logique de l'affichage du footer en fonction de la page ; balise `<a>` passe la valeur de `href` dans le hash quand on clique dessus
- modification de `router()`
### Artistes et API ([32:15](https://hessoit.sharepoint.com/:v:/s/2025-26M532ok/IQAU73hG4x32S7ehazbMUpwYAeIK9Vzxk_XuEcyuvjjE07w?e=IXaKSG&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifSwicGxheWJhY2tPcHRpb25zIjp7InN0YXJ0VGltZUluU2Vjb25kcyI6MTkzNS40Nn19))
- `api.js` → `fetchJson()` pour faciliter la compréhension des autres fonctions
-  `page-artists.js` → récupérer les données depuis l'API ; passer des variables à un élément HTML avec les attributs
- `artist-cover.js` → récupérer les variables des attributs
### Chansons d'un artiste ([1:06:55](https://hessoit.sharepoint.com/:v:/s/2025-26M532ok/IQAU73hG4x32S7ehazbMUpwYAeIK9Vzxk_XuEcyuvjjE07w?e=WL6lep&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifSwicGxheWJhY2tPcHRpb25zIjp7InN0YXJ0VGltZUluU2Vjb25kcyI6NDAxNS41MX19))
- `index.js` → passer un élément du hash à la page
- `page-songs.js` _version simplifiée_ → itération du tableau ; pourquoi pas un bout de HTML?
- `song-item.js` → création de `CustomEvent()`
### Player ([1:47:44](https://hessoit.sharepoint.com/:v:/s/2025-26M532ok/IQAU73hG4x32S7ehazbMUpwYAeIK9Vzxk_XuEcyuvjjE07w?e=mbJQSW&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifSwicGxheWJhY2tPcHRpb25zIjp7InN0YXJ0VGltZUluU2Vjb25kcyI6NjQ2NC4yOH19) + [Partie 2, 00:00](https://hessoit.sharepoint.com/:v:/s/2025-26M532ok/IQABsEaHDEeUQ6SHRsHfUQX4AebbqC8SVbfZj3z8QUskVSI?e=mIaOtU&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifSwicGxheWJhY2tPcHRpb25zIjp7fX0%3D))
- `player.js` → qques fonctions utiles pour interagir avec le player (play, next, previous) ; ajouter l'eventListener sur le bouton
- `page-player.js` → expliquer les différents eventListeners
### Search ([1:17:15](https://hessoit.sharepoint.com/:v:/s/2025-26M532ok/IQABsEaHDEeUQ6SHRsHfUQX4AebbqC8SVbfZj3z8QUskVSI?e=QuSYB3&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifSwicGxheWJhY2tPcHRpb25zIjp7InN0YXJ0VGltZUluU2Vjb25kcyI6NDYzNS43OH19))
- `search-bar.js` → passer la recherche dans le hash, `encodeURIComponent()`
- mtn si on voulait créer la page de résultats de la recherche, elle serait extrêmement similaire à `page-songs` ⇒ idée de créer une classe parent commune
### PageSongs ([1:27:24](https://hessoit.sharepoint.com/:v:/s/2025-26M532ok/IQABsEaHDEeUQ6SHRsHfUQX4AebbqC8SVbfZj3z8QUskVSI?e=ba0BkL&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifSwicGxheWJhY2tPcHRpb25zIjp7InN0YXJ0VGltZUluU2Vjb25kcyI6NTI0NC40fX0%3D))
- `page-songs.js` on enlève les éléments pas en commun : attributs, titre, `getSongs()`
- `page-artist-songs` et `page-search-songs` héritent de cette classe
- création des fonctions `getTitle()` et `getSongsData()` dans les pages spécifiques
- `page-artist-songs` → besoin d'accéder au résultat de la requête dans `getTitle()`, mais les éléments ne sont plus liés, nécessaire de passer par un attribut de la classe
- ajouter les imports des nouvelles pages dans `index.js`!! ([2:06:47](https://hessoit.sharepoint.com/:v:/s/2025-26M532ok/IQABsEaHDEeUQ6SHRsHfUQX4AebbqC8SVbfZj3z8QUskVSI?e=CRA6pQ&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifSwicGxheWJhY2tPcHRpb25zIjp7InN0YXJ0VGltZUluU2Vjb25kcyI6NzYwNy4yN319) le moment de réalisation ahaha)
### Favoris ([2:16:35](https://hessoit.sharepoint.com/:v:/s/2025-26M532ok/IQABsEaHDEeUQ6SHRsHfUQX4AebbqC8SVbfZj3z8QUskVSI?e=WqhFkG&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifSwicGxheWJhY2tPcHRpb25zIjp7InN0YXJ0VGltZUluU2Vjb25kcyI6ODE5NS41fX0%3D))
- `local-storage.js` → fonctions pour interagir avec localStorage ; gérer le clic + affichage
- `page-favorite-songs.js` → hérite aussi  de PageSongs
### Fichier manifest ([2:44:54](https://hessoit.sharepoint.com/:v:/s/2025-26M532ok/IQABsEaHDEeUQ6SHRsHfUQX4AebbqC8SVbfZj3z8QUskVSI?e=k0ZKT4&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifSwicGxheWJhY2tPcHRpb25zIjp7InN0YXJ0VGltZUluU2Vjb25kcyI6OTg5NC40Mn19))
- images dans le dossier `public` pour qu'elles soient accessibles telles quelles
- `manifest.webmanifest` → dans le dossier `public` ; infos de base pour pouvoir déployer comme webapp ; ajouter le lien dans `index.html`
### Mode offline ([2:49:37](https://hessoit.sharepoint.com/:v:/s/2025-26M532ok/IQABsEaHDEeUQ6SHRsHfUQX4AebbqC8SVbfZj3z8QUskVSI?e=lQ4GLk&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifSwicGxheWJhY2tPcHRpb25zIjp7InN0YXJ0VGltZUluU2Vjb25kcyI6MTAxNzcuMjJ9fQ%3D%3D))
- `index.js` → ajouter les eventListeners ; changement de couleur et bouton recherche ; test dans le navigateur
### Service Worker ([3:00:56](https://hessoit.sharepoint.com/:v:/s/2025-26M532ok/IQABsEaHDEeUQ6SHRsHfUQX4AebbqC8SVbfZj3z8QUskVSI?e=o5IRky&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifSwicGxheWJhY2tPcHRpb25zIjp7InN0YXJ0VGltZUluU2Vjb25kcyI6MTA4NTYuMzV9fQ%3D%3D))
- `stale-while-revalidating.js` → pour mettre en cache au fur et a mesure qu'on visite

ajouter le service workers dans `index.js`
### Déploiement ([3:13:06](https://hessoit.sharepoint.com/:v:/s/2025-26M532ok/IQABsEaHDEeUQ6SHRsHfUQX4AebbqC8SVbfZj3z8QUskVSI?e=JCFaSg&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifSwicGxheWJhY2tPcHRpb25zIjp7InN0YXJ0VGltZUluU2Vjb25kcyI6MTE1ODYuNDZ9fQ%3D%3D))
si repo pas forké :
- initialisation du repo local → `git init`
- création du repo distant sur GitHub → commandes proposées par github

création d'un compte netlify avec github, marche à suivre proposée
### Notifs push ([3:23:34](https://hessoit.sharepoint.com/:v:/s/2025-26M532ok/IQABsEaHDEeUQ6SHRsHfUQX4AebbqC8SVbfZj3z8QUskVSI?e=1ebLg7&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifSwicGxheWJhY2tPcHRpb25zIjp7InN0YXJ0VGltZUluU2Vjb25kcyI6MTIyMTQuMDh9fQ%3D%3D))
onesignal : connecter avec Github ; marche à suivre proposée
-  `OneSignalSDKWorker.js` → ajout du code de l'autre service worker ; 1 seul service worker peut être lié à la fois
### Bonus ([3:37:24](https://hessoit.sharepoint.com/:v:/s/2025-26M532ok/IQABsEaHDEeUQ6SHRsHfUQX4AebbqC8SVbfZj3z8QUskVSI?e=H5BR6b&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifSwicGxheWJhY2tPcHRpb25zIjp7InN0YXJ0VGltZUluU2Vjb25kcyI6MTMwNDQuODZ9fQ%3D%3D))
- installer sur l'ordi en tant que webapp
- fluidifier la manipulation de la progress bar du player
