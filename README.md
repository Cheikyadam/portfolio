# 🚀 Angular Portfolio Template

[![Framework - Angular](https://img.shields.io/badge/Framework-Angular-dd0031?style=for-the-badge&logo=angular)](https://angular.io/)
[![Deployment - GitHub Actions](https://img.shields.io/badge/Deployment-GitHub%20Actions-2088FF?style=for-the-badge&logo=github-actions)](https://github.com/features/actions)

Un template de portfolio moderne développé avec Angular, entièrement configurable via un service centralisé. Conçu pour faciliter la personnalisation et le déploiement automatique via GitHub Actions.

🌍 **Site en ligne :** [https://portfolio.cheikyadam.me](#)

---

## 📋 Table des matières

- [Aperçu](#-aperçu)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Déploiement](#-déploiement)
- [Structure des données](#-structure-des-données)
- [Icônes disponibles](#-icônes-disponibles)
- [Licence](#-licence)

---

## ✨ Aperçu

Ce portfolio Angular est conçu pour être facilement réutilisable et personnalisable. Toutes les informations (profil, expériences, formations, projets, compétences) sont centralisées dans un seul fichier de service, permettant une mise à jour rapide sans modifier les composants.

**Fonctionnalités principales :**
- Configuration centralisée via un service unique
- Section "À propos" avec support HTML
- Gestion dynamique des compétences avec icônes
- Génération automatique des URLs (GitHub, LinkedIn, Mail, etc.)
- Déploiement automatique avec GitHub Actions
- Support des domaines personnalisés via CNAME
- Structure de données typée avec TypeScript

---

## 🚀 Installation

### Prérequis

- Node.js (version 18 ou supérieure)
- npm ou yarn
- Angular CLI

### Étapes d'installation
```bash
# Cloner le dépôt
git clone https://github.com/votre-username/votre-repo.git
cd votre-repo

# Installer les dépendances
npm install

# Lancer le serveur de développement
ng serve
```

L'application sera accessible sur `http://localhost:4200/`

---

## ⚙️ Configuration

### 1. Fichier de configuration principal

Tout le contenu du portfolio se configure dans un seul fichier :

**📍 `src/services/user.service.ts`**

### 2. Remplir vos informations

#### Étape 1 : Section "À propos"

La section "À propos" supporte le HTML pour une mise en forme riche :
```typescript
private about = `
  <p>
    Je suis un développeur passionné par les technologies web modernes...
  </p>
  <p>
    Mes domaines d'expertise incluent <strong>Angular</strong>, 
    <strong>TypeScript</strong> et <strong>Node.js</strong>.
  </p>
`;
```

#### Étape 2 : Définir vos compétences

Créez vos catégories de compétences avec des icônes :
```typescript
private skills: Skill[] = [
  new Skill(
    "Frontend",
    "ionLogoHtml5",  // Nom de l'icône
    [
      "Angular",
      "Vue.js",
      "TypeScript",
      "HTML5 / CSS3",
      "Bootstrap / CoreUI",
      "Blade (Laravel)"
    ]
  ),
  new Skill(
    "Backend",
    "ionServer",
    [
      "Node.js",
      "Express",
      "Laravel",
      "Spring Boot",
      "REST API",
      "SQL / MySQL",
      "NoSQL / MongoDB",
      "Swagger / OpenAPI"
    ]
  ),
  new Skill(
    "DevOps & Cloud",
    "ionCloudUpload",
    [
      "Docker",
      "GitHub Actions",
      "CI/CD",
      "AWS / Azure",
      "Nginx"
    ]
  ),
  new Skill(
    "Outils & Méthodologie",
    "ionConstruct",
    [
      "Git / GitHub",
      "Agile / Scrum",
      "Jira",
      "Postman",
      "VS Code"
    ]
  ),
  // ... autres compétences
];
```

#### Étape 3 : Vos expériences professionnelles
```typescript
private experiences: Experience[] = [
  new Experience(
    "Nom de l'entreprise",
    "Intitulé du poste",
    ["Mission 1", "Mission 2", "Mission 3"],
    ["Angular", "TypeScript", "Git"],
    new Date(2023, 0, 1),
    new Date(2024, 11, 31),
    "https://entreprise.com",
    "Paris, France"
  ),
  // ... autres expériences
];
```

#### Étape 4 : Vos formations
```typescript
private formations: Formation[] = [
  new Formation(
    false, // isCertif - true pour une certification
    "Nom de l'école",
    "Titre de la formation",
    ["Compétence 1", "Compétence 2"],
    new Date(2020, 8, 1),
    new Date(2023, 5, 30),
    "https://ecole.com",
    "Lyon, France",
    "https://lien-vers-diplome.com"
  ),
  // ... autres formations
];
```

#### Étape 5 : Vos projets
```typescript
private projects: Project[] = [
  new Project(
    "Nom du projet",
    "Description détaillée du projet",
    ["Angular", "Node.js", "MongoDB"],
    "assets/images/projet.png",
    "https://github.com/username/projet"
  ),
  // ... autres projets
];
```

#### Étape 6 : Configurer votre profil

Modifiez l'instance `User` avec vos informations personnelles :
```typescript
private user = new User(
  "VotreUsernameGitHub",
  "Prénom",
  "NOM",
  "Votre titre professionnel",
  "votre-pseudo-linkedin",
  "votre.email@exemple.com",
  "assets/images/photo-profil.png",
  this.about,
  this.skills,
  this.experiences,
  this.formations,
  this.projects,
  "votre-id-discord", // optionnel
  "+33612345678"      // optionnel
);
```

**Note :** Les URLs sont générées automatiquement à partir des informations fournies (GitHub, LinkedIn, Mail, Discord, Téléphone).

### 3. Ajouter vos images

Placez vos images dans le dossier `src/assets/images/` et référencez-les dans votre configuration.

---

## 🚀 Déploiement

Le projet inclut deux workflows GitHub Actions pour le déploiement automatique :

### Option 1 : Déploiement sur GitHub Pages (username.github.io)

**Fichier :** `ghpages-conf-deploy-github-io.yml`

Idéal pour un déploiement sur `https://votre-username.github.io/nom-repo`

### Option 2 : Déploiement avec domaine personnalisé (recommandé)

**Fichier :** `.github/workflows/deploy.yml`

Ce workflow :
- Compile automatiquement le projet Angular
- Configure le fichier `CNAME` avec votre domaine personnalisé
- Déploie sur la branche `gh-pages`

### Configuration du déploiement

1. **Dans votre dépôt GitHub :**
   - Allez dans `Settings` > `Pages`
   - Source : sélectionnez la branche `gh-pages`
   - Dossier : `/ (root)`

2. **Pour un domaine personnalisé :**
   - Modifiez le fichier `.github/workflows/deploy.yml`
   - Ajoutez votre domaine dans la configuration CNAME
   - Configurez les DNS de votre domaine pour pointer vers GitHub Pages

3. **Déclenchement automatique :**
   - Chaque push sur la branche `main` déclenche le déploiement automatique

---

## 📊 Structure des données

Le projet utilise cinq classes TypeScript pour structurer les données :

### `User`

Gère les informations personnelles et génère automatiquement les URLs.

**Propriétés :**
- `githubUsername`, `firstname`, `lastname`, `jobTitle`
- `linkedin`, `mail`, `photoUrl`
- `about` : texte de présentation (supporte HTML)
- `skills[]` : tableau de compétences
- `experiences[]`, `formations[]`, `projects[]`
- `discord` (optionnel), `phoneNumber` (optionnel)

**Getters automatiques :**
- `linkedinUrl`, `githubUrl`, `mailUrl`, `discordUrl`, `phoneUrl`

### `Skill`

Représente une catégorie de compétences avec icône.

**Propriétés :**
- `id` (généré automatiquement via `crypto.randomUUID()`)
- `label` : nom de la catégorie (ex: "Frontend", "Backend")
- `icon` : nom de l'icône Ionicons (ex: "ionLogoHtml5")
- `competencies[]` : liste des compétences dans cette catégorie

### `Project`

Représente un projet avec génération automatique d'ID unique.

**Propriétés :**
- `id` (généré automatiquement via `crypto.randomUUID()`)
- `name`, `description`, `techStack[]`
- `imageLink` (optionnel), `projectLink` (optionnel)

### `Experience`

Représente une expérience professionnelle.

**Propriétés :**
- `id` (généré automatiquement)
- `companyName`, `jobTitle`, `missions[]`, `skills[]`
- `startDate`, `endDate` (optionnel)
- `companyWebsite` (optionnel), `location` (optionnel)

### `Formation`

Hérite de `Experience` pour représenter formations et certifications.

**Propriétés supplémentaires :**
- `isCertif` (booléen) : true pour une certification, false pour une formation
- `resourceLink` (optionnel) : lien vers le diplôme/certificat

**Getters :**
- `isOnGoing` : vérifie si la formation est en cours
- `isResourceMissing` : vérifie l'absence de ressource

---

## 🎨 Icônes disponibles

Le projet utilise la bibliothèque **Ionicons** via `@ng-icons`. Voici les icônes pré-configurées pour les compétences :

| Nom de l'icône | Description | Utilisation suggérée |
|----------------|-------------|---------------------|
| `ionLogoHtml5` | Logo HTML5 | Frontend, Web |
| `ionServer` | Serveur | Backend, API |
| `ionCloudUpload` | Cloud | DevOps, Cloud |
| `ionConstruct` | Outils | Outils, Méthodologie |
| `ionPersonCircle` | Personne | Soft Skills |
| `ionLayersOutline` | Couches | Architecture, Design |

### Ajouter de nouvelles icônes

1. **Importer l'icône dans le composant Skills :**
```typescript
// src/app/components/skills/skills.component.ts
import { ionDatabase } from '@ng-icons/ionicons'; // Exemple

viewProviders: [provideIcons({ 
  // ... icônes existantes
  ionDatabase  // Nouvelle icône
})]
```

2. **Utiliser l'icône dans votre configuration :**
```typescript
new Skill(
  "Base de données",
  "ionDatabase",  // Utiliser le nom de l'icône
  ["PostgreSQL", "MongoDB", "Redis"]
)
```

**Catalogue complet :** [https://ionic.io/ionicons](https://ionic.io/ionicons)

---

## 🛠️ Technologies utilisées

- **Framework :** Angular 18+
- **Langage :** TypeScript
- **UI Library :** CoreUI for Angular
- **Icons :** Ionicons via @ng-icons
- **CI/CD :** GitHub Actions
- **Hébergement :** GitHub Pages

---

## 📝 Licence

Ce projet est sous licence MIT. Vous êtes libre de l'utiliser, le modifier et le distribuer.

---

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

---

**Développé avec ❤️ et Angular**