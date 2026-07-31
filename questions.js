// Banque de questions - EEB Alt Nîmes - Semaines 1 à 6 (avant le triphasé)
// Contenu généré à titre d'entraînement générique. À affiner avec le contenu réel des cours Mètis.

const QUIZ_DATA = [
  {
    semaine: 1, periode: "P1", theme: "Accueil et Intégration", emoji: "🎒",
    topics: [
      {
        nom: "Notions de bases mathématiques",
        questions: [
          { q: "Combien font 0,5 A en mA ?", options: ["50 mA", "500 mA", "5 mA", "5000 mA"], correct: 1, exp: "1 A = 1000 mA, donc 0,5 A = 500 mA." },
          { q: "Quelle est la formule pour calculer un pourcentage d'une valeur ?", options: ["(valeur x pourcentage) / 100", "valeur x 100", "valeur / pourcentage", "valeur + pourcentage"], correct: 0, exp: "Le pourcentage d'une valeur se calcule par (valeur x pourcentage) / 100." },
          { q: "1 kilo (k) correspond à combien d'unités ?", options: ["10", "100", "1000", "10000"], correct: 2, exp: "Le préfixe kilo (k) multiplie par 1000." },
          { q: "Que vaut 0,25 exprimé en fraction ?", options: ["1/2", "1/4", "1/3", "3/4"], correct: 1, exp: "0,25 = 1/4." }
        ]
      },
      {
        nom: "Préparation à l'Habilitation électrique B2V Essai BR H0",
        questions: [
          { q: "Que signifie l'indice B dans une habilitation électrique ?", options: ["Travaux en Haute Tension", "Travaux en Basse Tension et Très Basse Tension", "Travaux en hauteur", "Travaux sous tension uniquement"], correct: 1, exp: "L'indice B concerne les domaines BT et TBT." },
          { q: "Que signifie le 'V' ajouté à une habilitation comme B2V ?", options: ["Travaux sous tension", "Travaux au voisinage de pièces nues sous tension", "Travaux en hauteur", "Vérification uniquement"], correct: 1, exp: "Le 'V' indique une habilitation à travailler au voisinage de pièces nues sous tension." },
          { q: "Que peut faire un titulaire de l'habilitation BR ?", options: ["Uniquement observer les travaux", "Réaliser des interventions générales de dépannage et de connexion en BT", "Diriger un chantier HT", "Travailler sur les lignes aériennes HT"], correct: 1, exp: "BR = chargé d'intervention générale en basse tension." },
          { q: "Combien de temps est généralement recommandé entre deux recyclages d'habilitation électrique ?", options: ["1 an", "3 ans", "5 ans", "10 ans"], correct: 1, exp: "La norme NF C18-510 recommande un recyclage tous les 3 ans en général." }
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
          { q: "Quelle est l'unité de mesure de l'intensité du courant électrique ?", options: ["Volt", "Ampère", "Ohm", "Watt"], correct: 1, exp: "L'intensité se mesure en ampères (A)." },
          { q: "Quelle est l'unité de la tension électrique ?", options: ["Ampère", "Watt", "Volt", "Ohm"], correct: 2, exp: "La tension se mesure en volts (V)." },
          { q: "Que représente la résistance électrique ?", options: ["La quantité d'électrons stockés", "L'opposition au passage du courant", "La vitesse du courant", "La puissance consommée"], correct: 1, exp: "La résistance s'oppose au passage du courant, elle se mesure en ohms." },
          { q: "Quelle est la tension nominale du réseau domestique monophasé en France ?", options: ["12 V", "110 V", "230 V", "400 V"], correct: 2, exp: "Le réseau monophasé domestique français est en 230 V." }
        ]
      },
      {
        nom: "Les dangers de l'électricité",
        questions: [
          { q: "Quel est le seuil de tension limite conventionnelle en milieu sec (UL) ?", options: ["12 V", "25 V", "50 V", "110 V"], correct: 2, exp: "En milieu sec, le seuil de tension limite conventionnelle est de 50 V en alternatif." },
          { q: "Comment se produit un contact direct ?", options: ["En touchant une pièce normalement sous tension", "En touchant une masse devenue accidentellement sous tension", "En touchant un objet isolé", "Cela n'existe pas"], correct: 0, exp: "Le contact direct est le contact avec une pièce normalement sous tension." },
          { q: "Qu'est-ce qu'un contact indirect ?", options: ["Toucher un fil dénudé sous tension", "Toucher une masse métallique devenue accidentellement sous tension suite à un défaut d'isolement", "Toucher une prise de courant", "Toucher un interrupteur"], correct: 1, exp: "Le contact indirect résulte d'un défaut d'isolement rendant une masse dangereuse." },
          { q: "Quel est l'effet principal du courant électrique traversant le corps humain ?", options: ["Brûlure uniquement", "Fibrillation cardiaque et tétanisation musculaire", "Aucun effet", "Perte de vision uniquement"], correct: 1, exp: "Le courant peut provoquer tétanisation musculaire et fibrillation cardiaque, potentiellement mortelles." }
        ]
      },
      {
        nom: "Les outils d'électricien",
        questions: [
          { q: "Quel outil sert à dénuder un fil électrique ?", options: ["Pince coupante", "Pince à dénuder", "Tournevis testeur", "Pince multiprise"], correct: 1, exp: "La pince à dénuder retire l'isolant sans couper l'âme du conducteur." },
          { q: "À quoi sert un tournevis testeur (VAT simple) ?", options: ["Serrer les vis", "Détecter la présence de tension", "Couper les fils", "Mesurer la résistance"], correct: 1, exp: "Le tournevis testeur détecte la présence de tension par une lampe néon." },
          { q: "Quel outil permet de sertir des embouts sur des conducteurs souples ?", options: ["Pince à sertir", "Pince coupante", "Marteau", "Cutter"], correct: 0, exp: "La pince à sertir fixe les embouts sur les conducteurs souples." },
          { q: "Quel appareil est indispensable avant toute intervention pour vérifier l'absence de tension ?", options: ["Multimètre uniquement", "Vérificateur d'Absence de Tension (VAT)", "Pince ampèremétrique", "Voltmètre analogique"], correct: 1, exp: "Le VAT normalisé est obligatoire pour vérifier l'absence de tension avant intervention." }
        ]
      },
      {
        nom: "Travail en hauteur",
        questions: [
          { q: "Quel équipement est utilisé pour un travail en hauteur présentant un risque de chute ?", options: ["Casque uniquement", "Harnais de sécurité et/ou garde-corps", "Gants isolants", "Chaussures de sécurité uniquement"], correct: 1, exp: "Le harnais ou les garde-corps protègent contre les chutes de hauteur." },
          { q: "Comment détermine-t-on la nécessité d'une protection contre les chutes ?", options: ["Il y a toujours une hauteur seuil fixe légale unique", "Par l'évaluation des risques propre à la situation de travail", "Cela ne dépend jamais de la hauteur", "Uniquement au-delà de 10 m"], correct: 1, exp: "En France, c'est l'évaluation des risques qui détermine la protection nécessaire, pas un seuil unique." },
          { q: "Quel type d'équipement de travail en hauteur doit être vérifié périodiquement (VGP) ?", options: ["Uniquement les harnais", "Échelles, échafaudages, harnais, plateformes", "Uniquement le casque", "Aucun équipement"], correct: 1, exp: "Les équipements de travail en hauteur font l'objet de vérifications générales périodiques." },
          { q: "Que doit-on vérifier avant d'utiliser une échelle ?", options: ["Rien, elle est toujours sûre", "Son état général, sa stabilité et son bon dépliage", "Uniquement sa couleur", "Son poids uniquement"], correct: 1, exp: "Il faut contrôler l'état, la stabilité et le verrouillage de l'échelle avant usage." }
        ]
      },
      {
        nom: "Lois fondamentales",
        questions: [
          { q: "Que dit la loi d'Ohm ?", options: ["U = R / I", "U = R x I", "I = U x R", "R = U x I"], correct: 1, exp: "La loi d'Ohm : U = R x I." },
          { q: "Quelle loi permet de calculer la puissance électrique en courant continu ?", options: ["P = U x I", "P = U / I", "P = U + I", "P = I / U"], correct: 0, exp: "La puissance électrique se calcule par P = U x I." },
          { q: "Selon la loi des mailles, que peut-on dire dans une maille ?", options: ["La somme des tensions est toujours nulle", "Le courant est toujours nul", "La résistance est toujours nulle", "La puissance est toujours maximale"], correct: 0, exp: "La loi des mailles (Kirchhoff) : la somme algébrique des tensions dans une maille est nulle." },
          { q: "Selon la loi des nœuds, que peut-on dire des courants entrants et sortants d'un nœud ?", options: ["Ils sont toujours différents", "La somme des courants entrants égale la somme des courants sortants", "Ils s'annulent toujours", "Ils n'ont pas de relation"], correct: 1, exp: "La loi des nœuds : la somme des courants entrants égale la somme des courants sortants." }
        ]
      },
      {
        nom: "Mesurage des grandeurs électriques",
        questions: [
          { q: "Quel appareil mesure une tension ?", options: ["Ampèremètre", "Voltmètre", "Ohmmètre", "Wattmètre"], correct: 1, exp: "Le voltmètre mesure une tension." },
          { q: "Comment doit-on brancher un ampèremètre pour mesurer un courant ?", options: ["En parallèle", "En série", "Peu importe", "Il ne se branche pas"], correct: 1, exp: "L'ampèremètre se branche en série dans le circuit." },
          { q: "Comment doit-on brancher un voltmètre pour mesurer une tension ?", options: ["En série", "En parallèle", "En étoile", "En triangle"], correct: 1, exp: "Le voltmètre se branche en parallèle (dérivation) aux bornes du composant." },
          { q: "Quel appareil permet de mesurer un courant sans ouvrir le circuit ?", options: ["Ohmmètre", "Pince ampèremétrique", "Voltmètre", "Multimètre en mode continuité"], correct: 1, exp: "La pince ampèremétrique mesure le courant par effet d'induction, sans ouvrir le circuit." }
        ]
      },
      {
        nom: "Le circuit monophasé",
        questions: [
          { q: "Combien de conducteurs actifs comporte un circuit monophasé classique (hors terre) ?", options: ["1", "2 (phase et neutre)", "3", "4"], correct: 1, exp: "Un circuit monophasé comporte une phase et un neutre." },
          { q: "Quelle est la couleur normalisée du conducteur de phase ?", options: ["Bleu", "Vert-jaune", "Toute couleur sauf bleu et vert-jaune", "Noir uniquement"], correct: 2, exp: "La phase peut être de toute couleur sauf bleu (neutre) et vert-jaune (terre)." },
          { q: "Quelle est la couleur normalisée du neutre ?", options: ["Bleu", "Rouge", "Vert-jaune", "Marron"], correct: 0, exp: "Le neutre est normalisé en bleu." },
          { q: "Quelle est la couleur normalisée du conducteur de protection (terre) ?", options: ["Bleu", "Vert-jaune", "Noir", "Marron"], correct: 1, exp: "Le conducteur de terre est normalisé en vert-jaune (bicolore)." }
        ]
      },
      {
        nom: "L'AGCP",
        questions: [
          { q: "Que signifie AGCP ?", options: ["Appareil Général de Commande et de Protection", "Appareil de Gestion du Courant Principal", "Appareil de Coupure Générale", "Automate de Gestion et Contrôle des Prises"], correct: 0, exp: "AGCP = Appareil Général de Commande et de Protection." },
          { q: "Où se situe généralement l'AGCP dans une installation domestique ?", options: ["Dans chaque pièce", "En tête d'installation, dans le tableau électrique", "Uniquement à l'extérieur", "Dans la salle de bain"], correct: 1, exp: "L'AGCP est placé en tête d'installation, dans le tableau électrique." },
          { q: "Quel est le rôle principal de l'AGCP ?", options: ["Éclairer le logement", "Couper et protéger l'ensemble de l'installation électrique", "Mesurer la consommation uniquement", "Distribuer l'eau chaude"], correct: 1, exp: "L'AGCP permet de couper et protéger toute l'installation." },
          { q: "L'AGCP est souvent associé à quel type de dispositif différentiel ?", options: ["30 mA", "300 mA ou 500 mA (différentiel général)", "10 mA", "Aucun"], correct: 1, exp: "L'AGCP intègre en général un différentiel de type 300 ou 500 mA en protection générale." }
        ]
      },
      {
        nom: "Le Fusible",
        questions: [
          { q: "Quel est le rôle d'un fusible ?", options: ["Allumer une lampe", "Protéger un circuit contre les surintensités en fondant", "Mesurer la tension", "Stocker de l'énergie"], correct: 1, exp: "Le fusible fond pour couper le circuit en cas de surintensité." },
          { q: "Un fusible doit-il être remplacé ou peut-il être réarmé ?", options: ["Il doit être remplacé après avoir fondu", "Il se réarme automatiquement", "Il se réarme manuellement par un bouton", "Il ne fond jamais"], correct: 0, exp: "Un fusible fondu doit être remplacé, il n'est pas réarmable." },
          { q: "Quel type de fusible est couramment utilisé pour la protection de circuits résistifs ?", options: ["Fusible aM", "Fusible gG", "Fusible rapide pour moteurs uniquement", "Fusible thermique"], correct: 1, exp: "Le fusible gG protège les circuits résistifs classiques (usage général)." },
          { q: "Que signifie le calibre indiqué sur un fusible ?", options: ["Sa couleur", "Le courant maximal qu'il peut supporter avant de fondre", "Sa longueur", "Sa tension de fonctionnement uniquement"], correct: 1, exp: "Le calibre indique le courant nominal que le fusible peut supporter." }
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
          { q: "Quel est l'avantage principal d'un disjoncteur par rapport à un fusible ?", options: ["Il coûte moins cher", "Il se réarme sans être remplacé", "Il ne protège pas contre les court-circuits", "Il n'a pas de calibre"], correct: 1, exp: "Le disjoncteur se réarme simplement après déclenchement, sans remplacement." },
          { q: "Quelles sont les deux principales protections assurées par un disjoncteur divisionnaire ?", options: ["Surtension et sous-tension", "Surcharge et court-circuit", "Fuite de gaz et incendie", "Foudre et humidité"], correct: 1, exp: "Le disjoncteur protège contre les surcharges (thermique) et les courts-circuits (magnétique)." },
          { q: "Quel calibre de disjoncteur est couramment utilisé pour protéger un circuit d'éclairage ?", options: ["2 A", "10 ou 16 A", "32 A", "63 A"], correct: 1, exp: "Un circuit d'éclairage est généralement protégé par un disjoncteur 10 ou 16 A." },
          { q: "Que signifie la courbe C d'un disjoncteur ?", options: ["Un seuil de déclenchement magnétique adapté aux usages domestiques courants", "Une protection uniquement thermique", "Une absence de protection", "Un type de câblage"], correct: 0, exp: "La courbe C est la courbe standard utilisée en domestique/tertiaire courant." }
        ]
      },
      {
        nom: "L'Interrupteur Différentiel",
        questions: [
          { q: "Quel est le rôle principal d'un interrupteur différentiel ?", options: ["Protéger contre les surcharges", "Détecter une fuite de courant et protéger contre les contacts indirects", "Allumer et éteindre l'éclairage", "Mesurer la consommation"], correct: 1, exp: "Le différentiel détecte les fuites de courant et protège les personnes des contacts indirects." },
          { q: "Quelle sensibilité différentielle est obligatoire pour les circuits de salle de bain ?", options: ["300 mA", "30 mA", "500 mA", "10 A"], correct: 1, exp: "Une sensibilité de 30 mA est requise pour la protection des personnes, notamment en salle de bain." },
          { q: "Un différentiel de type AC détecte quel type de courant de fuite ?", options: ["Uniquement les courants alternatifs sinusoïdaux", "Uniquement les courants continus", "Tous les types sans distinction", "Aucun courant"], correct: 0, exp: "Le type AC détecte les fuites de courant alternatif sinusoïdal uniquement." },
          { q: "Quelle est la différence entre un disjoncteur différentiel et un simple interrupteur différentiel ?", options: ["Aucune différence", "Le disjoncteur différentiel protège aussi contre les surintensités en plus des fuites de courant", "L'interrupteur différentiel protège contre les surintensités uniquement", "Le disjoncteur différentiel ne coupe jamais le courant"], correct: 1, exp: "Le disjoncteur différentiel combine protection différentielle ET protection contre les surintensités." }
        ]
      },
      {
        nom: "Les Conducteurs Électriques",
        questions: [
          { q: "Quel matériau est le plus couramment utilisé pour les conducteurs électriques domestiques ?", options: ["Aluminium uniquement", "Cuivre", "Fer", "Plomb"], correct: 1, exp: "Le cuivre est le matériau conducteur standard en domestique." },
          { q: "Que désigne la section d'un conducteur ?", options: ["Sa longueur", "Sa surface de coupe transversale, en mm²", "Sa couleur", "Son poids"], correct: 1, exp: "La section correspond à la surface de la coupe transversale du conducteur, exprimée en mm²." },
          { q: "Quelle section minimale est généralement utilisée pour un circuit d'éclairage ?", options: ["1 mm²", "1,5 mm²", "6 mm²", "10 mm²"], correct: 1, exp: "1,5 mm² est la section minimale courante pour l'éclairage." },
          { q: "Quelle section minimale est généralement utilisée pour un circuit de prises de courant 16A ?", options: ["1 mm²", "1,5 mm²", "2,5 mm²", "10 mm²"], correct: 2, exp: "2,5 mm² est la section minimale courante pour les prises 16A." }
        ]
      },
      {
        nom: "Les schémas Electriques",
        questions: [
          { q: "Quel type de schéma représente le fonctionnement électrique sans se soucier de l'implantation réelle ?", options: ["Schéma architectural", "Schéma de principe (unifilaire ou multifilaire)", "Plan de masse", "Schéma de câblage"], correct: 1, exp: "Le schéma de principe décrit le fonctionnement, indépendamment de l'implantation." },
          { q: "Quel type de schéma montre l'emplacement réel des appareils et le cheminement des câbles ?", options: ["Schéma de principe", "Schéma de câblage (ou de réalisation)", "Schéma unifilaire", "Schéma synoptique"], correct: 1, exp: "Le schéma de câblage/réalisation montre l'implantation réelle." },
          { q: "Dans un schéma unifilaire, comment sont représentés les conducteurs d'une même liaison ?", options: ["Chaque conducteur séparément", "Par un seul trait représentant tous les conducteurs", "Ils ne sont pas représentés", "En pointillés uniquement"], correct: 1, exp: "Le schéma unifilaire simplifie en représentant une liaison par un seul trait." },
          { q: "Quel symbole représente généralement un point lumineux sur un schéma électrique ?", options: ["Un carré", "Un cercle avec une croix", "Un triangle plein", "Une flèche"], correct: 1, exp: "Le point lumineux est classiquement symbolisé par un cercle avec une croix." }
        ]
      },
      {
        nom: "Montage Simple Allumage",
        questions: [
          { q: "Combien d'interrupteurs sont nécessaires pour un montage simple allumage ?", options: ["1", "2", "3", "4"], correct: 0, exp: "Un simple allumage nécessite un seul interrupteur." },
          { q: "Dans un simple allumage, l'interrupteur est câblé sur quel conducteur ?", options: ["Le neutre", "La phase", "La terre", "Peu importe"], correct: 1, exp: "L'interrupteur coupe toujours la phase, jamais le neutre." },
          { q: "Que commande un simple allumage ?", options: ["Plusieurs points lumineux depuis plusieurs endroits", "Un ou plusieurs points lumineux depuis un seul endroit", "Une prise de courant", "Un chauffe-eau"], correct: 1, exp: "Le simple allumage commande depuis un seul point de commande." },
          { q: "Pourquoi ne coupe-t-on jamais le neutre avec l'interrupteur ?", options: ["Par habitude uniquement", "Pour des raisons esthétiques", "Pour que l'appareil soit hors tension côté phase quand il est coupé, par sécurité", "Ce n'est pas interdit"], correct: 2, exp: "Couper la phase garantit l'absence de tension dangereuse en aval quand le circuit est ouvert." }
        ]
      },
      {
        nom: "Montage Double Allumage",
        questions: [
          { q: "Que permet un montage double allumage ?", options: ["Commander deux groupes de points lumineux séparément depuis un même endroit", "Commander un seul point lumineux depuis deux endroits", "Alimenter une prise de courant", "Protéger contre les surtensions"], correct: 0, exp: "Le double allumage permet de commander deux circuits distincts depuis un même emplacement." },
          { q: "Quel type d'interrupteur peut être utilisé pour un double allumage dans un même boîtier ?", options: ["Un interrupteur double (deux boutons)", "Un simple bouton poussoir", "Un contacteur jour/nuit", "Un télérupteur uniquement"], correct: 0, exp: "Un interrupteur double regroupe deux interrupteurs simples dans un même appareillage." },
          { q: "Le neutre est-il commun aux deux circuits d'un double allumage ?", options: ["Non, jamais", "Oui, généralement le neutre est commun, seule la phase est commutée séparément", "Le neutre n'existe pas dans ce montage", "Cela dépend de la couleur du fil"], correct: 1, exp: "Le neutre commun alimente les deux circuits, chaque phase étant commutée indépendamment." },
          { q: "Quel est l'intérêt principal d'un double allumage dans une même pièce ?", options: ["Pouvoir gérer indépendamment deux zones d'éclairage", "Diminuer la puissance installée", "Supprimer le besoin de disjoncteur", "Réduire le nombre de lampes"], correct: 0, exp: "Il permet par exemple d'éclairer séparément deux zones d'une même pièce." }
        ]
      },
      {
        nom: "Association des récepteurs",
        questions: [
          { q: "Dans un montage en série, que se passe-t-il si un récepteur tombe en panne ?", options: ["Les autres continuent de fonctionner normalement", "Tout le circuit est coupé", "Seul le récepteur en panne s'éteint", "Rien ne change"], correct: 1, exp: "En série, une coupure sur un récepteur interrompt tout le circuit." },
          { q: "Dans un montage en parallèle, que se passe-t-il si un récepteur tombe en panne ?", options: ["Tout le circuit s'arrête", "Les autres récepteurs continuent de fonctionner", "Le courant s'inverse", "La tension double"], correct: 1, exp: "En parallèle, chaque récepteur est indépendant des autres." },
          { q: "Dans une installation domestique, comment sont généralement associés les récepteurs ?", options: ["En série", "En parallèle", "En étoile uniquement", "Aucune association"], correct: 1, exp: "Les récepteurs domestiques (lampes, prises) sont associés en parallèle, sous la même tension." },
          { q: "Dans un montage série, l'intensité est-elle la même dans tous les récepteurs ?", options: ["Non", "Oui, l'intensité est identique dans tout le circuit série", "Elle double à chaque récepteur", "Elle est nulle"], correct: 1, exp: "En série, le courant est le même partout dans la boucle." }
        ]
      },
      {
        nom: "Montage Va et Vient",
        questions: [
          { q: "Combien d'interrupteurs va-et-vient sont nécessaires pour commander un point lumineux depuis deux endroits ?", options: ["1", "2", "3", "4"], correct: 1, exp: "Deux interrupteurs va-et-vient permettent la commande depuis deux points." },
          { q: "Combien de bornes possède un interrupteur va-et-vient ?", options: ["2", "3", "4", "6"], correct: 1, exp: "L'interrupteur va-et-vient possède 3 bornes : 1 commun et 2 navettes." },
          { q: "Comment se nomment les fils reliant les deux interrupteurs va-et-vient entre eux ?", options: ["Fils pilotes", "Fils navettes", "Fils de terre", "Fils de retour"], correct: 1, exp: "Les deux conducteurs qui relient les va-et-vient sont appelés fils navettes." },
          { q: "Où arrive la phase dans un montage va-et-vient ?", options: ["Sur le commun du premier interrupteur", "Sur une navette", "Sur la terre", "Directement sur la lampe"], correct: 0, exp: "La phase arrive sur la borne commune du premier va-et-vient." }
        ]
      },
      {
        nom: "Montage Permutateur",
        questions: [
          { q: "À partir de combien de points de commande utilise-t-on des permutateurs (en plus des va-et-vient) ?", options: ["2 points", "3 points ou plus", "1 point", "Jamais"], correct: 1, exp: "Au-delà de 2 points de commande, on ajoute des permutateurs (croisillons)." },
          { q: "Combien de bornes possède un permutateur (interrupteur croisillon) ?", options: ["2", "3", "4", "5"], correct: 2, exp: "Le permutateur possède 4 bornes (2 entrées, 2 sorties navettes)." },
          { q: "Où se placent les permutateurs dans un montage à 3 points de commande ou plus ?", options: ["Aux deux extrémités du circuit", "Entre les deux interrupteurs va-et-vient", "Il n'y a pas de permutateur dans ce cas", "Sur le circuit de terre"], correct: 1, exp: "Les permutateurs s'intercalent entre les deux va-et-vient d'extrémité." },
          { q: "Combien de va-et-vient et de permutateurs faut-il pour commander une lampe depuis 4 endroits ?", options: ["4 va-et-vient", "2 va-et-vient et 2 permutateurs", "1 va-et-vient et 3 permutateurs", "4 permutateurs"], correct: 1, exp: "Il faut toujours 2 va-et-vient aux extrémités, et un permutateur par point intermédiaire (donc 2 ici)." }
        ]
      },
      {
        nom: "Montage Prise de courant",
        questions: [
          { q: "Combien de bornes principales comporte une prise de courant 2P+T ?", options: ["2", "3", "4"], correct: 1, exp: "Une prise 2P+T comporte phase, neutre et terre, soit 3 bornes." },
          { q: "Quelle borne d'une prise de courant est reliée à la terre ?", options: ["La broche de terre", "Le neutre", "La phase", "Aucune"], correct: 0, exp: "La broche de terre relie la prise au circuit de protection." },
          { q: "Quel calibre de disjoncteur protège classiquement un circuit de prises de courant 16A ?", options: ["10 A", "16 A ou 20 A selon la section", "32 A", "2 A"], correct: 1, exp: "Un circuit prises est protégé par un disjoncteur 16 ou 20 A selon la section utilisée." },
          { q: "Selon la NF C 15-100, combien de prises maximum peut-on raccorder sur un circuit 16A en 1,5mm² ?", options: ["Aucune limite", "8 prises maximum", "20 prises", "2 prises"], correct: 1, exp: "La norme limite à 8 le nombre de socles de prise sur un circuit 16A/1,5mm²." }
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
          { q: "Que signifie TGBT ?", options: ["Tableau Général Basse Tension", "Transformateur Général Basse Tension", "Terre Générale Basse Tension", "Tableau Général de Branchement Technique"], correct: 0, exp: "TGBT = Tableau Général Basse Tension." },
          { q: "Où trouve-t-on généralement un TGBT ?", options: ["Uniquement dans les maisons individuelles", "Dans les installations tertiaires ou industrielles, en tête de distribution", "Dans chaque prise de courant", "Sur les poteaux électriques"], correct: 1, exp: "Le TGBT est utilisé en tête de distribution des installations tertiaires/industrielles." },
          { q: "Quel est le rôle du TGBT ?", options: ["Distribuer et protéger l'ensemble de l'installation électrique basse tension d'un bâtiment", "Produire de l'électricité", "Stocker de l'énergie solaire", "Éclairer les locaux"], correct: 0, exp: "Le TGBT distribue et protège l'ensemble du bâtiment en basse tension." },
          { q: "Un TGBT contient généralement quels types d'appareillage ?", options: ["Uniquement des prises", "Disjoncteurs, interrupteurs différentiels, appareils de mesure et de protection", "Uniquement des ampoules", "Uniquement des fusibles domestiques"], correct: 1, exp: "Le TGBT regroupe les organes de protection et de mesure de l'installation." }
        ]
      },
      {
        nom: "Raccordement électrique de chantier",
        questions: [
          { q: "Quel type de tableau est utilisé pour alimenter un chantier temporaire ?", options: ["Un simple prolongateur", "Un coffret de chantier normalisé avec protections différentielles", "Aucune protection n'est nécessaire", "Un tableau domestique classique"], correct: 1, exp: "Un coffret de chantier normalisé garantit la protection des utilisateurs sur site temporaire." },
          { q: "Quelle sensibilité différentielle est recommandée sur un chantier, milieu souvent humide ?", options: ["300 mA", "30 mA", "500 mA", "Aucune"], correct: 1, exp: "30 mA est requis pour la protection des personnes en milieu humide comme un chantier." },
          { q: "Pourquoi les installations de chantier nécessitent-elles une vigilance particulière ?", options: ["Elles sont exposées à l'humidité, aux chocs mécaniques et sont temporaires", "Elles ne sont jamais sous tension", "Elles ne nécessitent aucune norme", "Elles sont toujours en intérieur"], correct: 0, exp: "Conditions difficiles (humidité, chocs) et caractère temporaire imposent une vigilance accrue." },
          { q: "Quel type de câble est recommandé pour les installations de chantier ?", options: ["Câble rigide fragile", "Câble souple résistant type H07RN-F", "Fil nu", "Câble en aluminium fin"], correct: 1, exp: "Le câble souple H07RN-F résiste aux contraintes mécaniques du chantier." }
        ]
      },
      {
        nom: "Les GTL",
        questions: [
          { q: "Que signifie GTL ?", options: ["Gaine Technique Logement", "Grande Tension Locale", "Groupe Technique Lumineux", "Gestion Technique du Logement"], correct: 0, exp: "GTL = Gaine Technique Logement." },
          { q: "Où se situe généralement la GTL dans un logement neuf ?", options: ["Dans la cave uniquement", "Près de l'entrée ou dans un lieu accessible, souvent au rez-de-chaussée", "Sur le toit", "Dans la salle de bain"], correct: 1, exp: "La GTL est placée dans un lieu accessible, souvent proche de l'entrée." },
          { q: "Que regroupe la GTL ?", options: ["Uniquement l'eau", "Le tableau électrique, le tableau de communication et l'arrivée des réseaux", "Uniquement le chauffage", "Rien de spécifique"], correct: 1, exp: "La GTL regroupe les arrivées de réseaux et les tableaux électrique/communication." },
          { q: "Quelle est la largeur minimale imposée pour une GTL selon la norme NF C 15-100 ?", options: ["30 cm", "60 cm", "1 m", "2 m"], correct: 1, exp: "La norme impose une largeur minimale de 60 cm pour la GTL." }
        ]
      },
      {
        nom: "Travail des câbles",
        questions: [
          { q: "Quel outil permet de dénuder proprement un câble sans endommager les conducteurs ?", options: ["Un cutter uniquement", "Une pince à dénuder adaptée", "Un marteau", "Une lime"], correct: 1, exp: "La pince à dénuder adaptée évite d'entailler les conducteurs." },
          { q: "Pourquoi faut-il respecter un rayon de courbure minimal lors du cintrage d'un câble ?", options: ["Pour des raisons esthétiques uniquement", "Pour éviter d'endommager l'isolant et les conducteurs internes", "Ce n'est pas important", "Pour gagner du temps"], correct: 1, exp: "Un rayon trop serré peut fissurer l'isolant ou casser les brins internes." },
          { q: "Que faut-il vérifier avant de raccorder un câble multiconducteur ?", options: ["Rien de particulier", "La correspondance des couleurs de conducteurs et l'absence de dommage sur l'isolant", "Uniquement sa longueur", "Uniquement son prix"], correct: 1, exp: "Il faut vérifier le repérage des conducteurs et l'état de l'isolant." },
          { q: "Quel repérage utilise-t-on pour identifier les conducteurs lors du raccordement ?", options: ["Aucun repérage n'est nécessaire", "Code couleur normalisé et/ou manchons repère-fils", "Uniquement la mémoire", "Le poids du câble"], correct: 1, exp: "Le code couleur normalisé et les manchons repère-fils facilitent l'identification." }
        ]
      },
      {
        nom: "Les conduits électriques (Gaines)",
        questions: [
          { q: "Que signifie ICTA, type de gaine couramment utilisé ?", options: ["Un tube rigide", "Isolant Cintrable Transversalement Annelé", "Un câble nu", "Une plaque métallique"], correct: 1, exp: "ICTA = Isolant Cintrable Transversalement Annelé." },
          { q: "Quelle est la couleur normalisée d'une gaine ICTA pour un circuit électrique classique ?", options: ["Vert", "Orange (ou gris selon usage)", "Rouge uniquement", "Bleu"], correct: 1, exp: "La gaine orange est classiquement utilisée pour l'électricité (gris pour certains autres réseaux)." },
          { q: "Pourquoi utilise-t-on des gaines pour protéger les conducteurs encastrés ?", options: ["Pour l'esthétique uniquement", "Pour protéger mécaniquement les conducteurs et faciliter leur remplacement", "Pour augmenter la résistance électrique", "Ce n'est jamais nécessaire"], correct: 1, exp: "La gaine protège mécaniquement et permet de faire coulisser/remplacer les conducteurs." },
          { q: "Quel diamètre de gaine ICTA est couramment utilisé pour un circuit domestique standard ?", options: ["Ø 10 mm", "Ø 16 ou 20 mm", "Ø 50 mm", "Ø 100 mm"], correct: 1, exp: "Les diamètres 16 ou 20 mm sont courants pour les circuits domestiques classiques." }
        ]
      },
      {
        nom: "Les conduits électriques (Tubes IRL)",
        questions: [
          { q: "Que signifie IRL pour un tube électrique ?", options: ["Isolant Rigide Léger (tube rigide)", "Interrupteur Rapide Local", "Installation Résidentielle Légère", "Isolation Renforcée Locale"], correct: 0, exp: "IRL désigne un tube Isolant Rigide Léger." },
          { q: "Dans quel contexte utilise-t-on plutôt des tubes IRL rigides ?", options: ["Uniquement en apparent souple", "En saillie ou en apparent, pour une protection mécanique renforcée", "Jamais utilisé en électricité", "Uniquement sous l'eau"], correct: 1, exp: "Les tubes rigides IRL s'utilisent en apparent/saillie pour une bonne tenue mécanique." },
          { q: "Quel est l'avantage d'un tube rigide (IRL) par rapport à une gaine ICTA souple ?", options: ["Aucun avantage", "Une meilleure résistance mécanique et un aspect plus soigné en apparent", "Il est toujours moins cher", "Il ne se coupe pas"], correct: 1, exp: "Le tube rigide offre une meilleure tenue mécanique et une finition plus nette en apparent." },
          { q: "Comment raccorde-t-on deux tubes IRL entre eux ?", options: ["Avec du ruban adhésif", "Avec des raccords/manchons spécifiques", "On ne les raccorde jamais", "En les soudant"], correct: 1, exp: "Des raccords ou manchons spécifiques permettent de jointer les tubes IRL." }
        ]
      },
      {
        nom: "Réalisation en encastré",
        questions: [
          { q: "Qu'est-ce qu'une installation encastrée ?", options: ["Les conducteurs et boîtiers sont apparents en saillie", "Les conducteurs et boîtiers sont noyés dans la maçonnerie ou les cloisons", "Il n'y a pas de boîtiers", "C'est uniquement pour l'extérieur"], correct: 1, exp: "En encastré, les éléments sont intégrés dans la maçonnerie ou les cloisons." },
          { q: "Que doit-on utiliser pour protéger un point de dérivation encastré ?", options: ["Aucune protection", "Une boîte de dérivation encastrée avec couvercle accessible", "Du ruban isolant uniquement", "Une gaine seule sans boîte"], correct: 1, exp: "Une boîte de dérivation avec couvercle protège et permet l'accès aux connexions." },
          { q: "Pourquoi une boîte de dérivation encastrée doit-elle rester accessible ?", options: ["Ce n'est pas nécessaire", "Pour permettre la vérification et la maintenance ultérieure des connexions", "Pour des raisons esthétiques uniquement", "Pour économiser du câble"], correct: 1, exp: "L'accessibilité permet le contrôle et la maintenance des connexions dans le temps." },
          { q: "Quel outil permet de créer un saignement dans un mur pour encastrer une gaine ?", options: ["Une rainureuse (ou disqueuse + burin)", "Un tournevis", "Une pince coupante", "Un multimètre"], correct: 0, exp: "La rainureuse (ou disqueuse et burin) permet de creuser une saignée dans le mur." }
        ]
      },
      {
        nom: "Le Magnétisme",
        questions: [
          { q: "Quel phénomène décrit l'apparition d'un champ magnétique autour d'un conducteur parcouru par un courant ?", options: ["L'effet Joule", "L'électromagnétisme", "La capacité électrique", "La résistance électrique"], correct: 1, exp: "Un courant électrique crée un champ magnétique : c'est l'électromagnétisme." },
          { q: "Sur quel principe fonctionne un contacteur ou un relais électromagnétique ?", options: ["La dilatation thermique", "L'attraction d'un noyau métallique par un champ magnétique créé par une bobine", "La photo-résistance", "La pression d'air"], correct: 1, exp: "La bobine crée un champ magnétique qui attire un noyau métallique, actionnant le contact." },
          { q: "Quel appareil utilise le magnétisme pour transformer une tension alternative en une autre tension ?", options: ["Le transformateur", "Le fusible", "Le disjoncteur", "La prise de courant"], correct: 0, exp: "Le transformateur utilise l'induction électromagnétique pour modifier la tension." },
          { q: "Que se passe-t-il si on approche un aimant d'une bobine parcourue par un courant ?", options: ["Rien du tout", "Une force d'attraction ou de répulsion apparaît selon le sens du courant", "Le courant s'arrête immédiatement", "La bobine fond"], correct: 1, exp: "L'interaction entre champs magnétiques crée une force d'attraction ou de répulsion." }
        ]
      },
      {
        nom: "Montage Télérupteur",
        questions: [
          { q: "Quel est l'avantage principal d'un télérupteur par rapport au va-et-vient pour de nombreux points de commande ?", options: ["Aucun avantage", "Il permet de commander depuis un nombre illimité de boutons poussoirs avec un câblage simplifié", "Il coûte plus cher sans bénéfice", "Il ne fonctionne qu'avec deux points"], correct: 1, exp: "Le télérupteur simplifie le câblage pour de nombreux points de commande." },
          { q: "Quel composant utilise-t-on pour commander un télérupteur ?", options: ["Un interrupteur va-et-vient", "Un ou plusieurs boutons poussoirs", "Un disjoncteur", "Un fusible"], correct: 1, exp: "Un ou plusieurs boutons poussoirs pilotent la bobine du télérupteur." },
          { q: "Comment fonctionne un télérupteur ?", options: ["Il bascule d'état à chaque impulsion reçue sur sa bobine de commande", "Il reste toujours allumé", "Il nécessite de maintenir le bouton appuyé", "Il ne fonctionne qu'en courant continu"], correct: 0, exp: "Chaque impulsion sur la bobine fait basculer l'état du contact (allumé/éteint)." },
          { q: "Le circuit de commande et le circuit de puissance d'un télérupteur sont-ils sur le même circuit ?", options: ["Oui, toujours identiques", "Non, ils sont distincts", "Il n'y a qu'un seul circuit possible", "Cela dépend de la couleur du fil"], correct: 1, exp: "Le circuit de commande (boutons poussoirs) est distinct du circuit de puissance (éclairage)." }
        ]
      },
      {
        nom: "Montage Minuterie",
        questions: [
          { q: "Quelle est la fonction principale d'une minuterie d'éclairage ?", options: ["Allumer indéfiniment jusqu'à extinction manuelle", "Allumer l'éclairage pour une durée réglable puis l'éteindre automatiquement", "Mesurer la consommation électrique", "Protéger contre les surtensions"], correct: 1, exp: "La minuterie éteint automatiquement l'éclairage après une durée réglée." },
          { q: "Comment commande-t-on généralement une minuterie ?", options: ["Par un interrupteur va-et-vient", "Par un ou plusieurs boutons poussoirs", "Automatiquement sans aucune commande", "Par un disjoncteur différentiel"], correct: 1, exp: "Des boutons poussoirs déclenchent la temporisation de la minuterie." },
          { q: "Où utilise-t-on couramment des minuteries d'escalier ?", options: ["Dans les cages d'escalier et parties communes d'immeubles", "Uniquement dans les chambres", "Jamais en intérieur", "Uniquement à l'extérieur"], correct: 0, exp: "Les minuteries sont fréquentes dans les circulations communes pour économiser l'énergie." },
          { q: "Que se passe-t-il si on appuie à nouveau sur le bouton poussoir pendant que la minuterie est active ?", options: ["Elle s'éteint immédiatement", "La temporisation se relance généralement", "Rien ne se passe", "Elle grille"], correct: 1, exp: "Une nouvelle impulsion relance généralement la temporisation." }
        ]
      },
      {
        nom: "ECS (Eau Chaude Sanitaire)",
        questions: [
          { q: "Que signifie ECS ?", options: ["Eau Chaude Sanitaire", "Électricité Chaude Sécurisée", "Espace Chauffage Solaire", "Élément de Chauffe Standard"], correct: 0, exp: "ECS = Eau Chaude Sanitaire." },
          { q: "Quel appareil électrique produit couramment l'ECS dans un logement ?", options: ["Le disjoncteur", "Le chauffe-eau électrique (cumulus)", "Le télérupteur", "Le transformateur"], correct: 1, exp: "Le chauffe-eau électrique (cumulus) chauffe l'eau sanitaire." },
          { q: "Sur quel type de tarif fonctionne souvent le chauffe-eau électrique pour optimiser les coûts ?", options: ["Tarif Heures Creuses / Heures Pleines", "Tarif unique obligatoire", "Aucun tarif spécifique", "Tarif vert uniquement"], correct: 0, exp: "Le chauffe-eau est souvent programmé sur les heures creuses, moins coûteuses." },
          { q: "Quel dispositif permet de piloter le chauffe-eau selon les heures creuses ?", options: ["Un contacteur jour/nuit (HC/HP)", "Un télérupteur uniquement", "Un fusible", "Une prise de courant simple"], correct: 0, exp: "Le contacteur jour/nuit active le chauffe-eau pendant les heures creuses." }
        ]
      },
      {
        nom: "Montage Contacteur HC / HP",
        questions: [
          { q: "Que signifie HC/HP ?", options: ["Heures Creuses / Heures Pleines", "Haute Consommation / Haute Puissance", "Habilitation Chargé / Habilitation Personnel", "Haute Capacité / Haute Précision"], correct: 0, exp: "HC/HP = Heures Creuses / Heures Pleines." },
          { q: "Quel signal reçoit le contacteur jour/nuit pour commuter entre HC et HP ?", options: ["Un signal tarifaire envoyé par le compteur/fournisseur", "Un signal lumineux visible", "Aucun signal, il est manuel uniquement", "Un signal sonore"], correct: 0, exp: "Le contacteur reçoit un signal (fil pilote ou signal du compteur) indiquant le changement tarifaire." },
          { q: "Quel type de charge est couramment piloté par un contacteur HC/HP ?", options: ["Uniquement l'éclairage", "Le chauffe-eau électrique et parfois le chauffage", "Uniquement les prises de courant", "Le portail automatique"], correct: 1, exp: "Le chauffe-eau et le chauffage sont typiquement pilotés selon les heures creuses." },
          { q: "Un contacteur jour/nuit possède généralement combien de bornes de puissance principales ?", options: ["2", "4 (bobine + contact de puissance)", "8", "1"], correct: 1, exp: "Il comporte des bornes de bobine de commande et des bornes de contact de puissance." }
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
          { q: "Quel est le rôle de la prise de terre dans une installation électrique ?", options: ["Alimenter les appareils", "Écouler les courants de défaut vers la terre et assurer la sécurité des personnes", "Éclairer le logement", "Réduire la consommation électrique"], correct: 1, exp: "La prise de terre écoule les courants de défaut et protège les personnes." },
          { q: "Quel dispositif est couramment utilisé pour réaliser une prise de terre neuve dans le sol ?", options: ["Un piquet de terre", "Une ampoule", "Un disjoncteur", "Une gaine ICTA"], correct: 0, exp: "Le piquet de terre enfoncé dans le sol constitue une prise de terre courante." },
          { q: "Quelle est l'unité de mesure de la résistance de la prise de terre ?", options: ["Volt", "Ampère", "Ohm", "Watt"], correct: 2, exp: "La résistance de terre se mesure en ohms." },
          { q: "Une résistance de terre trop élevée peut-elle compromettre la sécurité des personnes ?", options: ["Non, jamais", "Oui, car la tension de contact en cas de défaut pourrait dépasser les seuils de sécurité", "Cela n'a aucun rapport avec la sécurité", "Seulement en triphasé"], correct: 1, exp: "Une résistance trop élevée peut entraîner une tension de contact dangereuse en cas de défaut." }
        ]
      },
      {
        nom: "Amélioration de la prise de terre",
        questions: [
          { q: "Quelle technique permet d'améliorer (diminuer) la résistance d'une prise de terre existante ?", options: ["Ajouter des piquets de terre supplémentaires reliés en parallèle", "Retirer le piquet", "Augmenter la section du câble uniquement", "Peindre le piquet"], correct: 0, exp: "Ajouter des piquets en parallèle réduit la résistance globale de la prise de terre." },
          { q: "Quel facteur du sol influence fortement la résistance de la prise de terre ?", options: ["La couleur du sol", "L'humidité et la nature (résistivité) du sol", "La température de l'air", "Le nombre de prises de courant"], correct: 1, exp: "L'humidité et la résistivité du sol influencent directement la résistance de terre." },
          { q: "Quel matériau de piquet de terre est couramment utilisé pour sa résistance à la corrosion ?", options: ["Acier galvanisé ou cuivre", "Bois", "Plastique", "Verre"], correct: 0, exp: "L'acier galvanisé ou le cuivre résistent bien à la corrosion dans le sol." },
          { q: "Ajouter un conducteur en boucle à fond de fouille peut-il améliorer la prise de terre ?", options: ["Non, jamais", "Oui, c'est une méthode courante lors de la construction", "Cela dégrade toujours la prise de terre", "Cela n'a aucun effet"], correct: 1, exp: "Le conducteur en boucle à fond de fouille, posé à la construction, est une méthode efficace." }
        ]
      },
      {
        nom: "Mesurage de la prise de terre",
        questions: [
          { q: "Quel appareil permet de mesurer la résistance d'une prise de terre ?", options: ["Un voltmètre simple", "Un télurmètre (contrôleur de terre)", "Un ampèremètre simple", "Un fusible"], correct: 1, exp: "Le télurmètre est spécifiquement conçu pour mesurer la résistance de terre." },
          { q: "Quelle méthode de mesure de terre utilise deux piquets auxiliaires enfoncés dans le sol ?", options: ["La méthode des 62%", "La méthode du disjoncteur", "La méthode du fusible", "La méthode Ohm simple"], correct: 0, exp: "La méthode des 62% (ou méthode volt-ampèremétrique) utilise des piquets auxiliaires." },
          { q: "Pourquoi mesure-t-on régulièrement la prise de terre ?", options: ["Pour s'assurer qu'elle reste efficace dans le temps", "Ce n'est jamais nécessaire", "Uniquement par curiosité", "Pour changer la couleur des fils"], correct: 0, exp: "La résistance de terre peut évoluer (corrosion, sécheresse), d'où l'intérêt d'un contrôle régulier." },
          { q: "Une valeur de résistance de terre plus faible est-elle généralement préférable ?", options: ["Non, plus elle est haute mieux c'est", "Oui, une résistance plus faible limite la tension de contact en cas de défaut", "Cela n'a aucune importance", "Uniquement en triphasé"], correct: 1, exp: "Une résistance faible limite la tension de contact dangereuse en cas de défaut d'isolement." }
        ]
      },
      {
        nom: "Le Parafoudre",
        questions: [
          { q: "Quel est le rôle d'un parafoudre dans une installation électrique ?", options: ["Protéger les équipements contre les surtensions transitoires", "Éclairer le tableau électrique", "Remplacer le disjoncteur", "Produire de l'électricité"], correct: 0, exp: "Le parafoudre protège les équipements contre les surtensions (foudre, coupures)." },
          { q: "Où installe-t-on généralement un parafoudre ?", options: ["Dans chaque prise de courant", "En tête d'installation, dans le tableau électrique", "Uniquement à l'extérieur du bâtiment", "Sur chaque ampoule"], correct: 1, exp: "Le parafoudre s'installe en tête d'installation, dans le tableau électrique." },
          { q: "Dans quel cas l'installation d'un parafoudre est-elle obligatoire en France ?", options: ["Jamais obligatoire", "Notamment si le bâtiment est équipé d'un paratonnerre ou selon le niveau kéraunique de la zone", "Uniquement dans les appartements", "Uniquement pour les circuits d'éclairage"], correct: 1, exp: "L'obligation dépend notamment de la présence d'un paratonnerre ou du niveau kéraunique local." },
          { q: "Un parafoudre remplace-t-il un disjoncteur différentiel ?", options: ["Oui, totalement", "Non, il a une fonction complémentaire différente", "Ils ont exactement la même fonction", "Le parafoudre est obsolète"], correct: 1, exp: "Le parafoudre protège contre les surtensions, le différentiel contre les fuites de courant : fonctions différentes." }
        ]
      },
      {
        nom: "Indices de protection",
        questions: [
          { q: "Que signifie l'indice IP d'un matériel électrique ?", options: ["Indice de Puissance", "Indice de Protection contre les corps solides et les liquides", "Indice de Précision", "Indice de Prix"], correct: 1, exp: "L'indice IP indique le degré de protection contre les corps solides et les liquides." },
          { q: "Dans un indice IP44, que signifie le premier chiffre (4) ?", options: ["Protection contre les liquides", "Protection contre les corps solides supérieurs à 1mm", "La tension supportée", "Le poids du matériel"], correct: 1, exp: "Le premier chiffre de l'IP concerne la protection contre les corps solides." },
          { q: "Dans un indice IP44, que signifie le second chiffre (4) ?", options: ["Protection contre les projections d'eau dans toutes les directions", "Protection contre les corps solides", "La couleur du boîtier", "La puissance maximale"], correct: 0, exp: "Le second chiffre de l'IP concerne la protection contre les liquides." },
          { q: "Que signifie l'indice IK d'un matériel électrique ?", options: ["Indice de résistance aux chocs mécaniques", "Indice de protection contre l'eau", "Indice de kilowattheure", "Indice de courant"], correct: 0, exp: "L'indice IK indique la résistance du matériel aux chocs mécaniques." }
        ]
      },
      {
        nom: "Les classes d'isolation du matériel",
        questions: [
          { q: "Un appareil de classe I possède quelle caractéristique de sécurité ?", options: ["Une double isolation sans besoin de terre", "Une mise à la terre obligatoire de ses parties métalliques accessibles", "Aucune protection", "Une alimentation en très basse tension uniquement"], correct: 1, exp: "La classe I impose la mise à la terre des parties métalliques accessibles." },
          { q: "Un appareil de classe II est reconnaissable par quel symbole ?", options: ["Un double carré (double isolation)", "Une croix rouge", "Un triangle jaune", "Un cercle bleu"], correct: 0, exp: "Le symbole du double carré indique une double isolation (classe II)." },
          { q: "Un appareil de classe III fonctionne sous quelle tension ?", options: ["230 V standard", "Très Basse Tension de Sécurité (TBTS), généralement ≤ 50V", "400 V triphasé", "Aucune tension définie"], correct: 1, exp: "La classe III fonctionne en TBTS, tension généralement inférieure ou égale à 50V." },
          { q: "Pourquoi les appareils de classe II ne nécessitent-ils pas de conducteur de terre ?", options: ["Parce qu'ils sont sous-dimensionnés", "Parce que leur double isolation empêche tout contact avec une partie sous tension en cas de défaut", "Parce qu'ils ne sont jamais reliés au secteur", "Ce n'est pas vrai, ils en ont toujours besoin"], correct: 1, exp: "La double isolation supprime le risque de mise sous tension accidentelle des parties accessibles." }
        ]
      },
      {
        nom: "Les volumes de salle de bain",
        questions: [
          { q: "Combien de volumes de sécurité sont définis dans une salle de bain selon la NF C 15-100 ?", options: ["2 (volumes 0 et 1)", "4 (volumes 0, 1, 2 et hors volume)", "1 seul volume global", "6 volumes"], correct: 1, exp: "La norme définit 4 zones : volumes 0, 1, 2 et hors volume." },
          { q: "Que correspond le volume 0 dans une salle de bain ?", options: ["L'intérieur de la baignoire ou du receveur de douche", "Toute la pièce", "Uniquement le plafond", "L'extérieur de la salle de bain"], correct: 0, exp: "Le volume 0 est l'intérieur du récipient (baignoire, receveur de douche)." },
          { q: "Quel matériel électrique est autorisé dans le volume 0 ?", options: ["Aucune prise de courant, uniquement du matériel TBTS très limité", "Toutes les prises de courant standard", "Un chauffe-eau classique", "Un tableau électrique complet"], correct: 0, exp: "Le volume 0 exclut les prises classiques ; seul du matériel TBTS très spécifique est envisageable." },
          { q: "Dans quel volume peut-on généralement installer une prise de courant classique en salle de bain ?", options: ["Volume 0", "Volume 1", "Hors volume", "Nulle part"], correct: 2, exp: "Les prises classiques sont installées hors volume (volume 3 selon anciennes appellations)." }
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
          { q: "Quelle est la fonction principale d'un interrupteur horaire (horloge programmable) ?", options: ["Allumer/éteindre un circuit automatiquement selon des plages horaires programmées", "Mesurer la tension", "Protéger contre les surintensités", "Détecter une fuite de courant"], correct: 0, exp: "L'interrupteur horaire commute selon un programme horaire préréglé." },
          { q: "Quel type d'application utilise couramment un interrupteur horaire ?", options: ["Éclairage extérieur, chauffe-eau, portail automatique", "Uniquement les prises de courant de cuisine", "Uniquement les circuits de terre", "Aucune application pratique"], correct: 0, exp: "L'interrupteur horaire est utilisé pour de nombreux usages programmés (éclairage, chauffe-eau...)." },
          { q: "Un interrupteur horaire nécessite-t-il d'être réglé à l'heure réelle pour fonctionner correctement ?", options: ["Non, ce n'est jamais nécessaire", "Oui, sinon les plages horaires programmées seront décalées", "Il se règle tout seul sans jamais d'intervention", "Cela n'affecte pas son fonctionnement"], correct: 1, exp: "Un mauvais réglage de l'heure décale les plages de commutation programmées." },
          { q: "Quelle est la différence entre une minuterie et un interrupteur horaire ?", options: ["Aucune différence", "La minuterie temporise une courte durée après une impulsion, l'horaire suit un programme journalier/hebdomadaire", "L'interrupteur horaire ne fonctionne qu'une fois", "La minuterie fonctionne uniquement le jour"], correct: 1, exp: "La minuterie est une temporisation courte, l'horaire suit un programme calendaire." }
        ]
      },
      {
        nom: "Montage Yokis",
        questions: [
          { q: "Que permet la technologie Yokis dans une installation électrique ?", options: ["Piloter l'éclairage et les volets sans fil, via radio, en complément du câblage existant", "Remplacer entièrement le tableau électrique", "Produire de l'électricité", "Mesurer la résistance de terre"], correct: 0, exp: "Yokis permet le pilotage radio de l'éclairage/volets sans tirer de nouveaux câbles de commande." },
          { q: "Sur quel principe de communication reposent les modules Yokis ?", options: ["Communication radio bidirectionnelle", "Câble coaxial uniquement", "Fibre optique", "Bluetooth uniquement"], correct: 0, exp: "Les modules Yokis communiquent par radio bidirectionnelle." },
          { q: "Quel est l'avantage des modules Yokis en rénovation ?", options: ["Il faut casser tous les murs pour les installer", "Ils permettent d'ajouter du pilotage à distance sans tirer de nouveaux câbles de commande", "Ils ne fonctionnent qu'en construction neuve", "Ils remplacent la prise de terre"], correct: 1, exp: "En rénovation, cela évite de tirer de nouveaux câbles de commande grâce au radio." },
          { q: "Un module Yokis de puissance se raccorde généralement où ?", options: ["Directement en encastré au point lumineux ou dans le tableau", "Uniquement à l'extérieur du bâtiment", "Sur le compteur uniquement", "Il ne se raccorde jamais à l'installation"], correct: 0, exp: "Le module se place typiquement en encastré au point lumineux ou dans le tableau électrique." }
        ]
      },
      {
        nom: "Le transformateur",
        questions: [
          { q: "Quel est le rôle principal d'un transformateur ?", options: ["Modifier une tension alternative en une autre tension alternative", "Convertir le courant alternatif en courant continu", "Mesurer une intensité", "Protéger contre les courts-circuits"], correct: 0, exp: "Le transformateur modifie le niveau d'une tension alternative." },
          { q: "Un transformateur fonctionne-t-il en courant continu ?", options: ["Oui parfaitement", "Non, il nécessite un courant alternatif pour créer une variation de flux magnétique", "Peu importe le type de courant", "Il ne fonctionne jamais"], correct: 1, exp: "Le transformateur exige un courant alternatif pour induire une tension au secondaire." },
          { q: "Si le nombre de spires au secondaire est inférieur à celui du primaire, le transformateur est dit :", options: ["Élévateur", "Abaisseur", "Neutre", "Inversé"], correct: 1, exp: "Moins de spires au secondaire qu'au primaire = transformateur abaisseur de tension." },
          { q: "Quel type de transformateur est utilisé pour alimenter des circuits en très basse tension de sécurité (TBTS) ?", options: ["Transformateur de sécurité (isolement galvanique)", "Transformateur toroïdal uniquement pour l'audio", "Aucun transformateur n'est nécessaire", "Un simple fusible suffit"], correct: 0, exp: "Un transformateur de sécurité assure l'isolement galvanique nécessaire à la TBTS." }
        ]
      },
      {
        nom: "Montage Sonnette (230 V - 12 V)",
        questions: [
          { q: "Pourquoi utilise-t-on un transformateur pour alimenter une sonnette en 12V ?", options: ["Pour abaisser la tension du secteur à une tension plus faible et sécurisée", "Pour augmenter la tension", "Ce n'est jamais nécessaire", "Pour produire du courant continu uniquement"], correct: 0, exp: "Le transformateur abaisse le 230V à 12V pour sécuriser le circuit de sonnette." },
          { q: "Le circuit côté 230V d'un montage sonnette doit-il être protégé par un disjoncteur ?", options: ["Non, jamais", "Oui, comme tout circuit alimenté en 230V", "Uniquement en extérieur", "Uniquement le week-end"], correct: 1, exp: "Le côté 230V reste soumis aux mêmes exigences de protection que tout circuit secteur." },
          { q: "Le bouton poussoir de sonnette est câblé sur quel côté du transformateur ?", options: ["Le côté primaire 230V", "Le côté secondaire basse tension (12V)", "Il n'est jamais câblé", "Sur la terre uniquement"], correct: 1, exp: "Le bouton poussoir est câblé côté secondaire, en basse tension sécurisée." },
          { q: "Quel est l'avantage de la basse tension (12V) pour le circuit de commande de la sonnette ?", options: ["Aucun avantage particulier", "Une sécurité accrue et la possibilité d'utiliser des fils plus fins", "Elle consomme plus d'énergie", "Elle nécessite plus de protections"], correct: 1, exp: "La basse tension réduit les risques et permet des conducteurs plus fins et moins isolés." }
        ]
      },
      {
        nom: "Diagnostic électrique (NF C 15-600)",
        questions: [
          { q: "Quel est l'objectif du diagnostic électrique selon la norme NF C 15-600 ?", options: ["Évaluer l'état de l'installation électrique d'un logement, notamment lors d'une vente", "Installer une nouvelle installation", "Remplacer le compteur uniquement", "Calculer la puissance souscrite"], correct: 0, exp: "Le diagnostic évalue l'état de sécurité de l'installation électrique existante." },
          { q: "Pour quel type de logement le diagnostic électrique est-il obligatoire lors d'une vente ?", options: ["Tous les logements sans exception d'ancienneté", "Les installations électriques de plus de 15 ans", "Uniquement les logements neufs", "Aucun logement n'est concerné"], correct: 1, exp: "Le diagnostic est obligatoire pour les installations électriques de plus de 15 ans lors d'une vente." },
          { q: "Quelle est la durée de validité d'un diagnostic électrique lors d'une vente ?", options: ["1 an", "3 ans", "10 ans", "Illimitée"], correct: 1, exp: "Le diagnostic électrique est valable 3 ans lors d'une vente." },
          { q: "Le diagnostic électrique vérifie notamment quel point de sécurité ?", options: ["La présence d'un dispositif différentiel adapté et l'état de la prise de terre", "La couleur de la peinture", "Le prix de l'électricité", "La marque des appareils électroménagers"], correct: 0, exp: "Le diagnostic contrôle notamment le différentiel, la prise de terre et le tableau électrique." }
        ]
      },
      {
        nom: "La colonne électrique d'immeuble",
        questions: [
          { q: "Qu'est-ce que la colonne électrique d'un immeuble ?", options: ["La liaison verticale entre le point de livraison et les différents logements", "Une colonne décorative", "Le compteur individuel uniquement", "Un poteau électrique extérieur"], correct: 0, exp: "La colonne électrique relie verticalement le point de livraison aux logements de l'immeuble." },
          { q: "Qui est généralement propriétaire/gestionnaire de la colonne électrique dans un immeuble collectif ?", options: ["Chaque locataire individuellement", "Le gestionnaire de réseau de distribution ou la copropriété selon les cas", "Toujours l'État", "Aucun gestionnaire"], correct: 1, exp: "La gestion revient au distributeur (ex: Enedis) ou à la copropriété selon les configurations." },
          { q: "Où se situent généralement les compteurs individuels alimentés par la colonne montante ?", options: ["Dans chaque logement uniquement", "En pied d'immeuble, en paliers ou en gaine technique selon la conception", "Sur le toit uniquement", "Il n'y a pas de compteurs individuels"], correct: 1, exp: "Les compteurs peuvent être en pied d'immeuble, aux paliers, ou en gaine technique." },
          { q: "Pourquoi la section des conducteurs de la colonne montante doit-elle être dimensionnée avec soin ?", options: ["Pour des raisons esthétiques", "Pour supporter la puissance totale appelée par l'ensemble des logements desservis", "Ce n'est pas important", "Pour réduire le nombre de logements"], correct: 1, exp: "La colonne doit supporter l'appel de puissance cumulé de tous les logements alimentés." }
        ]
      },
      {
        nom: "Circulation d'Immeuble à usage d'habitation",
        questions: [
          { q: "Quel type d'éclairage est couramment utilisé dans les circulations communes d'immeubles pour économiser l'énergie ?", options: ["Éclairage permanent sans coupure", "Éclairage temporisé (minuterie) ou détection de présence", "Aucun éclairage n'est autorisé", "Uniquement des bougies"], correct: 1, exp: "La minuterie ou la détection de présence limite la consommation dans les parties communes." },
          { q: "Que doit-on garantir en priorité dans les circulations communes d'un immeuble d'habitation ?", options: ["La décoration uniquement", "La sécurité des occupants (éclairage, issues de secours, BAES si nécessaire)", "Le coût le plus bas possible sans autre critère", "Aucune règle spécifique"], correct: 1, exp: "La sécurité (éclairage, évacuation) est prioritaire dans les parties communes." },
          { q: "Les blocs autonomes d'éclairage de sécurité (BAES) sont-ils obligatoires dans certaines circulations communes ?", options: ["Jamais obligatoires", "Oui, selon la réglementation applicable aux parties communes concernées", "Uniquement dans les maisons individuelles", "Uniquement en journée"], correct: 1, exp: "Les BAES sont requis dans certaines circulations communes selon la réglementation en vigueur." },
          { q: "Quel type de câblage est à privilégier dans les parties communes pour la sécurité incendie ?", options: ["Câbles standards sans exigence particulière", "Câbles et équipements respectant les exigences de comportement au feu", "N'importe quel câble", "Uniquement des fils nus"], correct: 1, exp: "Les parties communes exigent des câbles/équipements adaptés au risque incendie." }
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
          { q: "Quelle est la fréquence du courant alternatif du réseau en France ?", options: ["25 Hz", "50 Hz", "60 Hz", "100 Hz"], correct: 1, exp: "Le réseau français fonctionne à une fréquence de 50 Hz." },
          { q: "Que représente la valeur efficace (RMS) d'une tension alternative sinusoïdale ?", options: ["La valeur maximale atteinte", "La valeur qui produirait le même effet thermique qu'une tension continue équivalente", "La valeur moyenne sur une période", "Une valeur arbitraire de mesure"], correct: 1, exp: "La valeur efficace correspond à l'équivalent continu produisant le même échauffement." },
          { q: "Quelle relation relie la valeur crête et la valeur efficace d'une tension sinusoïdale ?", options: ["Ucrête = Uefficace", "Ucrête = Uefficace × √2", "Ucrête = Uefficace / √2", "Ucrête = 2 × Uefficace"], correct: 1, exp: "Pour une sinusoïde, Ucrête = Uefficace × √2 (environ 1,414)." }
        ]
      },
      {
        nom: "Les bases et répartition du triphasé",
        questions: [
          { q: "Combien de phases comporte un réseau triphasé standard ?", options: ["1", "2", "3", "4"], correct: 2, exp: "Un réseau triphasé comporte 3 phases (plus éventuellement un neutre)." },
          { q: "Quel est le déphasage entre deux phases consécutives d'un système triphasé équilibré ?", options: ["90°", "120°", "180°", "60°"], correct: 1, exp: "Les trois phases sont décalées de 120° les unes par rapport aux autres." },
          { q: "En France, quelles sont les tensions typiques d'un réseau triphasé 230/400 V ?", options: ["230 V entre phases et 400 V entre phase et neutre", "400 V entre phases et 230 V entre phase et neutre", "230 V partout", "400 V partout"], correct: 1, exp: "On retrouve 400 V entre phases (tension composée) et 230 V entre phase et neutre (tension simple)." }
        ]
      },
      {
        nom: "Les différentes puissances (déphasage)",
        questions: [
          { q: "Que représente la puissance active (P), exprimée en watts ?", options: ["L'énergie réellement consommée/transformée par le récepteur", "Une puissance fictive sans effet utile", "La puissance des condensateurs uniquement", "La puissance de court-circuit"], correct: 0, exp: "La puissance active est la puissance réellement utilisée (chaleur, travail, lumière...)." },
          { q: "Que représente la puissance réactive (Q), exprimée en VAR ?", options: ["Une puissance perdue en chaleur uniquement", "L'énergie échangée avec les éléments inductifs/capacitifs sans être consommée", "La puissance totale du circuit", "La puissance nominale du disjoncteur"], correct: 1, exp: "La puissance réactive circule sans être consommée, liée aux bobinages et condensateurs." },
          { q: "Que représente le facteur de puissance (cos φ) ?", options: ["Le rapport entre puissance active et puissance apparente", "La tension du réseau", "Le rendement d'un moteur", "La fréquence du réseau"], correct: 0, exp: "Cos φ = P / S, il indique la part utile de la puissance apparente." }
        ]
      },
      {
        nom: "Les schémas de liaison à la terre",
        questions: [
          { q: "Que signifie le régime de neutre TT ?", options: ["Neutre isolé, masses reliées à la terre", "Neutre relié à la terre, masses reliées à une prise de terre", "Neutre et masses reliés au même point", "Aucune liaison à la terre"], correct: 1, exp: "En régime TT, le neutre est relié à la terre côté source, et les masses à une terre distincte." },
          { q: "Quel est le régime de neutre le plus répandu dans les installations domestiques françaises ?", options: ["IT", "TN-C", "TT", "TN-S"], correct: 2, exp: "Le régime TT est le régime par défaut de la distribution publique en France." },
          { q: "Dans le régime IT, comment le neutre est-il relié à la terre ?", options: ["Directement, sans impédance", "Il est isolé de la terre ou relié via une forte impédance", "Il est relié aux masses", "Il n'existe pas de neutre en IT"], correct: 1, exp: "En régime IT, le neutre est isolé de la terre (ou couplé via une impédance), ce qui limite le courant de défaut." }
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
          { q: "Quel est le rôle principal d'un dispositif d'arrêt d'urgence ?", options: ["Optimiser la consommation d'énergie", "Couper rapidement l'alimentation en cas de situation dangereuse", "Programmer les horaires de fonctionnement", "Mesurer la puissance appelée"], correct: 1, exp: "L'arrêt d'urgence permet une coupure rapide de l'énergie pour protéger les personnes et le matériel." },
          { q: "Un bouton d'arrêt d'urgence doit-il être à réarmement manuel ?", options: ["Non, jamais", "Oui, pour éviter tout redémarrage accidentel après la coupure", "Seulement en extérieur", "Cela dépend uniquement de la couleur du bouton"], correct: 1, exp: "Le réarmement manuel évite qu'une installation redémarre seule après un arrêt d'urgence." },
          { q: "Où doit-on privilégier l'implantation d'un arrêt d'urgence ?", options: ["Dans un local fermé à clé", "À proximité des zones dangereuses, facilement accessible", "Uniquement au tableau électrique principal", "En hauteur, hors de portée"], correct: 1, exp: "L'arrêt d'urgence doit être accessible rapidement près des zones à risque." }
        ]
      },
      {
        nom: "Montage Bobines (MN et MX)",
        questions: [
          { q: "Que déclenche un déclencheur MX (émission de tension) ?", options: ["Il ouvre le disjoncteur lorsqu'il reçoit une tension de commande", "Il ferme le disjoncteur automatiquement", "Il ne fait rien sans courant", "Il régule la tension du réseau"], correct: 0, exp: "Le déclencheur MX provoque l'ouverture du disjoncteur dès réception d'une tension de commande (ex: bouton d'arrêt d'urgence)." },
          { q: "Que fait un déclencheur MN (à manque de tension) si sa bobine n'est plus alimentée ?", options: ["Il reste indifférent", "Il ouvre le disjoncteur (sécurité positive)", "Il ferme le disjoncteur", "Il augmente le calibre du disjoncteur"], correct: 1, exp: "Le MN ouvre le disjoncteur dès que sa bobine n'est plus alimentée : c'est une sécurité positive." },
          { q: "Quelle est la différence essentielle entre une bobine MN et une bobine MX ?", options: ["Aucune différence", "MN déclenche par absence de tension, MX déclenche par présence de tension de commande", "MN est pour le triphasé, MX pour le monophasé uniquement", "MX est toujours plus puissante que MN"], correct: 1, exp: "MN = déclenchement par manque de tension ; MX = déclenchement par émission (ajout) de tension." }
        ]
      },
      {
        nom: "Les BAES - BAEH",
        questions: [
          { q: "Que signifie le sigle BAES ?", options: ["Bloc Autonome d'Éclairage de Sécurité", "Bloc Automatique d'Économie de Sécurité", "Boîtier d'Alimentation Électrique Standard", "Bornier d'Arrivée Électrique Standard"], correct: 0, exp: "BAES = Bloc Autonome d'Éclairage de Sécurité." },
          { q: "Quelle est la fonction principale d'un BAES ?", options: ["Décorer les circulations", "Assurer l'éclairage d'évacuation en cas de coupure du courant normal", "Remplacer l'éclairage normal en permanence", "Alimenter les prises de courant"], correct: 1, exp: "Le BAES prend le relais pour éclairer les issues et voies d'évacuation lors d'une coupure secteur." },
          { q: "Que signifie le sigle BAEH ?", options: ["Bloc Autonome d'Éclairage d'Habitation", "Bloc d'Alarme et d'Éclairage Horaire", "Boîtier Automatique d'Éclairage Hors-service", "Bornier d'Arrivée Électrique Habitation"], correct: 0, exp: "BAEH = Bloc Autonome d'Éclairage d'Habitation, utilisé dans les circulations des immeubles d'habitation." }
        ]
      },
      {
        nom: "Montage BAES",
        questions: [
          { q: "Comment un BAES est-il alimenté en fonctionnement normal ?", options: ["Il n'est jamais alimenté", "Par le circuit d'éclairage normal, ce qui permet aussi de recharger sa batterie", "Uniquement par une pile changée manuellement", "Par le réseau triphasé exclusivement"], correct: 1, exp: "L'alimentation permanente par le circuit normal permet la recharge continue de la batterie du BAES." },
          { q: "Un BAES doit-il s'allumer automatiquement en cas de coupure secteur ?", options: ["Non, il faut l'allumer manuellement", "Oui, c'est sa fonction de secours automatique", "Seulement la nuit", "Seulement si on appuie sur un bouton test"], correct: 1, exp: "Le passage en éclairage de sécurité doit être automatique dès la coupure de l'alimentation normale." },
          { q: "Quelle est la source d'énergie d'un BAES lors d'une coupure secteur ?", options: ["Un groupe électrogène externe", "Sa batterie interne rechargeable", "Le réseau de secours de l'immeuble", "Aucune, il s'éteint"], correct: 1, exp: "Le BAES fonctionne alors sur sa propre batterie rechargeable intégrée." }
        ]
      },
      {
        nom: "Montage Détecteur de mouvement",
        questions: [
          { q: "Sur quel principe fonctionne un détecteur de mouvement infrarouge passif (PIR) ?", options: ["Il émet un ultrason et mesure l'écho", "Il détecte les variations de rayonnement infrarouge (chaleur) dans son champ de détection", "Il analyse une image vidéo", "Il mesure le niveau sonore ambiant"], correct: 1, exp: "Le PIR détecte les variations de chaleur/infrarouge causées par un déplacement dans son champ." },
          { q: "Quel est l'avantage principal d'un détecteur de mouvement associé à l'éclairage ?", options: ["Aucun avantage réel", "Une économie d'énergie en n'allumant qu'en cas de présence", "Il remplace l'interrupteur différentiel", "Il augmente la puissance de la lampe"], correct: 1, exp: "L'éclairage ne s'active qu'en présence, ce qui limite la consommation inutile." },
          { q: "Peut-on régler la temporisation et la sensibilité d'un détecteur de mouvement ?", options: ["Non, ils sont figés en usine", "Oui, généralement via des potentiomètres ou réglages dédiés", "Seulement en usine par le fabricant", "Uniquement via une télécommande obligatoire"], correct: 1, exp: "La plupart des détecteurs proposent des réglages de temporisation, sensibilité et seuil de luminosité." }
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
          { q: "Que signifie le sigle ERP ?", options: ["Établissement Recevant du Public", "Équipement Réglementaire de Protection", "Espace Réservé au Personnel", "Établissement à Risque Particulier"], correct: 0, exp: "ERP = Établissement Recevant du Public (magasins, écoles, salles de sport...)." },
          { q: "Que signifie le sigle ERT ?", options: ["Établissement Recevant des Travailleurs", "Équipement de Régulation Thermique", "Établissement Rural Traditionnel", "Espace Réservé aux Techniciens"], correct: 0, exp: "ERT = Établissement Recevant des Travailleurs (bureaux, ateliers...)." },
          { q: "Selon quels critères principaux les ERP sont-ils classés ?", options: ["Uniquement la surface au sol", "Le type d'activité et la catégorie liée à l'effectif accueilli", "La couleur de la façade", "Le nombre d'étages uniquement"], correct: 1, exp: "Les ERP sont classés par type (activité) et par catégorie selon l'effectif public/personnel accueilli." }
        ]
      },
      {
        nom: "Les goulottes tertiaires",
        questions: [
          { q: "Quel est l'usage principal des goulottes tertiaires ?", options: ["Le chauffage des bureaux", "Le cheminement et la protection des câbles en apparent dans les locaux tertiaires", "La ventilation des locaux", "L'éclairage de secours"], correct: 1, exp: "Les goulottes protègent et guident les câbles en apparent, notamment dans les bureaux." },
          { q: "Les goulottes tertiaires permettent-elles de séparer courants forts et courants faibles ?", options: ["Non, jamais", "Oui, grâce à des compartiments séparés", "Uniquement si elles sont métalliques", "Uniquement à l'extérieur"], correct: 1, exp: "Des compartiments séparés dans la goulotte évitent les perturbations entre courants forts et faibles." },
          { q: "En quel matériau sont le plus souvent fabriquées les goulottes tertiaires ?", options: ["Bois", "PVC ou matière plastique", "Béton", "Verre"], correct: 1, exp: "Le PVC (ou plastique) est le matériau le plus courant pour les goulottes tertiaires." }
        ]
      },
      {
        nom: "Les chemins de câbles",
        questions: [
          { q: "Quel est le rôle d'un chemin de câbles ?", options: ["Isoler thermiquement un local", "Supporter et cheminer plusieurs câbles électriques de façon organisée", "Remplacer les disjoncteurs", "Protéger contre la foudre"], correct: 1, exp: "Le chemin de câbles offre un support organisé et sécurisé pour le cheminement de nombreux câbles." },
          { q: "Sous quelles formes peut-on trouver des chemins de câbles ?", options: ["Uniquement en dalle pleine", "Dalle métallique, treillis (fil), tôle perforée...", "Uniquement en tube IRL", "Uniquement souples"], correct: 1, exp: "Il existe plusieurs types : dalle marine, treillis soudé, tôle perforée, etc." },
          { q: "Pourquoi respecter un taux de remplissage maximal sur un chemin de câbles ?", options: ["Pour des raisons esthétiques uniquement", "Pour permettre la dissipation thermique et l'ajout futur de câbles", "Ce n'est pas une exigence", "Pour réduire le poids total"], correct: 1, exp: "Un taux de remplissage raisonnable évite l'échauffement excessif et laisse de la place pour l'avenir." }
        ]
      },
      {
        nom: "Façonnage des chemins de câbles",
        questions: [
          { q: "Quel outil sert typiquement à couper une tôle de chemin de câbles ?", options: ["Un tournevis plat", "Une cisaille ou une grignoteuse", "Une pince à dénuder", "Un multimètre"], correct: 1, exp: "La cisaille (ou grignoteuse) permet de découper proprement la tôle du chemin de câbles." },
          { q: "Pourquoi ébavurer les découpes réalisées sur un chemin de câbles ?", options: ["Pour améliorer l'esthétique uniquement", "Pour éviter d'endommager la gaine des câbles lors de la pose", "Ce n'est jamais nécessaire", "Pour réduire le poids"], correct: 1, exp: "Des bords non ébavurés peuvent couper ou abîmer l'isolant des câbles posés dessus." },
          { q: "Comment assemble-t-on généralement deux tronçons de chemin de câbles ?", options: ["Par soudure obligatoire", "Par éclisses et boulonnerie appropriées", "Par simple emboîtement sans fixation", "Avec du ruban adhésif"], correct: 1, exp: "Des éclisses fixées par boulons assurent la continuité mécanique (et souvent électrique) entre tronçons." }
        ]
      },
      {
        nom: "Montage OF - SD",
        questions: [
          { q: "Pourquoi obture-t-on les traversées de parois traversées par des chemins de câbles ?", options: ["Pour des raisons esthétiques uniquement", "Pour rétablir le degré coupe-feu de la paroi traversée", "Pour économiser des câbles", "Ce n'est jamais nécessaire"], correct: 1, exp: "Un obturateur coupe-feu rétablit la résistance au feu de la paroi percée pour le passage des câbles." },
          { q: "À quoi sert un séparateur dans un chemin de câbles ?", options: ["À supporter le poids total du chemin de câbles", "À séparer physiquement différents types de circuits (ex : courants forts / courants faibles)", "À remplacer les couvercles", "À servir de mise à la terre"], correct: 1, exp: "Le séparateur cloisonne le chemin de câbles pour éviter les perturbations entre circuits différents." },
          { q: "Que doit-on vérifier après la pose d'un obturateur coupe-feu ?", options: ["Rien de particulier", "Que le degré de résistance au feu annoncé correspond bien à celui exigé pour la paroi traversée", "Uniquement la couleur de l'obturateur", "Que le câble a été retiré"], correct: 1, exp: "L'obturateur doit garantir le degré coupe-feu (ex : CF 1h, 2h) requis par la réglementation du local." }
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
          { q: "Quel est l'intérêt du sertissage par rapport à une simple torsion de fils ?", options: ["Aucun intérêt particulier", "Un contact électrique fiable et une tenue mécanique solide, limitant l'échauffement", "Cela coûte toujours plus cher sans bénéfice", "Cela remplace la protection différentielle"], correct: 1, exp: "Le sertissage assure un contact durable et limite les points chauds liés à un mauvais contact." },
          { q: "Qu'est-ce qu'un manchon de raccordement ?", options: ["Un type de disjoncteur", "Une pièce permettant de relier deux conducteurs bout à bout de façon sûre", "Un outil de mesure", "Un type de câble souple"], correct: 1, exp: "Le manchon assure une jonction fiable entre deux conducteurs mis bout à bout." },
          { q: "Pourquoi utiliser une pince à sertir adaptée à la section du conducteur ?", options: ["Ce n'est pas important", "Pour garantir une compression correcte et un raccordement fiable", "Pour aller plus vite uniquement", "Pour respecter la couleur du fil"], correct: 1, exp: "Une pince adaptée à la section garantit une compression optimale du serrage/raccordement." }
        ]
      },
      {
        nom: "Le presse étoupe",
        questions: [
          { q: "Quelle est la fonction principale d'un presse-étoupe ?", options: ["Couper le courant en cas de défaut", "Assurer l'étanchéité et le maintien mécanique d'un câble à l'entrée d'un boîtier", "Mesurer la tension d'un circuit", "Protéger contre la foudre"], correct: 1, exp: "Le presse-étoupe maintient le câble et assure son étanchéité à la traversée d'une paroi de boîtier." },
          { q: "Le choix du presse-étoupe dépend principalement de quel paramètre du câble ?", options: ["Sa couleur", "Son diamètre extérieur", "Sa longueur totale", "Le nombre de conducteurs uniquement"], correct: 1, exp: "Le presse-étoupe doit être choisi selon le diamètre extérieur du câble à traverser." },
          { q: "Un presse-étoupe participe-t-il à la protection IP d'une armoire ?", options: ["Non, jamais", "Oui, il contribue à l'indice de protection contre l'eau et la poussière", "Uniquement à l'intérieur des bâtiments", "Il ne concerne que la protection incendie"], correct: 1, exp: "Un presse-étoupe bien choisi et serré contribue à maintenir l'indice IP de l'enveloppe." }
        ]
      },
      {
        nom: "L'armoire de distribution",
        questions: [
          { q: "Quel est le rôle principal d'une armoire de distribution ?", options: ["Stocker des outils", "Répartir l'énergie électrique vers les différents départs/circuits", "Produire de l'électricité", "Filtrer l'eau du réseau"], correct: 1, exp: "L'armoire de distribution centralise l'arrivée et répartit l'énergie vers les circuits en aval." },
          { q: "Que doit comporter une armoire de distribution en termes de repérage ?", options: ["Aucun repérage n'est nécessaire", "Un repérage clair des circuits/départs (étiquetage)", "Uniquement un logo du fabricant", "Un simple numéro de série"], correct: 1, exp: "Un étiquetage clair facilite la maintenance et l'identification rapide des circuits." },
          { q: "Pourquoi laisser une réserve d'emplacements libres dans une armoire ?", options: ["Ce n'est jamais recommandé", "Pour permettre des évolutions futures de l'installation", "Pour économiser du câble", "Pour respecter uniquement l'esthétique"], correct: 1, exp: "Une réserve permet d'ajouter facilement de nouveaux circuits sans changer l'armoire." }
        ]
      },
      {
        nom: "La chute de tension",
        questions: [
          { q: "Qu'est-ce que la chute de tension dans un circuit électrique ?", options: ["Une panne totale du circuit", "La différence de tension entre le départ et l'arrivée du circuit, due à la résistance des conducteurs", "Une surtension ponctuelle", "Le courant de court-circuit"], correct: 1, exp: "La chute de tension résulte de la résistance des conducteurs qui dissipe une partie de la tension." },
          { q: "Quels facteurs influencent principalement la chute de tension d'un câble ?", options: ["Sa couleur et sa marque", "Sa longueur, sa section et le courant transporté", "Le prix du câble", "La température de la pièce uniquement"], correct: 1, exp: "Plus le câble est long et fin, et plus le courant est élevé, plus la chute de tension augmente." },
          { q: "Pourquoi limiter la chute de tension admissible dans une installation ?", options: ["Ce n'est pas une exigence normative", "Pour garantir le bon fonctionnement des récepteurs en bout de ligne", "Pour réduire uniquement le coût du câble", "Pour éviter de peindre les câbles"], correct: 1, exp: "Une chute de tension excessive peut nuire au fonctionnement correct des récepteurs (moteurs, éclairages...)." }
        ]
      },
      {
        nom: "Les caractéristiques des éclairages",
        questions: [
          { q: "Que mesure le flux lumineux d'une source, exprimé en lumens ?", options: ["La tension d'alimentation de la lampe", "La quantité totale de lumière émise par la source", "La durée de vie de l'ampoule", "La chaleur dégagée"], correct: 1, exp: "Le flux lumineux (lm) quantifie la lumière totale émise par une source." },
          { q: "Que représente la température de couleur d'une lampe, exprimée en Kelvin ?", options: ["Sa consommation électrique", "La teinte de la lumière émise (chaude, neutre, froide)", "Sa durée de vie", "Sa puissance en watts"], correct: 1, exp: "La température de couleur indique si la lumière paraît chaude (jaune) ou froide (bleutée)." },
          { q: "Que représente l'IRC (Indice de Rendu des Couleurs) ?", options: ["La puissance lumineuse maximale", "La capacité d'une source à restituer fidèlement les couleurs des objets éclairés", "Le prix de la lampe", "La résistance aux chocs de l'ampoule"], correct: 1, exp: "Un IRC élevé (proche de 100) restitue les couleurs de façon plus fidèle à la lumière naturelle." }
        ]
      },
      {
        nom: "Les sources d'éclairages",
        questions: [
          { q: "Quel est l'avantage principal des LED par rapport aux lampes à incandescence ?", options: ["Un prix d'achat toujours plus bas", "Une consommation d'énergie et une durée de vie bien supérieures", "Une chaleur dégagée plus importante", "Une lumière toujours plus faible"], correct: 1, exp: "Les LED consomment beaucoup moins et durent bien plus longtemps que l'incandescence." },
          { q: "Sur quel principe fonctionnent les tubes fluorescents ?", options: ["Un filament chauffé à blanc", "Une décharge dans un gaz produisant des UV convertis en lumière visible par une poudre fluorescente", "Une réaction chimique explosive", "Un effet photovoltaïque"], correct: 1, exp: "La décharge électrique excite un gaz qui émet des UV, convertis en lumière visible par le revêtement fluorescent du tube." },
          { q: "Les lampes halogènes sont-elles plus efficaces énergétiquement que les LED ?", options: ["Oui, toujours", "Non, elles sont globalement moins efficaces que les LED", "C'est strictement identique", "Cela dépend uniquement de la couleur"], correct: 1, exp: "Les halogènes restent moins efficaces (plus de pertes en chaleur) que les technologies LED actuelles." }
        ]
      },
      {
        nom: "Les différents éclairages",
        questions: [
          { q: "Qu'est-ce que l'éclairage direct ?", options: ["Un éclairage dont le flux est dirigé directement vers la zone à éclairer", "Un éclairage toujours réfléchi sur le plafond", "Un éclairage de secours uniquement", "Un éclairage sans source visible"], correct: 0, exp: "L'éclairage direct envoie le flux lumineux directement vers la zone visée." },
          { q: "Qu'est-ce que l'éclairage indirect ?", options: ["Un éclairage interdit en intérieur", "Un éclairage renvoyé par réflexion sur une surface (plafond, mur)", "Un éclairage uniquement extérieur", "Un éclairage basse tension obligatoire"], correct: 1, exp: "L'éclairage indirect est réfléchi sur une surface avant d'atteindre la zone à éclairer, ce qui adoucit la lumière." },
          { q: "Quel type d'éclairage privilégier pour réduire l'éblouissement dans un bureau ?", options: ["Un spot direct très puissant au-dessus de l'écran", "Un éclairage indirect ou avec optiques anti-éblouissement", "Aucun éclairage artificiel", "Un néon nu sans diffuseur"], correct: 1, exp: "Un éclairage indirect ou avec optiques adaptées limite les reflets et l'éblouissement sur écran." }
        ]
      },
      {
        nom: "L'éclairage TBT",
        questions: [
          { q: "Quel est l'intérêt de l'éclairage en très basse tension (TBT) dans certains lieux ?", options: ["Une plus grande puissance lumineuse", "Une sécurité électrique accrue (risque réduit)", "Un coût d'installation toujours plus faible", "Aucun intérêt particulier"], correct: 1, exp: "La TBT réduit fortement le risque électrique, notamment dans les zones humides." },
          { q: "L'éclairage TBT est-il courant dans les volumes proches de l'eau (salle de bain) ?", options: ["Non, il y est interdit", "Oui, notamment pour les spots dans les volumes à risque", "Uniquement dans les cuisines", "Uniquement en extérieur"], correct: 1, exp: "La TBT est fréquemment utilisée pour les spots dans les volumes de salle de bain à risque accru." },
          { q: "Quelle valeur limite est couramment retenue pour la très basse tension en courant alternatif ?", options: ["12 V", "50 V", "110 V", "230 V"], correct: 1, exp: "La limite couramment admise pour la TBT en alternatif est de 50 V." }
        ]
      },
      {
        nom: "La photométrie",
        questions: [
          { q: "Que mesure l'éclairement, exprimé en lux ?", options: ["La quantité de lumière émise par la source", "La quantité de lumière reçue par une surface", "La couleur de la lumière", "La consommation électrique de la lampe"], correct: 1, exp: "L'éclairement (lux) mesure la lumière reçue sur une surface donnée." },
          { q: "Qu'est-ce que la luminance ?", options: ["La puissance électrique consommée", "L'intensité lumineuse perçue par l'œil dans une direction donnée", "La durée de vie d'une lampe", "Le flux lumineux total émis"], correct: 1, exp: "La luminance caractérise la sensation lumineuse perçue depuis une direction d'observation." },
          { q: "Pourquoi réaliser une étude photométrique avant l'installation d'un éclairage ?", options: ["Ce n'est jamais utile", "Pour garantir un niveau d'éclairement adapté à l'usage du local", "Pour choisir uniquement la couleur des interrupteurs", "Pour dimensionner le disjoncteur différentiel"], correct: 1, exp: "L'étude photométrique permet de dimensionner l'éclairage selon les besoins réels du local." }
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
          { q: "Quel est le rôle principal d'un système d'alarme intrusion ?", options: ["Chauffer le logement", "Détecter une intrusion et déclencher une alerte (sonore et/ou à distance)", "Contrôler l'éclairage extérieur", "Gérer la ventilation"], correct: 1, exp: "L'alarme intrusion détecte une présence anormale et prévient les occupants ou un centre de télésurveillance." },
          { q: "Quel type de détecteur est couramment utilisé pour une alarme intrusion ?", options: ["Détecteur de fumée uniquement", "Détecteur infrarouge (ou double technologie)", "Détecteur de gaz", "Détecteur de niveau d'eau"], correct: 1, exp: "Les détecteurs infrarouges (parfois combinés à l'hyperfréquence) sont très utilisés en détection intrusion." },
          { q: "Qu'est-ce qu'une centrale d'alarme ?", options: ["Un simple bouton poussoir", "L'unité qui reçoit les informations des détecteurs et déclenche les alertes", "Un type de câble spécifique", "Un transformateur basse tension"], correct: 1, exp: "La centrale traite les informations des détecteurs et pilote les sirènes/transmetteurs." }
        ]
      },
      {
        nom: "L'alarme incendie",
        questions: [
          { q: "Que signifie le sigle SSI ?", options: ["Système de Sécurité Incendie", "Système de Surveillance Intérieure", "Sécurité Standard Individuelle", "Signal Sonore d'Intrusion"], correct: 0, exp: "SSI = Système de Sécurité Incendie." },
          { q: "Quel est le rôle d'un déclencheur manuel dans une alarme incendie ?", options: ["Détecter automatiquement la fumée", "Permettre à une personne de déclencher volontairement l'alarme", "Couper l'électricité générale", "Mesurer la température ambiante"], correct: 1, exp: "Le déclencheur manuel permet à un occupant de signaler manuellement un départ de feu." },
          { q: "Un détecteur automatique de fumée détecte principalement quoi ?", options: ["Les variations de tension", "Les fumées/particules de combustion", "Le taux d'humidité", "Le niveau sonore"], correct: 1, exp: "Le détecteur de fumée réagit à la présence de particules issues d'une combustion." }
        ]
      },
      {
        nom: "Les contrôles d'accès",
        questions: [
          { q: "Quel est l'objectif d'un système de contrôle d'accès ?", options: ["Éclairer automatiquement les couloirs", "Limiter et gérer l'accès à un lieu aux seules personnes autorisées", "Réguler la température", "Détecter les incendies"], correct: 1, exp: "Le contrôle d'accès filtre et trace les entrées/sorties d'un lieu selon les autorisations." },
          { q: "Quel type d'identifiant est couramment utilisé en contrôle d'accès ?", options: ["Une clé USB uniquement", "Un badge (carte à puce/RFID) ou un code", "Une télécommande de portail uniquement", "Un simple bouton poussoir"], correct: 1, exp: "Le badge RFID ou un code confidentiel sont les identifiants les plus répandus." },
          { q: "Un contrôle d'accès peut-il être couplé à une gestion des horaires ?", options: ["Non, jamais", "Oui, il peut gérer des plages horaires d'autorisation par utilisateur", "Uniquement pour les visiteurs", "Uniquement le week-end"], correct: 1, exp: "La plupart des systèmes permettent de définir des droits d'accès selon des plages horaires précises." }
        ]
      },
      {
        nom: "Le portail battant",
        questions: [
          { q: "Comment fonctionne un portail battant automatisé ?", options: ["Il coulisse latéralement sur un rail", "Un ou deux vantaux pivotent grâce à des moteurs (bras articulé ou vérin)", "Il s'enroule autour d'un axe", "Il se replie en accordéon sous un plafond"], correct: 1, exp: "Le portail battant s'ouvre par rotation des vantaux, entraînés par des bras ou vérins motorisés." },
          { q: "Quel type de motorisation est couramment utilisé pour un portail battant ?", options: ["Uniquement une crémaillère au sol", "Moteur à bras articulé ou vérin (parfois enterré)", "Un moteur tubulaire enroulable", "Aucune motorisation possible"], correct: 1, exp: "Les bras articulés et les vérins (à bras ou enterrés) sont les motorisations classiques des portails battants." },
          { q: "Pourquoi un portail automatisé doit-il intégrer une détection d'obstacle ?", options: ["Ce n'est pas une exigence de sécurité", "Pour protéger les personnes et les biens en cas d'obstacle lors du mouvement", "Uniquement pour économiser l'énergie", "Pour améliorer l'esthétique"], correct: 1, exp: "La détection d'obstacle (effort, cellules) évite les accidents lors de la fermeture/ouverture." }
        ]
      },
      {
        nom: "Le portail coulissant",
        questions: [
          { q: "Comment se déplace un portail coulissant ?", options: ["Il pivote sur des gonds", "Latéralement, le long d'un rail (ou en autoportant)", "Il s'enroule sur un axe", "Il se replie en accordéon"], correct: 1, exp: "Le portail coulissant se déplace horizontalement, guidé par un rail au sol ou en version autoportante." },
          { q: "Quel avantage présente un portail coulissant sur un terrain en pente ?", options: ["Aucun avantage particulier", "Il ne nécessite pas de débattement au sol, ce qui convient mieux aux pentes", "Il est toujours moins cher", "Il ne nécessite aucune motorisation"], correct: 1, exp: "Contrairement au battant, le coulissant ne nécessite pas d'espace de débattement au sol, adapté aux terrains en pente." },
          { q: "Qu'est-ce qu'une crémaillère sur un portail coulissant motorisé ?", options: ["Un capteur de position", "Une pièce dentée fixée au portail, entraînée par le pignon du moteur", "Le rail de guidage au sol", "Un système de verrouillage manuel"], correct: 1, exp: "Le pignon du moteur engrène sur la crémaillère fixée au portail pour le faire coulisser." }
        ]
      },
      {
        nom: "Les portes de garage",
        questions: [
          { q: "Quels sont les principaux types de portes de garage motorisées ?", options: ["Uniquement battante", "Basculante, sectionnelle, enroulable", "Uniquement coulissante", "Uniquement pivotante verticale"], correct: 1, exp: "On retrouve principalement les portes basculantes, sectionnelles et enroulables en motorisé." },
          { q: "Qu'est-ce qu'une porte sectionnelle ?", options: ["Une porte en un seul panneau rigide qui bascule", "Une porte composée de panneaux articulés qui se replient sous le plafond", "Une porte qui s'enroule dans un coffre", "Une porte à deux battants classiques"], correct: 1, exp: "La porte sectionnelle est formée de panneaux articulés qui suivent des rails jusqu'au plafond." },
          { q: "Pourquoi une porte de garage motorisée doit-elle avoir une sécurité anti-écrasement ?", options: ["Ce n'est pas obligatoire", "Pour protéger les personnes et les biens en cas d'obstacle lors de la fermeture", "Uniquement pour le confort sonore", "Pour réduire la consommation électrique"], correct: 1, exp: "La détection d'effort/obstacle stoppe ou inverse le mouvement en cas de résistance anormale." }
        ]
      },
      {
        nom: "Le volet roulant",
        questions: [
          { q: "Comment fonctionne un volet roulant motorisé ?", options: ["Un vérin pousse le tablier vers le haut", "Un moteur tubulaire entraîne l'enroulement du tablier autour d'un axe", "Il pivote sur des gonds latéraux", "Il coulisse horizontalement"], correct: 1, exp: "Le moteur tubulaire, intégré dans l'axe d'enroulement, fait monter/descendre le tablier." },
          { q: "Qu'est-ce qu'un moteur de volet roulant avec fins de course intégrées ?", options: ["Un moteur nécessitant un réglage mécanique externe complexe", "Un moteur qui détecte automatiquement les positions haute et basse", "Un moteur sans arrêt automatique", "Un moteur uniquement manuel"], correct: 1, exp: "Les fins de course électroniques détectent et mémorisent automatiquement les positions extrêmes." },
          { q: "Un volet roulant peut-il être piloté via la domotique ?", options: ["Non, jamais", "Oui, via des modules radio ou filaires compatibles", "Uniquement avec une manivelle", "Uniquement en usine"], correct: 1, exp: "Des modules domotiques (radio ou filaires) permettent d'intégrer les volets roulants à un système central." }
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
          { q: "Que permet un système domotique ?", options: ["Uniquement de surveiller la consommation", "Piloter et automatiser les équipements du logement (éclairage, chauffage, volets...)", "Remplacer le tableau électrique", "Produire de l'électricité"], correct: 1, exp: "La domotique automatise et centralise le pilotage des équipements du logement." },
          { q: "Quels types de protocoles de communication utilise la domotique ?", options: ["Uniquement filaires", "Filaires (bus) ou radio (sans fil)", "Uniquement satellite", "Aucun protocole nécessaire"], correct: 1, exp: "La domotique repose sur des bus filaires ou des protocoles radio selon les installations." },
          { q: "Quel est l'un des principaux avantages de la domotique ?", options: ["Une consommation toujours plus élevée", "Le confort et les économies d'énergie grâce à l'automatisation", "La suppression totale du tableau électrique", "Aucun avantage réel"], correct: 1, exp: "La domotique améliore le confort tout en permettant des économies via une gestion plus fine." }
        ]
      },
      {
        nom: "Le tableau de communication",
        questions: [
          { q: "Quel est le rôle du tableau de communication (coffret VDI) dans un logement ?", options: ["Distribuer uniquement l'électricité", "Centraliser et distribuer les réseaux de communication (téléphone, données, télévision)", "Remplacer le disjoncteur de branchement", "Protéger contre la foudre"], correct: 1, exp: "Le tableau de communication centralise les arrivées réseau et les distribue vers les prises RJ45/TV." },
          { q: "Que signifie le sigle VDI ?", options: ["Voix, Données, Images", "Ventilation, Distribution, Isolation", "Vérification Différentielle Individuelle", "Volt, Détecteur, Interrupteur"], correct: 0, exp: "VDI = Voix, Données, Images, les trois grands types de réseaux de communication du logement." },
          { q: "Le tableau de communication doit-il être positionné près du tableau électrique ?", options: ["Non, cela n'a aucune importance", "Généralement oui, ou regroupé dans une même GTL", "Il doit être dans une pièce humide", "Uniquement au sous-sol"], correct: 1, exp: "Le tableau de communication est le plus souvent regroupé avec le tableau électrique dans la GTL." }
        ]
      },
      {
        nom: "Câblâge RJ 45",
        questions: [
          { q: "Combien de paires de fils comporte un câble réseau RJ45 (Ethernet) ?", options: ["2 paires (4 fils)", "4 paires (8 fils)", "3 paires (6 fils)", "1 paire (2 fils)"], correct: 1, exp: "Un câble Ethernet standard comporte 4 paires torsadées, soit 8 fils." },
          { q: "Quelles normes de câblage sont couramment utilisées pour sertir un connecteur RJ45 ?", options: ["NF C 15-100 uniquement", "T568A ou T568B", "IP20 et IP44", "IK07 et IK08"], correct: 1, exp: "Les brochages normalisés T568A et T568B définissent l'ordre des fils dans le connecteur RJ45." },
          { q: "Quel outil sert à sertir un connecteur RJ45 ?", options: ["Une pince à sertir RJ45 dédiée", "Un tournevis plat", "Une pince ampèremétrique", "Une pince à dénuder uniquement"], correct: 0, exp: "La pince à sertir RJ45 permet de fixer mécaniquement les contacts du connecteur sur les fils dénudés." }
        ]
      },
      {
        nom: "Le chauffage",
        questions: [
          { q: "Quels sont les principaux types de chauffage électrique domestique ?", options: ["Uniquement le convecteur", "Convecteur, panneau rayonnant, chauffage à accumulation, chauffage à inertie", "Uniquement la climatisation réversible", "Uniquement le plancher chauffant à eau"], correct: 1, exp: "Il existe plusieurs technologies de chauffage électrique adaptées à différents besoins et usages." },
          { q: "Qu'est-ce qu'un chauffage par accumulation ?", options: ["Un chauffage qui ne fonctionne jamais la nuit", "Un chauffage qui stocke la chaleur (souvent en heures creuses) pour la restituer plus tard", "Un chauffage au gaz uniquement", "Un chauffage sans thermostat"], correct: 1, exp: "Le chauffage à accumulation emmagasine la chaleur en heures creuses pour la diffuser progressivement." },
          { q: "À quoi sert le fil pilote sur un radiateur électrique ?", options: ["À alimenter le radiateur en 230V", "À transmettre les ordres de gestion (confort, éco, hors-gel...) depuis un programmateur", "À mettre le radiateur à la terre", "À mesurer la température de la pièce"], correct: 1, exp: "Le fil pilote permet de piloter à distance les différents modes de fonctionnement du radiateur." }
        ]
      },
      {
        nom: "La Gestion de l'énergie",
        questions: [
          { q: "Quel est l'objectif principal de la gestion de l'énergie dans une installation ?", options: ["Augmenter systématiquement la consommation", "Optimiser la consommation et éviter les dépassements de puissance souscrite", "Remplacer le compteur", "Supprimer les disjoncteurs différentiels"], correct: 1, exp: "La gestion de l'énergie vise à optimiser les usages et éviter tout dépassement de puissance." },
          { q: "Qu'est-ce qu'un délesteur ?", options: ["Un type de disjoncteur différentiel", "Un dispositif qui coupe temporairement des circuits non prioritaires pour éviter un dépassement de puissance", "Un appareil qui augmente la puissance souscrite", "Un simple interrupteur manuel"], correct: 1, exp: "Le délesteur coupe automatiquement certains circuits secondaires en cas de risque de dépassement." },
          { q: "Pourquoi prioriser certains circuits dans la gestion de l'énergie ?", options: ["Ce n'est jamais utile", "Pour garantir le fonctionnement des équipements essentiels en cas de délestage", "Pour augmenter la facture d'électricité", "Pour simplifier le câblage uniquement"], correct: 1, exp: "La priorisation garantit que les équipements essentiels restent alimentés en cas de délestage." }
        ]
      },
      {
        nom: "La VMC",
        questions: [
          { q: "Que signifie le sigle VMC ?", options: ["Ventilation Mécanique Contrôlée", "Variateur Mécanique de Chauffage", "Ventilation Manuelle Complémentaire", "Vérification et Maintenance du Compteur"], correct: 0, exp: "VMC = Ventilation Mécanique Contrôlée." },
          { q: "Quelle est la différence entre une VMC simple flux et une VMC double flux ?", options: ["Aucune différence réelle", "La double flux récupère les calories de l'air extrait pour préchauffer l'air entrant", "La simple flux consomme plus d'énergie", "La double flux ne fonctionne qu'en été"], correct: 1, exp: "La VMC double flux utilise un échangeur pour récupérer la chaleur de l'air extrait." },
          { q: "Dans quelles pièces installe-t-on généralement les bouches d'extraction d'une VMC ?", options: ["Le salon et les chambres", "Les pièces humides (cuisine, salle de bain, WC)", "Uniquement le garage", "Uniquement les combles"], correct: 1, exp: "Les bouches d'extraction sont placées dans les pièces humides pour évacuer l'air vicié." }
        ]
      },
      {
        nom: "L'IRVE",
        questions: [
          { q: "Que signifie le sigle IRVE ?", options: ["Infrastructure de Recharge pour Véhicules Électriques", "Installation Réglementaire de Ventilation Extérieure", "Indice de Rendement des Variations Énergétiques", "Interrupteur de Régulation Volt-Électrique"], correct: 0, exp: "IRVE = Infrastructure de Recharge pour Véhicules Électriques." },
          { q: "Une installation IRVE nécessite-t-elle une protection différentielle spécifique ?", options: ["Non, un différentiel standard suffit toujours", "Oui, généralement un différentiel adapté aux courants de fuite continus (type A ou B/F selon le cas)", "Aucune protection n'est nécessaire", "Uniquement un fusible classique"], correct: 1, exp: "La recharge de véhicules électriques peut générer des courants de défaut continus nécessitant une protection adaptée." },
          { q: "Qu'est-ce qu'une borne de recharge IRVE de type 2 ?", options: ["Une prise domestique classique", "Une prise/connecteur normalisé pour la recharge des véhicules électriques", "Un simple câble d'extension", "Un boîtier de comptage uniquement"], correct: 1, exp: "Le connecteur Type 2 est un standard européen répandu pour la recharge des véhicules électriques." }
        ]
      },
      {
        nom: "Le Photovoltaïque",
        questions: [
          { q: "Quel phénomène physique permet à un panneau photovoltaïque de produire de l'électricité ?", options: ["L'effet Joule", "L'effet photovoltaïque (conversion de la lumière en électricité)", "L'induction électromagnétique", "La réaction chimique d'une pile"], correct: 1, exp: "L'effet photovoltaïque convertit directement l'énergie lumineuse en énergie électrique." },
          { q: "Quel type de courant produit un panneau photovoltaïque ?", options: ["Du courant alternatif directement utilisable", "Du courant continu (DC)", "Du courant triphasé", "Aucun courant sans onduleur"], correct: 1, exp: "Le panneau produit du courant continu, qui doit être converti pour être utilisé sur le réseau alternatif." },
          { q: "Quel est le rôle d'un onduleur dans une installation photovoltaïque ?", options: ["Stocker l'énergie produite", "Convertir le courant continu produit en courant alternatif utilisable/injectable au réseau", "Nettoyer les panneaux", "Mesurer l'ensoleillement"], correct: 1, exp: "L'onduleur transforme le courant continu des panneaux en courant alternatif compatible avec le réseau." }
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
