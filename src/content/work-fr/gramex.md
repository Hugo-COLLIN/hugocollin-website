---
title: The GramEx Interface
publishDate: 2023-04-28 00:00:00
img: /assets/work/gramex.png
img_alt: GramEx app
description: |
  TODO
tags:
  - TODO
---

## Présentation de l'entreprise
Le Loria est situé à Vandoeuvre-lès-Nancy. Il s’agit d’un centre de recherche fondamentale et appliquée en science informatique créé en 1997.

Ce laboratoire mène des recherches en sciences et technologies de l'information et de la communication au niveau international et assure également le suivi de thèses. Ses thèmes de recherche comprennent les calculs haute performance, la qualité et la sûreté des logiciels, les systèmes parallèles et distribués, les modèles et algorithmes pour les sciences du vivant, le traitement automatique des langues et la représentation des connaissances.

Le Loria est commun à 3 établissements : le CNRS, l’Inria et l’Université de Lorraine. Il regroupe 29 équipes de recherches réparties dans 5 départements, soit plus de 400 personnes provenant de différents pays.

Le traitement automatique du langage naturel (NLP) est l'un des domaines d'études du Loria. C'est notamment le cas pour l'équipe SyNaLP, qui travaille sur les approches hybrides, symboliques et neuronales du traitement du langage, ainsi que ses applications. En particulier, ils conçoivent des méthodes d'apprentissage automatique améliorant la compréhension par les ordinateurs du langage humain, et appliquent ces méthodes à divers contextes : analyse de la structure des phrases, identification de noms ou de lieux, résolution d'ambiguïtés ou encore génération de texte.



## Mission
J'ai intégré l'équipe SyNaLP afin de participer au projet GramEx. Ce projet vise à améliorer l'enseignement et l'apprentissage de la grammaire française. L'objectif est de proposer aux enseignants une application générant des exercices de grammaire à partir des textes qu'ils fournissent, pour ensuite évaluer les progrès des élèves. J'ai ainsi conçu et réalisé l'interface web de cette application.

J'ai d'abord mené une phase d'apprentissage des outils et technologies utilisées :

Le framework Bulma, qui permet d'appliquer des styles prédéfinis aux éléments d'une page HTML
Le framework Vue.js 3 qui permet de gérer la logique interne de l'application.
La librairie Axios pour accéder et modifier aux informations stockées sur le serveur dans une base de données.
La librairie Vuese pour générer la documentation.

L'objectif était de réaliser une interface web utilisant ces frameworks et librairies, et de factoriser le code de sorte à créer des composants réutilisables dans le projet GramEx :

La mécanique d'identification et la page de connexion au site
Le menu latéral et le menu de navigation
L'affichage d'un ensemble d'éléments sous forme de liste ou de tuiles
La génération d'un formulaire

Je suis ensuite passé par une phase d'analyse et de maquettage de l'application. Il s'agissait d'analyser l'existant (les versions précédentes de GramEx ainsi que les outils concurrents), pour ensuite réaliser des maquettes de l'interface avec un logiciel de maquettage (Balsamiq). Cette maquette, une fois exportée en PDF interactif, m'a permis de mener des tests utilisateurs. J'ai pour cela mis en place des protocoles de tests qui me permettaient d'obtenir des retours utilisateurs structurés et exploitables. J'ai ainsi pu analyser ces retours afin d'améliorer la maquette, puis mener de nouveaux tests utilisateurs.

En parallèle du maquettage, j'ai commencé le développement de l'interface utilisateur en utilisant Bulma et Vue.js. J'ai notamment :
- Modifié et amélioré les composants réutilisables, afin de les intégrer dans l'application GramEx tout en suivant la maquette.
- Implémenté plusieurs fonctionnalités : Login différencié entre 2 types de comptes, titre des pages
- Réalisé la documentation correspondante

## Difficultés rencontrées
- Vue.js utilise certains aspects de Javascript que nous n'avions pas encore vu en cours. Par ex: l'utilisation des import/export dans les composants Vue. De plus, je devais acquérir beaucoup de compétences. En particulier, j'ai dû comprendre des mécanismes assez complexes ; par exemple, les échanges d'informations entre les composants Vue.js.

## Compétences


| **Possédées avant le stage**                                                                                                               | **Explications**                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------ |
| Versionnage  <br>    - Utiliser un outil de versionnage (Git)  <br>    - Utiliser un outil d'hébergement et de contrôle de version du code | Vu en Qualité de développement, S2                     |
| Programmation web : HTML, CSS et Javascript                                                                                                | Vu en cours de programmation web client de S1 et de S4 |
| Réaliser des maquettes avec un outil de maquettage : Balsamiq                                                                              | Vu en cours d'Analyse de S3                            |
| Les architectures d'application : SaaS (Software as a Service)                                                                             | Vu en cours de management, en S3                       |

| **Acquises durant le stage**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | **Explications**                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Créer et gérer le fonctionnement d'une application web avec Vue.js 3  <br>    - Comprendre la structure et le fonctionnement d'une application Vue.js ;   <br>    - Comprendre la structure et le fonctionnement des pages et composants Vue ;   <br>    - Échanger des informations entre fichiers Vue ;   <br>    - Initialiser une application Vue.js avec l'interface VueCli ;   <br>    - Utiliser un routeur : VueRouter, pour configurer la navigation dans l'application ;   <br>    - Utiliser un store : VueX, pour rendre des données accessibles dans toute l'application.  <br>    - Utiliser les Mixins pour créer des propriétés globales à chaque composant | Je suis capable de développer de 0 une application web en Vue.js 3                                                 |
| Utiliser Bulma pour développer des interfaces utilisateurs :  <br>    - Comprendre le fonctionnement du système de colonnes Bulma ;   <br>    - Comprendre le fonctionnement des classes spécifiques aux différents éléments d'une page (formulaires, menus, pagination...) ;   <br>    - Utiliser le préprocesseur CSS (SASS) pour modifier les styles par défaut de Bulma                                                                                                                                                                                                                                                                                                 | Je suis capable de mettre en forme des sites web en utilisant Bulma                                                |
| Utiliser une API dans une architecture d'application SaaS  <br>    - Comprendre le fonctionnement d'une API  <br>    - Comprendre les types de requête                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Je comprends plus en détail le fonctionnement d'une application SaaS, et notamment celui de l'API.                 |
| Faire des requêtes à une API avec Axios  <br>    - Envoyer des requêtes à une API  <br>    - Utiliser les données renvoyées                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Je sais utiliser Axios pour faire des requêtes à une API, ainsi que récupérer et utiliser le contenu des réponses. |
| Générer une documentation avec Vuese                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Je sais créer une documentation à partir des commentaires dans le code Vue.js.                                     |
| Concevoir des interfaces utilisateurs  <br>    - Mener une étude comparative des solutions existantes  <br>    - Réaliser des protocoles de tests et mener des tests utilisateurs  <br>    - Analyser les retours utilisateurs pour améliorer un prototype                                                                                                                                                                                                                                                                                                                                                                                                                  | Je sais mener un cycle d'amélioration continue pour un prototype d'interface utilisateur.                          |

## Bilan
Ce stage a été extrêmement formateur, puisqu'il m'a permis, d'une part, d'analyser et de concevoir des interfaces utilisateurs et, d'autre part, de découvrir et d'apprendre le fonctionnement de plusieurs technologies dites « front-end ».

Ce projet a d'autant plus augmenté mon intérêt pour le développement côté client qu'il m'a fait apprécier le langage Javascript. Je suis maintenant capable de créer des applications web en utilisant Bulma et Vue.js, ce qui est un atout majeur. En effet, je peux maintenant utiliser ces nouvelles compétences pour mes futurs projets et proposer mes services en développement web à des entreprises.

J'ai également trouvé la partie analyse et maquettage très enrichissante, car elle m'a permis d'exprimer mes appétences en design d'interface et d'expérience utilisateur. J'apprécie notamment les aspects d'ergonomie et de design, que j'ai pu mettre en oeuvre lors de la réalisation des maquettes de l'interface, mais également au travers de la mise en place de protocoles pour les tests utilisateurs. Ces compétences sont très intéressantes pour développer des application faciles d'utilisation et agréables, et peuvent également intéresser les entreprises.

La seule chose déplaisante a été d'arrêter ma collaboration au projet GramEx au terme de ce stage. En effet, j'ai réellement apprécié travailler sur GramEx et je trouve cela frustrant de devoir quitter le projet alors qu'il n'est pas terminé. De plus, les conditions de travail au sein du Loria sont très bonnes. Le personnel est accueillant, l'équipe chaleureuse, les horaires sont flexibles et les locaux agréables. Toutes ces conditions sont propices à la réalisation d'un travail de qualité.

Quoi qu'il en soit, j'en ressors grandi et j'espère pouvoir vivre de nouvelles expériences tout aussi enrichissantes.
