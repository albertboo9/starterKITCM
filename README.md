# STARTERKITCM - Maquette Front-End

Prototype de la plateforme STARTERKITCM, portail officiel de l'entrepreneuriat au Cameroun.

## Stack Technique

- **React 18** - Framework UI
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router** - Navigation
- **Lucide React** - Icônes

## Installation

```bash
# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev

# Build pour production
npm run build
```

## Structure du Projet

```
src/
├── components/
│   ├── ui/           # Composants de base (Button, Card, Badge, Modal)
│   ├── layout/       # Header, Footer, Layout
│   └── assistant/    # Assistant pédagogique (Avatar, Modal)
├── pages/
│   ├── Home/         # Landing page
│   ├── Dashboard/    # Tableau de bord entrepreneur
│   ├── Parcours/    # Liste des parcours
│   ├── Formations/  # Catalogue formations
│   └── Certification/ # Écran certification
├── data/             # Données mockées
└── styles/          # Styles globaux
```

## Déploiement sur Vercel

Le projet est configuré pour un déploiement automatique sur Vercel.

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel
```

## Design System

### Couleurs
- Bleu institutionnel : #1E3A5F
- Vert entrepreneurial : #2E7D32
- Ambre CTA : #F9A825

### Typographie
- Titres : Poppins
- Corps : Inter

## Fonctionnalités Implémentées

- Landing page institutionnelle
- Dashboard entrepreneur avec progression
- Parcours entrepreneuriaux avec timeline
- Catalogue formations (lien externe)
- Assistant pédagogique avec avatar animé
- Écran certification finale
- Design responsive mobile-first

## Licence

Propriété STARTERKITCM
