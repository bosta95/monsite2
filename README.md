# VisionZone - Le Futur de la Télévision

Site premium de streaming avec paiement PayPal et hébergement Netlify.

## Structure du Projet

```
monsite2/
│
├── public/                # Fichiers publics
│   ├── index.html        # Page d'accueil
│   ├── faq.html          # Page FAQ
│   ├── offre-3mois.html  # Page offre 3 mois
│   ├── offre-6mois.html  # Page offre 6 mois
│   ├── offre-12mois.html # Page offre 12 mois
│   ├── style.css         # Styles CSS
│   ├── js/               # Scripts JavaScript
│   │   ├── main.js       # Logique principale
│   │   └── offres.js     # Gestion des offres
│   ├── robots.txt        # Configuration SEO
│   └── sitemap.xml       # Sitemap pour SEO
│
├── imgs/                 # Images et assets
│
├── .env.example         # Exemple de variables d'environnement
├── .gitignore          # Fichiers ignorés par Git
└── README.md           # Documentation
```

## Configuration

1. Copier `.env.example` vers `.env` et remplir les variables :
   - Clés PayPal
   - Configuration email Namecheap
   - URL du site

2. Configuration Netlify :
   - Connecter le dépôt Git
   - Configurer les variables d'environnement dans l'interface Netlify
   - Configurer le domaine personnalisé (visionzone.tv)

## Développement

1. Cloner le dépôt
2. Copier `.env.example` vers `.env` et configurer
3. Ouvrir `index.html` dans un navigateur

## Déploiement

Le site est automatiquement déployé sur Netlify à chaque push sur la branche principale.

## Sécurité

- Les clés API et secrets sont stockés dans les variables d'environnement Netlify
- Validation des paiements côté serveur
- Protection contre les attaques XSS et CSRF

## Contact

Pour toute question ou support, utilisez le formulaire de contact sur le site. 