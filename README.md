# Bot d'actualisation au challenge alternance 3WA

Optimiser pour le vendredi même si l'actualisation peut être faite jusqu'au dimanche soir.

Le bot peut être lancé n'importe quand et se déclenchera le jour de la semaine, à l'heure et la minute choisit. Le rafraichissement se fait toute les minutes mais peut être adapté dans **./functions/planification.js**.

Pour que le navigateur de s'ouvre pas et que le bot effectue son travail en tâche de fond **./functions/main.js** : ligne 12 => {headless: true}.

## Configuration :

- **npm install puppeteer**

1 -  **./functions/bot.js** 
  - **ligne 7** : email.
  - **ligne 9 - 10** : texte des textarea de la dernière page.
  - **ligne 42** : choisir lettre de réponse pour la première question (avez vous eux des contacts ?)
  - **ligne 51 - 57** : choisir réponse aux questions de la dernière page (besoin d'aide ? ... )
  - **ligne 68** : choix nu nombre d'étoile (avis).
  - **ligne 85 - 86** : dé-commenté les 2 lignes afin d'activer la validation.
  - **ligne 90 - 92** : dé-commenté les 2 lignes pour fermer le browser à la fin de l'actualisation.

2 -  **./main.js** 
  -  planification() @params
     - a) jour de la semaine (dimanche = 0, vendredi  = 5).
     - b) heure de déclenchement.
     - c) minutes de déclenchement.
