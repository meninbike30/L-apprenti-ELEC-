// Banque de questions - EEB Alt Nîmes - Semaines 1 à 6 (avant le triphasé)
// Contenu généré à titre d'entraînement générique. À affiner avec le contenu réel des cours Mètis.

const QUIZ_DATA = [
  {
    semaine: 1, periode: "P1", theme: "Accueil et Intégration", emoji: "🎒",
    topics: [
      {
        nom: "Notions de bases mathématiques",
        questions: [
          { q: "Combien font 0,5 A en mA ?", options: ["50 mA", "5000 mA", "500 mA", "5 mA"], correct: 2, exp: "1 A = 1000 mA, donc 0,5 A = 500 mA." },
          { q: "Quelle est la formule pour calculer un pourcentage d'une valeur ?", options: ["valeur + pourcentage", "(valeur x pourcentage) / 100", "valeur / pourcentage", "valeur x 100"], correct: 1, exp: "Le pourcentage d'une valeur se calcule par (valeur x pourcentage) / 100." },
          { q: "1 kilo (k) correspond à combien d'unités ?", options: ["10000", "10", "100", "1000"], correct: 3, exp: "Le préfixe kilo (k) multiplie par 1000." },
          { q: "Que vaut 0,25 exprimé en fraction ?", options: ["1/3", "1/4", "1/2", "3/4"], correct: 1, exp: "0,25 = 1/4." }
        ]
      },
      {
        nom: "Préparation à l'Habilitation électrique B2V Essai BR H0",
        questions: [
          { q: "Que signifie l'indice B dans une habilitation électrique ?", options: ["Travaux sous tension uniquement", "Travaux en hauteur", "Travaux en Haute Tension", "Travaux en Basse Tension et Très Basse Tension"], correct: 3, exp: "L'indice B concerne les domaines BT et TBT." },
          { q: "Que signifie le 'V' ajouté à une habilitation comme B2V ?", options: ["Travaux en hauteur", "Vérification uniquement", "Travaux au voisinage de pièces nues sous tension", "Travaux sous tension"], correct: 2, exp: "Le 'V' indique une habilitation à travailler au voisinage de pièces nues sous tension." },
          { q: "Que peut faire un titulaire de l'habilitation BR ?", options: ["Réaliser des interventions générales de dépannage et de connexion en BT", "Uniquement observer les travaux", "Travailler sur les lignes aériennes HT", "Diriger un chantier HT"], correct: 0, exp: "BR = chargé d'intervention générale en basse tension." },
          { q: "Combien de temps est généralement recommandé entre deux recyclages d'habilitation électrique ?", options: ["10 ans", "3 ans", "1 an", "5 ans"], correct: 1, exp: "La norme NF C18-510 recommande un recyclage tous les 3 ans en général." }
        ]
      }
    ]
  },
  {
    semaine: 2, periode: "P1", theme: "Réaliser l'alimentation en courants forts d'une installation monophasée", emoji: "⚡",
    topics: [
      {
        nom: "L'Electricité",
        questions: [
          { q: "Quelle est l'unité de mesure de l'intensité du courant électrique ?", options: ["Ohm", "Watt", "Ampère", "Volt"], correct: 2, exp: "L'intensité se mesure en ampères (A)." },
          { q: "Quelle est l'unité de la tension électrique ?", options: ["Watt", "Ohm", "Ampère", "Volt"], correct: 3, exp: "La tension se mesure en volts (V)." },
          { q: "Que représente la résistance électrique ?", options: ["La quantité d'électrons stockés", "La puissance consommée", "La vitesse du courant", "L'opposition au passage du courant"], correct: 3, exp: "La résistance s'oppose au passage du courant, elle se mesure en ohms." },
          { q: "Quelle est la tension nominale du réseau domestique monophasé en France ?", options: ["400 V", "12 V", "110 V", "230 V"], correct: 3, exp: "Le réseau monophasé domestique français est en 230 V." }
        ]
      },
      {
        nom: "Les dangers de l'électricité",
        questions: [
          { q: "Quel est le seuil de tension limite conventionnelle en milieu sec (UL) ?", options: ["12 V", "25 V", "110 V", "50 V"], correct: 3, exp: "En milieu sec, le seuil de tension limite conventionnelle est de 50 V en alternatif." },
          { q: "Comment se produit un contact direct ?", options: ["Cela n'existe pas", "En touchant une pièce normalement sous tension", "En touchant un objet isolé", "En touchant une masse devenue accidentellement sous tension"], correct: 1, exp: "Le contact direct est le contact avec une pièce normalement sous tension." },
          { q: "Qu'est-ce qu'un contact indirect ?", options: ["Toucher une prise de courant", "Toucher un fil dénudé sous tension", "Toucher une masse métallique devenue accidentellement sous tension suite à un défaut d'isolement", "Toucher un interrupteur"], correct: 2, exp: "Le contact indirect résulte d'un défaut d'isolement rendant une masse dangereuse." },
          { q: "Quel est l'effet principal du courant électrique traversant le corps humain ?", options: ["Brûlure uniquement", "Fibrillation cardiaque et tétanisation musculaire", "Aucun effet", "Perte de vision uniquement"], correct: 1, exp: "Le courant peut provoquer tétanisation musculaire et fibrillation cardiaque, potentiellement mortelles." }
        ]
      },
      {
        nom: "Les outils d'électricien",
        questions: [
          { q: "Quel outil sert à dénuder un fil électrique ?", options: ["Pince à dénuder", "Tournevis testeur", "Pince multiprise", "Pince coupante"], correct: 0, exp: "La pince à dénuder retire l'isolant sans couper l'âme du conducteur." },
          { q: "À quoi sert un tournevis testeur (VAT simple) ?", options: ["Mesurer la résistance", "Couper les fils", "Serrer les vis", "Détecter la présence de tension"], correct: 3, exp: "Le tournevis testeur détecte la présence de tension par une lampe néon." },
          { q: "Quel outil permet de sertir des embouts sur des conducteurs souples ?", options: ["Pince à sertir", "Cutter", "Marteau", "Pince coupante"], correct: 0, exp: "La pince à sertir fixe les embouts sur les conducteurs souples." },
          { q: "Quel appareil est indispensable avant toute intervention pour vérifier l'absence de tension ?", options: ["Vérificateur d'Absence de Tension (VAT)", "Pince ampèremétrique", "Multimètre uniquement", "Voltmètre analogique"], correct: 0, exp: "Le VAT normalisé est obligatoire pour vérifier l'absence de tension avant intervention." }
        ]
      },
      {
        nom: "Travail en hauteur",
        questions: [
          { q: "Quel équipement est utilisé pour un travail en hauteur présentant un risque de chute ?", options: ["Chaussures de sécurité uniquement", "Casque uniquement", "Harnais de sécurité et/ou garde-corps", "Gants isolants"], correct: 2, exp: "Le harnais ou les garde-corps protègent contre les chutes de hauteur." },
          { q: "Comment détermine-t-on la nécessité d'une protection contre les chutes ?", options: ["Cela ne dépend jamais de la hauteur", "Il y a toujours une hauteur seuil fixe légale unique", "Uniquement au-delà de 10 m", "Par l'évaluation des risques propre à la situation de travail"], correct: 3, exp: "En France, c'est l'évaluation des risques qui détermine la protection nécessaire, pas un seuil unique." },
          { q: "Quel type d'équipement de travail en hauteur doit être vérifié périodiquement (VGP) ?", options: ["Échelles, échafaudages, harnais, plateformes", "Aucun équipement", "Uniquement le casque", "Uniquement les harnais"], correct: 0, exp: "Les équipements de travail en hauteur font l'objet de vérifications générales périodiques." },
          { q: "Que doit-on vérifier avant d'utiliser une échelle ?", options: ["Rien, elle est toujours sûre", "Son état général, sa stabilité et son bon dépliage", "Uniquement sa couleur", "Son poids uniquement"], correct: 1, exp: "Il faut contrôler l'état, la stabilité et le verrouillage de l'échelle avant usage." }
        ]
      },
      {
        nom: "Lois fondamentales",
        questions: [
          { q: "Que dit la loi d'Ohm ?", options: ["U = R / I", "U = R x I", "R = U x I", "I = U x R"], correct: 1, exp: "La loi d'Ohm : U = R x I." },
          { q: "Quelle loi permet de calculer la puissance électrique en courant continu ?", options: ["P = I / U", "P = U / I", "P = U + I", "P = U x I"], correct: 3, exp: "La puissance électrique se calcule par P = U x I." },
          { q: "Selon la loi des mailles, que peut-on dire dans une maille ?", options: ["La puissance est toujours maximale", "La somme des tensions est toujours nulle", "Le courant est toujours nul", "La résistance est toujours nulle"], correct: 1, exp: "La loi des mailles (Kirchhoff) : la somme algébrique des tensions dans une maille est nulle." },
          { q: "Selon la loi des nœuds, que peut-on dire des courants entrants et sortants d'un nœud ?", options: ["La somme des courants entrants égale la somme des courants sortants", "Ils sont toujours différents", "Ils n'ont pas de relation", "Ils s'annulent toujours"], correct: 0, exp: "La loi des nœuds : la somme des courants entrants égale la somme des courants sortants." }
        ]
      },
      {
        nom: "Mesurage des grandeurs électriques",
        questions: [
          { q: "Quel appareil mesure une tension ?", options: ["Ampèremètre", "Ohmmètre", "Wattmètre", "Voltmètre"], correct: 3, exp: "Le voltmètre mesure une tension." },
          { q: "Comment doit-on brancher un ampèremètre pour mesurer un courant ?", options: ["En parallèle", "Il ne se branche pas", "Peu importe", "En série"], correct: 3, exp: "L'ampèremètre se branche en série dans le circuit." },
          { q: "Comment doit-on brancher un voltmètre pour mesurer une tension ?", options: ["En étoile", "En parallèle", "En série", "En triangle"], correct: 1, exp: "Le voltmètre se branche en parallèle (dérivation) aux bornes du composant." },
          { q: "Quel appareil permet de mesurer un courant sans ouvrir le circuit ?", options: ["Multimètre en mode continuité", "Ohmmètre", "Pince ampèremétrique", "Voltmètre"], correct: 2, exp: "La pince ampèremétrique mesure le courant par effet d'induction, sans ouvrir le circuit." }
        ]
      },
      {
        nom: "Le circuit monophasé",
        questions: [
          { q: "Combien de conducteurs actifs comporte un circuit monophasé classique (hors terre) ?", options: ["3", "2 (phase et neutre)", "1", "4"], correct: 1, exp: "Un circuit monophasé comporte une phase et un neutre." },
          { q: "Quelle est la couleur normalisée du conducteur de phase ?", options: ["Vert-jaune", "Bleu", "Noir uniquement", "Toute couleur sauf bleu et vert-jaune"], correct: 3, exp: "La phase peut être de toute couleur sauf bleu (neutre) et vert-jaune (terre)." },
          { q: "Quelle est la couleur normalisée du neutre ?", options: ["Bleu", "Vert-jaune", "Rouge", "Marron"], correct: 0, exp: "Le neutre est normalisé en bleu." },
          { q: "Quelle est la couleur normalisée du conducteur de protection (terre) ?", options: ["Bleu", "Marron", "Noir", "Vert-jaune"], correct: 3, exp: "Le conducteur de terre est normalisé en vert-jaune (bicolore)." }
        ]
      },
      {
        nom: "L'AGCP",
        questions: [
          { q: "Que signifie AGCP ?", options: ["Automate de Gestion et Contrôle des Prises", "Appareil de Coupure Générale", "Appareil Général de Commande et de Protection", "Appareil de Gestion du Courant Principal"], correct: 2, exp: "AGCP = Appareil Général de Commande et de Protection." },
          { q: "Où se situe généralement l'AGCP dans une installation domestique ?", options: ["En tête d'installation, dans le tableau électrique", "Dans la salle de bain", "Uniquement à l'extérieur", "Dans chaque pièce"], correct: 0, exp: "L'AGCP est placé en tête d'installation, dans le tableau électrique." },
          { q: "Quel est le rôle principal de l'AGCP ?", options: ["Éclairer le logement", "Distribuer l'eau chaude", "Couper et protéger l'ensemble de l'installation électrique", "Mesurer la consommation uniquement"], correct: 2, exp: "L'AGCP permet de couper et protéger toute l'installation." },
          { q: "L'AGCP est souvent associé à quel type de dispositif différentiel ?", options: ["10 mA", "300 mA ou 500 mA (différentiel général)", "30 mA", "Aucun"], correct: 1, exp: "L'AGCP intègre en général un différentiel de type 300 ou 500 mA en protection générale." }
        ]
      },
      {
        nom: "Le Fusible",
        questions: [
          { q: "Quel est le rôle d'un fusible ?", options: ["Stocker de l'énergie", "Mesurer la tension", "Protéger un circuit contre les surintensités en fondant", "Allumer une lampe"], correct: 2, exp: "Le fusible fond pour couper le circuit en cas de surintensité." },
          { q: "Un fusible doit-il être remplacé ou peut-il être réarmé ?", options: ["Il ne fond jamais", "Il se réarme manuellement par un bouton", "Il doit être remplacé après avoir fondu", "Il se réarme automatiquement"], correct: 2, exp: "Un fusible fondu doit être remplacé, il n'est pas réarmable." },
          { q: "Quel type de fusible est couramment utilisé pour la protection de circuits résistifs ?", options: ["Fusible rapide pour moteurs uniquement", "Fusible gG", "Fusible aM", "Fusible thermique"], correct: 1, exp: "Le fusible gG protège les circuits résistifs classiques (usage général)." },
          { q: "Que signifie le calibre indiqué sur un fusible ?", options: ["Sa longueur", "Le courant maximal qu'il peut supporter avant de fondre", "Sa couleur", "Sa tension de fonctionnement uniquement"], correct: 1, exp: "Le calibre indique le courant nominal que le fusible peut supporter." }
        ]
      }
    ]
  },
  {
    semaine: 3, periode: "P1", theme: "Réaliser l'alimentation en courants forts d'une installation monophasée", emoji: "🔌",
    topics: [
      {
        nom: "Le Disjoncteur",
        questions: [
          { q: "Quel est l'avantage principal d'un disjoncteur par rapport à un fusible ?", options: ["Il n'a pas de calibre", "Il coûte moins cher", "Il se réarme sans être remplacé", "Il ne protège pas contre les court-circuits"], correct: 2, exp: "Le disjoncteur se réarme simplement après déclenchement, sans remplacement." },
          { q: "Quelles sont les deux principales protections assurées par un disjoncteur divisionnaire ?", options: ["Fuite de gaz et incendie", "Surcharge et court-circuit", "Surtension et sous-tension", "Foudre et humidité"], correct: 1, exp: "Le disjoncteur protège contre les surcharges (thermique) et les courts-circuits (magnétique)." },
          { q: "Quel calibre de disjoncteur est couramment utilisé pour protéger un circuit d'éclairage ?", options: ["10 ou 16 A", "32 A", "63 A", "2 A"], correct: 0, exp: "Un circuit d'éclairage est généralement protégé par un disjoncteur 10 ou 16 A." },
          { q: "Que signifie la courbe C d'un disjoncteur ?", options: ["Un type de câblage", "Un seuil de déclenchement magnétique adapté aux usages domestiques courants", "Une protection uniquement thermique", "Une absence de protection"], correct: 1, exp: "La courbe C est la courbe standard utilisée en domestique/tertiaire courant." }
        ]
      },
      {
        nom: "L'Interrupteur Différentiel",
        questions: [
          { q: "Quel est le rôle principal d'un interrupteur différentiel ?", options: ["Mesurer la consommation", "Allumer et éteindre l'éclairage", "Protéger contre les surcharges", "Détecter une fuite de courant et protéger contre les contacts indirects"], correct: 3, exp: "Le différentiel détecte les fuites de courant et protège les personnes des contacts indirects." },
          { q: "Quelle sensibilité différentielle est obligatoire pour les circuits de salle de bain ?", options: ["10 A", "30 mA", "300 mA", "500 mA"], correct: 1, exp: "Une sensibilité de 30 mA est requise pour la protection des personnes, notamment en salle de bain." },
          { q: "Un différentiel de type AC détecte quel type de courant de fuite ?", options: ["Uniquement les courants alternatifs sinusoïdaux", "Uniquement les courants continus", "Aucun courant", "Tous les types sans distinction"], correct: 0, exp: "Le type AC détecte les fuites de courant alternatif sinusoïdal uniquement." },
          { q: "Quelle est la différence entre un disjoncteur différentiel et un simple interrupteur différentiel ?", options: ["Le disjoncteur différentiel ne coupe jamais le courant", "L'interrupteur différentiel protège contre les surintensités uniquement", "Le disjoncteur différentiel protège aussi contre les surintensités en plus des fuites de courant", "Aucune différence"], correct: 2, exp: "Le disjoncteur différentiel combine protection différentielle ET protection contre les surintensités." }
        ]
      },
      {
        nom: "Les Conducteurs Électriques",
        questions: [
          { q: "Quel matériau est le plus couramment utilisé pour les conducteurs électriques domestiques ?", options: ["Plomb", "Aluminium uniquement", "Fer", "Cuivre"], correct: 3, exp: "Le cuivre est le matériau conducteur standard en domestique." },
          { q: "Que désigne la section d'un conducteur ?", options: ["Sa surface de coupe transversale, en mm²", "Sa couleur", "Son poids", "Sa longueur"], correct: 0, exp: "La section correspond à la surface de la coupe transversale du conducteur, exprimée en mm²." },
          { q: "Quelle section minimale est généralement utilisée pour un circuit d'éclairage ?", options: ["1,5 mm²", "1 mm²", "10 mm²", "6 mm²"], correct: 0, exp: "1,5 mm² est la section minimale courante pour l'éclairage." },
          { q: "Quelle section minimale est généralement utilisée pour un circuit de prises de courant 16A ?", options: ["10 mm²", "2,5 mm²", "1,5 mm²", "1 mm²"], correct: 1, exp: "2,5 mm² est la section minimale courante pour les prises 16A." }
        ]
      },
      {
        nom: "Les schémas Electriques",
        questions: [
          { q: "Quel type de schéma représente le fonctionnement électrique sans se soucier de l'implantation réelle ?", options: ["Schéma architectural", "Schéma de câblage", "Plan de masse", "Schéma de principe (unifilaire ou multifilaire)"], correct: 3, exp: "Le schéma de principe décrit le fonctionnement, indépendamment de l'implantation." },
          { q: "Quel type de schéma montre l'emplacement réel des appareils et le cheminement des câbles ?", options: ["Schéma synoptique", "Schéma de câblage (ou de réalisation)", "Schéma unifilaire", "Schéma de principe"], correct: 1, exp: "Le schéma de câblage/réalisation montre l'implantation réelle." },
          { q: "Dans un schéma unifilaire, comment sont représentés les conducteurs d'une même liaison ?", options: ["En pointillés uniquement", "Ils ne sont pas représentés", "Chaque conducteur séparément", "Par un seul trait représentant tous les conducteurs"], correct: 3, exp: "Le schéma unifilaire simplifie en représentant une liaison par un seul trait." },
          { q: "Quel symbole représente généralement un point lumineux sur un schéma électrique ?", options: ["Un carré", "Un triangle plein", "Un cercle avec une croix", "Une flèche"], correct: 2, exp: "Le point lumineux est classiquement symbolisé par un cercle avec une croix." }
        ]
      },
      {
        nom: "Montage Simple Allumage",
        questions: [
          { q: "Combien d'interrupteurs sont nécessaires pour un montage simple allumage ?", options: ["2", "4", "3", "1"], correct: 3, exp: "Un simple allumage nécessite un seul interrupteur." },
          { q: "Dans un simple allumage, l'interrupteur est câblé sur quel conducteur ?", options: ["La terre", "La phase", "Peu importe", "Le neutre"], correct: 1, exp: "L'interrupteur coupe toujours la phase, jamais le neutre." },
          { q: "Que commande un simple allumage ?", options: ["Une prise de courant", "Plusieurs points lumineux depuis plusieurs endroits", "Un ou plusieurs points lumineux depuis un seul endroit", "Un chauffe-eau"], correct: 2, exp: "Le simple allumage commande depuis un seul point de commande." },
          { q: "Pourquoi ne coupe-t-on jamais le neutre avec l'interrupteur ?", options: ["Par habitude uniquement", "Ce n'est pas interdit", "Pour des raisons esthétiques", "Pour que l'appareil soit hors tension côté phase quand il est coupé, par sécurité"], correct: 3, exp: "Couper la phase garantit l'absence de tension dangereuse en aval quand le circuit est ouvert." }
        ]
      },
      {
        nom: "Montage Double Allumage",
        questions: [
          { q: "Que permet un montage double allumage ?", options: ["Protéger contre les surtensions", "Alimenter une prise de courant", "Commander un seul point lumineux depuis deux endroits", "Commander deux groupes de points lumineux séparément depuis un même endroit"], correct: 3, exp: "Le double allumage permet de commander deux circuits distincts depuis un même emplacement." },
          { q: "Quel type d'interrupteur peut être utilisé pour un double allumage dans un même boîtier ?", options: ["Un simple bouton poussoir", "Un télérupteur uniquement", "Un contacteur jour/nuit", "Un interrupteur double (deux boutons)"], correct: 3, exp: "Un interrupteur double regroupe deux interrupteurs simples dans un même appareillage." },
          { q: "Le neutre est-il commun aux deux circuits d'un double allumage ?", options: ["Oui, généralement le neutre est commun, seule la phase est commutée séparément", "Non, jamais", "Le neutre n'existe pas dans ce montage", "Cela dépend de la couleur du fil"], correct: 0, exp: "Le neutre commun alimente les deux circuits, chaque phase étant commutée indépendamment." },
          { q: "Quel est l'intérêt principal d'un double allumage dans une même pièce ?", options: ["Diminuer la puissance installée", "Réduire le nombre de lampes", "Supprimer le besoin de disjoncteur", "Pouvoir gérer indépendamment deux zones d'éclairage"], correct: 3, exp: "Il permet par exemple d'éclairer séparément deux zones d'une même pièce." }
        ]
      },
      {
        nom: "Association des récepteurs",
        questions: [
          { q: "Dans un montage en série, que se passe-t-il si un récepteur tombe en panne ?", options: ["Seul le récepteur en panne s'éteint", "Tout le circuit est coupé", "Rien ne change", "Les autres continuent de fonctionner normalement"], correct: 1, exp: "En série, une coupure sur un récepteur interrompt tout le circuit." },
          { q: "Dans un montage en parallèle, que se passe-t-il si un récepteur tombe en panne ?", options: ["Le courant s'inverse", "La tension double", "Les autres récepteurs continuent de fonctionner", "Tout le circuit s'arrête"], correct: 2, exp: "En parallèle, chaque récepteur est indépendant des autres." },
          { q: "Dans une installation domestique, comment sont généralement associés les récepteurs ?", options: ["En parallèle", "En série", "En étoile uniquement", "Aucune association"], correct: 0, exp: "Les récepteurs domestiques (lampes, prises) sont associés en parallèle, sous la même tension." },
          { q: "Dans un montage série, l'intensité est-elle la même dans tous les récepteurs ?", options: ["Elle double à chaque récepteur", "Oui, l'intensité est identique dans tout le circuit série", "Elle est nulle", "Non"], correct: 1, exp: "En série, le courant est le même partout dans la boucle." }
        ]
      },
      {
        nom: "Montage Va et Vient",
        questions: [
          { q: "Combien d'interrupteurs va-et-vient sont nécessaires pour commander un point lumineux depuis deux endroits ?", options: ["1", "2", "3", "4"], correct: 1, exp: "Deux interrupteurs va-et-vient permettent la commande depuis deux points." },
          { q: "Combien de bornes possède un interrupteur va-et-vient ?", options: ["6", "3", "4", "2"], correct: 1, exp: "L'interrupteur va-et-vient possède 3 bornes : 1 commun et 2 navettes." },
          { q: "Comment se nomment les fils reliant les deux interrupteurs va-et-vient entre eux ?", options: ["Fils de terre", "Fils pilotes", "Fils navettes", "Fils de retour"], correct: 2, exp: "Les deux conducteurs qui relient les va-et-vient sont appelés fils navettes." },
          { q: "Où arrive la phase dans un montage va-et-vient ?", options: ["Sur le commun du premier interrupteur", "Directement sur la lampe", "Sur la terre", "Sur une navette"], correct: 0, exp: "La phase arrive sur la borne commune du premier va-et-vient." }
        ]
      },
      {
        nom: "Montage Permutateur",
        questions: [
          { q: "À partir de combien de points de commande utilise-t-on des permutateurs (en plus des va-et-vient) ?", options: ["3 points ou plus", "Jamais", "1 point", "2 points"], correct: 0, exp: "Au-delà de 2 points de commande, on ajoute des permutateurs (croisillons)." },
          { q: "Combien de bornes possède un permutateur (interrupteur croisillon) ?", options: ["4", "5", "3", "2"], correct: 0, exp: "Le permutateur possède 4 bornes (2 entrées, 2 sorties navettes)." },
          { q: "Où se placent les permutateurs dans un montage à 3 points de commande ou plus ?", options: ["Aux deux extrémités du circuit", "Sur le circuit de terre", "Entre les deux interrupteurs va-et-vient", "Il n'y a pas de permutateur dans ce cas"], correct: 2, exp: "Les permutateurs s'intercalent entre les deux va-et-vient d'extrémité." },
          { q: "Combien de va-et-vient et de permutateurs faut-il pour commander une lampe depuis 4 endroits ?", options: ["4 va-et-vient", "2 va-et-vient et 2 permutateurs", "1 va-et-vient et 3 permutateurs", "4 permutateurs"], correct: 1, exp: "Il faut toujours 2 va-et-vient aux extrémités, et un permutateur par point intermédiaire (donc 2 ici)." }
        ]
      },
      {
        nom: "Montage Prise de courant",
        questions: [
          { q: "Combien de bornes principales comporte une prise de courant 2P+T ?", options: ["2", "3", "4"], correct: 1, exp: "Une prise 2P+T comporte phase, neutre et terre, soit 3 bornes." },
          { q: "Quelle borne d'une prise de courant est reliée à la terre ?", options: ["La broche de terre", "La phase", "Le neutre", "Aucune"], correct: 0, exp: "La broche de terre relie la prise au circuit de protection." },
          { q: "Quel calibre de disjoncteur protège classiquement un circuit de prises de courant 16A ?", options: ["2 A", "10 A", "16 A ou 20 A selon la section", "32 A"], correct: 2, exp: "Un circuit prises est protégé par un disjoncteur 16 ou 20 A selon la section utilisée." },
          { q: "Selon la NF C 15-100, combien de prises maximum peut-on raccorder sur un circuit 16A en 1,5mm² ?", options: ["8 prises maximum", "Aucune limite", "2 prises", "20 prises"], correct: 0, exp: "La norme limite à 8 le nombre de socles de prise sur un circuit 16A/1,5mm²." }
        ]
      }
    ]
  },
  {
    semaine: 4, periode: "P1", theme: "Réaliser l'alimentation en courants forts d'une installation monophasée", emoji: "🧰",
    topics: [
      {
        nom: "TGBT",
        questions: [
          { q: "Que signifie TGBT ?", options: ["Transformateur Général Basse Tension", "Tableau Général de Branchement Technique", "Terre Générale Basse Tension", "Tableau Général Basse Tension"], correct: 3, exp: "TGBT = Tableau Général Basse Tension." },
          { q: "Où trouve-t-on généralement un TGBT ?", options: ["Dans les installations tertiaires ou industrielles, en tête de distribution", "Uniquement dans les maisons individuelles", "Sur les poteaux électriques", "Dans chaque prise de courant"], correct: 0, exp: "Le TGBT est utilisé en tête de distribution des installations tertiaires/industrielles." },
          { q: "Quel est le rôle du TGBT ?", options: ["Produire de l'électricité", "Distribuer et protéger l'ensemble de l'installation électrique basse tension d'un bâtiment", "Stocker de l'énergie solaire", "Éclairer les locaux"], correct: 1, exp: "Le TGBT distribue et protège l'ensemble du bâtiment en basse tension." },
          { q: "Un TGBT contient généralement quels types d'appareillage ?", options: ["Uniquement des ampoules", "Uniquement des prises", "Uniquement des fusibles domestiques", "Disjoncteurs, interrupteurs différentiels, appareils de mesure et de protection"], correct: 3, exp: "Le TGBT regroupe les organes de protection et de mesure de l'installation." }
        ]
      },
      {
        nom: "Raccordement électrique de chantier",
        questions: [
          { q: "Quel type de tableau est utilisé pour alimenter un chantier temporaire ?", options: ["Aucune protection n'est nécessaire", "Un tableau domestique classique", "Un coffret de chantier normalisé avec protections différentielles", "Un simple prolongateur"], correct: 2, exp: "Un coffret de chantier normalisé garantit la protection des utilisateurs sur site temporaire." },
          { q: "Quelle sensibilité différentielle est recommandée sur un chantier, milieu souvent humide ?", options: ["Aucune", "30 mA", "500 mA", "300 mA"], correct: 1, exp: "30 mA est requis pour la protection des personnes en milieu humide comme un chantier." },
          { q: "Pourquoi les installations de chantier nécessitent-elles une vigilance particulière ?", options: ["Elles ne sont jamais sous tension", "Elles ne nécessitent aucune norme", "Elles sont toujours en intérieur", "Elles sont exposées à l'humidité, aux chocs mécaniques et sont temporaires"], correct: 3, exp: "Conditions difficiles (humidité, chocs) et caractère temporaire imposent une vigilance accrue." },
          { q: "Quel type de câble est recommandé pour les installations de chantier ?", options: ["Câble en aluminium fin", "Câble rigide fragile", "Fil nu", "Câble souple résistant type H07RN-F"], correct: 3, exp: "Le câble souple H07RN-F résiste aux contraintes mécaniques du chantier." }
        ]
      },
      {
        nom: "Les GTL",
        questions: [
          { q: "Que signifie GTL ?", options: ["Groupe Technique Lumineux", "Gestion Technique du Logement", "Gaine Technique Logement", "Grande Tension Locale"], correct: 2, exp: "GTL = Gaine Technique Logement." },
          { q: "Où se situe généralement la GTL dans un logement neuf ?", options: ["Dans la cave uniquement", "Sur le toit", "Dans la salle de bain", "Près de l'entrée ou dans un lieu accessible, souvent au rez-de-chaussée"], correct: 3, exp: "La GTL est placée dans un lieu accessible, souvent proche de l'entrée." },
          { q: "Que regroupe la GTL ?", options: ["Le tableau électrique, le tableau de communication et l'arrivée des réseaux", "Rien de spécifique", "Uniquement l'eau", "Uniquement le chauffage"], correct: 0, exp: "La GTL regroupe les arrivées de réseaux et les tableaux électrique/communication." },
          { q: "Quelle est la largeur minimale imposée pour une GTL selon la norme NF C 15-100 ?", options: ["1 m", "2 m", "30 cm", "60 cm"], correct: 3, exp: "La norme impose une largeur minimale de 60 cm pour la GTL." }
        ]
      },
      {
        nom: "Travail des câbles",
        questions: [
          { q: "Quel outil permet de dénuder proprement un câble sans endommager les conducteurs ?", options: ["Un marteau", "Une lime", "Un cutter uniquement", "Une pince à dénuder adaptée"], correct: 3, exp: "La pince à dénuder adaptée évite d'entailler les conducteurs." },
          { q: "Pourquoi faut-il respecter un rayon de courbure minimal lors du cintrage d'un câble ?", options: ["Pour éviter d'endommager l'isolant et les conducteurs internes", "Pour gagner du temps", "Pour des raisons esthétiques uniquement", "Ce n'est pas important"], correct: 0, exp: "Un rayon trop serré peut fissurer l'isolant ou casser les brins internes." },
          { q: "Que faut-il vérifier avant de raccorder un câble multiconducteur ?", options: ["La correspondance des couleurs de conducteurs et l'absence de dommage sur l'isolant", "Rien de particulier", "Uniquement son prix", "Uniquement sa longueur"], correct: 0, exp: "Il faut vérifier le repérage des conducteurs et l'état de l'isolant." },
          { q: "Quel repérage utilise-t-on pour identifier les conducteurs lors du raccordement ?", options: ["Aucun repérage n'est nécessaire", "Uniquement la mémoire", "Code couleur normalisé et/ou manchons repère-fils", "Le poids du câble"], correct: 2, exp: "Le code couleur normalisé et les manchons repère-fils facilitent l'identification." }
        ]
      },
      {
        nom: "Les conduits électriques (Gaines)",
        questions: [
          { q: "Que signifie ICTA, type de gaine couramment utilisé ?", options: ["Un câble nu", "Isolant Cintrable Transversalement Annelé", "Une plaque métallique", "Un tube rigide"], correct: 1, exp: "ICTA = Isolant Cintrable Transversalement Annelé." },
          { q: "Quelle est la couleur normalisée d'une gaine ICTA pour un circuit électrique classique ?", options: ["Orange (ou gris selon usage)", "Bleu", "Rouge uniquement", "Vert"], correct: 0, exp: "La gaine orange est classiquement utilisée pour l'électricité (gris pour certains autres réseaux)." },
          { q: "Pourquoi utilise-t-on des gaines pour protéger les conducteurs encastrés ?", options: ["Ce n'est jamais nécessaire", "Pour protéger mécaniquement les conducteurs et faciliter leur remplacement", "Pour l'esthétique uniquement", "Pour augmenter la résistance électrique"], correct: 1, exp: "La gaine protège mécaniquement et permet de faire coulisser/remplacer les conducteurs." },
          { q: "Quel diamètre de gaine ICTA est couramment utilisé pour un circuit domestique standard ?", options: ["Ø 16 ou 20 mm", "Ø 10 mm", "Ø 50 mm", "Ø 100 mm"], correct: 0, exp: "Les diamètres 16 ou 20 mm sont courants pour les circuits domestiques classiques." }
        ]
      },
      {
        nom: "Les conduits électriques (Tubes IRL)",
        questions: [
          { q: "Que signifie IRL pour un tube électrique ?", options: ["Installation Résidentielle Légère", "Isolation Renforcée Locale", "Isolant Rigide Léger (tube rigide)", "Interrupteur Rapide Local"], correct: 2, exp: "IRL désigne un tube Isolant Rigide Léger." },
          { q: "Dans quel contexte utilise-t-on plutôt des tubes IRL rigides ?", options: ["Uniquement sous l'eau", "En saillie ou en apparent, pour une protection mécanique renforcée", "Jamais utilisé en électricité", "Uniquement en apparent souple"], correct: 1, exp: "Les tubes rigides IRL s'utilisent en apparent/saillie pour une bonne tenue mécanique." },
          { q: "Quel est l'avantage d'un tube rigide (IRL) par rapport à une gaine ICTA souple ?", options: ["Il ne se coupe pas", "Une meilleure résistance mécanique et un aspect plus soigné en apparent", "Aucun avantage", "Il est toujours moins cher"], correct: 1, exp: "Le tube rigide offre une meilleure tenue mécanique et une finition plus nette en apparent." },
          { q: "Comment raccorde-t-on deux tubes IRL entre eux ?", options: ["Avec des raccords/manchons spécifiques", "Avec du ruban adhésif", "En les soudant", "On ne les raccorde jamais"], correct: 0, exp: "Des raccords ou manchons spécifiques permettent de jointer les tubes IRL." }
        ]
      },
      {
        nom: "Réalisation en encastré",
        questions: [
          { q: "Qu'est-ce qu'une installation encastrée ?", options: ["Il n'y a pas de boîtiers", "Les conducteurs et boîtiers sont apparents en saillie", "C'est uniquement pour l'extérieur", "Les conducteurs et boîtiers sont noyés dans la maçonnerie ou les cloisons"], correct: 3, exp: "En encastré, les éléments sont intégrés dans la maçonnerie ou les cloisons." },
          { q: "Que doit-on utiliser pour protéger un point de dérivation encastré ?", options: ["Du ruban isolant uniquement", "Une boîte de dérivation encastrée avec couvercle accessible", "Aucune protection", "Une gaine seule sans boîte"], correct: 1, exp: "Une boîte de dérivation avec couvercle protège et permet l'accès aux connexions." },
          { q: "Pourquoi une boîte de dérivation encastrée doit-elle rester accessible ?", options: ["Pour des raisons esthétiques uniquement", "Pour permettre la vérification et la maintenance ultérieure des connexions", "Pour économiser du câble", "Ce n'est pas nécessaire"], correct: 1, exp: "L'accessibilité permet le contrôle et la maintenance des connexions dans le temps." },
          { q: "Quel outil permet de créer un saignement dans un mur pour encastrer une gaine ?", options: ["Une pince coupante", "Une rainureuse (ou disqueuse + burin)", "Un tournevis", "Un multimètre"], correct: 1, exp: "La rainureuse (ou disqueuse et burin) permet de creuser une saignée dans le mur." }
        ]
      },
      {
        nom: "Le Magnétisme",
        questions: [
          { q: "Quel phénomène décrit l'apparition d'un champ magnétique autour d'un conducteur parcouru par un courant ?", options: ["L'effet Joule", "L'électromagnétisme", "La résistance électrique", "La capacité électrique"], correct: 1, exp: "Un courant électrique crée un champ magnétique : c'est l'électromagnétisme." },
          { q: "Sur quel principe fonctionne un contacteur ou un relais électromagnétique ?", options: ["L'attraction d'un noyau métallique par un champ magnétique créé par une bobine", "La dilatation thermique", "La photo-résistance", "La pression d'air"], correct: 0, exp: "La bobine crée un champ magnétique qui attire un noyau métallique, actionnant le contact." },
          { q: "Quel appareil utilise le magnétisme pour transformer une tension alternative en une autre tension ?", options: ["Le disjoncteur", "La prise de courant", "Le fusible", "Le transformateur"], correct: 3, exp: "Le transformateur utilise l'induction électromagnétique pour modifier la tension." },
          { q: "Que se passe-t-il si on approche un aimant d'une bobine parcourue par un courant ?", options: ["La bobine fond", "Le courant s'arrête immédiatement", "Une force d'attraction ou de répulsion apparaît selon le sens du courant", "Rien du tout"], correct: 2, exp: "L'interaction entre champs magnétiques crée une force d'attraction ou de répulsion." }
        ]
      },
      {
        nom: "Montage Télérupteur",
        questions: [
          { q: "Quel est l'avantage principal d'un télérupteur par rapport au va-et-vient pour de nombreux points de commande ?", options: ["Il permet de commander depuis un nombre illimité de boutons poussoirs avec un câblage simplifié", "Aucun avantage", "Il coûte plus cher sans bénéfice", "Il ne fonctionne qu'avec deux points"], correct: 0, exp: "Le télérupteur simplifie le câblage pour de nombreux points de commande." },
          { q: "Quel composant utilise-t-on pour commander un télérupteur ?", options: ["Un fusible", "Un ou plusieurs boutons poussoirs", "Un interrupteur va-et-vient", "Un disjoncteur"], correct: 1, exp: "Un ou plusieurs boutons poussoirs pilotent la bobine du télérupteur." },
          { q: "Comment fonctionne un télérupteur ?", options: ["Il nécessite de maintenir le bouton appuyé", "Il reste toujours allumé", "Il ne fonctionne qu'en courant continu", "Il bascule d'état à chaque impulsion reçue sur sa bobine de commande"], correct: 3, exp: "Chaque impulsion sur la bobine fait basculer l'état du contact (allumé/éteint)." },
          { q: "Le circuit de commande et le circuit de puissance d'un télérupteur sont-ils sur le même circuit ?", options: ["Non, ils sont distincts", "Il n'y a qu'un seul circuit possible", "Oui, toujours identiques", "Cela dépend de la couleur du fil"], correct: 0, exp: "Le circuit de commande (boutons poussoirs) est distinct du circuit de puissance (éclairage)." }
        ]
      },
      {
        nom: "Montage Minuterie",
        questions: [
          { q: "Quelle est la fonction principale d'une minuterie d'éclairage ?", options: ["Protéger contre les surtensions", "Mesurer la consommation électrique", "Allumer l'éclairage pour une durée réglable puis l'éteindre automatiquement", "Allumer indéfiniment jusqu'à extinction manuelle"], correct: 2, exp: "La minuterie éteint automatiquement l'éclairage après une durée réglée." },
          { q: "Comment commande-t-on généralement une minuterie ?", options: ["Par un ou plusieurs boutons poussoirs", "Par un interrupteur va-et-vient", "Par un disjoncteur différentiel", "Automatiquement sans aucune commande"], correct: 0, exp: "Des boutons poussoirs déclenchent la temporisation de la minuterie." },
          { q: "Où utilise-t-on couramment des minuteries d'escalier ?", options: ["Uniquement à l'extérieur", "Uniquement dans les chambres", "Jamais en intérieur", "Dans les cages d'escalier et parties communes d'immeubles"], correct: 3, exp: "Les minuteries sont fréquentes dans les circulations communes pour économiser l'énergie." },
          { q: "Que se passe-t-il si on appuie à nouveau sur le bouton poussoir pendant que la minuterie est active ?", options: ["Elle s'éteint immédiatement", "Elle grille", "La temporisation se relance généralement", "Rien ne se passe"], correct: 2, exp: "Une nouvelle impulsion relance généralement la temporisation." }
        ]
      },
      {
        nom: "ECS (Eau Chaude Sanitaire)",
        questions: [
          { q: "Que signifie ECS ?", options: ["Électricité Chaude Sécurisée", "Élément de Chauffe Standard", "Espace Chauffage Solaire", "Eau Chaude Sanitaire"], correct: 3, exp: "ECS = Eau Chaude Sanitaire." },
          { q: "Quel appareil électrique produit couramment l'ECS dans un logement ?", options: ["Le transformateur", "Le chauffe-eau électrique (cumulus)", "Le télérupteur", "Le disjoncteur"], correct: 1, exp: "Le chauffe-eau électrique (cumulus) chauffe l'eau sanitaire." },
          { q: "Sur quel type de tarif fonctionne souvent le chauffe-eau électrique pour optimiser les coûts ?", options: ["Tarif Heures Creuses / Heures Pleines", "Tarif unique obligatoire", "Tarif vert uniquement", "Aucun tarif spécifique"], correct: 0, exp: "Le chauffe-eau est souvent programmé sur les heures creuses, moins coûteuses." },
          { q: "Quel dispositif permet de piloter le chauffe-eau selon les heures creuses ?", options: ["Un télérupteur uniquement", "Un contacteur jour/nuit (HC/HP)", "Un fusible", "Une prise de courant simple"], correct: 1, exp: "Le contacteur jour/nuit active le chauffe-eau pendant les heures creuses." }
        ]
      },
      {
        nom: "Montage Contacteur HC / HP",
        questions: [
          { q: "Que signifie HC/HP ?", options: ["Heures Creuses / Heures Pleines", "Haute Consommation / Haute Puissance", "Habilitation Chargé / Habilitation Personnel", "Haute Capacité / Haute Précision"], correct: 0, exp: "HC/HP = Heures Creuses / Heures Pleines." },
          { q: "Quel signal reçoit le contacteur jour/nuit pour commuter entre HC et HP ?", options: ["Aucun signal, il est manuel uniquement", "Un signal lumineux visible", "Un signal sonore", "Un signal tarifaire envoyé par le compteur/fournisseur"], correct: 3, exp: "Le contacteur reçoit un signal (fil pilote ou signal du compteur) indiquant le changement tarifaire." },
          { q: "Quel type de charge est couramment piloté par un contacteur HC/HP ?", options: ["Uniquement les prises de courant", "Le chauffe-eau électrique et parfois le chauffage", "Le portail automatique", "Uniquement l'éclairage"], correct: 1, exp: "Le chauffe-eau et le chauffage sont typiquement pilotés selon les heures creuses." },
          { q: "Un contacteur jour/nuit possède généralement combien de bornes de puissance principales ?", options: ["1", "2", "4 (bobine + contact de puissance)", "8"], correct: 2, exp: "Il comporte des bornes de bobine de commande et des bornes de contact de puissance." }
        ]
      }
    ]
  },
  {
    semaine: 5, periode: "P2", theme: "Réaliser l'alimentation en courants forts d'une installation monophasée", emoji: "🌍",
    topics: [
      {
        nom: "Prise de terre",
        questions: [
          { q: "Quel est le rôle de la prise de terre dans une installation électrique ?", options: ["Écouler les courants de défaut vers la terre et assurer la sécurité des personnes", "Alimenter les appareils", "Réduire la consommation électrique", "Éclairer le logement"], correct: 0, exp: "La prise de terre écoule les courants de défaut et protège les personnes." },
          { q: "Quel dispositif est couramment utilisé pour réaliser une prise de terre neuve dans le sol ?", options: ["Une ampoule", "Un piquet de terre", "Une gaine ICTA", "Un disjoncteur"], correct: 1, exp: "Le piquet de terre enfoncé dans le sol constitue une prise de terre courante." },
          { q: "Quelle est l'unité de mesure de la résistance de la prise de terre ?", options: ["Ampère", "Ohm", "Watt", "Volt"], correct: 1, exp: "La résistance de terre se mesure en ohms." },
          { q: "Une résistance de terre trop élevée peut-elle compromettre la sécurité des personnes ?", options: ["Non, jamais", "Oui, car la tension de contact en cas de défaut pourrait dépasser les seuils de sécurité", "Seulement en triphasé", "Cela n'a aucun rapport avec la sécurité"], correct: 1, exp: "Une résistance trop élevée peut entraîner une tension de contact dangereuse en cas de défaut." }
        ]
      },
      {
        nom: "Amélioration de la prise de terre",
        questions: [
          { q: "Quelle technique permet d'améliorer (diminuer) la résistance d'une prise de terre existante ?", options: ["Retirer le piquet", "Peindre le piquet", "Ajouter des piquets de terre supplémentaires reliés en parallèle", "Augmenter la section du câble uniquement"], correct: 2, exp: "Ajouter des piquets en parallèle réduit la résistance globale de la prise de terre." },
          { q: "Quel facteur du sol influence fortement la résistance de la prise de terre ?", options: ["L'humidité et la nature (résistivité) du sol", "La température de l'air", "Le nombre de prises de courant", "La couleur du sol"], correct: 0, exp: "L'humidité et la résistivité du sol influencent directement la résistance de terre." },
          { q: "Quel matériau de piquet de terre est couramment utilisé pour sa résistance à la corrosion ?", options: ["Bois", "Acier galvanisé ou cuivre", "Verre", "Plastique"], correct: 1, exp: "L'acier galvanisé ou le cuivre résistent bien à la corrosion dans le sol." },
          { q: "Ajouter un conducteur en boucle à fond de fouille peut-il améliorer la prise de terre ?", options: ["Non, jamais", "Oui, c'est une méthode courante lors de la construction", "Cela dégrade toujours la prise de terre", "Cela n'a aucun effet"], correct: 1, exp: "Le conducteur en boucle à fond de fouille, posé à la construction, est une méthode efficace." }
        ]
      },
      {
        nom: "Mesurage de la prise de terre",
        questions: [
          { q: "Quel appareil permet de mesurer la résistance d'une prise de terre ?", options: ["Un ampèremètre simple", "Un télurmètre (contrôleur de terre)", "Un fusible", "Un voltmètre simple"], correct: 1, exp: "Le télurmètre est spécifiquement conçu pour mesurer la résistance de terre." },
          { q: "Quelle méthode de mesure de terre utilise deux piquets auxiliaires enfoncés dans le sol ?", options: ["La méthode du fusible", "La méthode Ohm simple", "La méthode du disjoncteur", "La méthode des 62%"], correct: 3, exp: "La méthode des 62% (ou méthode volt-ampèremétrique) utilise des piquets auxiliaires." },
          { q: "Pourquoi mesure-t-on régulièrement la prise de terre ?", options: ["Pour s'assurer qu'elle reste efficace dans le temps", "Pour changer la couleur des fils", "Uniquement par curiosité", "Ce n'est jamais nécessaire"], correct: 0, exp: "La résistance de terre peut évoluer (corrosion, sécheresse), d'où l'intérêt d'un contrôle régulier." },
          { q: "Une valeur de résistance de terre plus faible est-elle généralement préférable ?", options: ["Uniquement en triphasé", "Non, plus elle est haute mieux c'est", "Cela n'a aucune importance", "Oui, une résistance plus faible limite la tension de contact en cas de défaut"], correct: 3, exp: "Une résistance faible limite la tension de contact dangereuse en cas de défaut d'isolement." }
        ]
      },
      {
        nom: "Le Parafoudre",
        questions: [
          { q: "Quel est le rôle d'un parafoudre dans une installation électrique ?", options: ["Produire de l'électricité", "Remplacer le disjoncteur", "Éclairer le tableau électrique", "Protéger les équipements contre les surtensions transitoires"], correct: 3, exp: "Le parafoudre protège les équipements contre les surtensions (foudre, coupures)." },
          { q: "Où installe-t-on généralement un parafoudre ?", options: ["Dans chaque prise de courant", "En tête d'installation, dans le tableau électrique", "Uniquement à l'extérieur du bâtiment", "Sur chaque ampoule"], correct: 1, exp: "Le parafoudre s'installe en tête d'installation, dans le tableau électrique." },
          { q: "Dans quel cas l'installation d'un parafoudre est-elle obligatoire en France ?", options: ["Uniquement pour les circuits d'éclairage", "Uniquement dans les appartements", "Jamais obligatoire", "Notamment si le bâtiment est équipé d'un paratonnerre ou selon le niveau kéraunique de la zone"], correct: 3, exp: "L'obligation dépend notamment de la présence d'un paratonnerre ou du niveau kéraunique local." },
          { q: "Un parafoudre remplace-t-il un disjoncteur différentiel ?", options: ["Le parafoudre est obsolète", "Ils ont exactement la même fonction", "Non, il a une fonction complémentaire différente", "Oui, totalement"], correct: 2, exp: "Le parafoudre protège contre les surtensions, le différentiel contre les fuites de courant : fonctions différentes." }
        ]
      },
      {
        nom: "Indices de protection",
        questions: [
          { q: "Que signifie l'indice IP d'un matériel électrique ?", options: ["Indice de Précision", "Indice de Puissance", "Indice de Prix", "Indice de Protection contre les corps solides et les liquides"], correct: 3, exp: "L'indice IP indique le degré de protection contre les corps solides et les liquides." },
          { q: "Dans un indice IP44, que signifie le premier chiffre (4) ?", options: ["Le poids du matériel", "Protection contre les liquides", "La tension supportée", "Protection contre les corps solides supérieurs à 1mm"], correct: 3, exp: "Le premier chiffre de l'IP concerne la protection contre les corps solides." },
          { q: "Dans un indice IP44, que signifie le second chiffre (4) ?", options: ["Protection contre les projections d'eau dans toutes les directions", "La couleur du boîtier", "La puissance maximale", "Protection contre les corps solides"], correct: 0, exp: "Le second chiffre de l'IP concerne la protection contre les liquides." },
          { q: "Que signifie l'indice IK d'un matériel électrique ?", options: ["Indice de courant", "Indice de protection contre l'eau", "Indice de résistance aux chocs mécaniques", "Indice de kilowattheure"], correct: 2, exp: "L'indice IK indique la résistance du matériel aux chocs mécaniques." }
        ]
      },
      {
        nom: "Les classes d'isolation du matériel",
        questions: [
          { q: "Un appareil de classe I possède quelle caractéristique de sécurité ?", options: ["Une mise à la terre obligatoire de ses parties métalliques accessibles", "Une alimentation en très basse tension uniquement", "Une double isolation sans besoin de terre", "Aucune protection"], correct: 0, exp: "La classe I impose la mise à la terre des parties métalliques accessibles." },
          { q: "Un appareil de classe II est reconnaissable par quel symbole ?", options: ["Un double carré (double isolation)", "Un cercle bleu", "Un triangle jaune", "Une croix rouge"], correct: 0, exp: "Le symbole du double carré indique une double isolation (classe II)." },
          { q: "Un appareil de classe III fonctionne sous quelle tension ?", options: ["Aucune tension définie", "400 V triphasé", "230 V standard", "Très Basse Tension de Sécurité (TBTS), généralement ≤ 50V"], correct: 3, exp: "La classe III fonctionne en TBTS, tension généralement inférieure ou égale à 50V." },
          { q: "Pourquoi les appareils de classe II ne nécessitent-ils pas de conducteur de terre ?", options: ["Parce qu'ils sont sous-dimensionnés", "Ce n'est pas vrai, ils en ont toujours besoin", "Parce que leur double isolation empêche tout contact avec une partie sous tension en cas de défaut", "Parce qu'ils ne sont jamais reliés au secteur"], correct: 2, exp: "La double isolation supprime le risque de mise sous tension accidentelle des parties accessibles." }
        ]
      },
      {
        nom: "Les volumes de salle de bain",
        questions: [
          { q: "Combien de volumes de sécurité sont définis dans une salle de bain selon la NF C 15-100 ?", options: ["6 volumes", "2 (volumes 0 et 1)", "1 seul volume global", "4 (volumes 0, 1, 2 et hors volume)"], correct: 3, exp: "La norme définit 4 zones : volumes 0, 1, 2 et hors volume." },
          { q: "Que correspond le volume 0 dans une salle de bain ?", options: ["Uniquement le plafond", "Toute la pièce", "L'intérieur de la baignoire ou du receveur de douche", "L'extérieur de la salle de bain"], correct: 2, exp: "Le volume 0 est l'intérieur du récipient (baignoire, receveur de douche)." },
          { q: "Quel matériel électrique est autorisé dans le volume 0 ?", options: ["Un chauffe-eau classique", "Un tableau électrique complet", "Toutes les prises de courant standard", "Aucune prise de courant, uniquement du matériel TBTS très limité"], correct: 3, exp: "Le volume 0 exclut les prises classiques ; seul du matériel TBTS très spécifique est envisageable." },
          { q: "Dans quel volume peut-on généralement installer une prise de courant classique en salle de bain ?", options: ["Volume 0", "Volume 1", "Nulle part", "Hors volume"], correct: 3, exp: "Les prises classiques sont installées hors volume (volume 3 selon anciennes appellations)." }
        ]
      }
    ]
  },
  {
    semaine: 6, periode: "P2", theme: "Réaliser l'alimentation en courants forts d'une installation monophasée", emoji: "🏢",
    topics: [
      {
        nom: "Montage Interrupteur horaire",
        questions: [
          { q: "Quelle est la fonction principale d'un interrupteur horaire (horloge programmable) ?", options: ["Protéger contre les surintensités", "Allumer/éteindre un circuit automatiquement selon des plages horaires programmées", "Mesurer la tension", "Détecter une fuite de courant"], correct: 1, exp: "L'interrupteur horaire commute selon un programme horaire préréglé." },
          { q: "Quel type d'application utilise couramment un interrupteur horaire ?", options: ["Uniquement les prises de courant de cuisine", "Uniquement les circuits de terre", "Éclairage extérieur, chauffe-eau, portail automatique", "Aucune application pratique"], correct: 2, exp: "L'interrupteur horaire est utilisé pour de nombreux usages programmés (éclairage, chauffe-eau...)." },
          { q: "Un interrupteur horaire nécessite-t-il d'être réglé à l'heure réelle pour fonctionner correctement ?", options: ["Oui, sinon les plages horaires programmées seront décalées", "Non, ce n'est jamais nécessaire", "Cela n'affecte pas son fonctionnement", "Il se règle tout seul sans jamais d'intervention"], correct: 0, exp: "Un mauvais réglage de l'heure décale les plages de commutation programmées." },
          { q: "Quelle est la différence entre une minuterie et un interrupteur horaire ?", options: ["La minuterie fonctionne uniquement le jour", "La minuterie temporise une courte durée après une impulsion, l'horaire suit un programme journalier/hebdomadaire", "L'interrupteur horaire ne fonctionne qu'une fois", "Aucune différence"], correct: 1, exp: "La minuterie est une temporisation courte, l'horaire suit un programme calendaire." }
        ]
      },
      {
        nom: "Montage Yokis",
        questions: [
          { q: "Que permet la technologie Yokis dans une installation électrique ?", options: ["Mesurer la résistance de terre", "Remplacer entièrement le tableau électrique", "Produire de l'électricité", "Piloter l'éclairage et les volets sans fil, via radio, en complément du câblage existant"], correct: 3, exp: "Yokis permet le pilotage radio de l'éclairage/volets sans tirer de nouveaux câbles de commande." },
          { q: "Sur quel principe de communication reposent les modules Yokis ?", options: ["Fibre optique", "Bluetooth uniquement", "Câble coaxial uniquement", "Communication radio bidirectionnelle"], correct: 3, exp: "Les modules Yokis communiquent par radio bidirectionnelle." },
          { q: "Quel est l'avantage des modules Yokis en rénovation ?", options: ["Ils ne fonctionnent qu'en construction neuve", "Ils permettent d'ajouter du pilotage à distance sans tirer de nouveaux câbles de commande", "Il faut casser tous les murs pour les installer", "Ils remplacent la prise de terre"], correct: 1, exp: "En rénovation, cela évite de tirer de nouveaux câbles de commande grâce au radio." },
          { q: "Un module Yokis de puissance se raccorde généralement où ?", options: ["Uniquement à l'extérieur du bâtiment", "Il ne se raccorde jamais à l'installation", "Directement en encastré au point lumineux ou dans le tableau", "Sur le compteur uniquement"], correct: 2, exp: "Le module se place typiquement en encastré au point lumineux ou dans le tableau électrique." }
        ]
      },
      {
        nom: "Le transformateur",
        questions: [
          { q: "Quel est le rôle principal d'un transformateur ?", options: ["Modifier une tension alternative en une autre tension alternative", "Mesurer une intensité", "Convertir le courant alternatif en courant continu", "Protéger contre les courts-circuits"], correct: 0, exp: "Le transformateur modifie le niveau d'une tension alternative." },
          { q: "Un transformateur fonctionne-t-il en courant continu ?", options: ["Oui parfaitement", "Il ne fonctionne jamais", "Peu importe le type de courant", "Non, il nécessite un courant alternatif pour créer une variation de flux magnétique"], correct: 3, exp: "Le transformateur exige un courant alternatif pour induire une tension au secondaire." },
          { q: "Si le nombre de spires au secondaire est inférieur à celui du primaire, le transformateur est dit :", options: ["Neutre", "Inversé", "Abaisseur", "Élévateur"], correct: 2, exp: "Moins de spires au secondaire qu'au primaire = transformateur abaisseur de tension." },
          { q: "Quel type de transformateur est utilisé pour alimenter des circuits en très basse tension de sécurité (TBTS) ?", options: ["Aucun transformateur n'est nécessaire", "Transformateur toroïdal uniquement pour l'audio", "Transformateur de sécurité (isolement galvanique)", "Un simple fusible suffit"], correct: 2, exp: "Un transformateur de sécurité assure l'isolement galvanique nécessaire à la TBTS." }
        ]
      },
      {
        nom: "Montage Sonnette (230 V - 12 V)",
        questions: [
          { q: "Pourquoi utilise-t-on un transformateur pour alimenter une sonnette en 12V ?", options: ["Pour produire du courant continu uniquement", "Pour augmenter la tension", "Ce n'est jamais nécessaire", "Pour abaisser la tension du secteur à une tension plus faible et sécurisée"], correct: 3, exp: "Le transformateur abaisse le 230V à 12V pour sécuriser le circuit de sonnette." },
          { q: "Le circuit côté 230V d'un montage sonnette doit-il être protégé par un disjoncteur ?", options: ["Uniquement en extérieur", "Oui, comme tout circuit alimenté en 230V", "Non, jamais", "Uniquement le week-end"], correct: 1, exp: "Le côté 230V reste soumis aux mêmes exigences de protection que tout circuit secteur." },
          { q: "Le bouton poussoir de sonnette est câblé sur quel côté du transformateur ?", options: ["Il n'est jamais câblé", "Le côté secondaire basse tension (12V)", "Sur la terre uniquement", "Le côté primaire 230V"], correct: 1, exp: "Le bouton poussoir est câblé côté secondaire, en basse tension sécurisée." },
          { q: "Quel est l'avantage de la basse tension (12V) pour le circuit de commande de la sonnette ?", options: ["Elle nécessite plus de protections", "Elle consomme plus d'énergie", "Une sécurité accrue et la possibilité d'utiliser des fils plus fins", "Aucun avantage particulier"], correct: 2, exp: "La basse tension réduit les risques et permet des conducteurs plus fins et moins isolés." }
        ]
      },
      {
        nom: "Diagnostic électrique (NF C 15-600)",
        questions: [
          { q: "Quel est l'objectif du diagnostic électrique selon la norme NF C 15-600 ?", options: ["Installer une nouvelle installation", "Remplacer le compteur uniquement", "Calculer la puissance souscrite", "Évaluer l'état de l'installation électrique d'un logement, notamment lors d'une vente"], correct: 3, exp: "Le diagnostic évalue l'état de sécurité de l'installation électrique existante." },
          { q: "Pour quel type de logement le diagnostic électrique est-il obligatoire lors d'une vente ?", options: ["Les installations électriques de plus de 15 ans", "Aucun logement n'est concerné", "Tous les logements sans exception d'ancienneté", "Uniquement les logements neufs"], correct: 0, exp: "Le diagnostic est obligatoire pour les installations électriques de plus de 15 ans lors d'une vente." },
          { q: "Quelle est la durée de validité d'un diagnostic électrique lors d'une vente ?", options: ["1 an", "Illimitée", "10 ans", "3 ans"], correct: 3, exp: "Le diagnostic électrique est valable 3 ans lors d'une vente." },
          { q: "Le diagnostic électrique vérifie notamment quel point de sécurité ?", options: ["La présence d'un dispositif différentiel adapté et l'état de la prise de terre", "Le prix de l'électricité", "La couleur de la peinture", "La marque des appareils électroménagers"], correct: 0, exp: "Le diagnostic contrôle notamment le différentiel, la prise de terre et le tableau électrique." }
        ]
      },
      {
        nom: "La colonne électrique d'immeuble",
        questions: [
          { q: "Qu'est-ce que la colonne électrique d'un immeuble ?", options: ["Une colonne décorative", "Le compteur individuel uniquement", "La liaison verticale entre le point de livraison et les différents logements", "Un poteau électrique extérieur"], correct: 2, exp: "La colonne électrique relie verticalement le point de livraison aux logements de l'immeuble." },
          { q: "Qui est généralement propriétaire/gestionnaire de la colonne électrique dans un immeuble collectif ?", options: ["Le gestionnaire de réseau de distribution ou la copropriété selon les cas", "Toujours l'État", "Chaque locataire individuellement", "Aucun gestionnaire"], correct: 0, exp: "La gestion revient au distributeur (ex: Enedis) ou à la copropriété selon les configurations." },
          { q: "Où se situent généralement les compteurs individuels alimentés par la colonne montante ?", options: ["Sur le toit uniquement", "En pied d'immeuble, en paliers ou en gaine technique selon la conception", "Il n'y a pas de compteurs individuels", "Dans chaque logement uniquement"], correct: 1, exp: "Les compteurs peuvent être en pied d'immeuble, aux paliers, ou en gaine technique." },
          { q: "Pourquoi la section des conducteurs de la colonne montante doit-elle être dimensionnée avec soin ?", options: ["Pour réduire le nombre de logements", "Pour supporter la puissance totale appelée par l'ensemble des logements desservis", "Ce n'est pas important", "Pour des raisons esthétiques"], correct: 1, exp: "La colonne doit supporter l'appel de puissance cumulé de tous les logements alimentés." }
        ]
      },
      {
        nom: "Circulation d'Immeuble à usage d'habitation",
        questions: [
          { q: "Quel type d'éclairage est couramment utilisé dans les circulations communes d'immeubles pour économiser l'énergie ?", options: ["Aucun éclairage n'est autorisé", "Éclairage permanent sans coupure", "Uniquement des bougies", "Éclairage temporisé (minuterie) ou détection de présence"], correct: 3, exp: "La minuterie ou la détection de présence limite la consommation dans les parties communes." },
          { q: "Que doit-on garantir en priorité dans les circulations communes d'un immeuble d'habitation ?", options: ["La décoration uniquement", "Le coût le plus bas possible sans autre critère", "Aucune règle spécifique", "La sécurité des occupants (éclairage, issues de secours, BAES si nécessaire)"], correct: 3, exp: "La sécurité (éclairage, évacuation) est prioritaire dans les parties communes." },
          { q: "Les blocs autonomes d'éclairage de sécurité (BAES) sont-ils obligatoires dans certaines circulations communes ?", options: ["Jamais obligatoires", "Uniquement dans les maisons individuelles", "Uniquement en journée", "Oui, selon la réglementation applicable aux parties communes concernées"], correct: 3, exp: "Les BAES sont requis dans certaines circulations communes selon la réglementation en vigueur." },
          { q: "Quel type de câblage est à privilégier dans les parties communes pour la sécurité incendie ?", options: ["N'importe quel câble", "Câbles et équipements respectant les exigences de comportement au feu", "Câbles standards sans exigence particulière", "Uniquement des fils nus"], correct: 1, exp: "Les parties communes exigent des câbles/équipements adaptés au risque incendie." }
        ]
      }
    ]
  },
  {
    semaine: 7, periode: "P3", theme: "Réaliser l'alimentation en courants forts d'une installation triphasée", emoji: "🔺",
    topics: [
      {
        nom: "Le courant Alternatif",
        questions: [
          { q: "Quelle est la fréquence du courant alternatif du réseau en France ?", options: ["60 Hz", "50 Hz", "25 Hz", "100 Hz"], correct: 1, exp: "Le réseau français fonctionne à une fréquence de 50 Hz." },
          { q: "Que représente la valeur efficace (RMS) d'une tension alternative sinusoïdale ?", options: ["La valeur maximale atteinte", "La valeur moyenne sur une période", "La valeur qui produirait le même effet thermique qu'une tension continue équivalente", "Une valeur arbitraire de mesure"], correct: 2, exp: "La valeur efficace correspond à l'équivalent continu produisant le même échauffement." },
          { q: "Quelle relation relie la valeur crête et la valeur efficace d'une tension sinusoïdale ?", options: ["Ucrête = Uefficace / √2", "Ucrête = 2 × Uefficace", "Ucrête = Uefficace × √2", "Ucrête = Uefficace"], correct: 2, exp: "Pour une sinusoïde, Ucrête = Uefficace × √2 (environ 1,414)." }
        ]
      },
      {
        nom: "Les bases et répartition du triphasé",
        questions: [
          { q: "Combien de phases comporte un réseau triphasé standard ?", options: ["3", "4", "1", "2"], correct: 0, exp: "Un réseau triphasé comporte 3 phases (plus éventuellement un neutre)." },
          { q: "Quel est le déphasage entre deux phases consécutives d'un système triphasé équilibré ?", options: ["120°", "60°", "90°", "180°"], correct: 0, exp: "Les trois phases sont décalées de 120° les unes par rapport aux autres." },
          { q: "En France, quelles sont les tensions typiques d'un réseau triphasé 230/400 V ?", options: ["400 V partout", "230 V entre phases et 400 V entre phase et neutre", "400 V entre phases et 230 V entre phase et neutre", "230 V partout"], correct: 2, exp: "On retrouve 400 V entre phases (tension composée) et 230 V entre phase et neutre (tension simple)." }
        ]
      },
      {
        nom: "Les différentes puissances (déphasage)",
        questions: [
          { q: "Que représente la puissance active (P), exprimée en watts ?", options: ["Une puissance fictive sans effet utile", "La puissance de court-circuit", "L'énergie réellement consommée/transformée par le récepteur", "La puissance des condensateurs uniquement"], correct: 2, exp: "La puissance active est la puissance réellement utilisée (chaleur, travail, lumière...)." },
          { q: "Que représente la puissance réactive (Q), exprimée en VAR ?", options: ["La puissance nominale du disjoncteur", "La puissance totale du circuit", "Une puissance perdue en chaleur uniquement", "L'énergie échangée avec les éléments inductifs/capacitifs sans être consommée"], correct: 3, exp: "La puissance réactive circule sans être consommée, liée aux bobinages et condensateurs." },
          { q: "Que représente le facteur de puissance (cos φ) ?", options: ["Le rapport entre puissance active et puissance apparente", "Le rendement d'un moteur", "La fréquence du réseau", "La tension du réseau"], correct: 0, exp: "Cos φ = P / S, il indique la part utile de la puissance apparente." }
        ]
      },
      {
        nom: "Les schémas de liaison à la terre",
        questions: [
          { q: "Que signifie le régime de neutre TT ?", options: ["Aucune liaison à la terre", "Neutre isolé, masses reliées à la terre", "Neutre relié à la terre, masses reliées à une prise de terre", "Neutre et masses reliés au même point"], correct: 2, exp: "En régime TT, le neutre est relié à la terre côté source, et les masses à une terre distincte." },
          { q: "Quel est le régime de neutre le plus répandu dans les installations domestiques françaises ?", options: ["IT", "TT", "TN-C", "TN-S"], correct: 1, exp: "Le régime TT est le régime par défaut de la distribution publique en France." },
          { q: "Dans le régime IT, comment le neutre est-il relié à la terre ?", options: ["Il n'existe pas de neutre en IT", "Il est isolé de la terre ou relié via une forte impédance", "Directement, sans impédance", "Il est relié aux masses"], correct: 1, exp: "En régime IT, le neutre est isolé de la terre (ou couplé via une impédance), ce qui limite le courant de défaut." }
        ]
      }
    ]
  },
  {
    semaine: 8, periode: "P3", theme: "Réaliser l'alimentation en courants forts d'une installation triphasée", emoji: "🚨",
    topics: [
      {
        nom: "Les dispositifs d'arrêt d'urgence",
        questions: [
          { q: "Quel est le rôle principal d'un dispositif d'arrêt d'urgence ?", options: ["Optimiser la consommation d'énergie", "Couper rapidement l'alimentation en cas de situation dangereuse", "Mesurer la puissance appelée", "Programmer les horaires de fonctionnement"], correct: 1, exp: "L'arrêt d'urgence permet une coupure rapide de l'énergie pour protéger les personnes et le matériel." },
          { q: "Un bouton d'arrêt d'urgence doit-il être à réarmement manuel ?", options: ["Non, jamais", "Seulement en extérieur", "Oui, pour éviter tout redémarrage accidentel après la coupure", "Cela dépend uniquement de la couleur du bouton"], correct: 2, exp: "Le réarmement manuel évite qu'une installation redémarre seule après un arrêt d'urgence." },
          { q: "Où doit-on privilégier l'implantation d'un arrêt d'urgence ?", options: ["Uniquement au tableau électrique principal", "À proximité des zones dangereuses, facilement accessible", "Dans un local fermé à clé", "En hauteur, hors de portée"], correct: 1, exp: "L'arrêt d'urgence doit être accessible rapidement près des zones à risque." }
        ]
      },
      {
        nom: "Montage Bobines (MN et MX)",
        questions: [
          { q: "Que déclenche un déclencheur MX (émission de tension) ?", options: ["Il régule la tension du réseau", "Il ferme le disjoncteur automatiquement", "Il ne fait rien sans courant", "Il ouvre le disjoncteur lorsqu'il reçoit une tension de commande"], correct: 3, exp: "Le déclencheur MX provoque l'ouverture du disjoncteur dès réception d'une tension de commande (ex: bouton d'arrêt d'urgence)." },
          { q: "Que fait un déclencheur MN (à manque de tension) si sa bobine n'est plus alimentée ?", options: ["Il reste indifférent", "Il ouvre le disjoncteur (sécurité positive)", "Il ferme le disjoncteur", "Il augmente le calibre du disjoncteur"], correct: 1, exp: "Le MN ouvre le disjoncteur dès que sa bobine n'est plus alimentée : c'est une sécurité positive." },
          { q: "Quelle est la différence essentielle entre une bobine MN et une bobine MX ?", options: ["Aucune différence", "MN déclenche par absence de tension, MX déclenche par présence de tension de commande", "MN est pour le triphasé, MX pour le monophasé uniquement", "MX est toujours plus puissante que MN"], correct: 1, exp: "MN = déclenchement par manque de tension ; MX = déclenchement par émission (ajout) de tension." }
        ]
      },
      {
        nom: "Les BAES - BAEH",
        questions: [
          { q: "Que signifie le sigle BAES ?", options: ["Bloc Autonome d'Éclairage de Sécurité", "Bloc Automatique d'Économie de Sécurité", "Boîtier d'Alimentation Électrique Standard", "Bornier d'Arrivée Électrique Standard"], correct: 0, exp: "BAES = Bloc Autonome d'Éclairage de Sécurité." },
          { q: "Quelle est la fonction principale d'un BAES ?", options: ["Décorer les circulations", "Remplacer l'éclairage normal en permanence", "Assurer l'éclairage d'évacuation en cas de coupure du courant normal", "Alimenter les prises de courant"], correct: 2, exp: "Le BAES prend le relais pour éclairer les issues et voies d'évacuation lors d'une coupure secteur." },
          { q: "Que signifie le sigle BAEH ?", options: ["Boîtier Automatique d'Éclairage Hors-service", "Bornier d'Arrivée Électrique Habitation", "Bloc Autonome d'Éclairage d'Habitation", "Bloc d'Alarme et d'Éclairage Horaire"], correct: 2, exp: "BAEH = Bloc Autonome d'Éclairage d'Habitation, utilisé dans les circulations des immeubles d'habitation." }
        ]
      },
      {
        nom: "Montage BAES",
        questions: [
          { q: "Comment un BAES est-il alimenté en fonctionnement normal ?", options: ["Il n'est jamais alimenté", "Par le réseau triphasé exclusivement", "Par le circuit d'éclairage normal, ce qui permet aussi de recharger sa batterie", "Uniquement par une pile changée manuellement"], correct: 2, exp: "L'alimentation permanente par le circuit normal permet la recharge continue de la batterie du BAES." },
          { q: "Un BAES doit-il s'allumer automatiquement en cas de coupure secteur ?", options: ["Oui, c'est sa fonction de secours automatique", "Non, il faut l'allumer manuellement", "Seulement la nuit", "Seulement si on appuie sur un bouton test"], correct: 0, exp: "Le passage en éclairage de sécurité doit être automatique dès la coupure de l'alimentation normale." },
          { q: "Quelle est la source d'énergie d'un BAES lors d'une coupure secteur ?", options: ["Un groupe électrogène externe", "Sa batterie interne rechargeable", "Le réseau de secours de l'immeuble", "Aucune, il s'éteint"], correct: 1, exp: "Le BAES fonctionne alors sur sa propre batterie rechargeable intégrée." }
        ]
      },
      {
        nom: "Montage Détecteur de mouvement",
        questions: [
          { q: "Sur quel principe fonctionne un détecteur de mouvement infrarouge passif (PIR) ?", options: ["Il émet un ultrason et mesure l'écho", "Il mesure le niveau sonore ambiant", "Il analyse une image vidéo", "Il détecte les variations de rayonnement infrarouge (chaleur) dans son champ de détection"], correct: 3, exp: "Le PIR détecte les variations de chaleur/infrarouge causées par un déplacement dans son champ." },
          { q: "Quel est l'avantage principal d'un détecteur de mouvement associé à l'éclairage ?", options: ["Une économie d'énergie en n'allumant qu'en cas de présence", "Il augmente la puissance de la lampe", "Aucun avantage réel", "Il remplace l'interrupteur différentiel"], correct: 0, exp: "L'éclairage ne s'active qu'en présence, ce qui limite la consommation inutile." },
          { q: "Peut-on régler la temporisation et la sensibilité d'un détecteur de mouvement ?", options: ["Non, ils sont figés en usine", "Seulement en usine par le fabricant", "Oui, généralement via des potentiomètres ou réglages dédiés", "Uniquement via une télécommande obligatoire"], correct: 2, exp: "La plupart des détecteurs proposent des réglages de temporisation, sensibilité et seuil de luminosité." }
        ]
      }
    ]
  },
  {
    semaine: 9, periode: "P4", theme: "Réaliser l'alimentation en courants forts d'une installation triphasée", emoji: "🛤️",
    topics: [
      {
        nom: "Les ERP et ERT",
        questions: [
          { q: "Que signifie le sigle ERP ?", options: ["Espace Réservé au Personnel", "Établissement Recevant du Public", "Établissement à Risque Particulier", "Équipement Réglementaire de Protection"], correct: 1, exp: "ERP = Établissement Recevant du Public (magasins, écoles, salles de sport...)." },
          { q: "Que signifie le sigle ERT ?", options: ["Établissement Recevant des Travailleurs", "Espace Réservé aux Techniciens", "Équipement de Régulation Thermique", "Établissement Rural Traditionnel"], correct: 0, exp: "ERT = Établissement Recevant des Travailleurs (bureaux, ateliers...)." },
          { q: "Selon quels critères principaux les ERP sont-ils classés ?", options: ["Le type d'activité et la catégorie liée à l'effectif accueilli", "Uniquement la surface au sol", "La couleur de la façade", "Le nombre d'étages uniquement"], correct: 0, exp: "Les ERP sont classés par type (activité) et par catégorie selon l'effectif public/personnel accueilli." }
        ]
      },
      {
        nom: "Les goulottes tertiaires",
        questions: [
          { q: "Quel est l'usage principal des goulottes tertiaires ?", options: ["Le chauffage des bureaux", "La ventilation des locaux", "Le cheminement et la protection des câbles en apparent dans les locaux tertiaires", "L'éclairage de secours"], correct: 2, exp: "Les goulottes protègent et guident les câbles en apparent, notamment dans les bureaux." },
          { q: "Les goulottes tertiaires permettent-elles de séparer courants forts et courants faibles ?", options: ["Uniquement à l'extérieur", "Uniquement si elles sont métalliques", "Non, jamais", "Oui, grâce à des compartiments séparés"], correct: 3, exp: "Des compartiments séparés dans la goulotte évitent les perturbations entre courants forts et faibles." },
          { q: "En quel matériau sont le plus souvent fabriquées les goulottes tertiaires ?", options: ["PVC ou matière plastique", "Verre", "Bois", "Béton"], correct: 0, exp: "Le PVC (ou plastique) est le matériau le plus courant pour les goulottes tertiaires." }
        ]
      },
      {
        nom: "Les chemins de câbles",
        questions: [
          { q: "Quel est le rôle d'un chemin de câbles ?", options: ["Protéger contre la foudre", "Remplacer les disjoncteurs", "Isoler thermiquement un local", "Supporter et cheminer plusieurs câbles électriques de façon organisée"], correct: 3, exp: "Le chemin de câbles offre un support organisé et sécurisé pour le cheminement de nombreux câbles." },
          { q: "Sous quelles formes peut-on trouver des chemins de câbles ?", options: ["Dalle métallique, treillis (fil), tôle perforée...", "Uniquement en dalle pleine", "Uniquement souples", "Uniquement en tube IRL"], correct: 0, exp: "Il existe plusieurs types : dalle marine, treillis soudé, tôle perforée, etc." },
          { q: "Pourquoi respecter un taux de remplissage maximal sur un chemin de câbles ?", options: ["Ce n'est pas une exigence", "Pour réduire le poids total", "Pour permettre la dissipation thermique et l'ajout futur de câbles", "Pour des raisons esthétiques uniquement"], correct: 2, exp: "Un taux de remplissage raisonnable évite l'échauffement excessif et laisse de la place pour l'avenir." }
        ]
      },
      {
        nom: "Façonnage des chemins de câbles",
        questions: [
          { q: "Quel outil sert typiquement à couper une tôle de chemin de câbles ?", options: ["Une cisaille ou une grignoteuse", "Un tournevis plat", "Une pince à dénuder", "Un multimètre"], correct: 0, exp: "La cisaille (ou grignoteuse) permet de découper proprement la tôle du chemin de câbles." },
          { q: "Pourquoi ébavurer les découpes réalisées sur un chemin de câbles ?", options: ["Pour améliorer l'esthétique uniquement", "Ce n'est jamais nécessaire", "Pour éviter d'endommager la gaine des câbles lors de la pose", "Pour réduire le poids"], correct: 2, exp: "Des bords non ébavurés peuvent couper ou abîmer l'isolant des câbles posés dessus." },
          { q: "Comment assemble-t-on généralement deux tronçons de chemin de câbles ?", options: ["Par soudure obligatoire", "Par éclisses et boulonnerie appropriées", "Avec du ruban adhésif", "Par simple emboîtement sans fixation"], correct: 1, exp: "Des éclisses fixées par boulons assurent la continuité mécanique (et souvent électrique) entre tronçons." }
        ]
      },
      {
        nom: "Montage OF - SD",
        questions: [
          { q: "Pourquoi obture-t-on les traversées de parois traversées par des chemins de câbles ?", options: ["Ce n'est jamais nécessaire", "Pour rétablir le degré coupe-feu de la paroi traversée", "Pour économiser des câbles", "Pour des raisons esthétiques uniquement"], correct: 1, exp: "Un obturateur coupe-feu rétablit la résistance au feu de la paroi percée pour le passage des câbles." },
          { q: "À quoi sert un séparateur dans un chemin de câbles ?", options: ["À servir de mise à la terre", "À supporter le poids total du chemin de câbles", "À séparer physiquement différents types de circuits (ex : courants forts / courants faibles)", "À remplacer les couvercles"], correct: 2, exp: "Le séparateur cloisonne le chemin de câbles pour éviter les perturbations entre circuits différents." },
          { q: "Que doit-on vérifier après la pose d'un obturateur coupe-feu ?", options: ["Rien de particulier", "Uniquement la couleur de l'obturateur", "Que le câble a été retiré", "Que le degré de résistance au feu annoncé correspond bien à celui exigé pour la paroi traversée"], correct: 3, exp: "L'obturateur doit garantir le degré coupe-feu (ex : CF 1h, 2h) requis par la réglementation du local." }
        ]
      }
    ]
  },
  {
    semaine: 10, periode: "P4", theme: "Réaliser l'alimentation en courants forts d'une installation triphasée", emoji: "💡",
    topics: [
      {
        nom: "Sertissage et manchonnage des conducteurs",
        questions: [
          { q: "Quel est l'intérêt du sertissage par rapport à une simple torsion de fils ?", options: ["Cela coûte toujours plus cher sans bénéfice", "Aucun intérêt particulier", "Cela remplace la protection différentielle", "Un contact électrique fiable et une tenue mécanique solide, limitant l'échauffement"], correct: 3, exp: "Le sertissage assure un contact durable et limite les points chauds liés à un mauvais contact." },
          { q: "Qu'est-ce qu'un manchon de raccordement ?", options: ["Un type de câble souple", "Une pièce permettant de relier deux conducteurs bout à bout de façon sûre", "Un type de disjoncteur", "Un outil de mesure"], correct: 1, exp: "Le manchon assure une jonction fiable entre deux conducteurs mis bout à bout." },
          { q: "Pourquoi utiliser une pince à sertir adaptée à la section du conducteur ?", options: ["Pour aller plus vite uniquement", "Ce n'est pas important", "Pour respecter la couleur du fil", "Pour garantir une compression correcte et un raccordement fiable"], correct: 3, exp: "Une pince adaptée à la section garantit une compression optimale du serrage/raccordement." }
        ]
      },
      {
        nom: "Le presse étoupe",
        questions: [
          { q: "Quelle est la fonction principale d'un presse-étoupe ?", options: ["Assurer l'étanchéité et le maintien mécanique d'un câble à l'entrée d'un boîtier", "Protéger contre la foudre", "Mesurer la tension d'un circuit", "Couper le courant en cas de défaut"], correct: 0, exp: "Le presse-étoupe maintient le câble et assure son étanchéité à la traversée d'une paroi de boîtier." },
          { q: "Le choix du presse-étoupe dépend principalement de quel paramètre du câble ?", options: ["Le nombre de conducteurs uniquement", "Sa couleur", "Son diamètre extérieur", "Sa longueur totale"], correct: 2, exp: "Le presse-étoupe doit être choisi selon le diamètre extérieur du câble à traverser." },
          { q: "Un presse-étoupe participe-t-il à la protection IP d'une armoire ?", options: ["Uniquement à l'intérieur des bâtiments", "Il ne concerne que la protection incendie", "Non, jamais", "Oui, il contribue à l'indice de protection contre l'eau et la poussière"], correct: 3, exp: "Un presse-étoupe bien choisi et serré contribue à maintenir l'indice IP de l'enveloppe." }
        ]
      },
      {
        nom: "L'armoire de distribution",
        questions: [
          { q: "Quel est le rôle principal d'une armoire de distribution ?", options: ["Répartir l'énergie électrique vers les différents départs/circuits", "Stocker des outils", "Produire de l'électricité", "Filtrer l'eau du réseau"], correct: 0, exp: "L'armoire de distribution centralise l'arrivée et répartit l'énergie vers les circuits en aval." },
          { q: "Que doit comporter une armoire de distribution en termes de repérage ?", options: ["Aucun repérage n'est nécessaire", "Uniquement un logo du fabricant", "Un repérage clair des circuits/départs (étiquetage)", "Un simple numéro de série"], correct: 2, exp: "Un étiquetage clair facilite la maintenance et l'identification rapide des circuits." },
          { q: "Pourquoi laisser une réserve d'emplacements libres dans une armoire ?", options: ["Ce n'est jamais recommandé", "Pour économiser du câble", "Pour respecter uniquement l'esthétique", "Pour permettre des évolutions futures de l'installation"], correct: 3, exp: "Une réserve permet d'ajouter facilement de nouveaux circuits sans changer l'armoire." }
        ]
      },
      {
        nom: "La chute de tension",
        questions: [
          { q: "Qu'est-ce que la chute de tension dans un circuit électrique ?", options: ["Une panne totale du circuit", "La différence de tension entre le départ et l'arrivée du circuit, due à la résistance des conducteurs", "Le courant de court-circuit", "Une surtension ponctuelle"], correct: 1, exp: "La chute de tension résulte de la résistance des conducteurs qui dissipe une partie de la tension." },
          { q: "Quels facteurs influencent principalement la chute de tension d'un câble ?", options: ["Le prix du câble", "Sa couleur et sa marque", "Sa longueur, sa section et le courant transporté", "La température de la pièce uniquement"], correct: 2, exp: "Plus le câble est long et fin, et plus le courant est élevé, plus la chute de tension augmente." },
          { q: "Pourquoi limiter la chute de tension admissible dans une installation ?", options: ["Pour garantir le bon fonctionnement des récepteurs en bout de ligne", "Ce n'est pas une exigence normative", "Pour réduire uniquement le coût du câble", "Pour éviter de peindre les câbles"], correct: 0, exp: "Une chute de tension excessive peut nuire au fonctionnement correct des récepteurs (moteurs, éclairages...)." }
        ]
      },
      {
        nom: "Les caractéristiques des éclairages",
        questions: [
          { q: "Que mesure le flux lumineux d'une source, exprimé en lumens ?", options: ["La tension d'alimentation de la lampe", "La durée de vie de l'ampoule", "La quantité totale de lumière émise par la source", "La chaleur dégagée"], correct: 2, exp: "Le flux lumineux (lm) quantifie la lumière totale émise par une source." },
          { q: "Que représente la température de couleur d'une lampe, exprimée en Kelvin ?", options: ["La teinte de la lumière émise (chaude, neutre, froide)", "Sa puissance en watts", "Sa durée de vie", "Sa consommation électrique"], correct: 0, exp: "La température de couleur indique si la lumière paraît chaude (jaune) ou froide (bleutée)." },
          { q: "Que représente l'IRC (Indice de Rendu des Couleurs) ?", options: ["La capacité d'une source à restituer fidèlement les couleurs des objets éclairés", "La puissance lumineuse maximale", "Le prix de la lampe", "La résistance aux chocs de l'ampoule"], correct: 0, exp: "Un IRC élevé (proche de 100) restitue les couleurs de façon plus fidèle à la lumière naturelle." }
        ]
      },
      {
        nom: "Les sources d'éclairages",
        questions: [
          { q: "Quel est l'avantage principal des LED par rapport aux lampes à incandescence ?", options: ["Un prix d'achat toujours plus bas", "Une lumière toujours plus faible", "Une chaleur dégagée plus importante", "Une consommation d'énergie et une durée de vie bien supérieures"], correct: 3, exp: "Les LED consomment beaucoup moins et durent bien plus longtemps que l'incandescence." },
          { q: "Sur quel principe fonctionnent les tubes fluorescents ?", options: ["Une décharge dans un gaz produisant des UV convertis en lumière visible par une poudre fluorescente", "Un filament chauffé à blanc", "Un effet photovoltaïque", "Une réaction chimique explosive"], correct: 0, exp: "La décharge électrique excite un gaz qui émet des UV, convertis en lumière visible par le revêtement fluorescent du tube." },
          { q: "Les lampes halogènes sont-elles plus efficaces énergétiquement que les LED ?", options: ["Non, elles sont globalement moins efficaces que les LED", "C'est strictement identique", "Oui, toujours", "Cela dépend uniquement de la couleur"], correct: 0, exp: "Les halogènes restent moins efficaces (plus de pertes en chaleur) que les technologies LED actuelles." }
        ]
      },
      {
        nom: "Les différents éclairages",
        questions: [
          { q: "Qu'est-ce que l'éclairage direct ?", options: ["Un éclairage de secours uniquement", "Un éclairage sans source visible", "Un éclairage toujours réfléchi sur le plafond", "Un éclairage dont le flux est dirigé directement vers la zone à éclairer"], correct: 3, exp: "L'éclairage direct envoie le flux lumineux directement vers la zone visée." },
          { q: "Qu'est-ce que l'éclairage indirect ?", options: ["Un éclairage basse tension obligatoire", "Un éclairage uniquement extérieur", "Un éclairage interdit en intérieur", "Un éclairage renvoyé par réflexion sur une surface (plafond, mur)"], correct: 3, exp: "L'éclairage indirect est réfléchi sur une surface avant d'atteindre la zone à éclairer, ce qui adoucit la lumière." },
          { q: "Quel type d'éclairage privilégier pour réduire l'éblouissement dans un bureau ?", options: ["Aucun éclairage artificiel", "Un néon nu sans diffuseur", "Un spot direct très puissant au-dessus de l'écran", "Un éclairage indirect ou avec optiques anti-éblouissement"], correct: 3, exp: "Un éclairage indirect ou avec optiques adaptées limite les reflets et l'éblouissement sur écran." }
        ]
      },
      {
        nom: "L'éclairage TBT",
        questions: [
          { q: "Quel est l'intérêt de l'éclairage en très basse tension (TBT) dans certains lieux ?", options: ["Un coût d'installation toujours plus faible", "Une sécurité électrique accrue (risque réduit)", "Aucun intérêt particulier", "Une plus grande puissance lumineuse"], correct: 1, exp: "La TBT réduit fortement le risque électrique, notamment dans les zones humides." },
          { q: "L'éclairage TBT est-il courant dans les volumes proches de l'eau (salle de bain) ?", options: ["Non, il y est interdit", "Oui, notamment pour les spots dans les volumes à risque", "Uniquement en extérieur", "Uniquement dans les cuisines"], correct: 1, exp: "La TBT est fréquemment utilisée pour les spots dans les volumes de salle de bain à risque accru." },
          { q: "Quelle valeur limite est couramment retenue pour la très basse tension en courant alternatif ?", options: ["110 V", "12 V", "230 V", "50 V"], correct: 3, exp: "La limite couramment admise pour la TBT en alternatif est de 50 V." }
        ]
      },
      {
        nom: "La photométrie",
        questions: [
          { q: "Que mesure l'éclairement, exprimé en lux ?", options: ["La quantité de lumière reçue par une surface", "La couleur de la lumière", "La consommation électrique de la lampe", "La quantité de lumière émise par la source"], correct: 0, exp: "L'éclairement (lux) mesure la lumière reçue sur une surface donnée." },
          { q: "Qu'est-ce que la luminance ?", options: ["Le flux lumineux total émis", "La puissance électrique consommée", "L'intensité lumineuse perçue par l'œil dans une direction donnée", "La durée de vie d'une lampe"], correct: 2, exp: "La luminance caractérise la sensation lumineuse perçue depuis une direction d'observation." },
          { q: "Pourquoi réaliser une étude photométrique avant l'installation d'un éclairage ?", options: ["Pour choisir uniquement la couleur des interrupteurs", "Pour garantir un niveau d'éclairement adapté à l'usage du local", "Ce n'est jamais utile", "Pour dimensionner le disjoncteur différentiel"], correct: 1, exp: "L'étude photométrique permet de dimensionner l'éclairage selon les besoins réels du local." }
        ]
      }
    ]
  },
  {
    semaine: 11, periode: "P5", theme: "Les réseaux de communication, courants faibles et solutions d'efficacité énergétique", emoji: "🔔",
    topics: [
      {
        nom: "L'alarme intrusion",
        questions: [
          { q: "Quel est le rôle principal d'un système d'alarme intrusion ?", options: ["Contrôler l'éclairage extérieur", "Détecter une intrusion et déclencher une alerte (sonore et/ou à distance)", "Gérer la ventilation", "Chauffer le logement"], correct: 1, exp: "L'alarme intrusion détecte une présence anormale et prévient les occupants ou un centre de télésurveillance." },
          { q: "Quel type de détecteur est couramment utilisé pour une alarme intrusion ?", options: ["Détecteur de gaz", "Détecteur de niveau d'eau", "Détecteur infrarouge (ou double technologie)", "Détecteur de fumée uniquement"], correct: 2, exp: "Les détecteurs infrarouges (parfois combinés à l'hyperfréquence) sont très utilisés en détection intrusion." },
          { q: "Qu'est-ce qu'une centrale d'alarme ?", options: ["Un type de câble spécifique", "L'unité qui reçoit les informations des détecteurs et déclenche les alertes", "Un transformateur basse tension", "Un simple bouton poussoir"], correct: 1, exp: "La centrale traite les informations des détecteurs et pilote les sirènes/transmetteurs." },
          { q: "Quelles sont les 3 zones de protection d'un système d'alarme intrusion ?", options: ["Jour, nuit, absence", "Haute, moyenne, basse", "Nord, sud, centrale", "Périphérique, périmétrique, volumétrique"], correct: 3, exp: "On distingue la protection périphérique (approche), périmétrique (enveloppe du bâtiment/ouvrants) et volumétrique (intérieur des volumes)." },
          { q: "Quelle norme/référentiel encadre les installations d'alarme intrusion en France ?", options: ["NF C 15-100 uniquement", "La règle APSAD R81", "La norme EN 13241-1", "Le DTU 60.1"], correct: 1, exp: "La règle APSAD R81 fixe les exigences de conception et d'installation des systèmes de détection intrusion." },
          { q: "Quelle est la différence entre un détecteur en boucle TOR et un détecteur sur boucle supervisée ?", options: ["Aucune différence", "La boucle supervisée surveille en permanence la continuité du câble contre le sabotage, contrairement au TOR simple", "Le TOR est toujours filaire, la boucle supervisée toujours radio", "La boucle supervisée ne fonctionne qu'en extérieur"], correct: 1, exp: "La boucle supervisée (résistance de fin de ligne) détecte coupure ou court-circuit du câble, renforçant la sécurité par rapport à un simple contact TOR." },
          { q: "Qu'est-ce que l'autoprotection (AP) d'un détecteur ou d'une centrale ?", options: ["Un contact anti-arrachement/anti-ouverture (tamper) qui déclenche une alerte en cas de sabotage", "Un fusible de protection électrique", "Un revêtement anti-humidité", "Un mode économie d'énergie"], correct: 0, exp: "L'autoprotection surveille l'intégrité physique du matériel (ouverture du capot, arrachement du support) pour prévenir tout sabotage." },
          { q: "Quelle différence existe-t-il entre une sirène extérieure autoalimentée et une sirène simple (haut-parleur) ?", options: ["La sirène autoalimentée ne peut pas être installée en extérieur", "La sirène autoalimentée dispose de sa propre batterie et de son autoprotection, contrairement à la sirène simple alimentée uniquement par la centrale", "La sirène simple est toujours plus puissante", "Aucune, elles sont identiques"], correct: 1, exp: "La sirène autoalimentée intègre une batterie et une autoprotection, ce qui la rend autonome même si l'alimentation ou le câble est coupé." }
        ]
      },
      {
        nom: "L'alarme incendie",
        questions: [
          { q: "Que signifie le sigle SSI ?", options: ["Sécurité Standard Individuelle", "Signal Sonore d'Intrusion", "Système de Sécurité Incendie", "Système de Surveillance Intérieure"], correct: 2, exp: "SSI = Système de Sécurité Incendie." },
          { q: "Quel est le rôle d'un déclencheur manuel dans une alarme incendie ?", options: ["Détecter automatiquement la fumée", "Permettre à une personne de déclencher volontairement l'alarme", "Mesurer la température ambiante", "Couper l'électricité générale"], correct: 1, exp: "Le déclencheur manuel permet à un occupant de signaler manuellement un départ de feu." },
          { q: "Un détecteur automatique de fumée détecte principalement quoi ?", options: ["Les variations de tension", "Le niveau sonore", "Le taux d'humidité", "Les fumées/particules de combustion"], correct: 3, exp: "Le détecteur de fumée réagit à la présence de particules issues d'une combustion." }
        ]
      },
      {
        nom: "Les contrôles d'accès",
        questions: [
          { q: "Quel est l'objectif d'un système de contrôle d'accès ?", options: ["Réguler la température", "Détecter les incendies", "Éclairer automatiquement les couloirs", "Limiter et gérer l'accès à un lieu aux seules personnes autorisées"], correct: 3, exp: "Le contrôle d'accès filtre et trace les entrées/sorties d'un lieu selon les autorisations." },
          { q: "Quel type d'identifiant est couramment utilisé en contrôle d'accès ?", options: ["Un badge (carte à puce/RFID) ou un code", "Une télécommande de portail uniquement", "Une clé USB uniquement", "Un simple bouton poussoir"], correct: 0, exp: "Le badge RFID ou un code confidentiel sont les identifiants les plus répandus." },
          { q: "Un contrôle d'accès peut-il être couplé à une gestion des horaires ?", options: ["Oui, il peut gérer des plages horaires d'autorisation par utilisateur", "Non, jamais", "Uniquement le week-end", "Uniquement pour les visiteurs"], correct: 0, exp: "La plupart des systèmes permettent de définir des droits d'accès selon des plages horaires précises." },
          { q: "Qu'est-ce que le système VIGIK ?", options: ["Un type de détecteur incendie", "Un système d'accès normalisé utilisé notamment par les prestataires de service (La Poste, EDF...) pour accéder aux parties communes", "Un protocole domotique radio", "Une norme de câblage RJ45"], correct: 1, exp: "VIGIK permet l'accès temporaire et tracé des professionnels habilités aux parties communes d'immeubles." },
          { q: "Quelle est la différence entre une gâche électrique et une ventouse magnétique ?", options: ["Aucune, ce sont des synonymes", "La gâche électrique déverrouille un pêne mécanique, la ventouse magnétique retient la porte par un électroaimant", "La gâche est toujours sans fil", "La ventouse ne fonctionne que sur les portails"], correct: 1, exp: "La gâche électrique agit sur le mécanisme de la serrure, tandis que la ventouse magnétique maintient la porte fermée par attraction magnétique directe." },
          { q: "Pourquoi place-t-on une diode de roue libre (ou une varistance) en parallèle d'une gâche électrique ?", options: ["Pour mesurer le courant consommé", "Pour absorber la surtension générée à la coupure de la bobine et protéger le circuit de commande", "Pour éclairer la gâche", "Pour augmenter la tension"], correct: 1, exp: "La diode de roue libre (en continu) ou la varistance (en alternatif) écrête le pic de tension créé par la self de la gâche à la coupure, protégeant les composants électroniques." }
        ]
      },
      {
        nom: "Le portail battant",
        questions: [
          { q: "Comment fonctionne un portail battant automatisé ?", options: ["Il coulisse latéralement sur un rail", "Il s'enroule autour d'un axe", "Un ou deux vantaux pivotent grâce à des moteurs (bras articulé ou vérin)", "Il se replie en accordéon sous un plafond"], correct: 2, exp: "Le portail battant s'ouvre par rotation des vantaux, entraînés par des bras ou vérins motorisés." },
          { q: "Quel type de motorisation est couramment utilisé pour un portail battant ?", options: ["Uniquement une crémaillère au sol", "Moteur à bras articulé ou vérin (parfois enterré)", "Aucune motorisation possible", "Un moteur tubulaire enroulable"], correct: 1, exp: "Les bras articulés et les vérins (à bras ou enterrés) sont les motorisations classiques des portails battants." },
          { q: "Pourquoi un portail automatisé doit-il intégrer une détection d'obstacle ?", options: ["Pour améliorer l'esthétique", "Pour protéger les personnes et les biens en cas d'obstacle lors du mouvement", "Uniquement pour économiser l'énergie", "Ce n'est pas une exigence de sécurité"], correct: 1, exp: "La détection d'obstacle (effort, cellules) évite les accidents lors de la fermeture/ouverture." },
          { q: "Quelle norme européenne encadre la limitation des forces pour les portails motorisés ?", options: ["NF C 15-100", "EN 12453", "EN 60335-2-103 uniquement", "EN 13241-1 uniquement"], correct: 1, exp: "La norme EN 12453 fixe les exigences de sécurité et de limitation d'effort pour les motorisations de portails." },
          { q: "Que doit faire un portail motorisé en cas de défaillance des dispositifs de limitation d'effort (cellules, barre palpeuse) ?", options: ["Continuer à fonctionner normalement", "Se mettre en sécurité, c'est-à-dire empêcher tout fonctionnement automatique ou n'autoriser qu'une commande à vue avec position maintenue", "Ouvrir complètement le portail", "Couper l'alimentation générale du logement"], correct: 1, exp: "En cas de défaillance des dispositifs de sécurité, la réglementation impose une mise en sécurité empêchant tout mouvement automatique non contrôlé." },
          { q: "Quels accessoires complémentaires sont recommandés sur un portail battant automatisé donnant sur la voie publique ?", options: ["Aucun accessoire n'est utile", "Uniquement une sonnette", "Un limiteur de tension", "Feu clignotant, cellules photoélectriques et éventuellement un marquage au sol"], correct: 3, exp: "Le feu clignotant signale le mouvement, les cellules détectent un obstacle, et le marquage au sol informe les usagers de la zone de débattement." }
        ]
      },
      {
        nom: "Le portail coulissant",
        questions: [
          { q: "Comment se déplace un portail coulissant ?", options: ["Latéralement, le long d'un rail (ou en autoportant)", "Il se replie en accordéon", "Il s'enroule sur un axe", "Il pivote sur des gonds"], correct: 0, exp: "Le portail coulissant se déplace horizontalement, guidé par un rail au sol ou en version autoportante." },
          { q: "Quel avantage présente un portail coulissant sur un terrain en pente ?", options: ["Il est toujours moins cher", "Il ne nécessite pas de débattement au sol, ce qui convient mieux aux pentes", "Aucun avantage particulier", "Il ne nécessite aucune motorisation"], correct: 1, exp: "Contrairement au battant, le coulissant ne nécessite pas d'espace de débattement au sol, adapté aux terrains en pente." },
          { q: "Qu'est-ce qu'une crémaillère sur un portail coulissant motorisé ?", options: ["Un système de verrouillage manuel", "Le rail de guidage au sol", "Une pièce dentée fixée au portail, entraînée par le pignon du moteur", "Un capteur de position"], correct: 2, exp: "Le pignon du moteur engrène sur la crémaillère fixée au portail pour le faire coulisser." },
          { q: "Comment la motorisation d'un portail coulissant doit-elle être fixée ?", options: ["Solidement fixée au sol ou sur un châssis métallique, à bonne hauteur par rapport à la crémaillère", "Simplement posée sur le sol sans fixation", "Suspendue en hauteur sur un portique", "Fixée uniquement sur le portail lui-même"], correct: 0, exp: "Une fixation solide au sol ou sur châssis, correctement positionnée par rapport à la crémaillère, garantit un engrènement correct et durable." },
          { q: "Avant d'installer une motorisation de portail coulissant, quelles informations doit-on vérifier ?", options: ["Uniquement la couleur du portail", "Dimensions, poids, nature (pleine/ajourée) du portail, largeur de passage et distance de roulement disponible", "Uniquement la marque du portail", "Rien, la motorisation s'adapte toujours"], correct: 1, exp: "Le dimensionnement de la motorisation dépend du poids, de la surface exposée au vent et de l'espace disponible pour le roulement du portail." },
          { q: "Comment les systèmes de motorisation de portails évitent-ils le coincement ou l'écrasement des utilisateurs ?", options: ["En supprimant les cellules de sécurité", "Ils n'intègrent aucune protection", "Par un couple de force réglable ou établi en usine, limitant l'effort exercé", "En augmentant la vitesse de fermeture"], correct: 2, exp: "La limitation du couple moteur, réglable ou calibré en usine, permet de détecter un obstacle et de limiter l'effort exercé sur celui-ci." }
        ]
      },
      {
        nom: "Les portes de garage",
        questions: [
          { q: "Quels sont les principaux types de portes de garage motorisées ?", options: ["Uniquement coulissante", "Basculante, sectionnelle, enroulable", "Uniquement battante", "Uniquement pivotante verticale"], correct: 1, exp: "On retrouve principalement les portes basculantes, sectionnelles et enroulables en motorisé." },
          { q: "Qu'est-ce qu'une porte sectionnelle ?", options: ["Une porte qui s'enroule dans un coffre", "Une porte en un seul panneau rigide qui bascule", "Une porte composée de panneaux articulés qui se replient sous le plafond", "Une porte à deux battants classiques"], correct: 2, exp: "La porte sectionnelle est formée de panneaux articulés qui suivent des rails jusqu'au plafond." },
          { q: "Pourquoi une porte de garage motorisée doit-elle avoir une sécurité anti-écrasement ?", options: ["Pour réduire la consommation électrique", "Pour protéger les personnes et les biens en cas d'obstacle lors de la fermeture", "Uniquement pour le confort sonore", "Ce n'est pas obligatoire"], correct: 1, exp: "La détection d'effort/obstacle stoppe ou inverse le mouvement en cas de résistance anormale." },
          { q: "Depuis quand la norme EN 13241-1 est-elle obligatoire pour les portes de garage motorisées ?", options: ["Depuis le 1er mai 2010", "Depuis le 1er janvier 2000", "Elle n'est pas obligatoire", "Depuis le 1er mai 2005"], correct: 3, exp: "La norme européenne EN 13241-1 est obligatoire depuis le 1er mai 2005 pour les portes et portails." },
          { q: "Quel point faut-il obligatoirement vérifier avant l'installation d'une motorisation de porte de garage ?", options: ["Le prix du matériel uniquement", "La hauteur sous linteau disponible entre le point le plus haut de la porte et le plafond", "Uniquement la couleur de la porte", "Rien n'est à vérifier"], correct: 1, exp: "Une hauteur sous linteau minimale est nécessaire pour installer le moteur, cette valeur varie selon la marque." },
          { q: "Que faut-il prévoir si la porte de garage motorisée est le seul accès à la propriété et ne possède pas de portillon ?", options: ["Une deuxième porte de garage", "Un déverrouillage extérieur et des accessoires d'accès complémentaires", "Un limiteur de tension", "Rien de particulier"], correct: 1, exp: "Sans portillon, un déverrouillage extérieur est indispensable pour permettre l'accès en cas de coupure de courant ou de panne." }
        ]
      },
      {
        nom: "Le volet roulant",
        questions: [
          { q: "Comment fonctionne un volet roulant motorisé ?", options: ["Il pivote sur des gonds latéraux", "Un vérin pousse le tablier vers le haut", "Il coulisse horizontalement", "Un moteur tubulaire entraîne l'enroulement du tablier autour d'un axe"], correct: 3, exp: "Le moteur tubulaire, intégré dans l'axe d'enroulement, fait monter/descendre le tablier." },
          { q: "Qu'est-ce qu'un moteur de volet roulant avec fins de course intégrées ?", options: ["Un moteur uniquement manuel", "Un moteur nécessitant un réglage mécanique externe complexe", "Un moteur sans arrêt automatique", "Un moteur qui détecte automatiquement les positions haute et basse"], correct: 3, exp: "Les fins de course électroniques détectent et mémorisent automatiquement les positions extrêmes." },
          { q: "Un volet roulant peut-il être piloté via la domotique ?", options: ["Non, jamais", "Uniquement en usine", "Uniquement avec une manivelle", "Oui, via des modules radio ou filaires compatibles"], correct: 3, exp: "Des modules domotiques (radio ou filaires) permettent d'intégrer les volets roulants à un système central." }
        ]
      }
    ]
  },
  {
    semaine: 12, periode: "P5", theme: "Les réseaux de communication, courants faibles et solutions d'efficacité énergétique", emoji: "🏠",
    topics: [
      {
        nom: "La domotique",
        questions: [
          { q: "Que permet un système domotique ?", options: ["Produire de l'électricité", "Uniquement de surveiller la consommation", "Piloter et automatiser les équipements du logement (éclairage, chauffage, volets...)", "Remplacer le tableau électrique"], correct: 2, exp: "La domotique automatise et centralise le pilotage des équipements du logement." },
          { q: "Quels types de protocoles de communication utilise la domotique ?", options: ["Uniquement filaires", "Aucun protocole nécessaire", "Filaires (bus) ou radio (sans fil)", "Uniquement satellite"], correct: 2, exp: "La domotique repose sur des bus filaires ou des protocoles radio selon les installations." },
          { q: "Quel est l'un des principaux avantages de la domotique ?", options: ["Aucun avantage réel", "Une consommation toujours plus élevée", "La suppression totale du tableau électrique", "Le confort et les économies d'énergie grâce à l'automatisation"], correct: 3, exp: "La domotique améliore le confort tout en permettant des économies via une gestion plus fine." },
          { q: "Parmi Z-Wave, Zigbee, X3D, IO-homecontrol et KNX, lesquels sont des protocoles domotiques radio ?", options: ["Uniquement Zigbee", "Uniquement KNX", "Z-Wave, Zigbee, X3D et IO-homecontrol", "Aucun, ce sont tous des protocoles filaires"], correct: 2, exp: "Z-Wave, Zigbee, X3D et IO-homecontrol sont des protocoles radiofréquence, alors que KNX est un protocole filaire (bus)." },
          { q: "Qu'est-ce que le CPL (Courant Porteur en Ligne) en domotique ?", options: ["Un protocole radio longue portée", "Une technologie qui fait transiter l'information sur le réseau électrique existant", "Un mode de chauffage", "Un type de câble RJ45"], correct: 1, exp: "Le CPL superpose un signal de communication au réseau 230V existant, évitant de tirer un câble dédié." },
          { q: "Quelle est la longueur maximale généralement admise pour un bus KNX principal ?", options: ["1000 m au total, avec des segments limités (350 m entre alimentation et périphérique, 700 m entre deux alimentations)", "10 m", "Aucune limite", "100 m"], correct: 0, exp: "Le bus KNX impose des limites de longueur : 1000 m de câble total par ligne, 350 m maximum entre une alimentation et un composant, 700 m entre deux alimentations." },
          { q: "Quelle est la différence fondamentale entre une installation domotique en mode radio et en mode filaire (bus) ?", options: ["Le filaire ne peut piloter que l'éclairage", "Le radio nécessite toujours une box internet", "Le radio évite le câblage mais peut subir des perturbations, le filaire est plus fiable mais nécessite un câble bus dédié", "Aucune différence"], correct: 2, exp: "Le choix entre radio et filaire dépend du contexte (rénovation vs neuf), de la fiabilité recherchée et de la possibilité de tirer un câble bus." }
        ]
      },
      {
        nom: "Le tableau de communication",
        questions: [
          { q: "Quel est le rôle du tableau de communication (coffret VDI) dans un logement ?", options: ["Protéger contre la foudre", "Remplacer le disjoncteur de branchement", "Centraliser et distribuer les réseaux de communication (téléphone, données, télévision)", "Distribuer uniquement l'électricité"], correct: 2, exp: "Le tableau de communication centralise les arrivées réseau et les distribue vers les prises RJ45/TV." },
          { q: "Que signifie le sigle VDI ?", options: ["Voix, Données, Images", "Vérification Différentielle Individuelle", "Ventilation, Distribution, Isolation", "Volt, Détecteur, Interrupteur"], correct: 0, exp: "VDI = Voix, Données, Images, les trois grands types de réseaux de communication du logement." },
          { q: "Le tableau de communication doit-il être positionné près du tableau électrique ?", options: ["Généralement oui, ou regroupé dans une même GTL", "Il doit être dans une pièce humide", "Uniquement au sous-sol", "Non, cela n'a aucune importance"], correct: 0, exp: "Le tableau de communication est le plus souvent regroupé avec le tableau électrique dans la GTL." },
          { q: "Qu'est-ce que le DTI dans une installation de communication ?", options: ["Un Dispositif de Test Individuel", "Le Dispositif de Terminaison Intérieure, point de démarcation entre le réseau public et l'installation privée", "Une norme de câblage RJ45", "Un type de disjoncteur"], correct: 1, exp: "Le DTI matérialise la limite entre le réseau de l'opérateur et le câblage intérieur du logement." },
          { q: "Que permet un quadrupleur dans un tableau de communication ?", options: ["D'alimenter le tableau en 230V", "De protéger contre la foudre", "De sertir 4 câbles RJ45 en même temps", "De répartir un signal (ex. TV) vers plusieurs prises à partir d'une seule arrivée"], correct: 3, exp: "Le quadrupleur distribue un signal reçu vers plusieurs sorties, par exemple pour desservir plusieurs prises TV depuis une seule arrivée." },
          { q: "Selon la NF C 15-100, à quelle distance maximale de l'arrivée doit se trouver la borne de terre dans la GTL ?", options: ["Aucune contrainte de distance", "Moins de 50 cm, avec une liaison de section 6 mm²", "10 mètres", "5 mètres"], correct: 1, exp: "La NF C 15-100 impose une borne de terre accessible à moins de 50 cm de l'origine de la GTL, reliée par un conducteur de 6 mm² minimum." }
        ]
      },
      {
        nom: "Câblâge RJ 45",
        questions: [
          { q: "Combien de paires de fils comporte un câble réseau RJ45 (Ethernet) ?", options: ["1 paire (2 fils)", "4 paires (8 fils)", "2 paires (4 fils)", "3 paires (6 fils)"], correct: 1, exp: "Un câble Ethernet standard comporte 4 paires torsadées, soit 8 fils." },
          { q: "Quelles normes de câblage sont couramment utilisées pour sertir un connecteur RJ45 ?", options: ["T568A ou T568B", "NF C 15-100 uniquement", "IP20 et IP44", "IK07 et IK08"], correct: 0, exp: "Les brochages normalisés T568A et T568B définissent l'ordre des fils dans le connecteur RJ45." },
          { q: "Quel outil sert à sertir un connecteur RJ45 ?", options: ["Une pince à sertir RJ45 dédiée", "Une pince à dénuder uniquement", "Un tournevis plat", "Une pince ampèremétrique"], correct: 0, exp: "La pince à sertir RJ45 permet de fixer mécaniquement les contacts du connecteur sur les fils dénudés." },
          { q: "Quelle est la différence entre la classification par Grade (UTE) et par Catégorie (ISO/EIA) pour un câblage RJ45 ?", options: ["Ce sont des synonymes stricts", "La catégorie ne s'applique qu'à la fibre optique", "Le Grade (1 à 4) est une classification française UTE, la Catégorie est la classification internationale ISO/EIA des composants", "Le grade s'applique uniquement au Wi-Fi"], correct: 2, exp: "La norme française UTE définit des Grades (1 à 4) de câblage résidentiel, tandis que la classification internationale utilise des Catégories (5e, 6, 6A...) pour les composants." },
          { q: "Quelle norme européenne régit le câblage des réseaux de communication dans les bâtiments ?", options: ["EN 13241-1", "NF C 15-100 uniquement", "NF EN 50174", "EN 12453"], correct: 2, exp: "La norme NF EN 50174 encadre la mise en œuvre du câblage des réseaux de communication." },
          { q: "Quelle est la différence entre les brochages T568A et T568B ?", options: ["T568A ne fonctionne qu'en fibre optique", "T568B est réservé aux câbles blindés", "Aucune différence, ils sont identiques", "Ils inversent l'ordre de deux paires de fils (vert et orange) dans le connecteur RJ45"], correct: 3, exp: "T568A et T568B définissent le même câblage à l'exception de l'inversion des paires orange et verte, les deux normes doivent rester cohérentes sur une même installation." }
        ]
      },
      {
        nom: "Le chauffage",
        questions: [
          { q: "Quels sont les principaux types de chauffage électrique domestique ?", options: ["Uniquement le convecteur", "Uniquement le plancher chauffant à eau", "Convecteur, panneau rayonnant, chauffage à accumulation, chauffage à inertie", "Uniquement la climatisation réversible"], correct: 2, exp: "Il existe plusieurs technologies de chauffage électrique adaptées à différents besoins et usages." },
          { q: "Qu'est-ce qu'un chauffage par accumulation ?", options: ["Un chauffage qui stocke la chaleur (souvent en heures creuses) pour la restituer plus tard", "Un chauffage sans thermostat", "Un chauffage qui ne fonctionne jamais la nuit", "Un chauffage au gaz uniquement"], correct: 0, exp: "Le chauffage à accumulation emmagasine la chaleur en heures creuses pour la diffuser progressivement." },
          { q: "À quoi sert le fil pilote sur un radiateur électrique ?", options: ["À mesurer la température de la pièce", "À alimenter le radiateur en 230V", "À mettre le radiateur à la terre", "À transmettre les ordres de gestion (confort, éco, hors-gel...) depuis un programmateur"], correct: 3, exp: "Le fil pilote permet de piloter à distance les différents modes de fonctionnement du radiateur." },
          { q: "Qu'est-ce qu'un Panneau Rayonnant Électrique (PRE) ?", options: ["Un chauffage à eau chaude uniquement", "Un convecteur simple sans régulation", "Un appareil qui chauffe une plaque qui rayonne la chaleur, offrant une sensation plus homogène que le convecteur", "Un système de VMC"], correct: 2, exp: "Le panneau rayonnant chauffe une face rayonnante qui diffuse une chaleur plus douce et homogène que le simple convecteur à air." },
          { q: "Quel calibre et quelle courbe de disjoncteur protège généralement un fil pilote de radiateur ?", options: ["Disjoncteur courbe D, calibre 32 A", "Fusible 10 A", "Disjoncteur courbe C, calibre 2 A", "Aucune protection n'est nécessaire"], correct: 2, exp: "Le circuit du fil pilote, qui ne véhicule qu'un signal basse puissance, est protégé par un disjoncteur courbe C de calibre 2 A maximum." },
          { q: "Que prend en compte la réglementation thermique (RT2012) via un coefficient pour le chauffage électrique à effet Joule ?", options: ["Aucun coefficient n'est appliqué", "Un coefficient de conversion de 1", "Un coefficient uniquement pour le gaz", "Un coefficient de conversion de 2,58 entre énergie finale et énergie primaire"], correct: 3, exp: "La RT2012 applique un coefficient de conversion de 2,58 pour convertir l'énergie électrique finale en énergie primaire, pénalisant le chauffage électrique par rapport à d'autres énergies." }
        ]
      },
      {
        nom: "La Gestion de l'énergie",
        questions: [
          { q: "Quel est l'objectif principal de la gestion de l'énergie dans une installation ?", options: ["Optimiser la consommation et éviter les dépassements de puissance souscrite", "Augmenter systématiquement la consommation", "Supprimer les disjoncteurs différentiels", "Remplacer le compteur"], correct: 0, exp: "La gestion de l'énergie vise à optimiser les usages et éviter tout dépassement de puissance." },
          { q: "Qu'est-ce qu'un délesteur ?", options: ["Un appareil qui augmente la puissance souscrite", "Un dispositif qui coupe temporairement des circuits non prioritaires pour éviter un dépassement de puissance", "Un simple interrupteur manuel", "Un type de disjoncteur différentiel"], correct: 1, exp: "Le délesteur coupe automatiquement certains circuits secondaires en cas de risque de dépassement." },
          { q: "Pourquoi prioriser certains circuits dans la gestion de l'énergie ?", options: ["Pour garantir le fonctionnement des équipements essentiels en cas de délestage", "Pour augmenter la facture d'électricité", "Pour simplifier le câblage uniquement", "Ce n'est jamais utile"], correct: 0, exp: "La priorisation garantit que les équipements essentiels restent alimentés en cas de délestage." },
          { q: "Combien d'ordres peut transmettre un fil pilote 6 ordres, utilisé pour la gestion de l'énergie du chauffage ?", options: ["10 ordres", "2 ordres seulement", "Un seul ordre : marche/arrêt", "6 ordres : confort, éco, hors-gel, arrêt, et deux niveaux de confort intermédiaires (confort -1, confort -2)"], correct: 3, exp: "Le fil pilote 6 ordres permet une gestion fine du chauffage avec confort, confort -1, confort -2, éco, hors-gel et arrêt." },
          { q: "Qu'est-ce que la fonction dérogation (ou marche forcée) en gestion de l'énergie ?", options: ["Une coupure définitive du circuit", "Une fonction qui augmente la puissance souscrite", "La possibilité pour l'utilisateur de forcer manuellement un mode de fonctionnement en dehors de la programmation automatique", "Un mode réservé aux professionnels"], correct: 2, exp: "La dérogation permet à l'occupant de reprendre temporairement la main sur un équipement piloté automatiquement, par exemple pour forcer le chauffage en confort." },
          { q: "Quelle est la différence entre un délestage hiérarchisé et un délestage tournant ?", options: ["Le délestage hiérarchisé ne s'applique qu'au chauffe-eau", "Le délestage hiérarchisé coupe toujours les mêmes circuits par ordre de priorité, le délestage tournant fait alterner les circuits délestés", "Le délestage tournant ne concerne que l'éclairage", "Aucune différence"], correct: 1, exp: "Le délestage hiérarchisé suit un ordre de priorité fixe, alors que le délestage tournant répartit équitablement les coupures entre les circuits non prioritaires afin d'éviter de toujours désavantager le même usage." }
        ]
      },
      {
        nom: "La VMC",
        questions: [
          { q: "Que signifie le sigle VMC ?", options: ["Ventilation Mécanique Contrôlée", "Variateur Mécanique de Chauffage", "Ventilation Manuelle Complémentaire", "Vérification et Maintenance du Compteur"], correct: 0, exp: "VMC = Ventilation Mécanique Contrôlée." },
          { q: "Quelle est la différence entre une VMC simple flux et une VMC double flux ?", options: ["La double flux ne fonctionne qu'en été", "La simple flux consomme plus d'énergie", "Aucune différence réelle", "La double flux récupère les calories de l'air extrait pour préchauffer l'air entrant"], correct: 3, exp: "La VMC double flux utilise un échangeur pour récupérer la chaleur de l'air extrait." },
          { q: "Dans quelles pièces installe-t-on généralement les bouches d'extraction d'une VMC ?", options: ["Uniquement les combles", "Les pièces humides (cuisine, salle de bain, WC)", "Le salon et les chambres", "Uniquement le garage"], correct: 1, exp: "Les bouches d'extraction sont placées dans les pièces humides pour évacuer l'air vicié." },
          { q: "Qu'est-ce qu'une VMC hygroréglable (VMR) ?", options: ["Une VMC dont le débit varie automatiquement selon le taux d'humidité détecté dans le logement", "Une VMC réservée aux bâtiments collectifs", "Une VMC qui fonctionne uniquement en hiver", "Une VMC sans moteur électrique"], correct: 0, exp: "La VMC hygroréglable module son débit d'extraction en fonction du taux d'humidité mesuré, ce qui optimise la ventilation et les économies d'énergie." },
          { q: "Quel calibre et quelle courbe de disjoncteur protègent généralement le moteur d'une VMC simple flux ?", options: ["Fusible 16 A", "Disjoncteur courbe C, calibre 2 A maximum", "Aucune protection spécifique n'est requise", "Disjoncteur courbe D, calibre 32 A"], correct: 1, exp: "Le circuit dédié au moteur de VMC est protégé par un disjoncteur courbe C de calibre 2 A maximum, conformément à la NF C 15-100." },
          { q: "Quel document normatif complète la NF C 15-100 pour les installations de VMC ?", options: ["La norme EN 13241-1", "La norme EN 12453", "Le DTU 60.1", "L'amendement NF C 15-100/A5"], correct: 3, exp: "L'amendement A5 de la NF C 15-100 précise les règles d'installation électrique applicables aux VMC." }
        ]
      },
      {
        nom: "L'IRVE",
        questions: [
          { q: "Que signifie le sigle IRVE ?", options: ["Installation Réglementaire de Ventilation Extérieure", "Infrastructure de Recharge pour Véhicules Électriques", "Interrupteur de Régulation Volt-Électrique", "Indice de Rendement des Variations Énergétiques"], correct: 1, exp: "IRVE = Infrastructure de Recharge pour Véhicules Électriques." },
          { q: "Une installation IRVE nécessite-t-elle une protection différentielle spécifique ?", options: ["Uniquement un fusible classique", "Aucune protection n'est nécessaire", "Non, un différentiel standard suffit toujours", "Oui, généralement un différentiel adapté aux courants de fuite continus (type A ou B/F selon le cas)"], correct: 3, exp: "La recharge de véhicules électriques peut générer des courants de défaut continus nécessitant une protection adaptée." },
          { q: "Qu'est-ce qu'une borne de recharge IRVE de type 2 ?", options: ["Un boîtier de comptage uniquement", "Un simple câble d'extension", "Une prise/connecteur normalisé pour la recharge des véhicules électriques", "Une prise domestique classique"], correct: 2, exp: "Le connecteur Type 2 est un standard européen répandu pour la recharge des véhicules électriques." },
          { q: "Quelle loi française encadre le déploiement des infrastructures de recharge pour véhicules électriques (IRVE) ?", options: ["Il n'existe aucune loi spécifique", "La loi NF C 15-100", "La loi 2015-992 relative à la transition énergétique", "La loi EN 12453"], correct: 2, exp: "La loi n°2015-992 relative à la transition énergétique pour la croissance verte fixe notamment des obligations d'équipement en IRVE." },
          { q: "Que désignent les modes de charge 1 à 4 en IRVE ?", options: ["Le nombre de véhicules rechargeables simultanément", "Des niveaux de puissance identiques", "Des configurations normalisées définissant le type de prise, la présence de protections et de communication entre le véhicule et la borne", "Uniquement la couleur du câble de recharge"], correct: 2, exp: "Les modes 1 à 4 définissent le niveau de sécurisation et de communication de la recharge, du simple branchement sur prise domestique (mode 1) à la recharge rapide en courant continu (mode 4)." },
          { q: "Qu'est-ce qu'une prise Green'Up ?", options: ["Un connecteur Type 2 rapide", "Une prise domestique standard", "Une prise réservée aux bornes rapides Chademo", "Une prise dédiée à la recharge de véhicule électrique, identifiable et raccordée à un circuit spécifique protégé"], correct: 3, exp: "La prise Green'Up est une prise domestique renforcée, dédiée et identifiée, alimentée par un circuit spécifique dans le tableau électrique pour la recharge en mode 1 ou 2." },
          { q: "Quel type de connecteur est utilisé par les véhicules électriques de marque japonaise pour la recharge rapide en courant continu ?", options: ["Combo (CCS)", "Chademo", "Type 2", "Type 3"], correct: 1, exp: "Le connecteur Chademo, d'origine japonaise, est utilisé pour la recharge rapide en courant continu, notamment par certains constructeurs japonais." }
        ]
      },
      {
        nom: "Le Photovoltaïque",
        questions: [
          { q: "Quel phénomène physique permet à un panneau photovoltaïque de produire de l'électricité ?", options: ["La réaction chimique d'une pile", "L'induction électromagnétique", "L'effet photovoltaïque (conversion de la lumière en électricité)", "L'effet Joule"], correct: 2, exp: "L'effet photovoltaïque convertit directement l'énergie lumineuse en énergie électrique." },
          { q: "Quel type de courant produit un panneau photovoltaïque ?", options: ["Du courant alternatif directement utilisable", "Du courant triphasé", "Aucun courant sans onduleur", "Du courant continu (DC)"], correct: 3, exp: "Le panneau produit du courant continu, qui doit être converti pour être utilisé sur le réseau alternatif." },
          { q: "Quel est le rôle d'un onduleur dans une installation photovoltaïque ?", options: ["Nettoyer les panneaux", "Convertir le courant continu produit en courant alternatif utilisable/injectable au réseau", "Stocker l'énergie produite", "Mesurer l'ensoleillement"], correct: 1, exp: "L'onduleur transforme le courant continu des panneaux en courant alternatif compatible avec le réseau." },
          { q: "Que signifient les conditions STC (Standard Test Conditions) pour un panneau photovoltaïque ?", options: ["Des conditions normalisées (1000 W/m², 25°C, spectre AM1.5) permettant de comparer les caractéristiques des panneaux", "Un standard de câblage électrique", "Les conditions de test réelles sur le terrain", "Une norme de sécurité incendie"], correct: 0, exp: "Les conditions STC servent de référence normalisée pour indiquer et comparer les performances (Pmpp, Icc, Vco...) des panneaux entre fabricants." },
          { q: "Que représentent Icc et Vco sur la fiche technique d'un panneau photovoltaïque ?", options: ["Le courant de court-circuit et la tension à circuit ouvert, valeurs maximales mesurées dans des conditions extrêmes", "La puissance maximale et le rendement", "La capacité de stockage de la batterie associée", "Le courant et la tension nominaux de fonctionnement"], correct: 0, exp: "Icc (courant de court-circuit) et Vco (tension à vide) sont les valeurs extrêmes utilisées pour dimensionner les protections et les câbles de la chaîne photovoltaïque." },
          { q: "Quel type de câble spécifique est utilisé pour le raccordement en courant continu (DC) d'une installation photovoltaïque ?", options: ["Câble PV1000-F (ou équivalent), résistant aux UV et aux intempéries", "Câble H07V-U classique", "Câble RJ45", "Câble téléphonique"], correct: 0, exp: "Le câble PV1000-F est spécifiquement conçu pour résister aux conditions extérieures (UV, température) et à la tension DC élevée du champ photovoltaïque." },
          { q: "À quoi servent les connecteurs MC4 sur une installation photovoltaïque ?", options: ["À fixer les panneaux à la toiture", "À raccorder les câbles RJ45", "À protéger contre la foudre uniquement", "À assurer un raccordement étanche et sécurisé entre les modules photovoltaïques en courant continu"], correct: 3, exp: "Les connecteurs MC4 permettent un raccordement rapide, étanche (IP67) et sécurisé des modules photovoltaïques entre eux." },
          { q: "Quelles habilitations électriques sont spécifiquement requises pour intervenir sur une installation photovoltaïque ?", options: ["Les habilitations BP (basse tension photovoltaïque) et BR-PV", "Uniquement le CACES", "Uniquement l'habilitation B1V", "Aucune habilitation particulière n'est nécessaire"], correct: 0, exp: "Les habilitations BP et BR-PV sont spécifiques aux risques particuliers du courant continu et de la présence permanente de tension côté champ photovoltaïque, même hors réseau." }
        ]
      }
    ]
  },
  {
    semaine: 13, periode: "P6", theme: "Révisions et Préparation de la Certification", emoji: "📝",
    topics: []
  },
  {
    semaine: 14, periode: "P6", theme: "Certification", emoji: "🎓",
    topics: []
  }
];
