# 🎨 Implémentation Auth - Multi-Step Signup Entrepreneur

## 📋 Spécifications

### Contexte
Plateforme d'aide aux entrepreneurs camerounais avec :
- **Login/Signup** classique pour utilisateurs
- **Login/Signup partenaire** pour institutions, financeurs, incubateurs
- **Multi-step signup** avec questions pertinentes mais concise
- **Profil complet** à compléter après connexion

---

## 🏗️ Structure Multi-Step Signup (3 Étapes)

### Étape 1: Identité (3 champs)
```
┌─────────────────────────────────────────────────────────┐
│  ÉTAPE 1/3: Qui êtes-vous ?                            │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  👤 Prénom *                                            │
│  [Entrez votre prénom]                                  │
│                                                         │
│  👤 Nom *                                               │
│  [Entrez votre nom]                                     │
│                                                         │
│  📧 Email *                                             │
│  [votre@email.com]                                     │
│                                                         │
│  [→ Suivant]                                            │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Étape 2: Entrepreneuriat (4 champs)
```
┌─────────────────────────────────────────────────────────┐
│  ÉTAPE 2/3: Votre projet                               │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  🏢 Nom de l'entreprise / projet *                     │
│  [Le nom de votre entreprise ou projet]                │
│                                                         │
│  📅 Depuis combien de temps ?                          │
│  ○ Idee (pas encore lancé)                              │
│  ○ moins de 6 mois                                     │
│  ○ 6 mois - 2 ans                                      │
│  ○ Plus de 2 ans                                       │
│                                                         │
│  📍 Ville *                                             │
│  [Douala / Yaoundé / Autre...]                        │
│                                                         │
│  📱 Numéro de téléphone                                 │
│  [+237 XXX XXX XXX]                                    │
│                                                         │
│  [← Retour]  [→ Suivant]                               │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Étape 3: Motivation & Accès (3 champs)
```
┌─────────────────────────────────────────────────────────┐
│  ÉTAPE 3/3: Vos besoins                                │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  🎯 Qu'attendez-vous de STARTERKIT CM ?                │
│  [ ] Formations                                        │
│  [ ] Financement                                       │
│  [ ] Mentorat                                          │
│  [ ] Réseau / Contacts                                 │
│  [ ] Informations légales                              │
│                                                         │
│  🔒 Mot de passe *                                      │
│  [••••••••]                                            │
│  🔓 Confirmation mot de passe *                         │
│  [••••••••]                                            │
│                                                         │
│  [ ] J'accepte les conditions d'utilisation             │
│                                                         │
│  [← Retour]  [✓ Créer mon compte]                      │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## 👥 Inscription Partenaires (4 étapes)

### Étape 1: Organisation
```
┌─────────────────────────────────────────────────────────┐
│  🏛️ Inscription Partenaire                            │
│  ÉTAPE 1/4: Organisation                               │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  🏢 Nom de l'organisation *                            │
│  [MINPMEESA / PNUD / CCIM...]                         │
│                                                         │
│  🏷️ Type d'organisation *                              │
│  ○ Gouvernement                                        │
│  ○ Organisation internationale                         │
│  ○ Chambre professionnelle                             │
│  ○ Banque / Financeur                                  │
│  ○ Incubateur / Accélérateur                          │
│  ○ Association                                         │
│                                                         │
│  🔗 Site web                                           │
│  [https://...]                                         │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Étape 2: Contact
```
┌─────────────────────────────────────────────────────────┐
│  🏛️ Inscription Partenaire                            │
│  ÉTAPE 2/4: Contact                                    │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  👤 Nom du contact principal *                          │
│  [Prénom Nom]                                           │
│                                                         │
│  💼 Fonction *                                          │
│  [Directeur / Coordinateur / Chargé de mission...]     │
│                                                         │
│  📧 Email professionnel *                               │
│  [prenom@organisation.cm]                              │
│                                                         │
│  📱 Téléphone                                           │
│  [+237 XXX XXX XXX]                                    │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Étape 3: Mission
```
┌─────────────────────────────────────────────────────────┐
│  🏛️ Inscription Partenaire                            │
│  ÉTAPE 3/4: Mission                                    │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  📝 Description de l'organisation *                    │
│  [Courte description de votre mission...]              │
│                                                         │
│  🎯 Domaines d'intervention *                          │
│  [ ] Formation                                         │
│  [ ] Financement                                       │
│  [ ] Mentorat                                          │
│  [ ] Infrastructure                                    │
│  [ ] Export / Internationalisation                     │
│  [ ] Innovation / Tech                                 │
│                                                         │
│  🤝 Pourquoi rejoindre STARTERKIT CM ?                  │
│  [Votre motivation...]                                 │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Étape 4: Accès
```
┌─────────────────────────────────────────────────────────┐
│  🏛️ Inscription Partenaire                            │
│  ÉTAPE 4/4: Accès                                      │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  🔒 Mot de passe *                                      │
│  [••••••••]                                            │
│                                                         │
│  🔓 Confirmation mot de passe *                         │
│  [••••••••]                                            │
│                                                         │
│  [ ] Je confirme être habilité à représenter           │
│      mon organisation                                   │
│                                                         │
│  [← Retour]  [✓ Soumettre la demande]                  │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## 🎨 Layout Design (Login & Signup)

### Login - Split Screen
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  ┌─────────────────────────────┐    ┌───────────────────────┐ │
│  │                             │    │                       │ │
│  │    [☰] STARTERKIT CM       │    │                       │ │
│  │                             │    │    🖼️  ILLUSTRATION │ │
│  │    ───────────────────     │    │                       │ │
│  │                             │    │    Entrepreneur      │ │
│  │    Bon retour parmi nous    │    │    builds Cameroon   │ │
│  │                             │    │                       │ │
│  │    📧 Email ou téléphone    │    │    "Together we      │ │
│  │    [──────────────────]     │    │     build"           │ │
│  │                             │    │                       │ │
│  │    🔒 Mot de passe          │    │    ✨ +500 projects   │ │
│  │    [──────────────────]     │    │    ✨ +50 partners   │ │
│  │                             │    │    ✨ +10 programs   │ │
│  │    [✓] Se souvenir de moi   │    │                       │ │
│  │                             │    │                       │ │
│  │    [→ Me connecter]         │    │                       │ │
│  │                             │    │                       │ │
│  │    ───────────────────     │    │                       │ │
│  │                             │    │                       │ │
│  │    [G] Google              │    │                       │ │
│  │    [A] Apple               │    │                       │ │
│  │                             │    │                       │ │
│  │    ───────────────────     │    │                       │ │
│  │                             │    │                       │ │
│  │    [Mot de passe oublié ?]  │    │                       │ │
│  │                             │    │                       │ │
│  │    Pas de compte ?          │    │                       │ │
│  │    [Créer un compte]        │    │                       │ │
│  │                             │    │                       │ │
│  │    Vous êtes un partenaire ?│    │                       │ │
│  │    [Espace Partenaires]    │    │                       │ │
│  │                             │    │                       │ │
│  └─────────────────────────────┘    └───────────────────────┘ │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 📝 Questions Pertinentes pour Entrepreneurs Camerounais

### Questions Essentielles (Profil Minimal)

| Champ | Raison |
|-------|--------|
| **Prénom/Nom** | Identification |
| **Email** | Contact principal |
| **Téléphone** | WhatsApp répandu au Cameroun |
| **Nom entreprise/projet** | Identité professionnelle |
| **Ville** | Douala/Yaoundé/autre - ancrage local |
| **Secteur d'activité** | Agriculture, Tech, Commerce, Artisanat... |
| **Depuis combien de temps** | Nouveau vs établi |

### Questions Optionnelles (Profil Complet - post-connexion)

| Champ | Raison |
|-------|--------|
| **WhatsApp** | Communication locale |
| **Taille équipe** | Solo vs équipe |
| **Phase de développement** | Idee / Prototype / Revenue |
| **Besoins prioritaires** | Formation / Financement / Mentorat |
| **Challenge principal** | Accès marché / Cash flow / Clients |
| **Localisation exacte** | Quartier, ville |
| **Date de création** | Formalité |
| **Numéro RCCM** | Si enregistré |
| **Numéro Impôt** | Si enregistré |

---

## 🎯 Flux d'Inscription

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│    Page Login                                               │
│         ↓                                                   │
│    "Pas de compte ?" → Signup Choice                         │
│         ↓                                                   │
│    ┌─────────────────────────────────────┐                 │
│    │  Quel type de compte ?              │                 │
│    │                                     │                 │
│    │  [🚀 Entrepreneur]  [🏛️ Partenaire] │                 │
│    │                                     │                 │
│    │  Accès complet     Institution/      │                 │
│    │  aux ressources   Financeur/        │                 │
│    │  entrepreneur     Incubateur        │                 │
│    └─────────────────────────────────────┘                 │
│         ↓                    ↓                              │
│    Signup Entreprise    Signup Partenaire                   │
│         ↓                    ↓                              │
│    Étapes 1-3            Étapes 1-4                         │
│    (6 champs)            (10 champs)                       │
│         ↓                    ↓                              │
│    Dashboard             Validation admin                    │
│    Complet               (email confirmation)               │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## ✅ Composants à Créer

```
src/
├── components/
│   └── auth/
│       ├── FloatingLabelInput.jsx
│       ├── PasswordStrength.jsx
│       ├── SocialLoginButton.jsx
│       ├── StepIndicator.jsx
│       ├── CheckboxGroup.jsx
│       └── AuthIllustration.jsx
├── pages/
│   └── Auth/
│       ├── Login.jsx (refonte)
│       ├── SignupChoice.jsx (nouveau)
│       ├── SignupEntrepreneur.jsx (nouveau)
│       └── SignupPartner.jsx (nouveau)
└── data/
    └── auth-options.js (villes, secteurs, etc.)
```

---

## 🎨 Design Tokens

```css
:root {
  /* Steps */
  --step-active: #635bff;
  --step-inactive: #e5e7eb;
  --step-complete: #10B981;
  
  /* Progress */
  --progress-height: 4px;
  --progress-radius: 2px;
  
  /* Form */
  --form-max-width: 480px;
  --input-height: 56px;
  --input-radius: 12px;
  
  /* Buttons */
  --btn-height: 52px;
  --btn-radius: 12px;
  
  /* Colors */
  --primary: #635bff;
  --primary-dark: #4f46e5;
  --success: #10B981;
  --warning: #F59E0B;
  --error: #EF4444;
}
```

---

## 🚀下一步 (Prochaine Étape)

Passer en mode **Code** pour implémenter :
1. Créer `src/components/auth/FloatingLabelInput.jsx`
2. Créer `src/components/auth/StepIndicator.jsx`
3. Créer `src/pages/Auth/SignupChoice.jsx`
4. Créer `src/pages/Auth/SignupEntrepreneur.jsx` (multi-step)
5. Créer `src/pages/Auth/SignupPartner.jsx` (multi-step)
6. Refondre `src/pages/Auth/Login.jsx`