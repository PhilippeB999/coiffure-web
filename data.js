/* ============================================================
   CoiffureQuest — Données du programme DEP 5245 (Coiffure)
   Données converties depuis l'app source vers le moteur web (PWA).
   Format moteur: COMPETENCIES[].tiers[].questions[] avec choices[{fr,en,correct}].
   Les questions QCM sont des EXEMPLES à valider par les enseignants du programme.
   ============================================================ */

const PROGRAM = {
  fr: { title: "Coiffure", subtitle: "DEP 5245 — 1455 heures — 97 unités" },
  en: { title: "Hairdressing", subtitle: "DVS 5245 — 1455 hours — 97 credits" }
};

function ch(fr, en, correct) { return { fr, en, correct: !!correct }; }

/* Question de type vrai/faux: affirmation à juger. */
function tf(fr, en, isTrue) { return { type: "tf", fr, en, isTrue: !!isTrue }; }

/* Question de type "association de termes": l'élève touche un terme puis
   sa définition correspondante. pairs: tableau de
   { term_fr, term_en, def_fr, def_en }. Toutes les paires doivent être
   associées correctement pour que la question soit considérée réussie. */
function pair(term_fr, term_en, def_fr, def_en) { return { term_fr, term_en, def_fr, def_en }; }
function match(fr, en, pairs) { return { type: "match", fr, en, pairs }; }

/* Question de type "situation complexe" (mise en situation): un court
   scénario réaliste suivi d'un choix multiple basé sur le jugement
   professionnel. Réutilise le même format "choices" qu'un QCM standard. */
function scenario(fr, en, choices) { return { type: "scenario", fr, en, choices }; }

/* Paliers de difficulté d'une quête. Chaque compétence est maintenant
   divisée en 3 paliers progressifs (tiers[]), débloqués l'un après l'autre:
   Débutant -> Intermédiaire -> Avancé. Réussir le palier 1 d'une compétence
   déverrouille la compétence suivante sur la carte; réussir le palier 3
   (Avancé) accorde le badge de maîtrise de la compétence. */
const TIER_META = [
  { level: 1, name_fr: "Débutant", name_en: "Beginner", icon: "🌱" },
  { level: 2, name_fr: "Intermédiaire", name_en: "Intermediate", icon: "⚙️" },
  { level: 3, name_fr: "Avancé", name_en: "Advanced", icon: "🏆" }
];

/* Chaque compétence = une "quête". order = ordre de déblocage. */
const COMPETENCIES = [
 {
  "id": "coif01",
  "order": 1,
  "code": "418011",
  "hours": 15,
  "title_fr": "Métier et formation",
  "title_en": "Trade and Training",
  "icon": "💈",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Combien de modules compte le programme Coiffure 5245?",
      "en": "How many modules does the Hairdressing 5245 program have?",
      "choices": [
       {
        "fr": "21 modules",
        "en": "21 modules",
        "correct": true
       },
       {
        "fr": "17 modules",
        "en": "17 modules",
        "correct": false
       },
       {
        "fr": "25 modules",
        "en": "25 modules",
        "correct": false
       },
       {
        "fr": "14 modules",
        "en": "14 modules",
        "correct": false
       }
      ]
     },
     {
      "fr": "Combien d'heures totalise le programme Coiffure 5245?",
      "en": "How many hours does the Hairdressing 5245 program total?",
      "choices": [
       {
        "fr": "1455 heures",
        "en": "1455 hours",
        "correct": true
       },
       {
        "fr": "1680 heures",
        "en": "1680 hours",
        "correct": false
       },
       {
        "fr": "1350 heures",
        "en": "1350 hours",
        "correct": false
       },
       {
        "fr": "1530 heures",
        "en": "1530 hours",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Le programme Coiffure 5245 mène à un diplôme d'études professionnelles (DEP).",
      "en": "The Hairdressing 5245 program leads to a Diploma of Vocational Studies (DVS).",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Combien d'unités totalise le programme Coiffure 5245?",
      "en": "How many credits does the Hairdressing 5245 program total?",
      "choices": [
       {
        "fr": "97 unités",
        "en": "97 credits",
        "correct": true
       },
       {
        "fr": "90 unités",
        "en": "90 credits",
        "correct": false
       },
       {
        "fr": "103 unités",
        "en": "103 credits",
        "correct": false
       },
       {
        "fr": "112 unités",
        "en": "112 credits",
        "correct": false
       }
      ]
     },
     {
      "fr": "Quel est le dernier module du programme Coiffure 5245?",
      "en": "What is the last module of the Hairdressing 5245 program?",
      "choices": [
       {
        "fr": "Stage",
        "en": "Internship",
        "correct": true
       },
       {
        "fr": "Coiffure personnalisée",
        "en": "Personalized Hairstyling",
        "correct": false
       },
       {
        "fr": "Coloration créative",
        "en": "Creative Coloring",
        "correct": false
       },
       {
        "fr": "Vente de produits et services",
        "en": "Product and Service Sales",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Le module « Métier et formation » est le module numéro 1 du programme.",
      "en": "The 'Trade and Training' module is module number 1 of the program.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Le module « Coloration » dure 120 heures. Combien d'unités cela représente-t-il, sachant qu'une unité équivaut à 15 heures?",
      "en": "The 'Hair Coloring' module lasts 120 hours. Given that one credit equals 15 hours, how many credits does that represent?",
      "choices": [
       {
        "fr": "8 unités",
        "en": "8 credits",
        "correct": true
       },
       {
        "fr": "7 unités",
        "en": "7 credits",
        "correct": false
       },
       {
        "fr": "9 unités",
        "en": "9 credits",
        "correct": false
       },
       {
        "fr": "6 unités",
        "en": "6 credits",
        "correct": false
       }
      ]
     },
     {
      "fr": "Le module « Coupe standard pour femme » dure 120 heures et le module « Vente de produits et services » dure 45 heures. Quelle est la différence en unités entre ces deux modules?",
      "en": "The 'Standard Haircut for Women' module lasts 120 hours and the 'Product and Service Sales' module lasts 45 hours. What is the difference in credits between these two modules?",
      "choices": [
       {
        "fr": "5 unités",
        "en": "5 credits",
        "correct": true
       },
       {
        "fr": "6 unités",
        "en": "6 credits",
        "correct": false
       },
       {
        "fr": "4 unités",
        "en": "4 credits",
        "correct": false
       },
       {
        "fr": "8 unités",
        "en": "8 credits",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Un module de 30 heures vaut toujours 3 unités dans ce programme, peu importe son contenu.",
      "en": "A 30-hour module is always worth 3 credits in this program, regardless of its content.",
      "isTrue": false
     }
    ]
   }
  ]
 },
 {
  "id": "coif02",
  "order": 2,
  "code": "418022",
  "hours": 30,
  "title_fr": "Santé et sécurité",
  "title_en": "Health and Safety",
  "icon": "🧤",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Quel équipement protège les mains lors de l'application d'un produit chimique capillaire?",
      "en": "What equipment protects the hands when applying a chemical hair product?",
      "choices": [
       {
        "fr": "Des gants jetables",
        "en": "Disposable gloves",
        "correct": true
       },
       {
        "fr": "Une cape de coiffure",
        "en": "A styling cape",
        "correct": false
       },
       {
        "fr": "Un peigne à queue",
        "en": "A tail comb",
        "correct": false
       },
       {
        "fr": "Un tablier en tissu",
        "en": "A cloth apron",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi désinfecter les ciseaux et peignes entre chaque client?",
      "en": "Why disinfect scissors and combs between each client?",
      "choices": [
       {
        "fr": "Pour prévenir la transmission d'infections ou de parasites",
        "en": "To prevent the transmission of infections or parasites",
        "correct": true
       },
       {
        "fr": "Pour prolonger la durée de vie des lames",
        "en": "To extend the blade's lifespan",
        "correct": false
       },
       {
        "fr": "Pour respecter une norme esthétique du salon",
        "en": "To meet a salon aesthetic standard",
        "correct": false
       },
       {
        "fr": "Pour éviter que les outils rouillent",
        "en": "To prevent the tools from rusting",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Une bonne posture de travail aide à prévenir les blessures musculo-squelettiques chez le coiffeur.",
      "en": "Good working posture helps prevent musculoskeletal injuries in hairdressers.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi ventiler adéquatement le salon lors de l'utilisation de produits chimiques odorants?",
      "en": "Why properly ventilate the salon when using strong-smelling chemical products?",
      "choices": [
       {
        "fr": "Pour éviter l'inhalation excessive de vapeurs potentiellement nocives",
        "en": "To avoid excessive inhalation of potentially harmful fumes",
        "correct": true
       },
       {
        "fr": "Pour accélérer le temps de pose du produit",
        "en": "To speed up the product's processing time",
        "correct": false
       },
       {
        "fr": "Pour empêcher le produit de sécher trop vite",
        "en": "To prevent the product from drying too quickly",
        "correct": false
       },
       {
        "fr": "Pour améliorer la tenue de la coiffure",
        "en": "To improve the hairstyle's hold",
        "correct": false
       }
      ]
     },
     {
      "fr": "Que doit-on faire avant d'appliquer pour la première fois un produit chimique susceptible de causer une réaction allergique?",
      "en": "What should be done before applying, for the first time, a chemical product that could cause an allergic reaction?",
      "choices": [
       {
        "fr": "Effectuer un test de sensibilité cutanée si requis par le fabricant",
        "en": "Performing a skin sensitivity test if required by the manufacturer",
        "correct": true
       },
       {
        "fr": "Diluer systématiquement le produit de moitié",
        "en": "Systematically diluting the product by half",
        "correct": false
       },
       {
        "fr": "Appliquer une petite quantité derrière l'oreille du coiffeur",
        "en": "Applying a small amount behind the hairdresser's own ear",
        "correct": false
       },
       {
        "fr": "Attendre 24 heures avant tout service",
        "en": "Waiting 24 hours before any service",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Les fiches signalétiques (FDS) des produits chimiques indiquent les précautions à prendre lors de leur manipulation.",
      "en": "Safety data sheets (SDS) for chemical products indicate the precautions to take when handling them.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Une cliente signale une sensation de brûlure pendant l'application d'un produit chimique. Quelle est la bonne pratique immédiate?",
      "en": "A client reports a burning sensation during a chemical product application. What is the correct immediate practice?",
      "choices": [
       {
        "fr": "Rincer immédiatement et cesser l'application",
        "en": "Rinsing immediately and stopping the application",
        "correct": true
       },
       {
        "fr": "Réduire le temps de pose de quelques minutes",
        "en": "Reducing the processing time by a few minutes",
        "correct": false
       },
       {
        "fr": "Appliquer un shampooing neutralisant sans rincer d'abord",
        "en": "Applying a neutralizing shampoo without rinsing first",
        "correct": false
       },
       {
        "fr": "Continuer le service en surveillant la réaction",
        "en": "Continuing the service while monitoring the reaction",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi la santé et sécurité est-elle une compétence transversale essentielle en coiffure, plutôt qu'une simple formalité administrative?",
      "en": "Why is health and safety an essential transferable skill in hairdressing, rather than a mere administrative formality?",
      "choices": [
       {
        "fr": "Le métier implique une exposition régulière à des produits chimiques et des outils tranchants ou chauffants",
        "en": "The trade involves regular exposure to chemical products and sharp or heated tools",
        "correct": true
       },
       {
        "fr": "Elle est exigée uniquement pour l'obtention du permis de salon",
        "en": "It is only required to obtain the salon's operating permit",
        "correct": false
       },
       {
        "fr": "Elle concerne seulement les grands salons avec plusieurs employés",
        "en": "It only concerns large salons with several employees",
        "correct": false
       },
       {
        "fr": "Elle vise surtout à protéger le mobilier du salon",
        "en": "It mainly aims to protect the salon's furniture",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Le port de gants élimine complètement tout risque de réaction cutanée chez le client.",
      "en": "Wearing gloves completely eliminates any risk of a skin reaction in the client.",
      "isTrue": false
     }
    ]
   }
  ]
 },
 {
  "id": "coif03",
  "order": 3,
  "code": "418033",
  "hours": 45,
  "title_fr": "Examen des cheveux et du cuir chevelu",
  "title_en": "Hair and Scalp Examination",
  "icon": "🔍",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Pourquoi examiner le cuir chevelu avant un service de coiffure?",
      "en": "Why examine the scalp before a hairdressing service?",
      "choices": [
       {
        "fr": "Pour détecter des conditions particulières qui pourraient influencer le service",
        "en": "To detect particular conditions that could affect the service",
        "correct": true
       },
       {
        "fr": "Pour déterminer le prix du service à facturer",
        "en": "To determine the price to charge for the service",
        "correct": false
       },
       {
        "fr": "Pour choisir la couleur des serviettes à utiliser",
        "en": "To choose the colour of towels to use",
        "correct": false
       },
       {
        "fr": "Pour respecter une étape purement esthétique du rituel salon",
        "en": "To follow a purely aesthetic step of the salon ritual",
        "correct": false
       }
      ]
     },
     {
      "fr": "Quel élément fait partie de l'analyse d'un cheveu?",
      "en": "What element is part of hair analysis?",
      "choices": [
       {
        "fr": "Sa texture, sa porosité et son état général",
        "en": "Its texture, porosity and overall condition",
        "correct": true
       },
       {
        "fr": "Sa longueur exacte en centimètres uniquement",
        "en": "Its exact length in centimetres only",
        "correct": false
       },
       {
        "fr": "Le nombre de mèches sur la tête",
        "en": "The number of strands on the head",
        "correct": false
       },
       {
        "fr": "La marque du dernier shampooing utilisé",
        "en": "The brand of the last shampoo used",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La porosité du cheveu influence l'absorption des produits chimiques comme la coloration.",
      "en": "Hair porosity affects the absorption of chemical products like colour.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi vérifier la présence de conditions du cuir chevelu (comme la sécheresse ou l'irritation) avant un traitement?",
      "en": "Why check for scalp conditions (like dryness or irritation) before a treatment?",
      "choices": [
       {
        "fr": "Pour adapter le service et éviter d'aggraver la condition",
        "en": "To adapt the service and avoid worsening the condition",
        "correct": true
       },
       {
        "fr": "Pour justifier un prix plus élevé au client",
        "en": "To justify a higher price to the client",
        "correct": false
       },
       {
        "fr": "Pour choisir la musique d'ambiance du salon",
        "en": "To choose the salon's background music",
        "correct": false
       },
       {
        "fr": "Pour respecter la durée standard de rendez-vous",
        "en": "To respect the standard appointment length",
        "correct": false
       }
      ]
     },
     {
      "fr": "Que faire si un examen révèle une condition qui dépasse le champ de pratique du coiffeur?",
      "en": "What should be done if an examination reveals a condition beyond a hairdresser's scope of practice?",
      "choices": [
       {
        "fr": "Référer la cliente ou le client à un professionnel de la santé",
        "en": "Referring the client to a health professional",
        "correct": true
       },
       {
        "fr": "Appliquer un traitement capillaire plus puissant que d'habitude",
        "en": "Applying a stronger-than-usual hair treatment",
        "correct": false
       },
       {
        "fr": "Recommander un produit en vente libre sans plus d'analyse",
        "en": "Recommending an over-the-counter product with no further analysis",
        "correct": false
       },
       {
        "fr": "Continuer le service prévu sans en tenir compte",
        "en": "Continuing the planned service without taking it into account",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Un cheveu de faible porosité absorbe toujours les produits chimiques plus rapidement qu'un cheveu de forte porosité.",
      "en": "Low-porosity hair always absorbs chemical products faster than highly porous hair.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un cheveu présente une porosité élevée et des signes de dommages chimiques antérieurs. Quelle est la bonne pratique avant une nouvelle coloration?",
      "en": "Hair shows high porosity and signs of previous chemical damage. What is the correct practice before a new colour service?",
      "choices": [
       {
        "fr": "Évaluer soigneusement l'état du cheveu et ajuster ou reporter le service si nécessaire",
        "en": "Carefully assessing the hair's condition and adjusting or postponing the service if necessary",
        "correct": true
       },
       {
        "fr": "Utiliser une formule de coloration plus concentrée pour compenser",
        "en": "Using a more concentrated colour formula to compensate",
        "correct": false
       },
       {
        "fr": "Prolonger le temps de pose habituel pour garantir la prise de couleur",
        "en": "Extending the usual processing time to guarantee colour uptake",
        "correct": false
       },
       {
        "fr": "Appliquer un traitement protéiné juste après la coloration seulement",
        "en": "Applying a protein treatment only right after the colour service",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi une analyse rigoureuse du cheveu et du cuir chevelu est-elle fondamentale pour tout le reste du programme?",
      "en": "Why is a rigorous hair and scalp analysis fundamental to the rest of the program?",
      "choices": [
       {
        "fr": "La plupart des services (coupe, coloration, traitements) doivent être adaptés à l'état réel du cheveu",
        "en": "Most later installations (heating, plumbing) rely on these basic principles",
        "correct": true
       },
       {
        "fr": "Elle remplace la consultation verbale avec le client",
        "en": "It replaces the verbal consultation with the client",
        "correct": false
       },
       {
        "fr": "Elle n'est utile qu'au tout premier rendez-vous d'un nouveau client",
        "en": "It's only useful at a new client's very first appointment",
        "correct": false
       },
       {
        "fr": "Elle sert uniquement à remplir le dossier administratif du salon",
        "en": "It only serves to fill out the salon's administrative file",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Le test de porosité se fait uniquement en observant la couleur du cheveu à sec, jamais en le mouillant.",
      "en": "A porosity test is done only by observing the hair's colour while dry, never by wetting it.",
      "isTrue": false
     }
    ]
   }
  ]
 },
 {
  "id": "coif04",
  "order": 4,
  "code": "418042",
  "hours": 30,
  "title_fr": "Morphologie et physionomie",
  "title_en": "Morphology and Physiognomy",
  "icon": "🪞",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Pourquoi analyser la forme du visage avant de proposer une coiffure?",
      "en": "Why analyze face shape before suggesting a hairstyle?",
      "choices": [
       {
        "fr": "Pour proposer une coiffure qui met en valeur les traits du visage",
        "en": "To suggest a hairstyle that enhances facial features",
        "correct": true
       },
       {
        "fr": "Pour déterminer automatiquement la longueur maximale permise",
        "en": "To automatically determine the maximum length allowed",
        "correct": false
       },
       {
        "fr": "Pour choisir uniquement la couleur des cheveux à recommander",
        "en": "To choose only the hair colour to recommend",
        "correct": false
       },
       {
        "fr": "Pour établir le prix du service selon la complexité du visage",
        "en": "To set the service price based on the face's complexity",
        "correct": false
       }
      ]
     },
     {
      "fr": "Quel élément fait partie de l'analyse morphologique en coiffure?",
      "en": "What element is part of morphological analysis in hairdressing?",
      "choices": [
       {
        "fr": "La forme du visage, la posture et les proportions corporelles",
        "en": "Face shape, posture and body proportions",
        "correct": true
       },
       {
        "fr": "La pointure de chaussure du client",
        "en": "The client's shoe size",
        "correct": false
       },
       {
        "fr": "La couleur des vêtements portés ce jour-là",
        "en": "The colour of clothes worn that day",
        "correct": false
       },
       {
        "fr": "Le groupe sanguin du client",
        "en": "The client's blood type",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La morphologie du visage influence le choix d'une coupe ou d'une frange.",
      "en": "Face morphology influences the choice of a haircut or bangs.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi considérer la physionomie globale d'un client, pas seulement la forme du visage?",
      "en": "Why consider a client's overall physiognomy, not just face shape?",
      "choices": [
       {
        "fr": "Pour obtenir une harmonie globale entre la coiffure et l'ensemble de la silhouette",
        "en": "To achieve overall harmony between the hairstyle and the whole silhouette",
        "correct": true
       },
       {
        "fr": "Parce que la forme du visage change chaque saison",
        "en": "Because face shape changes every season",
        "correct": false
       },
       {
        "fr": "Pour respecter un standard unique applicable à tous les visages",
        "en": "To follow a single standard applicable to all faces",
        "correct": false
       },
       {
        "fr": "Parce que seule la taille du client compte réellement",
        "en": "Because only the client's height really matters",
        "correct": false
       }
      ]
     },
     {
      "fr": "Que faire si un client demande une coiffure qui ne correspond pas à sa morphologie selon l'analyse professionnelle?",
      "en": "What should be done if a client asks for a hairstyle that doesn't suit their morphology according to professional analysis?",
      "choices": [
       {
        "fr": "Discuter des options avec le client en expliquant les recommandations professionnelles",
        "en": "Discussing options with the client while explaining professional recommendations",
        "correct": true
       },
       {
        "fr": "Réaliser la coiffure demandée sans commentaire",
        "en": "Doing the requested hairstyle with no comment",
        "correct": false
       },
       {
        "fr": "Proposer plutôt une coloration pour détourner la demande",
        "en": "Suggesting a colour service instead to divert the request",
        "correct": false
       },
       {
        "fr": "Reporter le rendez-vous à une date ultérieure",
        "en": "Postponing the appointment to a later date",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Une analyse morphologique précise garantit toujours la satisfaction du client, peu importe ses goûts personnels.",
      "en": "A precise morphological analysis always guarantees client satisfaction, regardless of their personal taste.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un client a une forme de visage complexe combinant plusieurs caractéristiques. Quelle est une bonne pratique d'analyse?",
      "en": "A client has a complex face shape combining several characteristics. What is a good analysis practice?",
      "choices": [
       {
        "fr": "Évaluer l'ensemble des proportions plutôt que de se fier à une seule caractéristique isolée",
        "en": "Assessing the overall proportions rather than relying on a single isolated characteristic",
        "correct": true
       },
       {
        "fr": "Classer le visage dans la catégorie la plus fréquente en clientèle",
        "en": "Classifying the face in the most common category among clients",
        "correct": false
       },
       {
        "fr": "Se fier uniquement à la largeur du front",
        "en": "Relying only on forehead width",
        "correct": false
       },
       {
        "fr": "Demander au client de choisir lui-même sa catégorie de visage",
        "en": "Asking the client to choose their own face category",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi la compréhension de la morphologie et de la physionomie est-elle un atout professionnel important en coiffure?",
      "en": "Why is understanding morphology and physiognomy an important professional asset in hairdressing?",
      "choices": [
       {
        "fr": "Elle permet des recommandations personnalisées qui augmentent la satisfaction de la clientèle",
        "en": "It enables personalized recommendations that increase client satisfaction",
        "correct": true
       },
       {
        "fr": "Elle permet de prédire avec certitude les préférences futures du client",
        "en": "It allows predicting with certainty the client's future preferences",
        "correct": false
       },
       {
        "fr": "Elle est surtout utile pour la facturation des services",
        "en": "It is mainly useful for billing services",
        "correct": false
       },
       {
        "fr": "Elle remplace l'entretien de consultation initial",
        "en": "It replaces the initial consultation interview",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Une coiffure qui respecte les recommandations morphologiques peut parfois ne pas plaire au client malgré tout.",
      "en": "A hairstyle that follows morphological recommendations can sometimes still not please the client.",
      "isTrue": true
     }
    ]
   }
  ]
 },
 {
  "id": "coif05",
  "order": 5,
  "code": "418052",
  "hours": 30,
  "title_fr": "Shampooing",
  "title_en": "Shampooing",
  "icon": "🧴",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Quel est le rôle principal du shampooing?",
      "en": "What is shampooing's main role?",
      "choices": [
       {
        "fr": "Nettoyer les cheveux et le cuir chevelu",
        "en": "Cleansing the hair and scalp",
        "correct": true
       },
       {
        "fr": "Fixer durablement la couleur des cheveux",
        "en": "Permanently setting the hair's colour",
        "correct": false
       },
       {
        "fr": "Redresser la structure naturelle du cheveu",
        "en": "Straightening the hair's natural structure",
        "correct": false
       },
       {
        "fr": "Accélérer la repousse des cheveux",
        "en": "Speeding up hair regrowth",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi choisir un shampooing adapté au type de cheveux du client?",
      "en": "Why choose a shampoo suited to the client's hair type?",
      "choices": [
       {
        "fr": "Pour nettoyer efficacement sans dessécher ou alourdir les cheveux",
        "en": "To cleanse effectively without drying out or weighing down the hair",
        "correct": true
       },
       {
        "fr": "Parce que le prix varie selon le type de cheveux",
        "en": "Because the price varies based on hair type",
        "correct": false
       },
       {
        "fr": "Parce que la mousse doit toujours être abondante",
        "en": "Because the lather must always be abundant",
        "correct": false
       },
       {
        "fr": "Pour respecter la marque préférée du salon uniquement",
        "en": "To follow the salon's preferred brand only",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Un massage du cuir chevelu pendant le shampooing peut favoriser la circulation sanguine.",
      "en": "A scalp massage during shampooing can promote blood circulation.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi ajuster la température de l'eau lors d'un shampooing?",
      "en": "Why adjust water temperature during a shampoo?",
      "choices": [
       {
        "fr": "Pour le confort du client et pour éviter d'irriter le cuir chevelu",
        "en": "For the client's comfort and to avoid irritating the scalp",
        "correct": true
       },
       {
        "fr": "Pour accélérer le séchage naturel des cheveux",
        "en": "To speed up the hair's natural drying",
        "correct": false
       },
       {
        "fr": "Pour renforcer l'effet du revitalisant appliqué ensuite",
        "en": "To strengthen the conditioner applied afterward",
        "correct": false
       },
       {
        "fr": "Pour ouvrir les follicules de façon permanente",
        "en": "To permanently open the follicles",
        "correct": false
       }
      ]
     },
     {
      "fr": "Que doit-on vérifier avant d'appliquer un shampooing traitant sur un cuir chevelu sensible?",
      "en": "What should be checked before applying a treatment shampoo on a sensitive scalp?",
      "choices": [
       {
        "fr": "La compatibilité du produit avec la condition du cuir chevelu",
        "en": "The product's compatibility with the scalp's condition",
        "correct": true
       },
       {
        "fr": "La date de fabrication précise du produit",
        "en": "The product's exact manufacturing date",
        "correct": false
       },
       {
        "fr": "Le parfum du produit uniquement",
        "en": "Only the product's scent",
        "correct": false
       },
       {
        "fr": "La couleur de l'emballage du produit",
        "en": "The product's packaging colour",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Un rinçage incomplet du shampooing peut laisser des résidus qui alourdissent les cheveux.",
      "en": "Incomplete rinsing of shampoo can leave residue that weighs down hair.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un client se plaint que son cuir chevelu est irrité après un shampooing habituel. Quelle est la bonne pratique?",
      "en": "A client complains their scalp is irritated after a routine shampoo. What is the correct practice?",
      "choices": [
       {
        "fr": "Analyser la cause possible (produit, technique, condition sous-jacente) avant le prochain service",
        "en": "Analyzing the possible cause (product, technique, underlying condition) before the next service",
        "correct": true
       },
       {
        "fr": "Changer immédiatement pour le shampooing le plus doux disponible sans diagnostic",
        "en": "Immediately switching to the mildest shampoo available with no diagnosis",
        "correct": false
       },
       {
        "fr": "Réduire simplement la température de l'eau la prochaine fois",
        "en": "Simply lowering the water temperature next time",
        "correct": false
       },
       {
        "fr": "Recommander au client d'espacer ses lavages à domicile",
        "en": "Recommending the client space out their washes at home",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi la technique de shampooing est-elle plus qu'un simple nettoyage dans un service professionnel?",
      "en": "Why is shampooing technique more than simple cleansing in a professional service?",
      "choices": [
       {
        "fr": "Elle prépare le cheveu pour les services suivants et contribue à l'expérience client",
        "en": "It prepares the hair for subsequent services and contributes to the client experience",
        "correct": true
       },
       {
        "fr": "Elle détermine à elle seule le prix final du service",
        "en": "It alone determines the service's final price",
        "correct": false
       },
       {
        "fr": "Elle remplace les traitements capillaires plus coûteux",
        "en": "It replaces more expensive hair treatments",
        "correct": false
       },
       {
        "fr": "Elle n'a d'effet que sur l'apparence temporaire du jour même",
        "en": "It only affects the same-day temporary appearance",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La technique de massage pendant le shampooing n'a aucune influence sur le confort du client; seul le produit compte.",
      "en": "The massage technique during shampooing has no influence on the client's comfort; only the product matters.",
      "isTrue": false
     }
    ]
   }
  ]
 },
 {
  "id": "coif06",
  "order": 6,
  "code": "418064",
  "hours": 60,
  "title_fr": "Traitement des cheveux et du cuir chevelu",
  "title_en": "Hair and Scalp Treatment",
  "icon": "💆",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Pourquoi proposer un traitement capillaire à un client ayant les cheveux abîmés?",
      "en": "Why suggest a hair treatment to a client with damaged hair?",
      "choices": [
       {
        "fr": "Pour restaurer la santé et l'apparence des cheveux",
        "en": "To restore the hair's health and appearance",
        "correct": true
       },
       {
        "fr": "Pour remplacer définitivement une coupe nécessaire",
        "en": "To permanently replace a necessary haircut",
        "correct": false
       },
       {
        "fr": "Pour accélérer artificiellement la pousse des cheveux",
        "en": "To artificially speed up hair growth",
        "correct": false
       },
       {
        "fr": "Pour changer la texture naturelle du cheveu de façon permanente",
        "en": "To permanently change the hair's natural texture",
        "correct": false
       }
      ]
     },
     {
      "fr": "Quel type de traitement peut aider un cuir chevelu sec?",
      "en": "What type of treatment can help a dry scalp?",
      "choices": [
       {
        "fr": "Un traitement hydratant ou nourrissant",
        "en": "A hydrating or nourishing treatment",
        "correct": true
       },
       {
        "fr": "Un traitement clarifiant à base d'alcool",
        "en": "An alcohol-based clarifying treatment",
        "correct": false
       },
       {
        "fr": "Un traitement décolorant léger",
        "en": "A light lightening treatment",
        "correct": false
       },
       {
        "fr": "Un shampooing sec appliqué quotidiennement",
        "en": "A dry shampoo applied daily",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Un traitement capillaire régulier peut prévenir certains dommages liés aux services chimiques.",
      "en": "Regular hair treatment can prevent some damage related to chemical services.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi personnaliser le choix d'un traitement selon l'analyse du cheveu et du cuir chevelu?",
      "en": "Why customize the choice of treatment based on hair and scalp analysis?",
      "choices": [
       {
        "fr": "Pour répondre précisément aux besoins spécifiques du client",
        "en": "To precisely address the client's specific needs",
        "correct": true
       },
       {
        "fr": "Parce que le prix du traitement varie selon la saison",
        "en": "Because the treatment's price varies by season",
        "correct": false
       },
       {
        "fr": "Pour respecter uniquement les préférences de couleur du client",
        "en": "To follow only the client's colour preferences",
        "correct": false
       },
       {
        "fr": "Parce que tous les traitements ont le même temps de pose",
        "en": "Because all treatments have the same processing time",
        "correct": false
       }
      ]
     },
     {
      "fr": "Que doit-on vérifier après avoir appliqué un traitement intensif?",
      "en": "What should be checked after applying an intensive treatment?",
      "choices": [
       {
        "fr": "La réaction du cuir chevelu et le résultat sur les cheveux",
        "en": "The scalp's reaction and the result on the hair",
        "correct": true
       },
       {
        "fr": "Le poids exact du produit restant dans le contenant",
        "en": "The exact weight of the product remaining in the container",
        "correct": false
       },
       {
        "fr": "La date d'expiration inscrite sur l'emballage",
        "en": "The expiry date printed on the packaging",
        "correct": false
       },
       {
        "fr": "Le nombre total de traitements effectués ce mois-ci",
        "en": "The total number of treatments done that month",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Certains traitements capillaires nécessitent une source de chaleur pour optimiser leur pénétration.",
      "en": "Some hair treatments require a heat source to optimize their penetration.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un traitement standard ne donne pas les résultats attendus sur des cheveux très abîmés. Quelle est la bonne pratique?",
      "en": "A standard treatment doesn't give the expected results on very damaged hair. What is the correct practice?",
      "choices": [
       {
        "fr": "Réévaluer le diagnostic et adapter le plan de traitement sur plusieurs séances si nécessaire",
        "en": "Reassessing the diagnosis and adapting the treatment plan over several sessions if necessary",
        "correct": true
       },
       {
        "fr": "Doubler la quantité de produit appliquée lors de la prochaine séance",
        "en": "Doubling the amount of product applied at the next session",
        "correct": false
       },
       {
        "fr": "Combiner plusieurs traitements différents en une seule application",
        "en": "Combining several different treatments in a single application",
        "correct": false
       },
       {
        "fr": "Recommander au client d'espacer davantage ses services chimiques",
        "en": "Recommending the client space out their chemical services further",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi le traitement des cheveux et du cuir chevelu est-il un service à forte valeur ajoutée pour un salon?",
      "en": "Why is hair and scalp treatment a high-value-added service for a salon?",
      "choices": [
       {
        "fr": "Il répond à des besoins spécifiques et fidélise la clientèle par des résultats visibles",
        "en": "It addresses specific needs and builds client loyalty through visible results",
        "correct": true
       },
       {
        "fr": "Il coûte toujours plus cher à réaliser que les autres services",
        "en": "It always costs more to perform than other services",
        "correct": false
       },
       {
        "fr": "Il est obligatoire avant tout autre service en salon",
        "en": "It is mandatory before any other salon service",
        "correct": false
       },
       {
        "fr": "Il remplace la nécessité d'une bonne technique de coupe",
        "en": "It replaces the need for good cutting technique",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Un traitement capillaire réussi élimine définitivement le besoin de futurs traitements, peu importe les services chimiques à venir.",
      "en": "A successful hair treatment permanently eliminates the need for future treatments, regardless of upcoming chemical services.",
      "isTrue": false
     }
    ]
   }
  ]
 },
 {
  "id": "coif07",
  "order": 7,
  "code": "418073",
  "hours": 45,
  "title_fr": "Mise en plis",
  "title_en": "Setting (Roller Sets)",
  "icon": "🌀",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Qu'est-ce qu'une mise en plis?",
      "en": "What is a roller set?",
      "choices": [
       {
        "fr": "Une technique de mise en forme des cheveux à l'aide de bigoudis ou de rouleaux",
        "en": "A hair styling technique using rollers or curlers",
        "correct": true
       },
       {
        "fr": "Une technique d'éclaircissement des pointes",
        "en": "A technique for lightening the ends",
        "correct": false
       },
       {
        "fr": "Une méthode pour couper les cheveux en dégradé",
        "en": "A method for layering a haircut",
        "correct": false
       },
       {
        "fr": "Un traitement pour réparer les cheveux cassants",
        "en": "A treatment for repairing brittle hair",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi bien sectionner les cheveux avant une mise en plis?",
      "en": "Why properly section the hair before a roller set?",
      "choices": [
       {
        "fr": "Pour assurer un résultat uniforme et bien structuré",
        "en": "To ensure a uniform and well-structured result",
        "correct": true
       },
       {
        "fr": "Pour réduire le nombre de rouleaux nécessaires",
        "en": "To reduce the number of rollers needed",
        "correct": false
       },
       {
        "fr": "Parce que le sectionnement remplace le shampooing",
        "en": "Because sectioning replaces the shampoo step",
        "correct": false
       },
       {
        "fr": "Pour permettre l'application d'une coloration en même temps",
        "en": "To allow colour to be applied at the same time",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La taille du rouleau influence le diamètre de la boucle obtenue.",
      "en": "Roller size affects the diameter of the resulting curl.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi ajuster la technique de mise en plis selon la texture du cheveu?",
      "en": "Why adjust the roller set technique based on hair texture?",
      "choices": [
       {
        "fr": "Pour obtenir un résultat optimal adapté à chaque type de cheveu",
        "en": "To achieve an optimal result suited to each hair type",
        "correct": true
       },
       {
        "fr": "Parce que les cheveux fins nécessitent toujours plus de chaleur",
        "en": "Because fine hair always requires more heat",
        "correct": false
       },
       {
        "fr": "Parce que seule la texture bouclée peut être mise en plis",
        "en": "Because only curly texture can be roller-set",
        "correct": false
       },
       {
        "fr": "Pour réduire le temps total du service peu importe la texture",
        "en": "To reduce the total service time regardless of texture",
        "correct": false
       }
      ]
     },
     {
      "fr": "Que faire si une mise en plis ne tient pas bien après le séchage?",
      "en": "What should you do if a roller set doesn't hold well after drying?",
      "choices": [
       {
        "fr": "Évaluer la technique utilisée et ajuster (tension, séchage, produits)",
        "en": "Assessing the technique used and adjusting (tension, drying, products)",
        "correct": true
       },
       {
        "fr": "Augmenter systématiquement la température du séchoir la prochaine fois",
        "en": "Systematically increasing the dryer's temperature next time",
        "correct": false
       },
       {
        "fr": "Utiliser des rouleaux plus petits pour tous les futurs services",
        "en": "Using smaller rollers for all future services",
        "correct": false
       },
       {
        "fr": "Réduire le nombre de sections utilisées",
        "en": "Reducing the number of sections used",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Le séchage n'a aucune influence sur la durabilité d'une mise en plis; seule la taille du rouleau compte.",
      "en": "Drying has no influence on how long a roller set lasts; only roller size matters.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Une cliente a des cheveux fins et difficiles à boucler. Quelle est une bonne pratique pour une mise en plis durable?",
      "en": "A client has fine hair that's hard to curl. What is a good practice for a lasting roller set?",
      "choices": [
       {
        "fr": "Utiliser des produits fixants adaptés et une tension appropriée pendant l'enroulement",
        "en": "Using suitable setting products and proper tension while rolling",
        "correct": true
       },
       {
        "fr": "Utiliser systématiquement les plus gros rouleaux disponibles",
        "en": "Systematically using the largest rollers available",
        "correct": false
       },
       {
        "fr": "Éviter tout produit fixant pour ne pas alourdir le cheveu fin",
        "en": "Avoiding any setting product to avoid weighing down fine hair",
        "correct": false
       },
       {
        "fr": "Réduire le temps de séchage pour préserver la souplesse du cheveu",
        "en": "Reducing drying time to preserve the hair's flexibility",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi la mise en plis reste-t-elle une compétence pertinente malgré l'évolution des techniques modernes?",
      "en": "Why does roller setting remain a relevant skill despite the evolution of modern techniques?",
      "choices": [
       {
        "fr": "Elle permet d'obtenir des textures et volumes difficiles à reproduire autrement",
        "en": "It achieves textures and volumes that are hard to reproduce otherwise",
        "correct": true
       },
       {
        "fr": "Elle est plus rapide que toutes les techniques de mise en forme modernes",
        "en": "It is faster than all modern styling techniques",
        "correct": false
       },
       {
        "fr": "Elle ne nécessite aucun produit coiffant contrairement aux autres techniques",
        "en": "It requires no styling product unlike other techniques",
        "correct": false
       },
       {
        "fr": "Elle convient uniquement aux cheveux très courts",
        "en": "It only suits very short hair",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La mise en plis ne peut jamais être combinée à d'autres techniques de mise en forme; elle doit toujours être utilisée seule.",
      "en": "Roller setting can never be combined with other styling techniques; it must always be used alone.",
      "isTrue": false
     }
    ]
   }
  ]
 },
 {
  "id": "coif08",
  "order": 8,
  "code": "418085",
  "hours": 75,
  "title_fr": "Mise en forme",
  "title_en": "Styling",
  "icon": "💨",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Qu'est-ce que la mise en forme en coiffure?",
      "en": "What is hair styling in hairdressing?",
      "choices": [
       {
        "fr": "L'ensemble des techniques pour donner une forme et un fini aux cheveux",
        "en": "The set of techniques used to give hair shape and finish",
        "correct": true
       },
       {
        "fr": "La technique utilisée uniquement pour éclaircir les cheveux",
        "en": "The technique used only to lighten hair",
        "correct": false
       },
       {
        "fr": "Un service qui remplace toujours la coupe des cheveux",
        "en": "A service that always replaces the haircut",
        "correct": false
       },
       {
        "fr": "Une méthode de nettoyage en profondeur du cuir chevelu",
        "en": "A deep scalp cleansing method",
        "correct": false
       }
      ]
     },
     {
      "fr": "Quel outil est couramment utilisé pour la mise en forme des cheveux?",
      "en": "What tool is commonly used for hair styling?",
      "choices": [
       {
        "fr": "Le séchoir et la brosse ronde",
        "en": "A blow dryer and round brush",
        "correct": true
       },
       {
        "fr": "Le peigne à tige métallique uniquement",
        "en": "A metal-pin comb only",
        "correct": false
       },
       {
        "fr": "La tondeuse électrique",
        "en": "Electric clippers",
        "correct": false
       },
       {
        "fr": "Le pinceau de coloration",
        "en": "A colour application brush",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La mise en forme peut inclure le brushing, le lissage ou la mise en boucle.",
      "en": "Styling can include blow-drying, straightening or curling.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi adapter la température des outils chauffants selon le type de cheveu?",
      "en": "Why adjust heated tool temperature based on hair type?",
      "choices": [
       {
        "fr": "Pour éviter d'endommager les cheveux tout en obtenant le résultat souhaité",
        "en": "To avoid damaging the hair while achieving the desired result",
        "correct": true
       },
       {
        "fr": "Parce que les cheveux épais nécessitent toujours moins de chaleur",
        "en": "Because thick hair always requires less heat",
        "correct": false
       },
       {
        "fr": "Pour réduire le temps total du service peu importe la texture",
        "en": "To reduce the total service time regardless of texture",
        "correct": false
       },
       {
        "fr": "Parce que la température n'affecte que la couleur des cheveux",
        "en": "Because temperature only affects hair colour",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi utiliser un protecteur thermique avant d'utiliser des outils chauffants?",
      "en": "Why use a heat protectant before using heated tools?",
      "choices": [
       {
        "fr": "Pour réduire les dommages liés à la chaleur",
        "en": "To reduce heat-related damage",
        "correct": true
       },
       {
        "fr": "Pour remplacer le besoin d'un shampooing préalable",
        "en": "To replace the need for a prior shampoo",
        "correct": false
       },
       {
        "fr": "Pour accélérer la vitesse de mise en forme",
        "en": "To speed up the styling process",
        "correct": false
       },
       {
        "fr": "Pour intensifier la couleur naturelle du cheveu",
        "en": "To intensify the hair's natural colour",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Une bonne technique de mise en forme peut prolonger la durée de vie d'une coiffure.",
      "en": "A good styling technique can extend a hairstyle's lifespan.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un client souhaite un style qui nécessite plusieurs techniques de mise en forme combinées. Quelle est une bonne pratique?",
      "en": "A client wants a style requiring several combined styling techniques. What is a good practice?",
      "choices": [
       {
        "fr": "Planifier l'ordre des techniques pour obtenir un résultat cohérent et durable",
        "en": "Planning the order of techniques to achieve a coherent and lasting result",
        "correct": true
       },
       {
        "fr": "Utiliser la température maximale de chaque outil pour aller plus vite",
        "en": "Using each tool's maximum temperature to go faster",
        "correct": false
       },
       {
        "fr": "Appliquer toutes les techniques simultanément pour gagner du temps",
        "en": "Applying all techniques simultaneously to save time",
        "correct": false
       },
       {
        "fr": "Se limiter à une seule technique pour simplifier le résultat",
        "en": "Limiting to a single technique to simplify the result",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi la mise en forme est-elle une compétence particulièrement valorisée par la clientèle?",
      "en": "Why is styling a particularly valued skill among clients?",
      "choices": [
       {
        "fr": "C'est souvent le résultat final visible qui détermine la satisfaction du client",
        "en": "It's often the final visible result that determines client satisfaction",
        "correct": true
       },
       {
        "fr": "C'est le service le moins coûteux offert en salon",
        "en": "It's the least expensive service offered in a salon",
        "correct": false
       },
       {
        "fr": "Elle ne nécessite aucune formation particulière",
        "en": "It requires no particular training",
        "correct": false
       },
       {
        "fr": "Elle est toujours plus rapide que la coupe ou la coloration",
        "en": "It is always faster than cutting or colouring",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Le choix des outils de mise en forme n'a aucune influence sur le résultat final; seul le produit coiffant compte.",
      "en": "The choice of styling tools has no influence on the final result; only the styling product matters.",
      "isTrue": false
     }
    ]
   }
  ]
 },
 {
  "id": "coif09",
  "order": 9,
  "code": "418093",
  "hours": 45,
  "title_fr": "Communication",
  "title_en": "Communication",
  "icon": "💬",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Pourquoi bien communiquer avec un client avant un service de coiffure?",
      "en": "Why communicate well with a client before a hairdressing service?",
      "choices": [
       {
        "fr": "Pour comprendre précisément ses attentes et éviter les malentendus",
        "en": "To precisely understand their expectations and avoid misunderstandings",
        "correct": true
       },
       {
        "fr": "Pour justifier un prix plus élevé pour le service",
        "en": "To justify a higher price for the service",
        "correct": false
       },
       {
        "fr": "Parce que c'est une exigence purement administrative",
        "en": "Because it's a purely administrative requirement",
        "correct": false
       },
       {
        "fr": "Pour remplacer l'examen des cheveux et du cuir chevelu",
        "en": "To replace the hair and scalp examination",
        "correct": false
       }
      ]
     },
     {
      "fr": "Quelle est une bonne pratique lors d'une consultation avec un nouveau client?",
      "en": "What is a good practice during a consultation with a new client?",
      "choices": [
       {
        "fr": "Poser des questions ouvertes sur ses habitudes et ses attentes",
        "en": "Asking open-ended questions about their habits and expectations",
        "correct": true
       },
       {
        "fr": "Proposer directement le style le plus populaire du moment",
        "en": "Directly suggesting the most popular current style",
        "correct": false
       },
       {
        "fr": "Se fier uniquement à l'apparence physique du client",
        "en": "Relying only on the client's physical appearance",
        "correct": false
       },
       {
        "fr": "Éviter les questions pour ne pas ralentir le service",
        "en": "Avoiding questions to not slow down the service",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "L'écoute active aide à mieux cerner les attentes réelles d'un client.",
      "en": "Active listening helps better understand a client's real expectations.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi utiliser des références visuelles (photos) lors d'une consultation?",
      "en": "Why use visual references (photos) during a consultation?",
      "choices": [
       {
        "fr": "Pour s'assurer d'une compréhension commune du résultat souhaité",
        "en": "To ensure a shared understanding of the desired result",
        "correct": true
       },
       {
        "fr": "Parce que les mots ne peuvent jamais décrire une coiffure",
        "en": "Because words can never describe a hairstyle",
        "correct": false
       },
       {
        "fr": "Pour remplacer l'analyse morphologique du client",
        "en": "To replace the client's morphological analysis",
        "correct": false
       },
       {
        "fr": "Pour accélérer le paiement du service",
        "en": "To speed up payment for the service",
        "correct": false
       }
      ]
     },
     {
      "fr": "Que faire si les attentes du client semblent irréalistes par rapport à l'état de ses cheveux?",
      "en": "What should be done if a client's expectations seem unrealistic given the state of their hair?",
      "choices": [
       {
        "fr": "Expliquer honnêtement les limites et proposer des alternatives réalistes",
        "en": "Honestly explaining the limitations and offering realistic alternatives",
        "correct": true
       },
       {
        "fr": "Réaliser le service demandé sans commentaire particulier",
        "en": "Performing the requested service with no particular comment",
        "correct": false
       },
       {
        "fr": "Proposer un rendez-vous plus long pour tout accomplir quand même",
        "en": "Offering a longer appointment to still accomplish everything",
        "correct": false
       },
       {
        "fr": "Référer immédiatement le client à un autre salon",
        "en": "Immediately referring the client to another salon",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Une communication claire réduit les risques d'insatisfaction après un service de coiffure.",
      "en": "Clear communication reduces the risk of dissatisfaction after a hairdressing service.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un client est insatisfait du résultat malgré une consultation approfondie. Quelle est la bonne pratique?",
      "en": "A client is unhappy with the result despite a thorough consultation. What is the correct practice?",
      "choices": [
       {
        "fr": "Écouter ses préoccupations avec empathie et discuter des solutions possibles",
        "en": "Listening to their concerns with empathy and discussing possible solutions",
        "correct": true
       },
       {
        "fr": "Rappeler au client les détails exacts de la consultation initiale",
        "en": "Reminding the client of the exact details of the initial consultation",
        "correct": false
       },
       {
        "fr": "Offrir immédiatement un remboursement complet sans discussion",
        "en": "Immediately offering a full refund with no discussion",
        "correct": false
       },
       {
        "fr": "Attendre le prochain rendez-vous pour aborder le sujet",
        "en": "Waiting until the next appointment to address the issue",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi la communication est-elle une compétence transversale essentielle en coiffure?",
      "en": "Why is communication an essential transferable skill in hairdressing?",
      "choices": [
       {
        "fr": "Elle influence directement la satisfaction client et la fidélisation à long terme",
        "en": "It directly influences client satisfaction and long-term loyalty",
        "correct": true
       },
       {
        "fr": "Elle est surtout nécessaire pour la gestion des horaires de rendez-vous",
        "en": "It is mainly necessary for managing appointment schedules",
        "correct": false
       },
       {
        "fr": "Elle remplace la nécessité d'une bonne technique de coupe",
        "en": "It replaces the need for good cutting technique",
        "correct": false
       },
       {
        "fr": "Elle ne concerne que les services de vente de produits",
        "en": "It only concerns product sales services",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Une bonne communication garantit toujours que le résultat plaira au client, peu importe la technique utilisée.",
      "en": "Good communication always guarantees the client will like the result, regardless of the technique used.",
      "isTrue": false
     }
    ]
   }
  ]
 },
 {
  "id": "coif10",
  "order": 10,
  "code": "418108",
  "hours": 120,
  "title_fr": "Coupe standard pour femme",
  "title_en": "Standard Haircut for Women",
  "icon": "✂️",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Quel outil de base sert à couper les cheveux?",
      "en": "What basic tool is used to cut hair?",
      "choices": [
       {
        "fr": "Des ciseaux de coiffure",
        "en": "Hairdressing scissors",
        "correct": true
       },
       {
        "fr": "Un peigne à tige métallique",
        "en": "A metal-pin comb",
        "correct": false
       },
       {
        "fr": "Une brosse ronde",
        "en": "A round brush",
        "correct": false
       },
       {
        "fr": "Un fer à lisser",
        "en": "A flat iron",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi sectionner les cheveux avant de commencer une coupe?",
      "en": "Why section the hair before starting a haircut?",
      "choices": [
       {
        "fr": "Pour travailler méthodiquement et obtenir un résultat uniforme",
        "en": "To work methodically and achieve a uniform result",
        "correct": true
       },
       {
        "fr": "Pour réduire le nombre total de mèches à couper",
        "en": "To reduce the total number of strands to cut",
        "correct": false
       },
       {
        "fr": "Parce que cela remplace le shampooing préalable",
        "en": "Because it replaces the prior shampoo",
        "correct": false
       },
       {
        "fr": "Pour permettre l'application simultanée d'une coloration",
        "en": "To allow colour to be applied at the same time",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La coupe standard pour femme est l'un des services les plus fréquemment demandés en salon.",
      "en": "A standard women's haircut is one of the most frequently requested salon services.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi couper les cheveux mouillés plutôt que secs pour certaines techniques?",
      "en": "Why cut hair wet rather than dry for certain techniques?",
      "choices": [
       {
        "fr": "Pour obtenir plus de précision et de contrôle sur la longueur",
        "en": "To achieve more precision and control over the length",
        "correct": true
       },
       {
        "fr": "Parce que les cheveux secs ne peuvent jamais être coupés",
        "en": "Because dry hair can never be cut",
        "correct": false
       },
       {
        "fr": "Pour éviter d'avoir à sectionner les cheveux",
        "en": "To avoid having to section the hair",
        "correct": false
       },
       {
        "fr": "Parce que cela élimine le besoin de peigner les cheveux",
        "en": "Because it eliminates the need to comb the hair",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi vérifier la symétrie d'une coupe pendant et après le service?",
      "en": "Why check a haircut's symmetry during and after the service?",
      "choices": [
       {
        "fr": "Pour assurer un résultat équilibré et professionnel",
        "en": "To ensure a balanced and professional result",
        "correct": true
       },
       {
        "fr": "Parce que la symétrie parfaite est requise pour tous les styles",
        "en": "Because perfect symmetry is required for all styles",
        "correct": false
       },
       {
        "fr": "Pour réduire le temps total du service",
        "en": "To reduce the total service time",
        "correct": false
       },
       {
        "fr": "Parce que cela remplace la vérification de la longueur",
        "en": "Because it replaces checking the length",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La technique de coupe doit être adaptée à la texture et à la densité des cheveux du client.",
      "en": "The cutting technique must be adapted to the client's hair texture and density.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Une cliente a des cheveux très denses et bouclés qui compliquent l'obtention d'une forme uniforme. Quelle est une bonne pratique?",
      "en": "A client has very dense, curly hair that complicates achieving a uniform shape. What is a good practice?",
      "choices": [
       {
        "fr": "Adapter la technique de coupe (dégradé, désépaississement) selon la texture réelle",
        "en": "Adapting the cutting technique (layering, thinning) based on the actual texture",
        "correct": true
       },
       {
        "fr": "Couper systématiquement les cheveux plus courts que la demande initiale",
        "en": "Systematically cutting the hair shorter than initially requested",
        "correct": false
       },
       {
        "fr": "Lisser chimiquement les cheveux avant toute coupe",
        "en": "Chemically straightening the hair before any cut",
        "correct": false
       },
       {
        "fr": "Utiliser exclusivement la tondeuse pour uniformiser la densité",
        "en": "Using clippers exclusively to even out the density",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi la coupe standard pour femme est-elle un service central dans la formation d'un(e) coiffeur(euse)?",
      "en": "Why is the standard women's haircut a central service in hairdresser training?",
      "choices": [
       {
        "fr": "C'est un service très demandé qui exige une maîtrise technique fondamentale",
        "en": "It's a highly requested service that requires fundamental technical mastery",
        "correct": true
       },
       {
        "fr": "C'est le service le plus rapide à réaliser du programme",
        "en": "It's the fastest service to perform in the program",
        "correct": false
       },
       {
        "fr": "C'est le seul service qui ne nécessite aucune consultation préalable",
        "en": "It's the only service that requires no prior consultation",
        "correct": false
       },
       {
        "fr": "C'est un service réservé uniquement aux coiffeurs expérimentés",
        "en": "It's a service reserved only for experienced hairdressers",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La qualité d'exécution d'une coupe n'a aucun lien avec la facilité d'entretien quotidien à la maison.",
      "en": "The quality of a haircut's execution has no connection to how easy it is to maintain daily at home.",
      "isTrue": false
     }
    ]
   }
  ]
 },
 {
  "id": "coif11",
  "order": 11,
  "code": "418114",
  "hours": 60,
  "title_fr": "Coupe graduelle pour homme et taille de la barbe",
  "title_en": "Graduated Haircut for Men and Beard Trimming",
  "icon": "🪒",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Quel outil est couramment utilisé pour une coupe graduelle pour homme?",
      "en": "What tool is commonly used for a graduated men's haircut?",
      "choices": [
       {
        "fr": "La tondeuse et des ciseaux",
        "en": "Clippers and scissors",
        "correct": true
       },
       {
        "fr": "Le fer à friser",
        "en": "A curling iron",
        "correct": false
       },
       {
        "fr": "Le peigne afro uniquement",
        "en": "An afro pick only",
        "correct": false
       },
       {
        "fr": "La brosse plate",
        "en": "A flat brush",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi utiliser différentes longueurs de sabots (guides) avec la tondeuse?",
      "en": "Why use different guard lengths with clippers?",
      "choices": [
       {
        "fr": "Pour créer des dégradés progressifs de longueur",
        "en": "To create progressive length fades",
        "correct": true
       },
       {
        "fr": "Parce qu'un seul guide ne peut jamais couper toute la tête",
        "en": "Because a single guard can never cut the whole head",
        "correct": false
       },
       {
        "fr": "Pour réduire le bruit de la tondeuse",
        "en": "To reduce the clippers' noise",
        "correct": false
       },
       {
        "fr": "Parce que chaque guide correspond à une couleur de cheveux",
        "en": "Because each guard corresponds to a hair colour",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La taille de la barbe fait partie des services couramment offerts avec la coupe pour homme.",
      "en": "Beard trimming is a service commonly offered alongside men's haircuts.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi respecter la ligne naturelle de la pousse des cheveux lors d'une coupe graduelle?",
      "en": "Why follow the natural hair growth line during a graduated haircut?",
      "choices": [
       {
        "fr": "Pour obtenir un résultat harmonieux et facile à entretenir",
        "en": "To achieve a harmonious and easy-to-maintain result",
        "correct": true
       },
       {
        "fr": "Parce que la ligne de pousse détermine la couleur naturelle des cheveux",
        "en": "Because the growth line determines the hair's natural colour",
        "correct": false
       },
       {
        "fr": "Pour réduire le nombre de guides de tondeuse nécessaires",
        "en": "To reduce the number of clipper guards needed",
        "correct": false
       },
       {
        "fr": "Parce que cela remplace la nécessité de sectionner les cheveux",
        "en": "Because it replaces the need to section the hair",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi adapter la taille de la barbe à la forme du visage du client?",
      "en": "Why adapt beard trimming to the client's face shape?",
      "choices": [
       {
        "fr": "Pour équilibrer les proportions du visage",
        "en": "To balance the face's proportions",
        "correct": true
       },
       {
        "fr": "Parce que toutes les barbes doivent avoir la même longueur",
        "en": "Because all beards must have the same length",
        "correct": false
       },
       {
        "fr": "Pour réduire le temps de rasage à domicile du client",
        "en": "To reduce the client's at-home shaving time",
        "correct": false
       },
       {
        "fr": "Parce que cela détermine automatiquement la coupe de cheveux à faire",
        "en": "Because it automatically determines the haircut to do",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La coupe graduelle nécessite une transition harmonieuse entre les différentes longueurs.",
      "en": "A graduated haircut requires a harmonious transition between different lengths.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un client a une pousse de cheveux irrégulière compliquant une coupe graduelle uniforme. Quelle est une bonne pratique?",
      "en": "A client has irregular hair growth complicating a uniform graduated cut. What is a good practice?",
      "choices": [
       {
        "fr": "Ajuster la technique en tenant compte des zones irrégulières pour un résultat cohérent",
        "en": "Adjusting the technique to account for irregular areas for a coherent result",
        "correct": true
       },
       {
        "fr": "Utiliser un seul guide de tondeuse sur toute la tête pour uniformiser",
        "en": "Using a single clipper guard on the whole head to even it out",
        "correct": false
       },
       {
        "fr": "Recommander au client de laisser pousser ses cheveux plus longs",
        "en": "Recommending the client let their hair grow longer",
        "correct": false
       },
       {
        "fr": "Couper les cheveux très courts pour masquer l'irrégularité",
        "en": "Cutting the hair very short to hide the irregularity",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi les services de coupe pour homme et de taille de barbe ont-ils gagné en popularité dans les salons modernes?",
      "en": "Why have men's haircut and beard trimming services grown in popularity in modern salons?",
      "choices": [
       {
        "fr": "La demande pour un entretien soigné et régulier de l'apparence masculine a augmenté",
        "en": "Demand for well-groomed, regular maintenance of men's appearance has increased",
        "correct": true
       },
       {
        "fr": "Ce sont les services les moins coûteux à offrir en salon",
        "en": "They are the least expensive services to offer in a salon",
        "correct": false
       },
       {
        "fr": "Ils ne nécessitent aucune formation technique particulière",
        "en": "They require no particular technical training",
        "correct": false
       },
       {
        "fr": "Ils remplacent la nécessité d'une consultation avec le client",
        "en": "They replace the need for a client consultation",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La taille de barbe suit exactement les mêmes principes techniques que la coupe de cheveux, sans aucune adaptation nécessaire.",
      "en": "Beard trimming follows exactly the same technical principles as haircutting, with no adaptation necessary.",
      "isTrue": false
     }
    ]
   }
  ]
 },
 {
  "id": "coif12",
  "order": 12,
  "code": "418127",
  "hours": 105,
  "title_fr": "Permanente standard",
  "title_en": "Standard Perm",
  "icon": "🧪",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Qu'est-ce qu'une permanente en coiffure?",
      "en": "What is a perm in hairdressing?",
      "choices": [
       {
        "fr": "Un traitement chimique qui donne une forme bouclée durable aux cheveux",
        "en": "A chemical treatment that gives hair a lasting curly shape",
        "correct": true
       },
       {
        "fr": "Un traitement qui redresse définitivement les cheveux bouclés",
        "en": "A treatment that permanently straightens curly hair",
        "correct": false
       },
       {
        "fr": "Une technique d'éclaircissement partiel des cheveux",
        "en": "A partial hair-lightening technique",
        "correct": false
       },
       {
        "fr": "Un masque hydratant appliqué sous chaleur",
        "en": "A hydrating mask applied under heat",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi faire un test de mèche avant une permanente?",
      "en": "Why do a strand test before a perm?",
      "choices": [
       {
        "fr": "Pour vérifier la réaction du cheveu au produit avant l'application complète",
        "en": "To check the hair's reaction to the product before full application",
        "correct": true
       },
       {
        "fr": "Pour déterminer la couleur finale des cheveux après le service",
        "en": "To determine the hair's final colour after the service",
        "correct": false
       },
       {
        "fr": "Pour calculer le prix exact du service à facturer",
        "en": "To calculate the exact price to charge for the service",
        "correct": false
       },
       {
        "fr": "Pour choisir la taille des bigoudis à utiliser uniquement",
        "en": "To choose only the size of rods to use",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La taille des bigoudis utilisés influence le diamètre de la boucle obtenue.",
      "en": "The size of the rods used affects the diameter of the resulting curl.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi respecter précisément le temps de pose d'une solution de permanente?",
      "en": "Why precisely follow a perm solution's processing time?",
      "choices": [
       {
        "fr": "Pour éviter un résultat trop faible ou un dommage excessif au cheveu",
        "en": "To avoid a too-weak result or excessive hair damage",
        "correct": true
       },
       {
        "fr": "Parce que le temps de pose détermine la couleur finale",
        "en": "Because processing time determines the final colour",
        "correct": false
       },
       {
        "fr": "Pour respecter uniquement les instructions du fabricant sans autre raison",
        "en": "Only to follow the manufacturer's instructions with no other reason",
        "correct": false
       },
       {
        "fr": "Parce qu'un temps de pose plus long donne toujours un meilleur résultat",
        "en": "Because a longer processing time always gives a better result",
        "correct": false
       }
      ]
     },
     {
      "fr": "Que doit-on vérifier avant d'appliquer une permanente sur des cheveux déjà colorés?",
      "en": "What should be checked before applying a perm on already-coloured hair?",
      "choices": [
       {
        "fr": "La compatibilité chimique entre les traitements pour éviter d'endommager les cheveux",
        "en": "The chemical compatibility between treatments to avoid damaging the hair",
        "correct": true
       },
       {
        "fr": "Uniquement la teinte exacte de la coloration précédente",
        "en": "Only the exact shade of the previous colour",
        "correct": false
       },
       {
        "fr": "Le nombre de jours écoulés depuis le dernier shampooing",
        "en": "The number of days since the last shampoo",
        "correct": false
       },
       {
        "fr": "La marque du produit de coloration utilisé précédemment",
        "en": "The brand of colour product used previously",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Une permanente standard doit être neutralisée correctement pour fixer durablement la nouvelle forme.",
      "en": "A standard perm must be properly neutralized to durably set the new shape.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Une permanente ne prend pas bien sur certaines mèches malgré un temps de pose respecté. Quelle est une cause possible?",
      "en": "A perm doesn't take well on certain strands despite proper processing time. What is a possible cause?",
      "choices": [
       {
        "fr": "Une porosité inégale du cheveu ou un enroulement inadéquat des bigoudis",
        "en": "Uneven hair porosity or improper rod winding",
        "correct": true
       },
       {
        "fr": "Une température ambiante trop froide dans le salon",
        "en": "An ambient salon temperature that's too cold",
        "correct": false
       },
       {
        "fr": "L'utilisation d'un shampooing différent la semaine précédente",
        "en": "Using a different shampoo the week before",
        "correct": false
       },
       {
        "fr": "Le fait que la cliente ait les cheveux mouillés en entrant au salon",
        "en": "The fact that the client had wet hair when arriving at the salon",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi la permanente exige-t-elle une expertise technique particulièrement rigoureuse?",
      "en": "Why does perming require particularly rigorous technical expertise?",
      "choices": [
       {
        "fr": "Une erreur peut endommager durablement le cheveu ou donner un résultat insatisfaisant",
        "en": "An error can cause lasting hair damage or an unsatisfactory result",
        "correct": true
       },
       {
        "fr": "C'est le service le plus rapide à réaliser en salon",
        "en": "It's the fastest service to perform in a salon",
        "correct": false
       },
       {
        "fr": "Elle ne nécessite aucun produit chimique contrairement aux autres services",
        "en": "It requires no chemical product unlike other services",
        "correct": false
       },
       {
        "fr": "Elle est réservée exclusivement aux cheveux très courts",
        "en": "It is reserved exclusively for very short hair",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Un enroulement trop serré des bigoudis garantit toujours une boucle plus durable, peu importe l'état du cheveu.",
      "en": "Winding the rods too tightly always guarantees a more durable curl, regardless of the hair's condition.",
      "isTrue": false
     }
    ]
   }
  ]
 },
 {
  "id": "coif13",
  "order": 13,
  "code": "418138",
  "hours": 120,
  "title_fr": "Coloration",
  "title_en": "Hair Coloring",
  "icon": "🎨",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Quel est le rôle principal de la coloration en coiffure?",
      "en": "What is hair colouring's main role in hairdressing?",
      "choices": [
       {
        "fr": "Changer ou rehausser la couleur naturelle des cheveux",
        "en": "Changing or enhancing the hair's natural colour",
        "correct": true
       },
       {
        "fr": "Réparer les pointes fourchues",
        "en": "Repairing split ends",
        "correct": false
       },
       {
        "fr": "Créer une texture bouclée durable",
        "en": "Creating a lasting curly texture",
        "correct": false
       },
       {
        "fr": "Nettoyer en profondeur le cuir chevelu",
        "en": "Deep-cleansing the scalp",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi faire un test de sensibilité cutanée avant une coloration?",
      "en": "Why do a skin sensitivity test before a colour service?",
      "choices": [
       {
        "fr": "Pour vérifier l'absence de réaction allergique au produit",
        "en": "To check for the absence of an allergic reaction to the product",
        "correct": true
       },
       {
        "fr": "Pour déterminer la teinte finale exacte à obtenir",
        "en": "To determine the exact final shade to achieve",
        "correct": false
       },
       {
        "fr": "Pour calculer la quantité de produit à mélanger",
        "en": "To calculate the amount of product to mix",
        "correct": false
       },
       {
        "fr": "Pour vérifier la porosité générale du cheveu",
        "en": "To check the hair's overall porosity",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La roue chromatique aide à comprendre les relations entre les couleurs en coloration capillaire.",
      "en": "The colour wheel helps understand colour relationships in hair colouring.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi analyser la couleur naturelle et l'état du cheveu avant une coloration?",
      "en": "Why analyze natural hair colour and condition before a colour service?",
      "choices": [
       {
        "fr": "Pour choisir la formule et la technique appropriées et prévoir le résultat",
        "en": "To choose the appropriate formula and technique and predict the result",
        "correct": true
       },
       {
        "fr": "Parce que la couleur naturelle détermine automatiquement le prix du service",
        "en": "Because natural colour automatically determines the service price",
        "correct": false
       },
       {
        "fr": "Pour remplacer le besoin d'un test de sensibilité cutanée",
        "en": "To replace the need for a skin sensitivity test",
        "correct": false
       },
       {
        "fr": "Parce que tous les cheveux réagissent exactement de la même façon",
        "en": "Because all hair reacts exactly the same way",
        "correct": false
       }
      ]
     },
     {
      "fr": "Que doit-on vérifier régulièrement pendant le temps de pose d'une coloration?",
      "en": "What should be checked regularly during a colour's processing time?",
      "choices": [
       {
        "fr": "La progression de la couleur pour éviter un résultat trop clair ou trop foncé",
        "en": "The colour's progress to avoid a result that's too light or too dark",
        "correct": true
       },
       {
        "fr": "La température exacte de la pièce",
        "en": "The room's exact temperature",
        "correct": false
       },
       {
        "fr": "Le poids restant du produit dans le bol de mélange",
        "en": "The remaining weight of the product in the mixing bowl",
        "correct": false
       },
       {
        "fr": "L'heure précise du prochain rendez-vous",
        "en": "The exact time of the next appointment",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Les proportions recommandées par le fabricant sont de simples suggestions; un coiffeur expérimenté peut toujours les ignorer sans risque.",
      "en": "The manufacturer's recommended proportions are just suggestions; an experienced hairdresser can always safely ignore them.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Une coloration donne un résultat inattendu (reflet indésirable) malgré une formule bien calculée. Quelle est la bonne pratique?",
      "en": "A colour service gives an unexpected result (unwanted tone) despite a well-calculated formula. What is the correct practice?",
      "choices": [
       {
        "fr": "Analyser la cause (sous-jacent naturel, produits antérieurs) et corriger avec une formule adaptée",
        "en": "Analyzing the cause (natural underlying tone, previous products) and correcting with an adapted formula",
        "correct": true
       },
       {
        "fr": "Répéter exactement la même formule une seconde fois",
        "en": "Repeating exactly the same formula a second time",
        "correct": false
       },
       {
        "fr": "Utiliser un décapant sur l'ensemble de la chevelure sans diagnostic",
        "en": "Using a colour stripper on the whole head with no diagnosis",
        "correct": false
       },
       {
        "fr": "Attendre plusieurs semaines pour voir si le reflet disparaît seul",
        "en": "Waiting several weeks to see if the tone fades on its own",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi la coloration exige-t-elle une compréhension théorique approfondie de la colorimétrie?",
      "en": "Why does hair colouring require an in-depth theoretical understanding of colour theory?",
      "choices": [
       {
        "fr": "Pour prévoir avec précision les résultats et corriger les problèmes de couleur",
        "en": "To accurately predict results and correct colour problems",
        "correct": true
       },
       {
        "fr": "Parce que c'est le service le moins technique du programme",
        "en": "Because it's the least technical service in the program",
        "correct": false
       },
       {
        "fr": "Parce que la théorie remplace la nécessité d'un test de mèche",
        "en": "Because theory replaces the need for a strand test",
        "correct": false
       },
       {
        "fr": "Parce que tous les clients demandent exactement la même teinte",
        "en": "Because all clients request exactly the same shade",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Deux couleurs opposées sur la roue chromatique amplifient toujours un reflet indésirable au lieu de le neutraliser.",
      "en": "Two opposite colours on the colour wheel always intensify an unwanted tone instead of neutralizing it.",
      "isTrue": false
     }
    ]
   }
  ]
 },
 {
  "id": "coif14",
  "order": 14,
  "code": "418154",
  "hours": 60,
  "title_fr": "Teinte pastel",
  "title_en": "Pastel Tinting",
  "icon": "🌸",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Qu'est-ce qu'une teinte pastel en coiffure?",
      "en": "What is pastel tinting in hairdressing?",
      "choices": [
       {
        "fr": "Une coloration aux tons doux et clairs comme le rose ou le lavande",
        "en": "A colour service with soft, light tones like pink or lavender",
        "correct": true
       },
       {
        "fr": "Une coloration foncée permanente qui couvre les cheveux blancs",
        "en": "A permanent dark colour service that covers white hair",
        "correct": false
       },
       {
        "fr": "Une technique de dégradé de longueur",
        "en": "A length-layering technique",
        "correct": false
       },
       {
        "fr": "Un traitement anti-frisottis",
        "en": "An anti-frizz treatment",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi une base de cheveu très claire (ou décolorée) est-elle souvent nécessaire pour une teinte pastel réussie?",
      "en": "Why is a very light (or bleached) hair base often necessary for a successful pastel tint?",
      "choices": [
       {
        "fr": "Les tons pastel nécessitent une base claire pour bien ressortir",
        "en": "Pastel tones need a light base to show up well",
        "correct": true
       },
       {
        "fr": "Parce que les cheveux foncés ne peuvent jamais être coiffés",
        "en": "Because dark hair can never be styled",
        "correct": false
       },
       {
        "fr": "Parce que la décoloration remplace le besoin d'un shampooing",
        "en": "Because lightening replaces the need for a shampoo",
        "correct": false
       },
       {
        "fr": "Parce que les teintes pastel durcissent le cheveu de façon permanente",
        "en": "Because pastel tints permanently harden the hair",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Les teintes pastel s'estompent généralement plus rapidement que les colorations permanentes classiques.",
      "en": "Pastel tints generally fade faster than classic permanent colour services.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi informer le client de l'entretien nécessaire pour maintenir une teinte pastel?",
      "en": "Why inform clients about the maintenance needed to keep a pastel tint looking good?",
      "choices": [
       {
        "fr": "Pour gérer ses attentes concernant la durabilité de la couleur",
        "en": "To manage their expectations about the colour's durability",
        "correct": true
       },
       {
        "fr": "Parce que l'entretien remplace le besoin d'un shampooing normal",
        "en": "Because maintenance replaces the need for a normal shampoo",
        "correct": false
       },
       {
        "fr": "Parce que toutes les teintes pastel durent exactement six mois",
        "en": "Because all pastel tints last exactly six months",
        "correct": false
       },
       {
        "fr": "Pour éviter d'avoir à faire un test de sensibilité cutanée",
        "en": "To avoid having to do a skin sensitivity test",
        "correct": false
       }
      ]
     },
     {
      "fr": "Que doit-on vérifier avant d'appliquer une teinte pastel sur des cheveux déjà décolorés?",
      "en": "What should be checked before applying pastel tint on already-bleached hair?",
      "choices": [
       {
        "fr": "L'état et la porosité des cheveux pour éviter d'aggraver les dommages",
        "en": "The hair's condition and porosity to avoid worsening damage",
        "correct": true
       },
       {
        "fr": "Uniquement la teinte pastel exacte choisie par le client",
        "en": "Only the exact pastel shade chosen by the client",
        "correct": false
       },
       {
        "fr": "Le nombre de jours depuis la dernière décoloration uniquement",
        "en": "Only the number of days since the last lightening",
        "correct": false
       },
       {
        "fr": "La marque du shampooing utilisé à la maison",
        "en": "The brand of shampoo used at home",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Les produits pour teinte pastel nécessitent souvent un temps de pose spécifique différent des colorations classiques.",
      "en": "Pastel tint products often require a specific processing time different from classic colour services.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un client souhaite une teinte pastel vive mais ses cheveux ne sont pas assez décolorés. Quelle est la bonne pratique?",
      "en": "A client wants a vivid pastel tint but their hair isn't light enough. What is the correct practice?",
      "choices": [
       {
        "fr": "Expliquer les limites du résultat possible et proposer un plan de décoloration progressif si nécessaire",
        "en": "Explaining the limits of the possible result and offering a progressive lightening plan if necessary",
        "correct": true
       },
       {
        "fr": "Appliquer une double dose de teinte pastel pour intensifier le résultat",
        "en": "Applying a double dose of pastel tint to intensify the result",
        "correct": false
       },
       {
        "fr": "Mélanger la teinte pastel avec une coloration permanente foncée",
        "en": "Mixing the pastel tint with a dark permanent colour",
        "correct": false
       },
       {
        "fr": "Laisser poser le produit deux fois plus longtemps que prévu",
        "en": "Leaving the product on twice as long as planned",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi les teintes pastel sont-elles devenues une tendance populaire nécessitant une compétence spécialisée?",
      "en": "Why have pastel tints become a popular trend requiring specialized skill?",
      "choices": [
       {
        "fr": "La demande pour des looks colorés créatifs et personnalisés a augmenté",
        "en": "Demand for creative, personalized colourful looks has increased",
        "correct": true
       },
       {
        "fr": "Elles sont plus simples à réaliser que la coloration classique",
        "en": "They are simpler to perform than classic colouring",
        "correct": false
       },
       {
        "fr": "Elles ne nécessitent aucune préparation préalable du cheveu",
        "en": "They require no prior hair preparation",
        "correct": false
       },
       {
        "fr": "Elles conviennent uniquement aux cheveux naturellement blonds",
        "en": "They only suit naturally blonde hair",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Le niveau de clarté de la base n'a aucune influence sur le résultat final d'une teinte pastel.",
      "en": "The base's lightness level has no influence on the final result of a pastel tint.",
      "isTrue": false
     }
    ]
   }
  ]
 },
 {
  "id": "coif15",
  "order": 15,
  "code": "418166",
  "hours": 90,
  "title_fr": "Correction de couleur",
  "title_en": "Color Correction",
  "icon": "🔄",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Qu'est-ce que la correction de couleur en coiffure?",
      "en": "What is colour correction in hairdressing?",
      "choices": [
       {
        "fr": "Le processus visant à corriger un résultat de coloration indésirable",
        "en": "The process of fixing an undesirable colour result",
        "correct": true
       },
       {
        "fr": "Une technique pour ajouter du volume aux racines",
        "en": "A technique for adding volume at the roots",
        "correct": false
       },
       {
        "fr": "Un traitement contre les pointes fourchues",
        "en": "A treatment for split ends",
        "correct": false
       },
       {
        "fr": "Une méthode de coupe qui corrige l'asymétrie du visage",
        "en": "A cutting method that corrects facial asymmetry",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi analyser attentivement la couleur existante avant une correction?",
      "en": "Why carefully analyze the existing colour before a correction?",
      "choices": [
       {
        "fr": "Pour comprendre la cause du problème et choisir la bonne approche corrective",
        "en": "To understand the problem's cause and choose the right corrective approach",
        "correct": true
       },
       {
        "fr": "Pour déterminer le prix exact du service à facturer",
        "en": "To determine the exact price to charge for the service",
        "correct": false
       },
       {
        "fr": "Parce que l'analyse remplace le besoin d'un test de mèche",
        "en": "Because the analysis replaces the need for a strand test",
        "correct": false
       },
       {
        "fr": "Parce que toutes les corrections utilisent la même formule",
        "en": "Because all corrections use the same formula",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La correction de couleur est souvent un service plus complexe qu'une coloration standard.",
      "en": "Colour correction is often a more complex service than standard colouring.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi la roue chromatique est-elle un outil essentiel en correction de couleur?",
      "en": "Why is the colour wheel an essential tool in colour correction?",
      "choices": [
       {
        "fr": "Elle aide à identifier les tons complémentaires nécessaires pour neutraliser un problème",
        "en": "It helps identify the complementary tones needed to neutralize a problem",
        "correct": true
       },
       {
        "fr": "Elle détermine automatiquement le temps de pose nécessaire",
        "en": "It automatically determines the required processing time",
        "correct": false
       },
       {
        "fr": "Elle remplace le besoin d'un test de sensibilité cutanée",
        "en": "It replaces the need for a skin sensitivity test",
        "correct": false
       },
       {
        "fr": "Elle sert uniquement à choisir la marque de produit à utiliser",
        "en": "It only serves to choose which product brand to use",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi une correction de couleur peut-elle nécessiter plusieurs séances?",
      "en": "Why might colour correction require several sessions?",
      "choices": [
       {
        "fr": "Pour éviter d'endommager excessivement les cheveux en une seule fois",
        "en": "To avoid excessively damaging the hair all at once",
        "correct": true
       },
       {
        "fr": "Parce que le salon facture chaque étape séparément par principe",
        "en": "Because the salon bills each step separately on principle",
        "correct": false
       },
       {
        "fr": "Parce qu'une seule formule ne peut jamais couvrir toute la tête",
        "en": "Because a single formula can never cover the whole head",
        "correct": false
       },
       {
        "fr": "Parce que la loi exige un minimum de deux rendez-vous",
        "en": "Because the law requires a minimum of two appointments",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Le test de mèche n'est nécessaire que pour les colorations standards, jamais pour les corrections de couleur complexes.",
      "en": "A strand test is only necessary for standard colouring, never for complex colour corrections.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un client arrive avec une coloration très endommagée et une couleur inégale sur toute la tête. Quelle est la bonne pratique?",
      "en": "A client arrives with very damaged hair and uneven colour throughout. What is the correct practice?",
      "choices": [
       {
        "fr": "Évaluer honnêtement l'état des cheveux et proposer un plan de correction réaliste, possiblement sur plusieurs séances",
        "en": "Honestly assessing the hair's condition and proposing a realistic correction plan, possibly over several sessions",
        "correct": true
       },
       {
        "fr": "Appliquer immédiatement un décapant puissant sur l'ensemble de la chevelure",
        "en": "Immediately applying a strong colour stripper to the whole head",
        "correct": false
       },
       {
        "fr": "Répéter la coloration initiale pour uniformiser plus rapidement",
        "en": "Repeating the initial colour service to even things out faster",
        "correct": false
       },
       {
        "fr": "Couper tous les cheveux endommagés avant toute analyse",
        "en": "Cutting off all damaged hair before any analysis",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi la correction de couleur est-elle considérée comme une compétence avancée en coiffure?",
      "en": "Why is colour correction considered an advanced skill in hairdressing?",
      "choices": [
       {
        "fr": "Elle exige une expertise approfondie en théorie des couleurs et en diagnostic capillaire",
        "en": "It requires in-depth expertise in colour theory and hair diagnosis",
        "correct": true
       },
       {
        "fr": "Elle est plus rapide à réaliser qu'une coloration standard",
        "en": "It is faster to perform than a standard colour service",
        "correct": false
       },
       {
        "fr": "Elle ne nécessite aucun produit chimique particulier",
        "en": "It requires no particular chemical product",
        "correct": false
       },
       {
        "fr": "Elle est offerte uniquement aux nouveaux clients du salon",
        "en": "It is only offered to new salon clients",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Une correction de couleur consiste toujours à appliquer directement la teinte finale, sans jamais retirer de pigment au préalable.",
      "en": "A colour correction always involves applying the final shade directly, without ever first removing pigment.",
      "isTrue": false
     }
    ]
   }
  ]
 },
 {
  "id": "coif16",
  "order": 16,
  "code": "418173",
  "hours": 45,
  "title_fr": "Vente de produits et services",
  "title_en": "Product and Service Sales",
  "icon": "💰",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Pourquoi recommander des produits capillaires adaptés à un client?",
      "en": "Why recommend hair products suited to a client?",
      "choices": [
       {
        "fr": "Pour l'aider à entretenir le résultat obtenu en salon",
        "en": "To help them maintain the result achieved at the salon",
        "correct": true
       },
       {
        "fr": "Pour atteindre un quota de vente fixé par la loi",
        "en": "To meet a sales quota set by law",
        "correct": false
       },
       {
        "fr": "Parce que tous les clients doivent acheter le même produit",
        "en": "Because all clients must buy the same product",
        "correct": false
       },
       {
        "fr": "Pour remplacer le besoin d'une consultation initiale",
        "en": "To replace the need for an initial consultation",
        "correct": false
       }
      ]
     },
     {
      "fr": "Quelle est une bonne pratique de vente en salon de coiffure?",
      "en": "What is a good sales practice in a hair salon?",
      "choices": [
       {
        "fr": "Expliquer honnêtement les bénéfices d'un produit selon les besoins du client",
        "en": "Honestly explaining a product's benefits based on the client's needs",
        "correct": true
       },
       {
        "fr": "Recommander systématiquement le produit le plus cher disponible",
        "en": "Systematically recommending the most expensive product available",
        "correct": false
       },
       {
        "fr": "Vendre un produit différent à chaque visite peu importe le besoin",
        "en": "Selling a different product at each visit regardless of need",
        "correct": false
       },
       {
        "fr": "Attendre que le client demande un produit avant d'en parler",
        "en": "Waiting for the client to ask about a product before mentioning one",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La vente de produits peut représenter une source de revenus complémentaire importante pour un salon.",
      "en": "Product sales can represent an important supplementary revenue source for a salon.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi connaître en profondeur les produits vendus en salon?",
      "en": "Why have in-depth knowledge of the products sold in the salon?",
      "choices": [
       {
        "fr": "Pour conseiller le client de façon crédible et précise",
        "en": "To advise the client credibly and accurately",
        "correct": true
       },
       {
        "fr": "Parce que la loi exige une certification pour chaque produit vendu",
        "en": "Because the law requires certification for each product sold",
        "correct": false
       },
       {
        "fr": "Pour fixer soi-même le prix de vente de chaque produit",
        "en": "To set the selling price of each product oneself",
        "correct": false
       },
       {
        "fr": "Parce que les fabricants exigent un test écrit chaque année",
        "en": "Because manufacturers require a written test every year",
        "correct": false
       }
      ]
     },
     {
      "fr": "Que faire si un client hésite à acheter un produit recommandé?",
      "en": "What should be done if a client hesitates to buy a recommended product?",
      "choices": [
       {
        "fr": "Respecter sa décision sans insister excessivement",
        "en": "Respecting their decision without insisting excessively",
        "correct": true
       },
       {
        "fr": "Offrir automatiquement une réduction pour conclure la vente",
        "en": "Automatically offering a discount to close the sale",
        "correct": false
       },
       {
        "fr": "Proposer le même produit à chaque rendez-vous futur",
        "en": "Offering the same product at every future appointment",
        "correct": false
       },
       {
        "fr": "Retirer le service recommandé de la facture en guise de compromis",
        "en": "Removing the recommended service from the invoice as a compromise",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La vente-conseil en salon repose sur une relation de confiance avec la clientèle.",
      "en": "Advisory selling in a salon relies on a trusting relationship with clients.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un client demande un conseil sur un produit qui ne correspond pas vraiment à ses besoins. Quelle est la bonne pratique?",
      "en": "A client asks for advice on a product that doesn't really suit their needs. What is the correct practice?",
      "choices": [
       {
        "fr": "Recommander honnêtement un produit plus adapté, même si le prix diffère",
        "en": "Honestly recommending a more suitable product, even if the price differs",
        "correct": true
       },
       {
        "fr": "Vendre le produit demandé sans mentionner d'alternative",
        "en": "Selling the requested product with no mention of an alternative",
        "correct": false
       },
       {
        "fr": "Éviter de répondre pour ne pas influencer sa décision",
        "en": "Avoiding answering so as not to influence their decision",
        "correct": false
       },
       {
        "fr": "Recommander le produit le plus vendu du salon peu importe le besoin",
        "en": "Recommending the salon's best-selling product regardless of need",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi l'intégrité dans la vente-conseil est-elle particulièrement importante à long terme pour un salon?",
      "en": "Why is integrity in advisory selling particularly important for a salon in the long term?",
      "choices": [
       {
        "fr": "Elle bâtit la confiance et la fidélité de la clientèle sur la durée",
        "en": "It builds client trust and loyalty over time",
        "correct": true
       },
       {
        "fr": "Elle est exigée par un règlement gouvernemental spécifique",
        "en": "It is required by a specific government regulation",
        "correct": false
       },
       {
        "fr": "Elle garantit une augmentation immédiate des ventes",
        "en": "It guarantees an immediate increase in sales",
        "correct": false
       },
       {
        "fr": "Elle remplace la nécessité de bien connaître les produits",
        "en": "It replaces the need to know the products well",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Une bonne pratique de vente-conseil privilégie toujours les objectifs commerciaux du salon, même au détriment des intérêts du client.",
      "en": "Good advisory selling always prioritizes the salon's business objectives, even at the expense of the client's interests.",
      "isTrue": false
     }
    ]
   }
  ]
 },
 {
  "id": "coif17",
  "order": 17,
  "code": "418185",
  "hours": 75,
  "title_fr": "Coupe stylisée",
  "title_en": "Stylized Haircut",
  "icon": "💇",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Qu'est-ce qu'une coupe stylisée par rapport à une coupe standard?",
      "en": "What is a stylized haircut compared to a standard haircut?",
      "choices": [
       {
        "fr": "Une coupe plus créative et personnalisée, souvent avec des techniques avancées",
        "en": "A more creative and personalized haircut, often using advanced techniques",
        "correct": true
       },
       {
        "fr": "Une coupe qui ne peut être réalisée que sur cheveux longs",
        "en": "A haircut that can only be done on long hair",
        "correct": false
       },
       {
        "fr": "Une coupe qui remplace toujours un service de coloration",
        "en": "A haircut that always replaces a colour service",
        "correct": false
       },
       {
        "fr": "Une coupe strictement identique pour tous les visages",
        "en": "A haircut strictly identical for all faces",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi s'inspirer des tendances actuelles pour une coupe stylisée?",
      "en": "Why draw inspiration from current trends for a stylized haircut?",
      "choices": [
       {
        "fr": "Pour offrir des looks modernes et créatifs à la clientèle",
        "en": "To offer modern, creative looks to clients",
        "correct": true
       },
       {
        "fr": "Parce que les tendances déterminent le prix du service",
        "en": "Because trends determine the service's price",
        "correct": false
       },
       {
        "fr": "Pour remplacer l'analyse morphologique du client",
        "en": "To replace the client's morphological analysis",
        "correct": false
       },
       {
        "fr": "Parce qu'une seule tendance convient toujours à tous les clients",
        "en": "Because a single trend always suits every client",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Une coupe stylisée peut combiner plusieurs techniques de coupe pour créer un effet unique.",
      "en": "A stylized haircut can combine several cutting techniques to create a unique effect.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi une coupe stylisée exige-t-elle une meilleure maîtrise technique qu'une coupe standard?",
      "en": "Why does a stylized haircut require better technical mastery than a standard haircut?",
      "choices": [
       {
        "fr": "Elle combine souvent plusieurs techniques complexes qui doivent s'harmoniser",
        "en": "It often combines several complex techniques that must work together harmoniously",
        "correct": true
       },
       {
        "fr": "Elle nécessite toujours plus de temps que n'importe quel autre service",
        "en": "It always requires more time than any other service",
        "correct": false
       },
       {
        "fr": "Elle est offerte uniquement aux coiffeurs les plus expérimentés du salon",
        "en": "It is only offered by the salon's most experienced hairdressers",
        "correct": false
       },
       {
        "fr": "Elle utilise exclusivement des outils électroniques spécialisés",
        "en": "It exclusively uses specialized electronic tools",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi discuter en détail avec le client avant une coupe stylisée complexe?",
      "en": "Why discuss in detail with the client before a complex stylized haircut?",
      "choices": [
       {
        "fr": "Pour s'assurer d'une compréhension commune du résultat visé et de l'entretien requis",
        "en": "To ensure a shared understanding of the desired result and required maintenance",
        "correct": true
       },
       {
        "fr": "Parce que la discussion remplace le besoin d'examiner les cheveux",
        "en": "Because the discussion replaces the need to examine the hair",
        "correct": false
       },
       {
        "fr": "Pour déterminer automatiquement le prix final du service",
        "en": "To automatically determine the service's final price",
        "correct": false
       },
       {
        "fr": "Parce que tous les clients ont exactement les mêmes attentes",
        "en": "Because all clients have exactly the same expectations",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Une coupe stylisée doit souvent être adaptée au mode de vie et à l'entretien souhaité par le client.",
      "en": "A stylized haircut often needs to be adapted to the client's lifestyle and desired maintenance level.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un client souhaite une coupe stylisée très complexe malgré une texture de cheveux difficile. Quelle est une bonne pratique?",
      "en": "A client wants a very complex stylized haircut despite challenging hair texture. What is a good practice?",
      "choices": [
       {
        "fr": "Adapter la technique à la texture réelle tout en préservant l'esprit du design souhaité",
        "en": "Adapting the technique to the actual texture while preserving the spirit of the desired design",
        "correct": true
       },
       {
        "fr": "Réaliser exactement le design demandé sans tenir compte de la texture",
        "en": "Performing exactly the requested design with no regard for texture",
        "correct": false
       },
       {
        "fr": "Recommander de lisser chimiquement les cheveux avant chaque coupe future",
        "en": "Recommending chemically straightening the hair before every future cut",
        "correct": false
       },
       {
        "fr": "Refuser catégoriquement toute coupe stylisée sur ce type de texture",
        "en": "Categorically refusing any stylized cut on this type of texture",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi la coupe stylisée est-elle une compétence particulièrement valorisée dans l'industrie de la coiffure?",
      "en": "Why is stylized cutting a particularly valued skill in the hairdressing industry?",
      "choices": [
       {
        "fr": "Elle permet de se démarquer par la créativité et de bâtir une réputation professionnelle",
        "en": "It allows differentiation through creativity and building a professional reputation",
        "correct": true
       },
       {
        "fr": "Elle est la seule compétence exigée pour obtenir un permis de salon",
        "en": "It is the only skill required to obtain a salon permit",
        "correct": false
       },
       {
        "fr": "Elle demande moins de temps de formation que la coupe standard",
        "en": "It requires less training time than the standard haircut",
        "correct": false
       },
       {
        "fr": "Elle est systématiquement moins coûteuse pour le client",
        "en": "It is systematically less expensive for the client",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Toute coupe stylisée complexe garantit automatiquement un résultat facile à entretenir au quotidien.",
      "en": "Any complex stylized haircut automatically guarantees a result that's easy to maintain daily.",
      "isTrue": false
     }
    ]
   }
  ]
 },
 {
  "id": "coif18",
  "order": 18,
  "code": "418195",
  "hours": 75,
  "title_fr": "Permanente stylisée",
  "title_en": "Stylized Perm",
  "icon": "✨",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Qu'est-ce qu'une permanente stylisée par rapport à une permanente standard?",
      "en": "What is a stylized perm compared to a standard perm?",
      "choices": [
       {
        "fr": "Une technique de permanente plus créative, souvent avec des enroulements variés",
        "en": "A more creative perm technique, often with varied wrapping patterns",
        "correct": true
       },
       {
        "fr": "Une permanente qui ne peut être faite que sur cheveux très courts",
        "en": "A perm that can only be done on very short hair",
        "correct": false
       },
       {
        "fr": "Une permanente qui remplace toujours la coloration",
        "en": "A perm that always replaces colouring",
        "correct": false
       },
       {
        "fr": "Une permanente qui utilise uniquement des produits naturels",
        "en": "A perm that only uses natural products",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi utiliser différentes tailles et formes de bigoudis pour une permanente stylisée?",
      "en": "Why use different rod sizes and shapes for a stylized perm?",
      "choices": [
       {
        "fr": "Pour créer des textures et motifs de boucles variés et personnalisés",
        "en": "To create varied and personalized curl textures and patterns",
        "correct": true
       },
       {
        "fr": "Parce qu'un seul type de bigoudi est interdit par la réglementation",
        "en": "Because a single rod type is prohibited by regulation",
        "correct": false
       },
       {
        "fr": "Pour réduire le temps de pose du produit chimique",
        "en": "To reduce the chemical product's processing time",
        "correct": false
       },
       {
        "fr": "Parce que la taille des bigoudis détermine la couleur finale",
        "en": "Because rod size determines the final colour",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Une permanente stylisée peut combiner plusieurs techniques d'enroulement dans une même chevelure.",
      "en": "A stylized perm can combine several wrapping techniques within the same head of hair.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi la planification est-elle essentielle avant une permanente stylisée complexe?",
      "en": "Why is planning essential before a complex stylized perm?",
      "choices": [
       {
        "fr": "Pour déterminer le motif d'enroulement optimal selon le résultat souhaité",
        "en": "To determine the optimal wrapping pattern based on the desired result",
        "correct": true
       },
       {
        "fr": "Parce que la planification remplace le besoin d'un test de mèche",
        "en": "Because planning replaces the need for a strand test",
        "correct": false
       },
       {
        "fr": "Pour déterminer automatiquement le prix final du service",
        "en": "To automatically determine the service's final price",
        "correct": false
       },
       {
        "fr": "Parce qu'un seul motif d'enroulement existe en réalité",
        "en": "Because only one wrapping pattern actually exists",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi tester la solution de permanente sur une mèche avant un enroulement stylisé complexe?",
      "en": "Why test the perm solution on a strand before a complex stylized wrap?",
      "choices": [
       {
        "fr": "Pour vérifier le temps de développement approprié et éviter les dommages",
        "en": "To check the appropriate processing time and avoid damage",
        "correct": true
       },
       {
        "fr": "Parce que le test détermine la forme finale des boucles",
        "en": "Because the test determines the curls' final shape",
        "correct": false
       },
       {
        "fr": "Pour économiser du produit chimique lors du service complet",
        "en": "To save chemical product during the full service",
        "correct": false
       },
       {
        "fr": "Parce que la loi exige un test écrit signé par le client",
        "en": "Because the law requires a written test signed by the client",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Une permanente stylisée exige souvent plus de temps qu'une permanente standard en raison de sa complexité.",
      "en": "A stylized perm often requires more time than a standard perm due to its complexity.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un client souhaite une permanente stylisée avec un motif de boucles très spécifique. Quelle est une bonne pratique?",
      "en": "A client wants a stylized perm with a very specific curl pattern. What is a good practice?",
      "choices": [
       {
        "fr": "Planifier soigneusement le motif d'enroulement et discuter des attentes réalistes avec le client",
        "en": "Carefully planning the wrapping pattern and discussing realistic expectations with the client",
        "correct": true
       },
       {
        "fr": "Utiliser le motif d'enroulement le plus rapide à réaliser peu importe la demande",
        "en": "Using the fastest wrapping pattern to perform regardless of the request",
        "correct": false
       },
       {
        "fr": "Appliquer une solution de permanente plus concentrée pour garantir le résultat",
        "en": "Applying a more concentrated perm solution to guarantee the result",
        "correct": false
       },
       {
        "fr": "Combiner deux produits de permanente différents pour plus d'effet",
        "en": "Combining two different perm products for more effect",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi la permanente stylisée est-elle considérée comme une compétence technique avancée?",
      "en": "Why is the stylized perm considered an advanced technical skill?",
      "choices": [
       {
        "fr": "Elle exige une maîtrise fine de multiples techniques d'enroulement et de dosage chimique",
        "en": "It requires refined mastery of multiple wrapping techniques and chemical dosing",
        "correct": true
       },
       {
        "fr": "Elle est offerte uniquement dans les grands salons urbains",
        "en": "It is only offered in large urban salons",
        "correct": false
       },
       {
        "fr": "Elle ne nécessite aucun produit chimique contrairement à la permanente standard",
        "en": "It requires no chemical product unlike the standard perm",
        "correct": false
       },
       {
        "fr": "Elle est toujours plus rapide à réaliser qu'une permanente standard",
        "en": "It is always faster to perform than a standard perm",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Combiner plusieurs tailles de bigoudis dans un même enroulement produit toujours un résultat incohérent à éviter.",
      "en": "Combining several rod sizes within the same wrap always produces an inconsistent result to avoid.",
      "isTrue": false
     }
    ]
   }
  ]
 },
 {
  "id": "coif19",
  "order": 19,
  "code": "418208",
  "hours": 120,
  "title_fr": "Coloration créative",
  "title_en": "Creative Coloring",
  "icon": "🌈",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Qu'est-ce que la coloration créative en coiffure?",
      "en": "What is creative colouring in hairdressing?",
      "choices": [
       {
        "fr": "Des techniques de coloration artistiques comme le balayage, l'ombré ou les mèches multicolores",
        "en": "Artistic colouring techniques like balayage, ombré or multicolour highlights",
        "correct": true
       },
       {
        "fr": "Une coloration obligatoirement uniforme sur toute la chevelure",
        "en": "A colour service that must always be uniform throughout the hair",
        "correct": false
       },
       {
        "fr": "Une technique réservée uniquement aux cheveux courts",
        "en": "A technique reserved only for short hair",
        "correct": false
       },
       {
        "fr": "Un traitement hydratant sans pigment",
        "en": "A hydrating treatment with no pigment",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi la coloration créative exige-t-elle une bonne compréhension de la théorie des couleurs?",
      "en": "Why does creative colouring require a good understanding of colour theory?",
      "choices": [
       {
        "fr": "Pour créer des effets harmonieux et prévisibles",
        "en": "To create harmonious and predictable effects",
        "correct": true
       },
       {
        "fr": "Parce que la théorie remplace le besoin de décolorer les cheveux",
        "en": "Because theory replaces the need to lighten the hair",
        "correct": false
       },
       {
        "fr": "Parce qu'une seule combinaison de couleurs existe en pratique",
        "en": "Because only one colour combination exists in practice",
        "correct": false
       },
       {
        "fr": "Pour déterminer automatiquement le prix du service",
        "en": "To automatically determine the service's price",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Le balayage est une technique de coloration créative qui donne un effet naturel de dégradé.",
      "en": "Balayage is a creative colouring technique that gives a natural gradient effect.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi certaines techniques de coloration créative nécessitent-elles une décoloration préalable?",
      "en": "Why do some creative colouring techniques require prior lightening?",
      "choices": [
       {
        "fr": "Pour permettre aux tons créatifs vifs de bien ressortir sur une base claire",
        "en": "To allow vivid creative tones to show up well on a light base",
        "correct": true
       },
       {
        "fr": "Parce que la décoloration remplace le besoin d'un test de sensibilité",
        "en": "Because lightening replaces the need for a sensitivity test",
        "correct": false
       },
       {
        "fr": "Parce que les cheveux foncés ne peuvent jamais recevoir de couleur",
        "en": "Because dark hair can never receive colour",
        "correct": false
       },
       {
        "fr": "Pour réduire le temps total du service",
        "en": "To reduce the total service time",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi planifier soigneusement le placement des mèches en coloration créative?",
      "en": "Why carefully plan highlight placement in creative colouring?",
      "choices": [
       {
        "fr": "Pour obtenir un effet harmonieux qui met en valeur la coupe et le mouvement des cheveux",
        "en": "To achieve a harmonious effect that enhances the cut and movement of the hair",
        "correct": true
       },
       {
        "fr": "Parce que le placement détermine uniquement le prix final",
        "en": "Because placement only determines the final price",
        "correct": false
       },
       {
        "fr": "Parce qu'un seul motif de placement est techniquement possible",
        "en": "Because only one placement pattern is technically possible",
        "correct": false
       },
       {
        "fr": "Pour réduire la quantité totale de produit utilisé",
        "en": "To reduce the total amount of product used",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La coloration créative produit toujours des résultats identiques à une coloration uniforme classique.",
      "en": "Creative colouring always produces results identical to classic uniform colouring.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un client souhaite un effet de coloration créative complexe combinant plusieurs techniques. Quelle est une bonne pratique?",
      "en": "A client wants a complex creative colour effect combining several techniques. What is a good practice?",
      "choices": [
       {
        "fr": "Planifier méthodiquement l'ordre des techniques et vérifier la compatibilité des produits utilisés",
        "en": "Methodically planning the order of techniques and checking the compatibility of the products used",
        "correct": true
       },
       {
        "fr": "Appliquer toutes les techniques en même temps pour gagner du temps",
        "en": "Applying all techniques at once to save time",
        "correct": false
       },
       {
        "fr": "Utiliser la technique la plus rapide peu importe le résultat visé",
        "en": "Using the fastest technique regardless of the intended result",
        "correct": false
       },
       {
        "fr": "Mélanger tous les produits de coloration disponibles dans un seul bol",
        "en": "Mixing all available colour products into a single bowl",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi la coloration créative est-elle devenue une compétence particulièrement recherchée dans l'industrie?",
      "en": "Why has creative colouring become a particularly sought-after skill in the industry?",
      "choices": [
       {
        "fr": "La demande pour des looks personnalisés et artistiques a considérablement augmenté",
        "en": "Demand for personalized and artistic looks has significantly increased",
        "correct": true
       },
       {
        "fr": "Elle est moins coûteuse à réaliser que la coloration classique",
        "en": "It is less costly to perform than classic colouring",
        "correct": false
       },
       {
        "fr": "Elle ne nécessite aucune décoloration préalable dans tous les cas",
        "en": "It requires no prior lightening in all cases",
        "correct": false
       },
       {
        "fr": "Elle remplace complètement la nécessité de la coupe stylisée",
        "en": "It completely replaces the need for stylized cutting",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La planification du placement des couleurs n'a aucun lien avec le nombre de retouches nécessaires à long terme.",
      "en": "Colour placement planning has no connection to the number of touch-ups needed in the long run.",
      "isTrue": false
     }
    ]
   }
  ]
 },
 {
  "id": "coif20",
  "order": 20,
  "code": "418217",
  "hours": 105,
  "title_fr": "Coiffure personnalisée",
  "title_en": "Personalized Hairstyling",
  "icon": "👑",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Qu'est-ce que la coiffure personnalisée?",
      "en": "What is personalized hairstyling?",
      "choices": [
       {
        "fr": "Un service qui combine plusieurs compétences pour créer un look sur mesure pour le client",
        "en": "A service that combines several skills to create a custom look for the client",
        "correct": true
       },
       {
        "fr": "Un service réservé uniquement aux mariages",
        "en": "A service reserved only for weddings",
        "correct": false
       },
       {
        "fr": "Une technique qui remplace toujours la coupe de cheveux",
        "en": "A technique that always replaces the haircut",
        "correct": false
       },
       {
        "fr": "Un traitement capillaire de longue durée",
        "en": "A long-lasting hair treatment",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi la coiffure personnalisée est-elle souvent le service final d'un programme de formation en coiffure?",
      "en": "Why is personalized hairstyling often the final service in a hairdressing training program?",
      "choices": [
       {
        "fr": "Elle combine et synthétise plusieurs compétences acquises tout au long du programme",
        "en": "It combines and synthesizes several skills acquired throughout the program",
        "correct": true
       },
       {
        "fr": "Elle est le service le plus simple à maîtriser du programme",
        "en": "It's the simplest service to master in the program",
        "correct": false
       },
       {
        "fr": "Elle ne nécessite aucune des compétences enseignées précédemment",
        "en": "It requires none of the previously taught skills",
        "correct": false
       },
       {
        "fr": "Elle est offerte uniquement dans certains salons spécialisés",
        "en": "It is only offered in certain specialized salons",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La coiffure personnalisée peut inclure des occasions spéciales comme un mariage ou un événement.",
      "en": "Personalized hairstyling can include special occasions like a wedding or event.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi une consultation approfondie est-elle particulièrement importante pour une coiffure personnalisée?",
      "en": "Why is an in-depth consultation particularly important for personalized hairstyling?",
      "choices": [
       {
        "fr": "Pour bien cerner l'occasion, le style souhaité et les contraintes du client",
        "en": "To fully understand the occasion, desired style and the client's constraints",
        "correct": true
       },
       {
        "fr": "Parce que la consultation remplace le besoin d'examiner les cheveux",
        "en": "Because the consultation replaces the need to examine the hair",
        "correct": false
       },
       {
        "fr": "Pour déterminer automatiquement le prix final du service",
        "en": "To automatically determine the service's final price",
        "correct": false
       },
       {
        "fr": "Parce que tous les événements exigent exactement le même style",
        "en": "Because all events require exactly the same style",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi combiner plusieurs techniques (mise en forme, accessoires, texture) dans une coiffure personnalisée?",
      "en": "Why combine several techniques (styling, accessories, texture) in personalized hairstyling?",
      "choices": [
       {
        "fr": "Pour créer un résultat unique et adapté à l'occasion et à la personnalité du client",
        "en": "To create a unique result suited to the occasion and the client's personality",
        "correct": true
       },
       {
        "fr": "Parce qu'une seule technique est légalement interdite en salon",
        "en": "Because a single technique is legally prohibited in salons",
        "correct": false
       },
       {
        "fr": "Pour réduire le temps total du service",
        "en": "To reduce the total service time",
        "correct": false
       },
       {
        "fr": "Parce que cela élimine le besoin d'une consultation préalable",
        "en": "Because it eliminates the need for a prior consultation",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La coiffure personnalisée exige souvent une bonne gestion du temps pour respecter l'horaire d'un événement.",
      "en": "Personalized hairstyling often requires good time management to meet an event's schedule.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un client a un événement important et souhaite une coiffure très élaborée avec un délai serré. Quelle est une bonne pratique?",
      "en": "A client has an important event and wants an elaborate hairstyle with a tight deadline. What is a good practice?",
      "choices": [
       {
        "fr": "Planifier soigneusement chaque étape et prioriser les éléments essentiels du design",
        "en": "Carefully planning each step and prioritizing the design's essential elements",
        "correct": true
       },
       {
        "fr": "Simplifier le design sans en discuter avec le client au préalable",
        "en": "Simplifying the design with no prior discussion with the client",
        "correct": false
       },
       {
        "fr": "Reporter l'ensemble du service à une date ultérieure",
        "en": "Postponing the whole service to a later date",
        "correct": false
       },
       {
        "fr": "Réaliser uniquement une partie de la coiffure demandée sans le mentionner",
        "en": "Only performing part of the requested hairstyle without mentioning it",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi la coiffure personnalisée représente-t-elle l'aboutissement de la formation en coiffure?",
      "en": "Why does personalized hairstyling represent the culmination of hairdressing training?",
      "choices": [
       {
        "fr": "Elle exige la maîtrise combinée de toutes les compétences techniques et relationnelles du programme",
        "en": "It requires the combined mastery of all the program's technical and interpersonal skills",
        "correct": true
       },
       {
        "fr": "Elle est le seul service qui ne nécessite aucune pratique préalable",
        "en": "It's the only service that requires no prior practice",
        "correct": false
       },
       {
        "fr": "Elle est plus rapide à réaliser que tous les autres services du programme",
        "en": "It is faster to perform than all other services in the program",
        "correct": false
       },
       {
        "fr": "Elle remplace la nécessité de maîtriser la coupe ou la coloration",
        "en": "It replaces the need to master cutting or colouring",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La coiffure personnalisée n'utilise jamais de techniques apprises dans les modules antérieurs; elle repose sur des méthodes complètement distinctes.",
      "en": "Personalized hairstyling never uses techniques learned in earlier modules; it relies on completely separate methods.",
      "isTrue": false
     }
    ]
   }
  ]
 },
 {
  "id": "coif21",
  "order": 21,
  "code": "418227",
  "hours": 105,
  "title_fr": "Stage",
  "title_en": "Internship",
  "icon": "📋",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Quel est le principal objectif du stage en fin de programme?",
      "en": "What is the main goal of the end-of-program internship?",
      "choices": [
       {
        "fr": "Mettre en pratique les compétences acquises dans un contexte réel de travail",
        "en": "Putting acquired skills into practice in a real work context",
        "correct": true
       },
       {
        "fr": "Obtenir un salaire équivalent à celui d'un coiffeur expérimenté",
        "en": "Earning a salary equivalent to that of an experienced hairdresser",
        "correct": false
       },
       {
        "fr": "Remplacer complètement l'examen final du programme",
        "en": "Completely replacing the program's final exam",
        "correct": false
       },
       {
        "fr": "Choisir définitivement le salon où l'élève travaillera toute sa carrière",
        "en": "Definitively choosing the salon where the student will work for their entire career",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi le stage est-il important pour la transition vers le marché du travail?",
      "en": "Why is the internship important for the transition into the job market?",
      "choices": [
       {
        "fr": "Il permet d'appliquer les compétences dans un environnement professionnel réel",
        "en": "It allows applying skills in a real professional environment",
        "correct": true
       },
       {
        "fr": "Il garantit automatiquement un emploi permanent après la formation",
        "en": "It automatically guarantees permanent employment after training",
        "correct": false
       },
       {
        "fr": "Il remplace la nécessité d'obtenir le diplôme final",
        "en": "It replaces the need to obtain the final diploma",
        "correct": false
       },
       {
        "fr": "Il est optionnel et sans lien avec la suite de la carrière",
        "en": "It is optional and unrelated to the rest of one's career",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Le stage permet souvent aux élèves de développer un réseau de contacts professionnels.",
      "en": "The internship often allows students to develop a professional network.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi respecter les politiques et procédures du salon d'accueil pendant un stage?",
      "en": "Why follow the host salon's policies and procedures during an internship?",
      "choices": [
       {
        "fr": "Pour démontrer son professionnalisme et faciliter son intégration",
        "en": "To demonstrate professionalism and facilitate integration",
        "correct": true
       },
       {
        "fr": "Parce que le salon d'accueil devient automatiquement l'employeur permanent",
        "en": "Because the host salon automatically becomes the permanent employer",
        "correct": false
       },
       {
        "fr": "Parce que cela remplace les compétences techniques apprises en formation",
        "en": "Because it replaces the technical skills learned in training",
        "correct": false
       },
       {
        "fr": "Parce que la loi l'exige uniquement pour les stagiaires en coiffure",
        "en": "Because the law requires it only for hairdressing interns",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi demander régulièrement une rétroaction à son superviseur de stage?",
      "en": "Why regularly ask for feedback from your internship supervisor?",
      "choices": [
       {
        "fr": "Pour s'améliorer continuellement et ajuster sa pratique",
        "en": "To continuously improve and adjust your practice",
        "correct": true
       },
       {
        "fr": "Parce que la rétroaction détermine automatiquement la note finale du programme",
        "en": "Because feedback automatically determines the program's final grade",
        "correct": false
       },
       {
        "fr": "Parce que c'est la seule façon d'obtenir le diplôme",
        "en": "Because it's the only way to obtain the diploma",
        "correct": false
       },
       {
        "fr": "Pour éviter d'avoir à pratiquer les techniques apprises en classe",
        "en": "To avoid having to practice the techniques learned in class",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Un stage réussi peut parfois mener à une offre d'emploi dans le même salon.",
      "en": "A successful internship can sometimes lead to a job offer at the same salon.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un stagiaire reçoit une critique constructive difficile à entendre de son superviseur. Quelle est la bonne attitude?",
      "en": "An intern receives difficult-to-hear constructive criticism from their supervisor. What is the right attitude?",
      "choices": [
       {
        "fr": "Accueillir la critique avec ouverture et l'utiliser pour s'améliorer",
        "en": "Accepting the criticism with openness and using it to improve",
        "correct": true
       },
       {
        "fr": "Demander immédiatement un changement de salon d'accueil",
        "en": "Immediately requesting a change of host salon",
        "correct": false
       },
       {
        "fr": "Éviter désormais ce superviseur pour le reste du stage",
        "en": "Avoiding that supervisor for the rest of the internship",
        "correct": false
       },
       {
        "fr": "Contester la critique auprès de la direction du salon",
        "en": "Disputing the criticism with the salon's management",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi le stage est-il considéré comme le module le plus déterminant pour l'entrée réussie sur le marché du travail?",
      "en": "Why is the internship considered the most decisive module for a successful entry into the job market?",
      "choices": [
       {
        "fr": "Il permet de valider concrètement toutes les compétences du programme dans un contexte professionnel réel",
        "en": "It concretely validates all the program's skills in a real professional context",
        "correct": true
       },
       {
        "fr": "Il est le seul module noté dans l'ensemble du programme",
        "en": "It is the only graded module in the entire program",
        "correct": false
       },
       {
        "fr": "Il ne nécessite aucune des compétences développées précédemment",
        "en": "It requires none of the previously developed skills",
        "correct": false
       },
       {
        "fr": "Il garantit un salaire fixe dès la fin du programme",
        "en": "It guarantees a fixed salary as soon as the program ends",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "L'attitude démontrée pendant le stage n'a aucune influence sur les recommandations futures d'un superviseur; seules les compétences techniques comptent.",
      "en": "The attitude shown during the internship has no influence on a supervisor's future recommendations; only technical skills matter.",
      "isTrue": false
     }
    ]
   }
  ]
 }
];

const UI_TEXT = {
  fr: {
    appName: "CoiffureQuest",
    tagline: "Deviens propriétaire de salon — DEP 5245",
    start: "Commencer l'aventure",
    yourName: "Ton prénom",
    chooseAvatar: "Choisis ton avatar",
    map: "Mon parcours",
    badges: "Badges",
    trophies: "Trophées",
    leaderboard: "Palmarès",
    profile: "Profil",
    level: "Niveau",
    xp: "XP",
    locked: "Verrouillé",
    completeToUnlock: "Termine la quête précédente pour déverrouiller",
    startQuest: "Démarrer la quête",
    retryQuest: "Reprendre la quête",
    question: "Question",
    of: "sur",
    submit: "Valider",
    next: "Suivant",
    finish: "Terminer",
    correct: "Bonne réponse!",
    incorrect: "Ce n'est pas ça...",
    questResult: "Résultat de la quête",
    score: "Score",
    passed: "Quête réussie! 🎉",
    failed: "Pas encore réussi — réessaie pour débloquer le badge (seuil: 70%)",
    backToMap: "Retour à la carte",
    newBadge: "Nouveau badge!",
    newTrophy: "Nouveau trophée!",
    hours: "heures",
    switchLang: "EN",
    privacy: "Confidentialité",
    resetProgress: "Réinitialiser tout",
    confirmReset: "Tout réinitialiser? Ton avatar, tes badges, trophées et toute ta progression seront effacés. Cette action est irréversible.",
    installApp: "Installer l'application",
    rank: "Rang",
    you: "Toi",
    leaderboardNote: "Classement local (démo) — un vrai palmarès de classe nécessite un serveur partagé.",
    completedQuests: "quêtes complétées",
    chooseVehicle: "Choisis ta machine",
    myVehicle: "Ta machine",
    vehicleGrows: "Évolue avec ton expérience",
    maxSize: "Taille maximale atteinte!",
    trueLabel: "Vrai",
    falseLabel: "Faux",
    tfPrompt: "Vrai ou faux?",
    masteredLabel: "compétences maîtrisées",
    tierLabel: "Palier",
    matchPrompt: "Touche un terme, puis sa définition qui correspond.",
    scenarioLabel: "Mise en situation",
    masteryUnlocked: "Compétence maîtrisée — badge débloqué!",
    accessCodeTitle: "Code d'accès",
    accessCodePrompt: "Entre le code d'accès fourni par ton enseignant pour continuer.",
    accessCodeTrialOver: "Ton essai gratuit de 7 jours est terminé. Entre le code d'accès fourni par ton centre de formation pour continuer.",
    accessCodePlaceholder: "Code d'accès",
    accessCodeSubmit: "Valider",
    accessCodeChecking: "Vérification...",
    accessCodeInvalid: "Code invalide ou inactif. Vérifie auprès de ton enseignant.",
    accessCodeOffline: "Connexion Internet requise pour valider ton code la première fois. Réessaie une fois connecté.",
    accessCodeNotConfigured: "L'application n'est pas encore configurée. Contacte ton enseignant.",
    welcomeHeading: "Comment ça marche",
    welcomeIntro: "Avant de commencer, voici un survol rapide de l'application.",
    welcomeSteps: [
      { icon: "🗺️", title: "Mon parcours", text: "Chaque compétence du programme est une quête sur la carte. Termine-les dans l'ordre pour avancer." },
      { icon: "📝", title: "Questions", text: "Réponds à des questions à choix multiples et vrai/faux liées à chaque compétence." },
      { icon: "🎖️", title: "Badges", text: "Réussis une quête à 70% ou plus pour débloquer son badge." },
      { icon: "🏆", title: "Trophées", text: "Décroche des trophées spéciaux pour tes exploits et ta progression." },
      { icon: "📊", title: "Palmarès", text: "Compare ton avancement avec celui du reste de la classe." },
      { icon: "👷", title: "Ton avatar", text: "Choisis ton avatar — il évolue à mesure que tu gagnes de l'expérience." }
    ]
  },
  en: {
    appName: "CoiffureQuest",
    tagline: "Become a salon owner — DVS 5245",
    start: "Start the adventure",
    yourName: "Your first name",
    chooseAvatar: "Choose your avatar",
    map: "My path",
    badges: "Badges",
    trophies: "Trophies",
    leaderboard: "Leaderboard",
    profile: "Profile",
    level: "Level",
    xp: "XP",
    locked: "Locked",
    completeToUnlock: "Complete the previous quest to unlock",
    startQuest: "Start quest",
    retryQuest: "Retry quest",
    question: "Question",
    of: "of",
    submit: "Submit",
    next: "Next",
    finish: "Finish",
    correct: "Correct!",
    incorrect: "Not quite...",
    questResult: "Quest Result",
    score: "Score",
    passed: "Quest passed! 🎉",
    failed: "Not passed yet — try again to unlock the badge (threshold: 70%)",
    backToMap: "Back to map",
    newBadge: "New badge!",
    newTrophy: "New trophy!",
    hours: "hours",
    switchLang: "FR",
    privacy: "Privacy",
    resetProgress: "Reset everything",
    confirmReset: "Reset everything? Your avatar, badges, trophies and all progress will be erased. This cannot be undone.",
    installApp: "Install the app",
    rank: "Rank",
    you: "You",
    leaderboardNote: "Local (demo) ranking — a real class leaderboard needs a shared server.",
    completedQuests: "quests completed",
    chooseVehicle: "Choose your machine",
    myVehicle: "Your machine",
    vehicleGrows: "Evolves with your experience",
    maxSize: "Maximum size reached!",
    trueLabel: "True",
    falseLabel: "False",
    tfPrompt: "True or false?",
    masteredLabel: "competencies mastered",
    tierLabel: "Tier",
    matchPrompt: "Tap a term, then its matching definition.",
    scenarioLabel: "Scenario",
    masteryUnlocked: "Competency mastered — badge unlocked!",
    accessCodeTitle: "Access code",
    accessCodePrompt: "Enter the access code given by your teacher to continue.",
    accessCodeTrialOver: "Your free 7-day trial has ended. Enter the access code provided by your training center to continue.",
    accessCodePlaceholder: "Access code",
    accessCodeSubmit: "Submit",
    accessCodeChecking: "Checking...",
    accessCodeInvalid: "Invalid or inactive code. Check with your teacher.",
    accessCodeOffline: "Internet connection required to validate your code the first time. Try again once connected.",
    accessCodeNotConfigured: "The app isn't configured yet. Contact your teacher.",
    welcomeHeading: "How it works",
    welcomeIntro: "Before you start, here's a quick overview of the app.",
    welcomeSteps: [
      { icon: "🗺️", title: "My path", text: "Each program competency is a quest on the map. Complete them in order to move forward." },
      { icon: "📝", title: "Questions", text: "Answer multiple-choice and true/false questions tied to each competency." },
      { icon: "🎖️", title: "Badges", text: "Pass a quest with 70% or more to unlock its badge." },
      { icon: "🏆", title: "Trophies", text: "Earn special trophies for your achievements and progress." },
      { icon: "📊", title: "Leaderboard", text: "Compare your progress with the rest of the class." },
      { icon: "👷", title: "Your avatar", text: "Choose your avatar — it evolves as you earn experience." }
    ]
  }
};

/* ---- Paliers de niveau (basés sur XP total) ---- */
const LEVELS = [
  { min: 0,    name_fr: "Novice",       name_en: "Novice",     avatarStage: 0 },
  { min: 200,  name_fr: "Apprenti(e)",  name_en: "Apprentice", avatarStage: 2 },
  { min: 500,  name_fr: "Compétent(e)", name_en: "Competent",  avatarStage: 4 },
  { min: 1000, name_fr: "Chevronné(e)", name_en: "Seasoned",   avatarStage: 6 },
  { min: 2000, name_fr: "Expert(e)",    name_en: "Expert",     avatarStage: 9 },
  { min: 3500, name_fr: "Maître",       name_en: "Master",     avatarStage: 11 }
];

/* ---- Personnages d'avatar (ouvriers de chantier / camionneurs) ----
   Chaque personnage est dessiné en SVG dans app.js (fonction AVATAR_SVG).
   "accent" = couleur par défaut du casque/gilet, modifiable via la
   sélection de couleur. */
const AVATAR_CHARACTERS = [
 {
  "id": "papillon",
  "name_fr": "Papillon",
  "name_en": "Butterfly",
  "title_fr": "La Métamorphose",
  "title_en": "The Metamorphosis",
  "stages": [
   "🥚",
   "🥚",
   "🐛",
   "🐛",
   "🐛",
   "🐛",
   "🦋",
   "🦋",
   "🦋",
   "🦋",
   "🦋",
   "🦋"
  ]
 },
 {
  "id": "paon",
  "name_fr": "Paon",
  "name_en": "Peacock",
  "title_fr": "L'Élégant",
  "title_en": "The Elegant One",
  "stages": [
   "🥚",
   "🥚",
   "🐔",
   "🐔",
   "🐔",
   "🐔",
   "🦚",
   "🦚",
   "🦚",
   "🦚",
   "🦚",
   "🦚"
  ]
 },
 {
  "id": "flamant",
  "name_fr": "Flamant rose",
  "name_en": "Flamingo",
  "title_fr": "La Flamboyante",
  "title_en": "The Flamboyant One",
  "stages": [
   "🥚",
   "🥚",
   "🐣",
   "🐣",
   "🐣",
   "🐣",
   "🦩",
   "🦩",
   "🦩",
   "🦩",
   "🦩",
   "🦩"
  ]
 },
 {
  "id": "perroquet",
  "name_fr": "Perroquet",
  "name_en": "Parrot",
  "title_fr": "La Colorée",
  "title_en": "The Colorful One",
  "stages": [
   "🥚",
   "🥚",
   "🐣",
   "🐣",
   "🐣",
   "🐣",
   "🦜",
   "🦜",
   "🦜",
   "🦜",
   "🦜",
   "🦜"
  ]
 }
];

const AVATAR_COLORS = [
  { id: "jaune",  hex: "#f7b500", name_fr: "Jaune sécurité", name_en: "Safety Yellow" },
  { id: "orange", hex: "#ff7a1a", name_fr: "Orange chantier", name_en: "Site Orange" },
  { id: "vert",   hex: "#3bb54a", name_fr: "Vert forêt", name_en: "Forest Green" },
  { id: "bleu",   hex: "#2a7de1", name_fr: "Bleu acier", name_en: "Steel Blue" },
  { id: "rouge",  hex: "#e13c3c", name_fr: "Rouge feu", name_en: "Fire Red" }
];

/* ---- Machines de l'élève (grossissent avec le XP) ----
   Le dessin SVG de chaque machine est dans app.js (fonction vehicleSVG). */
const VEHICLE_TYPES = [
  { id: "camion", name_fr: "Camion à benne", name_en: "Dump Truck" },
  { id: "pelle", name_fr: "Pelle mécanique", name_en: "Excavator" },
  { id: "bouteur", name_fr: "Bouteur", name_en: "Bulldozer" },
  { id: "chargeuse", name_fr: "Chargeuse", name_en: "Loader" }
];

/* La hauteur affichée (en pixels) interpole entre minHeight et maxHeight
   selon le XP actuel de l'élève (voir vehicleHeight() dans app.js). La
   largeur est calculée automatiquement pour respecter les proportions
   propres à chaque machine (voir VEHICLE_VIEWBOX dans app.js). */
const VEHICLE_GROWTH = { minHeight: 78, maxHeight: 178, maxXP: 3500 };

/* ---- Commandes de cabine (questions basées sur une image) ----
   Chaque machine a 4 commandes numérotées, dessinées par cabinSVG()
   dans app.js aux coordonnées cx/cy (viewBox 0 0 360 220). Ces mêmes
   coordonnées servent à la fois à dessiner l'illustration et à
   positionner les zones cliquables des questions de type "hotspot" —
   l'image et les questions restent donc toujours alignées.
   Configuration générique à titre pédagogique — la disposition réelle
   varie selon le fabricant et le modèle (à valider par l'enseignant). */
const CABIN_CONTROLS = {
  pelle: [
    { num: 1, cx: 100, cy: 168, kind: "joystick",
      label_fr: "Joystick gauche", label_en: "Left joystick",
      desc_fr: "Contrôle la rotation de la tourelle et le godet",
      desc_en: "Controls turret rotation and the bucket" },
    { num: 2, cx: 210, cy: 168, kind: "joystick",
      label_fr: "Joystick droit", label_en: "Right joystick",
      desc_fr: "Contrôle la flèche et le bras (balancier)",
      desc_en: "Controls the boom and the stick (arm)" },
    { num: 3, cx: 160, cy: 205, kind: "pedal",
      label_fr: "Pédales de translation", label_en: "Travel pedals",
      desc_fr: "Font avancer ou reculer les chenilles",
      desc_en: "Move the tracks forward or backward" },
    { num: 4, cx: 320, cy: 150, kind: "button",
      label_fr: "Klaxon", label_en: "Horn button",
      desc_fr: "Avertit les personnes autour de la machine avant un mouvement",
      desc_en: "Warns people around the machine before a movement" }
  ],
  bouteur: [
    { num: 1, cx: 110, cy: 172, kind: "lever",
      label_fr: "Levier de la lame", label_en: "Blade control lever",
      desc_fr: "Lève, abaisse et incline la lame",
      desc_en: "Raises, lowers and tilts the blade" },
    { num: 2, cx: 210, cy: 172, kind: "lever",
      label_fr: "Manettes de direction (chenilles)", label_en: "Steering clutch levers",
      desc_fr: "Contrôlent la direction en ralentissant une chenille à la fois",
      desc_en: "Control steering by slowing one track at a time" },
    { num: 3, cx: 160, cy: 205, kind: "pedal",
      label_fr: "Pédale de frein", label_en: "Brake pedal",
      desc_fr: "Ralentit ou immobilise la machine",
      desc_en: "Slows or stops the machine" },
    { num: 4, cx: 320, cy: 150, kind: "button",
      label_fr: "Klaxon", label_en: "Horn button",
      desc_fr: "Avertit les personnes autour de la machine avant un mouvement",
      desc_en: "Warns people around the machine before a movement" }
  ],
  chargeuse: [
    { num: 1, cx: 210, cy: 168, kind: "lever",
      label_fr: "Levier de commande du godet", label_en: "Bucket control lever",
      desc_fr: "Lève, abaisse et bascule le godet",
      desc_en: "Raises, lowers and tilts the bucket" },
    { num: 2, cx: 110, cy: 172, kind: "wheel",
      label_fr: "Volant de direction", label_en: "Steering wheel",
      desc_fr: "Contrôle la direction des roues",
      desc_en: "Controls the direction of the wheels" },
    { num: 3, cx: 160, cy: 205, kind: "pedal",
      label_fr: "Pédale d'accélérateur", label_en: "Accelerator pedal",
      desc_fr: "Contrôle le régime moteur et la vitesse",
      desc_en: "Controls engine speed and travel speed" },
    { num: 4, cx: 320, cy: 150, kind: "button",
      label_fr: "Klaxon", label_en: "Horn button",
      desc_fr: "Avertit les personnes autour de la machine avant un mouvement",
      desc_en: "Warns people around the machine before a movement" }
  ],
  niveleuse: [
    { num: 1, cx: 190, cy: 172, kind: "lever",
      label_fr: "Leviers de la lame", label_en: "Blade control levers",
      desc_fr: "Ajustent l'angle, la hauteur et l'inclinaison de la lame",
      desc_en: "Adjust the blade's angle, height and tilt" },
    { num: 2, cx: 100, cy: 172, kind: "wheel",
      label_fr: "Volant de direction", label_en: "Steering wheel",
      desc_fr: "Contrôle la direction des roues avant",
      desc_en: "Controls the direction of the front wheels" },
    { num: 3, cx: 255, cy: 172, kind: "switch",
      label_fr: "Commande d'articulation du châssis", label_en: "Frame articulation control",
      desc_fr: "Articule le châssis pour resserrer le rayon de braquage",
      desc_en: "Articulates the frame to tighten the turning radius" },
    { num: 4, cx: 320, cy: 150, kind: "button",
      label_fr: "Klaxon", label_en: "Horn button",
      desc_fr: "Avertit les personnes autour de la machine avant un mouvement",
      desc_en: "Warns people around the machine before a movement" }
  ]
};

/* ---- Trophées (méta-réussites) ---- */
const TROPHIES = [
  { id: "t_first", name_fr: "Premier pas", name_en: "First Step", icon: "🥉",
    desc_fr: "Réussir ton premier palier de compétence", desc_en: "Pass your first competency tier",
    check: (state) => Object.keys(state.completed).length >= 1 },
  { id: "t_half", name_fr: "Mi-parcours", name_en: "Halfway There", icon: "🥈",
    desc_fr: "Maîtriser 10 compétences (palier Avancé)", desc_en: "Master 10 competencies (Advanced tier)",
    check: (state) => (state.badges || []).length >= 10 },
  { id: "t_all", name_fr: "Diplômé virtuel", name_en: "Virtual Graduate", icon: "🏆",
    desc_fr: "Maîtriser les 20 compétences du programme", desc_en: "Master all 20 competencies of the program",
    check: (state) => (state.badges || []).length >= 20 },
  { id: "t_perfect", name_fr: "Sans faute", name_en: "Flawless", icon: "💯",
    desc_fr: "Obtenir 100% à un palier", desc_en: "Score 100% on a tier",
    check: (state) => Object.values(state.completed).some(s => s.score === 100) },
  { id: "t_safety", name_fr: "Zone sécurité", name_en: "Safety Zone", icon: "🦺",
    desc_fr: "Réussir le palier Débutant du module Santé et sécurité", desc_en: "Pass the Beginner tier of the Health & Safety module",
    check: (state) => state.completed["c02_1"] && state.completed["c02_1"].score >= 70 },
  { id: "t_streak", name_fr: "Assidu", name_en: "Dedicated", icon: "🔥",
    desc_fr: "Se connecter 3 jours différents", desc_en: "Log in on 3 different days",
    check: (state) => (state.loginDays || []).length >= 3 },
  { id: "t_podium", name_fr: "Sur le podium", name_en: "On the Podium", icon: "🏅",
    desc_fr: "Atteindre le top 3 du palmarès", desc_en: "Reach the top 3 of the leaderboard",
    check: (state) => (LEADERBOARD_SEED.filter(p => p.xp > state.xp).length) < 3 },
  { id: "t_matcher", name_fr: "Bon association", name_en: "Great Match", icon: "🧩",
    desc_fr: "Réussir 15 questions d'association de termes", desc_en: "Complete 15 term-matching questions",
    check: (state) => (state.matchesCompleted || 0) >= 15 }
];

/* ---- Palmarès (données d'exemple — classe fictive) ----
   À remplacer par de vraies données élèves lorsqu'un backend
   partagé sera branché (voir README). */
const LEADERBOARD_SEED = [
  { name: "Mia-Rose T.", xp: 3120, avatarChar: "operatrice_bouteur", avatarColor: "vert" },
  { name: "Xavier L.", xp: 2450, avatarChar: "contremaitre", avatarColor: "bleu" },
  { name: "Sam D.", xp: 1780, avatarChar: "camionneur", avatarColor: "orange" },
  { name: "Alicia P.", xp: 1290, avatarChar: "camionneuse", avatarColor: "rouge" },
  { name: "Kevin R.", xp: 860, avatarChar: "contremaitre", avatarColor: "jaune" },
  { name: "Noémie B.", xp: 430, avatarChar: "mecanicienne", avatarColor: "bleu" },
  { name: "Tommy G.", xp: 120, avatarChar: "camionneur", avatarColor: "vert" }
];
