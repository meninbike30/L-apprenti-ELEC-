// Données de l'Atelier de câblage - EEB Alt Nîmes
// Chaque exercice définit des composants positionnés sur un plan de travail (canvas)
// et les connexions attendues entre leurs bornes.
//
// Note pédagogique sur les couleurs : Neutre (bleu) et Terre (vert/jaune) sont les
// deux seules couleurs imposées par la norme NF C 15-100. Les autres couleurs
// (Phase, Retour, Navette, Commande) sont ici choisies pour bien différencier les
// fonctions à l'écran ; dans une installation réelle, ces conducteurs peuvent être
// de teintes variées tant qu'ils ne sont ni bleus ni vert/jaune.

const WIRE_ROLES = {
  phase:    { label: "Phase",                         color: "#1a1a1a" },
  retour:   { label: "Retour (phase commutée)",       color: "#c0392b" },
  neutre:   { label: "Neutre",                        color: "#2f6fd1" },
  terre:    { label: "Terre",                         color: "#2e8b2e" },
  navette:  { label: "Navette",                       color: "#e08a1e" },
  commande: { label: "Commande (bouton poussoir)",    color: "#7b3fa0" },
  signal:   { label: "Signal EDF",                    color: "#666666" },
  bt:       { label: "Basse tension (12V)",           color: "#16a085" },
  pilote:   { label: "Fil pilote",                    color: "#d63384" },
  montee:   { label: "Commande Montée",               color: "#8e44ad" },
  descente: { label: "Commande Descente",             color: "#d68910" }
};

const ATELIER_EXERCISES = [
  {
    id: "simple-allumage",
    nom: "Montage Simple Allumage",
    difficulte: "Facile",
    description: "Alimenter un point lumineux commandé par un seul interrupteur.",
    canvasW: 820, canvasH: 260,
    successTarget: "lampe",
    sectionOptions: [1.5, 2.5, 6],
    sectionCorrect: 1.5,
    components: [
      { id: "disj", type: "disjoncteur", family: "source", label: "Disjoncteur", x: 30, y: 30, w: 120, h: 54,
        calibreOptions: [10, 16, 20, 32], calibreCorrect: 10,
        info: "Un disjoncteur divisionnaire unipolaire protège et coupe uniquement la phase. Son calibre doit être adapté à la section du câble (1,5 mm² → 10 A max).",
        terminals: [{ id: "in", label: "Réseau", x: 30, y: 57, network: true }, { id: "out", label: "Sortie", x: 150, y: 57 }] },
      { id: "bn", type: "bornier", family: "source", label: "Bornier Neutre", x: 30, y: 160, w: 120, h: 54,
        info: "Le neutre n'est pas protégé individuellement : il est distribué à tous les circuits via un bornier (peigne de neutre) relié directement à l'arrivée du compteur.",
        terminals: [{ id: "in", label: "Réseau N", x: 30, y: 187, network: true }, { id: "out", label: "N", x: 150, y: 187 }] },
      { id: "interr", type: "interrupteur", family: "switch", label: "Interrupteur", x: 330, y: 30, w: 120, h: 54,
        info: "L'interrupteur coupe toujours la phase, jamais le neutre : Commun reçoit la phase, L1 repart (« retour ») vers la lampe.",
        terminals: [{ id: "commun", label: "Commun", x: 330, y: 57 }, { id: "l1", label: "L1", x: 450, y: 57 }] },
      { id: "lampe", type: "lampe", family: "receiver", label: "Point lumineux", x: 630, y: 110, w: 120, h: 80,
        terminals: [{ id: "ph", label: "Ph", x: 630, y: 130 }, { id: "n", label: "N", x: 630, y: 168 }] }
    ],
    connections: [
      { from: "disj.out", to: "interr.commun", role: "phase" },
      { from: "interr.l1", to: "lampe.ph", role: "retour" },
      { from: "bn.out", to: "lampe.n", role: "neutre" }
    ]
  },
  {
    id: "va-et-vient",
    nom: "Montage Va-et-Vient",
    difficulte: "Moyen",
    description: "Commander un point lumineux depuis deux endroits différents.",
    canvasW: 900, canvasH: 260,
    successTarget: "lampe",
    sectionOptions: [1.5, 2.5, 6],
    sectionCorrect: 1.5,
    components: [
      { id: "disj", type: "disjoncteur", family: "source", label: "Disjoncteur", x: 20, y: 20, w: 110, h: 54,
        calibreOptions: [10, 16, 20, 32], calibreCorrect: 10,
        info: "Un disjoncteur divisionnaire unipolaire protège et coupe uniquement la phase. Son calibre doit être adapté à la section du câble (1,5 mm² → 10 A max).",
        terminals: [{ id: "in", label: "Réseau", x: 20, y: 47, network: true }, { id: "out", label: "Sortie", x: 130, y: 47 }] },
      { id: "bn", type: "bornier", family: "source", label: "Bornier Neutre", x: 20, y: 170, w: 110, h: 54,
        info: "Le neutre n'est pas protégé individuellement : il est distribué à tous les circuits via un bornier (peigne de neutre) relié directement à l'arrivée du compteur.",
        terminals: [{ id: "in", label: "Réseau N", x: 20, y: 197, network: true }, { id: "out", label: "N", x: 130, y: 197 }] },
      { id: "i1", type: "va-et-vient", family: "switch", label: "Va-et-vient 1", x: 250, y: 10, w: 120, h: 90,
        info: "Le Commun reçoit la phase ou repart vers la lampe. L1 et L2 relient les deux va-et-vient entre eux : ce sont les navettes.",
        terminals: [{ id: "commun", label: "Commun", x: 250, y: 55 }, { id: "l1", label: "L1", x: 370, y: 30 }, { id: "l2", label: "L2", x: 370, y: 80 }] },
      { id: "i2", type: "va-et-vient", family: "switch", label: "Va-et-vient 2", x: 470, y: 10, w: 120, h: 90,
        info: "Le Commun reçoit la phase ou repart vers la lampe. L1 et L2 relient les deux va-et-vient entre eux : ce sont les navettes.",
        terminals: [{ id: "l1", label: "L1", x: 470, y: 30 }, { id: "l2", label: "L2", x: 470, y: 80 }, { id: "commun", label: "Commun", x: 590, y: 55 }] },
      { id: "lampe", type: "lampe", family: "receiver", label: "Point lumineux", x: 720, y: 100, w: 120, h: 80,
        terminals: [{ id: "ph", label: "Ph", x: 720, y: 120 }, { id: "n", label: "N", x: 720, y: 158 }] }
    ],
    connections: [
      { from: "disj.out", to: "i1.commun", role: "phase" },
      { from: "i1.l1", to: "i2.l1", role: "navette" },
      { from: "i1.l2", to: "i2.l2", role: "navette" },
      { from: "i2.commun", to: "lampe.ph", role: "retour" },
      { from: "bn.out", to: "lampe.n", role: "neutre" }
    ]
  },
  {
    id: "telerupteur",
    nom: "Montage Télérupteur",
    difficulte: "Difficile",
    description: "Commander un éclairage depuis plusieurs boutons poussoirs via un télérupteur.",
    canvasW: 940, canvasH: 340,
    successTarget: "lampe",
    sectionOptions: [1.5, 2.5, 6],
    sectionCorrect: 1.5,
    components: [
      { id: "disjP", type: "disjoncteur", family: "source", label: "Disjoncteur puissance", x: 20, y: 20, w: 130, h: 54,
        calibreOptions: [10, 16, 20, 32], calibreCorrect: 10,
        info: "Protège le circuit de puissance qui alimente réellement la lampe (via le contact 1-2 du télérupteur).",
        terminals: [{ id: "in", label: "Réseau", x: 20, y: 47, network: true }, { id: "out", label: "Sortie P", x: 150, y: 47 }] },
      { id: "disjC", type: "disjoncteur", family: "source", label: "Disjoncteur commande", x: 20, y: 110, w: 130, h: 54,
        calibreOptions: [2, 6, 10], calibreCorrect: 2,
        info: "Circuit de commande séparé du circuit de puissance : un petit calibre (souvent 2 A) suffit car seul un faible courant traverse les boutons poussoirs et la bobine.",
        terminals: [{ id: "in", label: "Réseau", x: 20, y: 137, network: true }, { id: "out", label: "Sortie Cde", x: 150, y: 137 }] },
      { id: "bn", type: "bornier", family: "source", label: "Bornier Neutre", x: 20, y: 220, w: 130, h: 70,
        info: "Le neutre n'est pas protégé individuellement : il est distribué à tous les circuits (lampe ET bobine A2) via un bornier commun.",
        terminals: [{ id: "in", label: "Réseau N", x: 20, y: 255, network: true }, { id: "out1", label: "N1", x: 150, y: 238 }, { id: "out2", label: "N2", x: 150, y: 272 }] },
      { id: "bp1", type: "bouton-poussoir", family: "switch", label: "Bouton poussoir 1", x: 290, y: 110, w: 110, h: 54,
        info: "Les boutons poussoirs sont câblés en parallèle (pas en série) : n'importe lequel peut déclencher le télérupteur.",
        terminals: [{ id: "in", label: "E", x: 290, y: 137 }, { id: "out", label: "S", x: 400, y: 137 }] },
      { id: "bp2", type: "bouton-poussoir", family: "switch", label: "Bouton poussoir 2", x: 290, y: 220, w: 110, h: 54,
        info: "Les boutons poussoirs sont câblés en parallèle (pas en série) : n'importe lequel peut déclencher le télérupteur.",
        terminals: [{ id: "in", label: "E", x: 290, y: 247 }, { id: "out", label: "S", x: 400, y: 247 }] },
      { id: "tele", type: "telerupteur", family: "relay", label: "Télérupteur", x: 540, y: 90, w: 150, h: 130,
        info: "A1/A2 = bobine de commande (basse consommation, pilotée par les boutons poussoirs). 1/2 = contact de puissance qui alimente réellement la lampe.",
        terminals: [{ id: "a1", label: "A1", x: 540, y: 120 }, { id: "a2", label: "A2", x: 540, y: 190 }, { id: "one", label: "1", x: 690, y: 120 }, { id: "two", label: "2", x: 690, y: 190 }] },
      { id: "lampe", type: "lampe", family: "receiver", label: "Point lumineux", x: 790, y: 20, w: 120, h: 80,
        terminals: [{ id: "ph", label: "Ph", x: 790, y: 40 }, { id: "n", label: "N", x: 790, y: 78 }] }
    ],
    connections: [
      { from: "disjP.out", to: "tele.one", role: "phase" },
      { from: "tele.two", to: "lampe.ph", role: "retour" },
      { from: "bn.out1", to: "lampe.n", role: "neutre" },
      { from: "bn.out2", to: "tele.a2", role: "neutre" },
      { from: "disjC.out", to: "bp1.in", role: "commande" },
      { from: "disjC.out", to: "bp2.in", role: "commande" },
      { from: "bp1.out", to: "tele.a1", role: "commande" },
      { from: "bp2.out", to: "tele.a1", role: "commande" }
    ]
  },
  {
    id: "prise-de-courant",
    nom: "Montage Prise de courant",
    difficulte: "Facile",
    description: "Raccorder une prise de courant 2P+T en respectant phase, neutre et terre.",
    canvasW: 820, canvasH: 260,
    successTarget: "prise",
    sectionOptions: [1.5, 2.5, 6],
    sectionCorrect: 2.5,
    components: [
      { id: "disj", type: "disjoncteur", family: "source", label: "Disjoncteur", x: 30, y: 20, w: 120, h: 54,
        calibreOptions: [10, 16, 20, 32], calibreCorrect: 16,
        info: "Un circuit de prises de courant est protégé par un disjoncteur 16 A (câble 1,5 mm², 8 prises max) ou 20 A (câble 2,5 mm², 12 prises max).",
        terminals: [{ id: "in", label: "Réseau", x: 30, y: 47, network: true }, { id: "out", label: "Sortie", x: 150, y: 47 }] },
      { id: "bn", type: "bornier", family: "source", label: "Bornier Neutre", x: 30, y: 110, w: 120, h: 54,
        info: "Le neutre n'est pas protégé individuellement : il est distribué à tous les circuits via un bornier commun.",
        terminals: [{ id: "in", label: "Réseau N", x: 30, y: 137, network: true }, { id: "out", label: "N", x: 150, y: 137 }] },
      { id: "bt", type: "bornier-terre", family: "source", label: "Bornier Terre", x: 30, y: 190, w: 120, h: 54,
        info: "Le conducteur de terre relie les masses métalliques des appareils à la prise de terre du bâtiment, pour la sécurité en cas de défaut d'isolement.",
        terminals: [{ id: "in", label: "Réseau T", x: 30, y: 217, network: true }, { id: "out", label: "T", x: 150, y: 217 }] },
      { id: "prise", type: "prise", family: "receiver", label: "Prise de courant", x: 480, y: 70, w: 130, h: 130,
        info: "Une prise 2P+T doit toujours être raccordée avec sa terre : c'est obligatoire pour la sécurité des utilisateurs.",
        terminals: [{ id: "ph", label: "Ph", x: 480, y: 100 }, { id: "n", label: "N", x: 480, y: 135 }, { id: "terre", label: "T", x: 480, y: 170 }] }
    ],
    connections: [
      { from: "disj.out", to: "prise.ph", role: "phase" },
      { from: "bn.out", to: "prise.n", role: "neutre" },
      { from: "bt.out", to: "prise.terre", role: "terre" }
    ]
  },
  {
    id: "contacteur-hchp",
    nom: "Montage Contacteur HC / HP",
    difficulte: "Moyen",
    description: "Piloter un chauffe-eau électrique via un contacteur jour/nuit.",
    canvasW: 940, canvasH: 260,
    successTarget: "chauffeeau",
    sectionOptions: [1.5, 2.5, 6],
    sectionCorrect: 2.5,
    components: [
      { id: "disj", type: "disjoncteur", family: "source", label: "Disjoncteur puissance", x: 20, y: 20, w: 130, h: 54,
        calibreOptions: [16, 20, 32], calibreCorrect: 20,
        info: "Protège le circuit de puissance du chauffe-eau, indépendamment du signal de commande jour/nuit.",
        terminals: [{ id: "in", label: "Réseau", x: 20, y: 47, network: true }, { id: "out", label: "Sortie", x: 150, y: 47 }] },
      { id: "bn", type: "bornier", family: "source", label: "Bornier Neutre", x: 20, y: 140, w: 130, h: 70,
        info: "Le neutre n'est pas protégé individuellement : il est distribué au chauffe-eau ET à la bobine du contacteur via un bornier commun.",
        terminals: [{ id: "in", label: "Réseau N", x: 20, y: 175, network: true }, { id: "out1", label: "N1", x: 150, y: 158 }, { id: "out2", label: "N2", x: 150, y: 192 }] },
      { id: "signal", type: "compteur", family: "source", label: "Signal EDF (compteur)", x: 300, y: 20, w: 150, h: 54,
        info: "Le compteur envoie un signal tarifaire (heures creuses/pleines) qui pilote la bobine A1/A2 du contacteur, indépendamment du circuit de puissance.",
        terminals: [{ id: "in", label: "Compteur", x: 300, y: 47, network: true }, { id: "out", label: "Signal", x: 450, y: 47 }] },
      { id: "contacteur", type: "contacteur", family: "relay", label: "Contacteur jour/nuit", x: 560, y: 70, w: 150, h: 130,
        info: "A1/A2 = bobine pilotée par le signal tarifaire du compteur. 1/2 = contact de puissance qui alimente réellement le chauffe-eau.",
        terminals: [{ id: "a1", label: "A1", x: 560, y: 100 }, { id: "a2", label: "A2", x: 560, y: 160 }, { id: "one", label: "1", x: 710, y: 100 }, { id: "two", label: "2", x: 710, y: 160 }] },
      { id: "chauffeeau", type: "chauffe-eau", family: "receiver", label: "Chauffe-eau", x: 790, y: 20, w: 120, h: 80,
        terminals: [{ id: "ph", label: "Ph", x: 790, y: 40 }, { id: "n", label: "N", x: 790, y: 78 }] }
    ],
    connections: [
      { from: "disj.out", to: "contacteur.one", role: "phase" },
      { from: "contacteur.two", to: "chauffeeau.ph", role: "retour" },
      { from: "bn.out1", to: "chauffeeau.n", role: "neutre" },
      { from: "bn.out2", to: "contacteur.a2", role: "neutre" },
      { from: "signal.out", to: "contacteur.a1", role: "signal" }
    ]
  },
  {
    id: "prise-commandee",
    nom: "Montage Prise commandée",
    difficulte: "Facile",
    description: "Une prise de courant allumée/éteinte par un interrupteur (ex : lampe de chevet commandée au mur).",
    canvasW: 820, canvasH: 280,
    successTarget: "prise",
    sectionOptions: [1.5, 2.5, 6],
    sectionCorrect: 1.5,
    components: [
      { id: "disj", type: "disjoncteur", family: "source", label: "Disjoncteur", x: 30, y: 20, w: 120, h: 54,
        calibreOptions: [10, 16, 20], calibreCorrect: 10,
        info: "Une prise commandée est souvent raccordée sur le circuit d'éclairage (10 A / 1,5 mm²) car elle n'alimente en général que de petits appareils comme une lampe.",
        terminals: [{ id: "in", label: "Réseau", x: 30, y: 47, network: true }, { id: "out", label: "Sortie", x: 150, y: 47 }] },
      { id: "bn", type: "bornier", family: "source", label: "Bornier Neutre", x: 30, y: 110, w: 120, h: 54,
        info: "Le neutre n'est pas protégé individuellement : il est distribué à tous les circuits via un bornier commun.",
        terminals: [{ id: "in", label: "Réseau N", x: 30, y: 137, network: true }, { id: "out", label: "N", x: 150, y: 137 }] },
      { id: "bt", type: "bornier-terre", family: "source", label: "Bornier Terre", x: 30, y: 200, w: 120, h: 54,
        info: "Le conducteur de terre relie les masses métalliques des appareils à la prise de terre du bâtiment, pour la sécurité en cas de défaut d'isolement.",
        terminals: [{ id: "in", label: "Réseau T", x: 30, y: 227, network: true }, { id: "out", label: "T", x: 150, y: 227 }] },
      { id: "interr", type: "interrupteur", family: "switch", label: "Interrupteur", x: 300, y: 20, w: 120, h: 54,
        info: "L'interrupteur coupe la phase avant la prise : celle-ci n'est sous tension que lorsqu'il est activé.",
        terminals: [{ id: "commun", label: "Commun", x: 300, y: 47 }, { id: "l1", label: "L1", x: 420, y: 47 }] },
      { id: "prise", type: "prise", family: "receiver", label: "Prise commandée", x: 560, y: 70, w: 130, h: 130,
        info: "Comme toute prise 2P+T, sa terre reste obligatoire même si elle est commandée par un interrupteur.",
        terminals: [{ id: "ph", label: "Ph", x: 560, y: 100 }, { id: "n", label: "N", x: 560, y: 135 }, { id: "terre", label: "T", x: 560, y: 170 }] }
    ],
    connections: [
      { from: "disj.out", to: "interr.commun", role: "phase" },
      { from: "interr.l1", to: "prise.ph", role: "retour" },
      { from: "bn.out", to: "prise.n", role: "neutre" },
      { from: "bt.out", to: "prise.terre", role: "terre" }
    ]
  },
  {
    id: "permutateur",
    nom: "Montage Permutateur (3 points de commande)",
    difficulte: "Difficile",
    description: "Commander un point lumineux depuis 3 endroits différents grâce à un permutateur (croisement) inséré entre deux va-et-vient.",
    canvasW: 1080, canvasH: 280,
    successTarget: "lampe",
    sectionOptions: [1.5, 2.5, 6],
    sectionCorrect: 1.5,
    components: [
      { id: "disj", type: "disjoncteur", family: "source", label: "Disjoncteur", x: 20, y: 20, w: 110, h: 54,
        calibreOptions: [10, 16, 20], calibreCorrect: 10,
        info: "Un disjoncteur divisionnaire unipolaire protège et coupe uniquement la phase. Son calibre doit être adapté à la section du câble (1,5 mm² → 10 A max).",
        terminals: [{ id: "in", label: "Réseau", x: 20, y: 47, network: true }, { id: "out", label: "Sortie", x: 130, y: 47 }] },
      { id: "bn", type: "bornier", family: "source", label: "Bornier Neutre", x: 20, y: 180, w: 110, h: 54,
        info: "Le neutre n'est pas protégé individuellement : il est distribué à tous les circuits via un bornier commun.",
        terminals: [{ id: "in", label: "Réseau N", x: 20, y: 207, network: true }, { id: "out", label: "N", x: 130, y: 207 }] },
      { id: "i1", type: "va-et-vient", family: "switch", label: "Va-et-vient 1", x: 260, y: 20, w: 120, h: 90,
        info: "Le Commun reçoit la phase ou repart vers la lampe. L1 et L2 partent vers le permutateur : ce sont les navettes.",
        terminals: [{ id: "commun", label: "Commun", x: 260, y: 65 }, { id: "l1", label: "L1", x: 380, y: 40 }, { id: "l2", label: "L2", x: 380, y: 90 }] },
      { id: "croisement", type: "permutateur", family: "switch", label: "Permutateur", x: 480, y: 10, w: 130, h: 110,
        info: "Le permutateur s'intercale entre deux va-et-vient pour ajouter un 3e point de commande : il croise ou laisse passer les deux navettes (E1/E2 → S1/S2) selon sa position.",
        terminals: [{ id: "e1", label: "E1", x: 480, y: 40 }, { id: "e2", label: "E2", x: 480, y: 90 }, { id: "s1", label: "S1", x: 610, y: 40 }, { id: "s2", label: "S2", x: 610, y: 90 }] },
      { id: "i2", type: "va-et-vient", family: "switch", label: "Va-et-vient 2", x: 700, y: 20, w: 120, h: 90,
        info: "Le Commun reçoit la phase ou repart vers la lampe. L1 et L2 relient ce va-et-vient au permutateur : ce sont les navettes.",
        terminals: [{ id: "l1", label: "L1", x: 700, y: 40 }, { id: "l2", label: "L2", x: 700, y: 90 }, { id: "commun", label: "Commun", x: 820, y: 65 }] },
      { id: "lampe", type: "lampe", family: "receiver", label: "Point lumineux", x: 960, y: 110, w: 120, h: 80,
        terminals: [{ id: "ph", label: "Ph", x: 960, y: 130 }, { id: "n", label: "N", x: 960, y: 168 }] }
    ],
    connections: [
      { from: "disj.out", to: "i1.commun", role: "phase" },
      { from: "i1.l1", to: "croisement.e1", role: "navette" },
      { from: "i1.l2", to: "croisement.e2", role: "navette" },
      { from: "croisement.s1", to: "i2.l1", role: "navette" },
      { from: "croisement.s2", to: "i2.l2", role: "navette" },
      { from: "i2.commun", to: "lampe.ph", role: "retour" },
      { from: "bn.out", to: "lampe.n", role: "neutre" }
    ]
  },
  {
    id: "minuterie",
    nom: "Montage Minuterie d'escalier",
    difficulte: "Difficile",
    description: "Éclairer une cage d'escalier depuis plusieurs boutons poussoirs, avec extinction automatique temporisée.",
    canvasW: 940, canvasH: 340,
    successTarget: "lampe",
    sectionOptions: [1.5, 2.5, 6],
    sectionCorrect: 1.5,
    components: [
      { id: "disjP", type: "disjoncteur", family: "source", label: "Disjoncteur puissance", x: 20, y: 20, w: 130, h: 54,
        calibreOptions: [10, 16, 20], calibreCorrect: 10,
        info: "Protège le circuit de puissance qui alimente réellement la lampe (via le contact 1-2 de la minuterie).",
        terminals: [{ id: "in", label: "Réseau", x: 20, y: 47, network: true }, { id: "out", label: "Sortie P", x: 150, y: 47 }] },
      { id: "disjC", type: "disjoncteur", family: "source", label: "Disjoncteur commande", x: 20, y: 110, w: 130, h: 54,
        calibreOptions: [2, 6, 10], calibreCorrect: 2,
        info: "Circuit de commande séparé du circuit de puissance : un petit calibre (souvent 2 A) suffit car seul un faible courant traverse les boutons poussoirs et la bobine.",
        terminals: [{ id: "in", label: "Réseau", x: 20, y: 137, network: true }, { id: "out", label: "Sortie Cde", x: 150, y: 137 }] },
      { id: "bn", type: "bornier", family: "source", label: "Bornier Neutre", x: 20, y: 220, w: 130, h: 70,
        info: "Le neutre n'est pas protégé individuellement : il est distribué à tous les circuits (lampe ET bobine A2) via un bornier commun.",
        terminals: [{ id: "in", label: "Réseau N", x: 20, y: 255, network: true }, { id: "out1", label: "N1", x: 150, y: 238 }, { id: "out2", label: "N2", x: 150, y: 272 }] },
      { id: "bp1", type: "bouton-poussoir", family: "switch", label: "Bouton poussoir 1", x: 290, y: 110, w: 110, h: 54,
        info: "Les boutons poussoirs sont câblés en parallèle (pas en série) : n'importe lequel peut déclencher la minuterie.",
        terminals: [{ id: "in", label: "E", x: 290, y: 137 }, { id: "out", label: "S", x: 400, y: 137 }] },
      { id: "bp2", type: "bouton-poussoir", family: "switch", label: "Bouton poussoir 2", x: 290, y: 220, w: 110, h: 54,
        info: "Les boutons poussoirs sont câblés en parallèle (pas en série) : n'importe lequel peut déclencher la minuterie.",
        terminals: [{ id: "in", label: "E", x: 290, y: 247 }, { id: "out", label: "S", x: 400, y: 247 }] },
      { id: "minut", type: "minuterie", family: "relay", label: "Minuterie", x: 540, y: 90, w: 150, h: 130,
        info: "A1/A2 = bobine de commande, pilotée par les boutons poussoirs. 1/2 = contact de puissance qui alimente la lampe. Contrairement au télérupteur, la minuterie coupe automatiquement l'éclairage après un temps réglable.",
        terminals: [{ id: "a1", label: "A1", x: 540, y: 120 }, { id: "a2", label: "A2", x: 540, y: 190 }, { id: "one", label: "1", x: 690, y: 120 }, { id: "two", label: "2", x: 690, y: 190 }] },
      { id: "lampe", type: "lampe", family: "receiver", label: "Point lumineux", x: 790, y: 20, w: 120, h: 80,
        terminals: [{ id: "ph", label: "Ph", x: 790, y: 40 }, { id: "n", label: "N", x: 790, y: 78 }] }
    ],
    connections: [
      { from: "disjP.out", to: "minut.one", role: "phase" },
      { from: "minut.two", to: "lampe.ph", role: "retour" },
      { from: "bn.out1", to: "lampe.n", role: "neutre" },
      { from: "bn.out2", to: "minut.a2", role: "neutre" },
      { from: "disjC.out", to: "bp1.in", role: "commande" },
      { from: "disjC.out", to: "bp2.in", role: "commande" },
      { from: "bp1.out", to: "minut.a1", role: "commande" },
      { from: "bp2.out", to: "minut.a1", role: "commande" }
    ]
  },
  {
    id: "detecteur-mouvement",
    nom: "Montage Détecteur de mouvement",
    difficulte: "Moyen",
    description: "Allumer automatiquement un éclairage extérieur dès qu'un mouvement est détecté.",
    canvasW: 860, canvasH: 260,
    successTarget: "lampe",
    sectionOptions: [1.5, 2.5, 6],
    sectionCorrect: 1.5,
    components: [
      { id: "disj", type: "disjoncteur", family: "source", label: "Disjoncteur", x: 20, y: 20, w: 120, h: 54,
        calibreOptions: [10, 16], calibreCorrect: 10,
        info: "Un circuit d'éclairage extérieur est protégé comme un circuit d'éclairage classique : 10 A / 1,5 mm².",
        terminals: [{ id: "in", label: "Réseau", x: 20, y: 47, network: true }, { id: "out", label: "Sortie", x: 150, y: 47 }] },
      { id: "bn", type: "bornier", family: "source", label: "Bornier Neutre", x: 20, y: 110, w: 120, h: 70,
        info: "Le neutre est distribué au détecteur (pour son électronique) ET à la lampe via un bornier commun.",
        terminals: [{ id: "in", label: "Réseau N", x: 20, y: 145, network: true }, { id: "out1", label: "N1", x: 150, y: 128 }, { id: "out2", label: "N2", x: 150, y: 162 }] },
      { id: "detecteur", type: "detecteur", family: "switch", label: "Détecteur de mouvement", x: 320, y: 20, w: 130, h: 90,
        info: "Le détecteur a besoin d'être alimenté en permanence (phase L + neutre N) pour son électronique ; il ne laisse passer la phase vers la lampe (S) que lorsqu'il détecte un mouvement.",
        terminals: [{ id: "l", label: "L", x: 320, y: 50 }, { id: "n", label: "N", x: 320, y: 95 }, { id: "s", label: "S", x: 450, y: 50 }] },
      { id: "lampe", type: "lampe", family: "receiver", label: "Point lumineux", x: 620, y: 20, w: 120, h: 80,
        terminals: [{ id: "ph", label: "Ph", x: 620, y: 40 }, { id: "n", label: "N", x: 620, y: 78 }] }
    ],
    connections: [
      { from: "disj.out", to: "detecteur.l", role: "phase" },
      { from: "bn.out1", to: "detecteur.n", role: "neutre" },
      { from: "detecteur.s", to: "lampe.ph", role: "retour" },
      { from: "bn.out2", to: "lampe.n", role: "neutre" }
    ]
  },
  {
    id: "sonnette",
    nom: "Montage Sonnette (230V / 12V)",
    difficulte: "Moyen",
    description: "Alimenter une sonnette en toute sécurité grâce à un transformateur basse tension.",
    canvasW: 940, canvasH: 260,
    successTarget: "sonnette",
    sectionOptions: [1.5, 2.5, 6],
    sectionCorrect: 1.5,
    components: [
      { id: "disj", type: "disjoncteur", family: "source", label: "Disjoncteur", x: 20, y: 20, w: 120, h: 54,
        calibreOptions: [2, 10, 16], calibreCorrect: 2,
        info: "Le circuit 230V d'un transformateur de sonnette est peu puissant : un petit calibre (souvent 2 A) suffit à le protéger.",
        terminals: [{ id: "in", label: "Réseau", x: 20, y: 47, network: true }, { id: "out", label: "Sortie", x: 150, y: 47 }] },
      { id: "bn", type: "bornier", family: "source", label: "Bornier Neutre", x: 20, y: 110, w: 120, h: 54,
        info: "Le neutre n'est pas protégé individuellement : il est distribué à tous les circuits via un bornier commun.",
        terminals: [{ id: "in", label: "Réseau N", x: 20, y: 137, network: true }, { id: "out", label: "N", x: 150, y: 137 }] },
      { id: "transfo", type: "transformateur", family: "source", label: "Transformateur 230V/12V", x: 300, y: 20, w: 140, h: 90,
        info: "Le transformateur abaisse le 230V du secteur (primaire P1/P2) en 12V de sécurité (secondaire S1/S2) pour alimenter le circuit de sonnette.",
        terminals: [{ id: "p1", label: "P1", x: 300, y: 40 }, { id: "p2", label: "P2", x: 300, y: 95 }, { id: "s1", label: "S1", x: 440, y: 40 }, { id: "s2", label: "S2", x: 440, y: 95 }] },
      { id: "bp", type: "bouton-poussoir", family: "switch", label: "Bouton sonnette", x: 560, y: 20, w: 110, h: 54,
        info: "Côté 12V, le bouton poussoir déclenche la sonnette sans aucun risque électrique pour l'utilisateur.",
        terminals: [{ id: "in", label: "E", x: 560, y: 47 }, { id: "out", label: "S", x: 670, y: 47 }] },
      { id: "sonnette", type: "sonnette", family: "receiver", label: "Sonnette", x: 800, y: 20, w: 120, h: 80,
        terminals: [{ id: "in1", label: "1", x: 800, y: 40 }, { id: "in2", label: "2", x: 800, y: 78 }] }
    ],
    connections: [
      { from: "disj.out", to: "transfo.p1", role: "phase" },
      { from: "bn.out", to: "transfo.p2", role: "neutre" },
      { from: "transfo.s1", to: "bp.in", role: "bt" },
      { from: "bp.out", to: "sonnette.in1", role: "bt" },
      { from: "transfo.s2", to: "sonnette.in2", role: "bt" }
    ]
  },
  {
    id: "chauffage-fil-pilote",
    nom: "Montage Chauffage électrique (fil pilote)",
    difficulte: "Moyen",
    description: "Raccorder un radiateur électrique piloté à distance grâce au fil pilote (Confort / Éco / Hors-gel / Arrêt).",
    canvasW: 940, canvasH: 260,
    successTarget: "radiateur",
    sectionOptions: [1.5, 2.5, 6],
    sectionCorrect: 2.5,
    components: [
      { id: "disj", type: "disjoncteur", family: "source", label: "Disjoncteur", x: 20, y: 20, w: 120, h: 54,
        calibreOptions: [10, 16, 20], calibreCorrect: 16,
        info: "Un radiateur électrique est en général protégé par un disjoncteur 16 A (câble 2,5 mm²) ou 20 A selon sa puissance.",
        terminals: [{ id: "in", label: "Réseau", x: 20, y: 47, network: true }, { id: "out", label: "Sortie", x: 150, y: 47 }] },
      { id: "bn", type: "bornier", family: "source", label: "Bornier Neutre", x: 20, y: 110, w: 120, h: 54,
        info: "Le neutre n'est pas protégé individuellement : il est distribué à tous les circuits via un bornier commun.",
        terminals: [{ id: "in", label: "Réseau N", x: 20, y: 137, network: true }, { id: "out", label: "N", x: 150, y: 137 }] },
      { id: "programmateur", type: "programmateur", family: "source", label: "Programmateur fil pilote", x: 300, y: 20, w: 150, h: 60,
        info: "Le programmateur est lui-même alimenté en 230V (non représenté ici) ; seule sa sortie fil pilote (FP) doit être raccordée au radiateur pour lui transmettre l'ordre Confort / Éco / Hors-gel / Arrêt.",
        terminals: [{ id: "out", label: "FP", x: 450, y: 50 }] },
      { id: "radiateur", type: "radiateur", family: "receiver", label: "Radiateur", x: 620, y: 20, w: 130, h: 100,
        info: "Le fil pilote (FP) permet au radiateur de recevoir à distance un ordre de fonctionnement, en plus de son alimentation classique Phase/Neutre.",
        terminals: [{ id: "ph", label: "Ph", x: 620, y: 40 }, { id: "n", label: "N", x: 620, y: 70 }, { id: "fp", label: "FP", x: 620, y: 100 }] }
    ],
    connections: [
      { from: "disj.out", to: "radiateur.ph", role: "phase" },
      { from: "bn.out", to: "radiateur.n", role: "neutre" },
      { from: "programmateur.out", to: "radiateur.fp", role: "pilote" }
    ]
  },
  {
    id: "volet-roulant",
    nom: "Montage Volet roulant électrique",
    difficulte: "Difficile",
    description: "Commander la montée et la descente d'un volet roulant grâce à un inverseur à 3 positions.",
    canvasW: 940, canvasH: 260,
    successTarget: "volet",
    sectionOptions: [1.5, 2.5, 6],
    sectionCorrect: 1.5,
    components: [
      { id: "disj", type: "disjoncteur", family: "source", label: "Disjoncteur", x: 20, y: 20, w: 120, h: 54,
        calibreOptions: [10, 16], calibreCorrect: 10,
        info: "Un volet roulant est généralement protégé comme un circuit d'éclairage : 10 A / 1,5 mm² (parfois 16 A selon la puissance du moteur).",
        terminals: [{ id: "in", label: "Réseau", x: 20, y: 47, network: true }, { id: "out", label: "Sortie", x: 150, y: 47 }] },
      { id: "bn", type: "bornier", family: "source", label: "Bornier Neutre", x: 20, y: 110, w: 120, h: 54,
        info: "Le neutre n'est pas protégé individuellement : il est distribué à tous les circuits via un bornier commun.",
        terminals: [{ id: "in", label: "Réseau N", x: 20, y: 137, network: true }, { id: "out", label: "N", x: 150, y: 137 }] },
      { id: "inverseur", type: "inverseur-volet", family: "switch", label: "Inverseur volet", x: 300, y: 20, w: 130, h: 100,
        info: "L'inverseur envoie la phase soit vers « Montée » soit vers « Descente » selon la position appuyée, jamais les deux en même temps.",
        terminals: [{ id: "in", label: "Commun", x: 300, y: 70 }, { id: "m", label: "M", x: 430, y: 40 }, { id: "d", label: "D", x: 430, y: 100 }] },
      { id: "volet", type: "volet-roulant", family: "receiver", label: "Volet roulant", x: 620, y: 20, w: 130, h: 100,
        terminals: [{ id: "m", label: "M", x: 620, y: 40 }, { id: "d", label: "D", x: 620, y: 70 }, { id: "n", label: "N", x: 620, y: 100 }] }
    ],
    connections: [
      { from: "disj.out", to: "inverseur.in", role: "phase" },
      { from: "inverseur.m", to: "volet.m", role: "montee" },
      { from: "inverseur.d", to: "volet.d", role: "descente" },
      { from: "bn.out", to: "volet.n", role: "neutre" }
    ]
  },
  {
    id: "vmc",
    nom: "Montage VMC simple flux",
    difficulte: "Facile",
    description: "Raccorder une VMC (extraction d'air) alimentée en permanence, avec une option grande vitesse commandée (ex : bouton en cuisine).",
    canvasW: 860, canvasH: 260,
    successTarget: "vmc",
    sectionOptions: [1.5, 2.5, 6],
    sectionCorrect: 1.5,
    components: [
      { id: "disj", type: "disjoncteur", family: "source", label: "Disjoncteur", x: 20, y: 20, w: 120, h: 54,
        calibreOptions: [2, 10, 16], calibreCorrect: 2,
        info: "Le moteur d'une VMC consomme très peu de courant : un petit calibre (souvent 2 A) suffit à protéger son circuit dédié.",
        terminals: [{ id: "in", label: "Réseau", x: 20, y: 47, network: true }, { id: "out", label: "Sortie", x: 150, y: 47 }] },
      { id: "bn", type: "bornier", family: "source", label: "Bornier Neutre", x: 20, y: 110, w: 120, h: 54,
        info: "Le neutre n'est pas protégé individuellement : il est distribué à tous les circuits via un bornier commun.",
        terminals: [{ id: "in", label: "Réseau N", x: 20, y: 137, network: true }, { id: "out", label: "N", x: 150, y: 137 }] },
      { id: "bp", type: "bouton-poussoir", family: "switch", label: "Bouton Grande Vitesse", x: 300, y: 20, w: 120, h: 54,
        info: "Ce bouton (souvent en cuisine) commande le passage temporaire en grande vitesse (GV) de la VMC lors de la cuisson.",
        terminals: [{ id: "in", label: "E", x: 300, y: 47 }, { id: "out", label: "S", x: 420, y: 47 }] },
      { id: "vmc", type: "vmc", family: "receiver", label: "VMC", x: 600, y: 20, w: 130, h: 100,
        info: "La VMC tourne en permanence en petite vitesse (Ph/N) ; l'entrée GV la fait passer temporairement en grande vitesse.",
        terminals: [{ id: "ph", label: "Ph", x: 600, y: 40 }, { id: "n", label: "N", x: 600, y: 70 }, { id: "gv", label: "GV", x: 600, y: 100 }] }
    ],
    connections: [
      { from: "disj.out", to: "vmc.ph", role: "phase" },
      { from: "bn.out", to: "vmc.n", role: "neutre" },
      { from: "disj.out", to: "bp.in", role: "phase" },
      { from: "bp.out", to: "vmc.gv", role: "commande" }
    ]
  }
];
