// Fiches de cours - EEB Alt Nîmes
// Contenu pédagogique condensé pour chaque sujet du programme (semaines 1 à 12).
// Utilisé en priorité par buildCoursIndex() dans script.js ; si un sujet n'a pas
// d'entrée ici, les explications des questions du quiz servent de repli.

const COURS_CONTENT = {
  "Notions de bases mathématiques": [
    "Les 4 opérations de base (addition, soustraction, multiplication, division) doivent être maîtrisées sans calculatrice pour les calculs rapides sur chantier.",
    "Une fraction représente une division : 1/4 = 0,25 = 25 %.",
    "Le pourcentage d'une valeur se calcule par (valeur × pourcentage) / 100.",
    "Les préfixes multiplicateurs sont indispensables en électricité : milli (m) = ÷1000, kilo (k) = ×1000, méga (M) = ×1 000 000.",
    "Exemple : 0,5 A = 500 mA ; 2,5 kΩ = 2500 Ω.",
    "Pour isoler une inconnue dans une équation simple (ex : U = R × I), on applique la même opération des deux côtés de l'égalité.",
    "La règle de trois permet de calculer une proportion inconnue à partir de trois valeurs connues."
  ],
  "Préparation à l'Habilitation électrique B2V Essai BR H0": [
    "L'habilitation électrique est une autorisation délivrée par l'employeur, obligatoire pour intervenir sur ou à proximité d'installations électriques (norme NF C18-510).",
    "Le premier caractère indique le domaine de tension : B = Basse Tension/Très Basse Tension, H = Haute Tension.",
    "Le chiffre indique le type d'opération : 0 = travaux d'ordre non électrique, 1 = exécutant électricien, 2 = chargé de travaux.",
    "La lettre V ajoutée signifie 'au voisinage' de pièces nues sous tension.",
    "Le symbole R indique une habilitation d'intervention générale (dépannage, connexion) en basse tension.",
    "L'habilitation doit être recyclée périodiquement (tous les 3 ans en général) et remise en cause après un accident ou une longue interruption.",
    "Avant toute intervention : identifier la zone, consigner si besoin, vérifier l'absence de tension (VAT) et utiliser les EPI adaptés."
  ],
  "L'Electricité": [
    "Le courant électrique est un déplacement ordonné d'électrons dans un conducteur.",
    "L'intensité (I) se mesure en ampères (A) : c'est le débit de charges électriques.",
    "La tension (U), ou différence de potentiel, se mesure en volts (V) : c'est la « force » qui pousse le courant.",
    "La résistance (R) s'oppose au passage du courant et se mesure en ohms (Ω).",
    "En France, le réseau domestique monophasé standard est en 230 V / 50 Hz.",
    "Un circuit électrique doit être fermé (en boucle) pour que le courant circule.",
    "On distingue le courant continu (DC, sens constant) du courant alternatif (AC, sens qui s'inverse périodiquement)."
  ],
  "Les dangers de l'électricité": [
    "Le contact direct correspond au contact avec une pièce normalement sous tension (fil dénudé, borne...).",
    "Le contact indirect correspond au contact avec une masse métallique devenue accidentellement sous tension suite à un défaut d'isolement.",
    "Le seuil de tension limite conventionnelle (UL) est de 50 V en alternatif en milieu sec, et 25 V en milieu humide.",
    "Le courant électrique traversant le corps peut provoquer tétanisation musculaire, brûlures et fibrillation cardiaque, potentiellement mortelle.",
    "La gravité d'une électrisation dépend de l'intensité, du trajet du courant dans le corps, de la durée de passage et de la fréquence.",
    "Principaux moyens de prévention : hors tension avant travail, protections collectives (différentiel), EPI (gants isolants, tapis, VAT).",
    "En cas d'accident électrique : ne jamais toucher la victime directement, couper l'alimentation, alerter les secours (15/18/112)."
  ],
  "Les outils d'électricien": [
    "La pince à dénuder retire l'isolant d'un conducteur sans endommager l'âme métallique.",
    "Le tournevis testeur (VAT simple, néon) détecte une présence de tension par contact, mais ne remplace pas un VAT normalisé.",
    "Le Vérificateur d'Absence de Tension (VAT) normalisé est obligatoire avant toute intervention pour confirmer qu'un circuit est bien hors tension.",
    "La pince à sertir fixe mécaniquement des embouts ou cosses sur des conducteurs souples pour un contact fiable.",
    "La pince coupante sert à couper les conducteurs, la pince multiprise au serrage/maintien de pièces.",
    "Le multimètre mesure tension, courant, résistance et continuité selon le mode sélectionné.",
    "Chaque outil utilisé en électricité doit être isolé (norme 1000V) et vérifié régulièrement."
  ],
  "Travail en hauteur": [
    "Tout travail en hauteur présentant un risque de chute nécessite une évaluation des risques préalable (pas de seuil de hauteur unique fixé par la loi).",
    "Équipements de protection contre les chutes : garde-corps (protection collective, prioritaire), harnais avec longe (protection individuelle).",
    "Les équipements de travail en hauteur (échelles, échafaudages, harnais, plateformes) doivent faire l'objet de Vérifications Générales Périodiques (VGP).",
    "Avant d'utiliser une échelle : vérifier son état général, sa stabilité, son bon dépliage et son angle d'inclinaison (environ 75°).",
    "Une échelle ne doit être utilisée que pour de courtes interventions, jamais comme poste de travail permanent.",
    "Le port du casque est recommandé sur les zones de travail en hauteur, pour la protection contre les chutes d'objets."
  ],
  "Lois fondamentales": [
    "La loi d'Ohm relie tension, résistance et intensité : U = R × I.",
    "La puissance électrique en courant continu se calcule par P = U × I (en watts).",
    "La loi des mailles (Kirchhoff) : la somme algébrique des tensions dans une maille fermée est nulle.",
    "La loi des nœuds (Kirchhoff) : la somme des courants entrants dans un nœud égale la somme des courants sortants.",
    "En série, les résistances s'additionnent : Rtotale = R1 + R2 + ... ; en parallèle, 1/Rtotale = 1/R1 + 1/R2 + ...",
    "Ces lois permettent de calculer et de vérifier le comportement de tout circuit électrique simple."
  ],
  "Mesurage des grandeurs électriques": [
    "Le voltmètre mesure une tension et se branche toujours en parallèle (en dérivation) aux bornes du composant.",
    "L'ampèremètre mesure un courant et se branche toujours en série, dans le circuit.",
    "L'ohmmètre mesure une résistance ; il ne doit jamais être utilisé sur un circuit sous tension.",
    "La pince ampèremétrique mesure un courant par induction, sans ouvrir le circuit — pratique et sécurisant.",
    "Le multimètre regroupe généralement voltmètre, ampèremètre, ohmmètre et testeur de continuité en un seul appareil.",
    "Toujours choisir le bon calibre et la bonne fonction avant de mesurer, pour éviter d'endommager l'appareil ou de fausser la mesure."
  ],
  "Le circuit monophasé": [
    "Un circuit monophasé domestique comporte deux conducteurs actifs : la phase et le neutre, plus un conducteur de protection (terre).",
    "Couleur normalisée de la phase : toute couleur sauf bleu et vert-jaune.",
    "Couleur normalisée du neutre : bleu.",
    "Couleur normalisée de la terre : vert-jaune (bicolore).",
    "La tension entre phase et neutre est de 230 V en France.",
    "Le respect strict du code couleur est essentiel pour la sécurité et la compréhension des schémas."
  ],
  "L'AGCP": [
    "AGCP = Appareil Général de Commande et de Protection.",
    "Il se situe en tête d'installation, dans le tableau électrique, et permet de couper et protéger l'ensemble du logement.",
    "Il est généralement associé à un dispositif différentiel général de type 300 mA ou 500 mA.",
    "L'AGCP doit être accessible et manœuvrable facilement, en cas d'urgence.",
    "Il matérialise la limite entre le réseau de distribution publique et l'installation intérieure du client."
  ],
  "Le Fusible": [
    "Le fusible protège un circuit contre les surintensités en fondant un élément calibré lorsque le courant dépasse une valeur donnée.",
    "Un fusible fondu doit être remplacé ; il n'est jamais réarmable.",
    "Le calibre indiqué correspond au courant nominal maximal que le fusible peut supporter en continu.",
    "Le fusible de type gG protège les circuits résistifs classiques (usage général).",
    "Le fusible de type aM protège plutôt les circuits avec forts appels de courant au démarrage (moteurs).",
    "Contrairement au disjoncteur, le fusible ne se réarme pas et doit être physiquement changé après déclenchement."
  ],
  "Le Disjoncteur": [
    "Le disjoncteur assure deux protections principales : contre les surcharges (protection thermique) et contre les courts-circuits (protection magnétique).",
    "Contrairement au fusible, il se réarme simplement par une manette, sans être remplacé.",
    "Un disjoncteur d'éclairage est généralement calibré à 10 ou 16 A.",
    "La courbe de déclenchement (B, C, D) définit le seuil de déclenchement magnétique ; la courbe C est la plus courante en usage domestique/tertiaire.",
    "Le calibre du disjoncteur doit toujours être adapté à la section du câble qu'il protège.",
    "Un disjoncteur divisionnaire protège un circuit précis, en aval de l'AGCP."
  ],
  "L'Interrupteur Différentiel": [
    "L'interrupteur différentiel détecte une fuite de courant (différence entre courant entrant et sortant) et protège les personnes contre les contacts indirects.",
    "La sensibilité de 30 mA est obligatoire pour la protection des personnes, notamment dans les circuits de salle de bain.",
    "Le type AC détecte les fuites de courant alternatif sinusoïdal ; le type A détecte en plus certains courants pulsés (appareils électroniques).",
    "Un disjoncteur différentiel combine protection différentielle ET protection contre les surintensités, contrairement à un simple interrupteur différentiel.",
    "Le bouton test doit être actionné régulièrement pour vérifier le bon fonctionnement du dispositif.",
    "La norme NF C 15-100 impose généralement un différentiel 30 mA par groupe de circuits."
  ],
  "Les Conducteurs Électriques": [
    "Le cuivre est le matériau conducteur standard des installations domestiques (bonne conductivité, coût maîtrisé).",
    "La section d'un conducteur (en mm²) correspond à la surface de sa coupe transversale ; elle conditionne le courant admissible.",
    "Section minimale usuelle : 1,5 mm² pour l'éclairage, 2,5 mm² pour les prises 16 A, souvent 6 mm² ou plus pour les circuits spécialisés (cuisson, ECS).",
    "Plus la section est faible pour un même courant, plus l'échauffement du câble est important : risque d'incendie si sous-dimensionné.",
    "Un conducteur peut être rigide (fil, mono-brin) ou souple (câble, multi-brins), selon l'usage et le mode de pose.",
    "Le choix de la section dépend du courant, de la longueur du circuit et du mode de pose (norme NF C 15-100)."
  ],
  "Les schémas Electriques": [
    "Le schéma de principe (unifilaire ou multifilaire) décrit le fonctionnement électrique sans se soucier de l'implantation réelle.",
    "Le schéma de câblage (ou de réalisation) montre l'emplacement réel des appareils et le cheminement des câbles.",
    "Le schéma unifilaire simplifie la représentation : une seule ligne représente tous les conducteurs d'une même liaison.",
    "Le schéma développé (ou multifilaire) représente chaque conducteur séparément, utile pour l'analyse détaillée du fonctionnement.",
    "Des symboles normalisés représentent chaque composant (point lumineux = cercle avec croix, interrupteur, prise, etc.).",
    "Savoir lire et dessiner un schéma est indispensable avant tout câblage, pour éviter les erreurs de montage."
  ],
  "Montage Simple Allumage": [
    "Le simple allumage commande un ou plusieurs points lumineux depuis un seul endroit, avec un seul interrupteur.",
    "L'interrupteur coupe toujours la phase, jamais le neutre : c'est une règle de sécurité fondamentale.",
    "Couper uniquement la phase garantit l'absence de tension dangereuse en aval du point lumineux lorsque le circuit est ouvert.",
    "C'est le montage de base à partir duquel se construisent tous les autres montages d'éclairage (va-et-vient, télérupteur...)."
  ],
  "Montage Double Allumage": [
    "Le double allumage permet de commander deux groupes de points lumineux séparément, depuis un même endroit.",
    "Un interrupteur double regroupe deux interrupteurs simples indépendants dans un même appareillage.",
    "Le neutre est généralement commun aux deux circuits ; seules les deux phases sont commutées séparément.",
    "Ce montage est utile pour gérer indépendamment deux zones d'éclairage dans une même pièce (ex : plafonnier + spots).",
    "Chaque phase commutée reste protégée par le disjoncteur du circuit d'éclairage concerné."
  ],
  "Association des récepteurs": [
    "En série, les récepteurs sont traversés par le même courant ; une panne sur l'un coupe tout le circuit.",
    "En parallèle, chaque récepteur reçoit la même tension et fonctionne indépendamment des autres.",
    "Dans une installation domestique, les récepteurs (lampes, prises, appareils) sont toujours associés en parallèle, sous 230 V.",
    "Le montage série n'est quasiment jamais utilisé pour l'alimentation d'appareils domestiques (sauf cas particuliers comme certaines guirlandes).",
    "Comprendre série/parallèle permet d'anticiper le comportement d'un circuit en cas de panne d'un élément."
  ],
  "Montage Va et Vient": [
    "Le va-et-vient permet de commander un point lumineux depuis deux endroits différents (ex : haut et bas d'escalier).",
    "Il nécessite deux interrupteurs va-et-vient, chacun possédant 3 bornes : 1 commune (entrée) et 2 navettes.",
    "Les fils reliant les deux va-et-vient entre eux sont appelés fils navettes.",
    "La phase arrive sur la borne commune du premier va-et-vient ; le neutre va directement à la lampe.",
    "Chaque actionnement d'un des deux interrupteurs inverse l'état du circuit (allumé/éteint)."
  ],
  "Montage Permutateur": [
    "Au-delà de 2 points de commande, on ajoute un ou plusieurs permutateurs (croisillons) entre les deux va-et-vient d'extrémité.",
    "Le permutateur possède 4 bornes (2 entrées, 2 sorties navettes) et inverse ou laisse passer les navettes selon sa position.",
    "Règle générale : toujours 2 va-et-vient aux extrémités, et 1 permutateur par point de commande intermédiaire.",
    "Exemple : commander une lampe depuis 4 endroits nécessite 2 va-et-vient + 2 permutateurs.",
    "Ce montage se retrouve dans les grands couloirs ou les circulations à plusieurs accès."
  ],
  "Montage Prise de courant": [
    "Une prise de courant 2P+T comporte 3 bornes : phase, neutre et terre.",
    "La broche de terre relie la prise à la terre pour protéger l'utilisateur en cas de défaut d'isolement d'un appareil branché.",
    "Un circuit de prises 16 A est protégé par un disjoncteur de 16 ou 20 A selon la section du câble utilisé (1,5 ou 2,5 mm²).",
    "Selon la NF C 15-100, un circuit de prises 16 A/1,5 mm² est limité à 8 socles de prise maximum.",
    "Toutes les prises de courant doivent obligatoirement comporter une terre, depuis la réglementation actuelle."
  ],
  "TGBT": [
    "TGBT = Tableau Général Basse Tension.",
    "Il se situe en tête de distribution des installations tertiaires ou industrielles, et distribue/protège l'ensemble du bâtiment.",
    "Il regroupe les organes de protection (disjoncteurs, différentiels) et de mesure de l'installation.",
    "Contrairement au tableau domestique, le TGBT gère souvent des puissances et des courants plus importants (triphasé, gros départs).",
    "Toute intervention sur un TGBT nécessite une habilitation électrique adaptée."
  ],
  "Raccordement électrique de chantier": [
    "Un chantier temporaire est alimenté via un coffret de chantier normalisé, intégrant des protections différentielles adaptées.",
    "La sensibilité différentielle de 30 mA est requise, le chantier étant souvent un milieu humide et à risques mécaniques accrus.",
    "Le câble recommandé sur chantier est un câble souple résistant, type H07RN-F, capable de supporter chocs et intempéries.",
    "Les installations de chantier nécessitent une vigilance particulière : humidité, chocs mécaniques, caractère provisoire de l'installation.",
    "Le matériel de chantier doit présenter un indice de protection (IP) adapté aux conditions extérieures."
  ],
  "Les GTL": [
    "GTL = Gaine Technique Logement.",
    "Elle se situe dans un lieu accessible du logement, souvent proche de l'entrée, au rez-de-chaussée.",
    "Elle regroupe le tableau électrique, le tableau de communication (VDI) et les arrivées des différents réseaux (électricité, télécom).",
    "La norme NF C 15-100 impose une largeur minimale de 60 cm pour la GTL.",
    "La GTL facilite la maintenance et centralise les points d'accès aux réseaux du logement."
  ],
  "Travail des câbles": [
    "Une pince à dénuder adaptée évite d'entailler ou de couper les brins des conducteurs lors de la préparation.",
    "Il faut toujours respecter un rayon de courbure minimal lors du cintrage d'un câble, pour ne pas endommager l'isolant ou les conducteurs internes.",
    "Avant tout raccordement, vérifier la correspondance des couleurs des conducteurs et l'absence de dommage sur l'isolant.",
    "Le repérage des conducteurs se fait par code couleur normalisé et/ou par manchons repère-fils, pour éviter toute erreur.",
    "Un câblage soigné (dénudage propre, longueurs adaptées, serrage correct) limite les risques de défaut et facilite la maintenance."
  ],
  "Les conduits électriques (Gaines)": [
    "ICTA = Isolant Cintrable Transversalement Annelé, la gaine souple la plus courante en encastré.",
    "La couleur orange est classiquement utilisée pour l'électricité (le gris étant réservé à d'autres réseaux comme le télécom ou le gaz).",
    "La gaine protège mécaniquement les conducteurs et permet de les faire coulisser ou de les remplacer sans casser les cloisons.",
    "Les diamètres Ø16 ou Ø20 mm sont les plus courants pour les circuits domestiques standards (éclairage, prises).",
    "Une gaine ne doit jamais être écrasée ou pincée lors de la pose, sous peine de blesser les conducteurs."
  ],
  "Les conduits électriques (Tubes IRL)": [
    "IRL désigne un tube Isolant Rigide Léger, utilisé principalement en pose apparente ou en saillie.",
    "Le tube rigide offre une meilleure tenue mécanique et un aspect plus soigné qu'une gaine souple, en apparent.",
    "Deux tubes IRL se raccordent entre eux à l'aide de raccords ou manchons spécifiques (jamais par simple emboîtement collé).",
    "Le choix entre gaine souple (encastré) et tube rigide (apparent) dépend du mode de pose et de l'esthétique recherchée.",
    "Les tubes IRL se fixent au mur par des colliers ou pinces spécifiques, à intervalles réguliers."
  ],
  "Réalisation en encastré": [
    "En encastré, conducteurs, gaines et boîtiers sont noyés dans la maçonnerie ou les cloisons (contrairement au montage en saillie/apparent).",
    "Toute dérivation encastrée doit être protégée par une boîte de dérivation avec couvercle, restant accessible après travaux.",
    "L'accessibilité d'une boîte de dérivation est indispensable pour permettre la vérification et la maintenance ultérieure des connexions.",
    "La rainureuse (ou le duo disqueuse + burin) permet de creuser une saignée dans un mur pour y encastrer une gaine.",
    "Les boîtiers d'encastrement (boîtes à piquer, boîtes rondes) doivent être adaptés au matériau du support (BA13, béton, brique...)."
  ],
  "Le Magnétisme": [
    "Un courant électrique traversant un conducteur crée un champ magnétique autour de lui : c'est l'électromagnétisme.",
    "Une bobine parcourue par un courant crée un champ magnétique capable d'attirer un noyau métallique : principe des contacteurs et relais.",
    "Le transformateur utilise l'induction électromagnétique pour modifier le niveau d'une tension alternative.",
    "L'interaction entre deux champs magnétiques crée une force d'attraction ou de répulsion, selon le sens des courants.",
    "Ce principe est à la base de nombreux appareils : contacteurs, télérupteurs, transformateurs, moteurs électriques."
  ],
  "Montage Télérupteur": [
    "Le télérupteur permet de commander un éclairage depuis un grand nombre de boutons poussoirs, avec un câblage simplifié par rapport au va-et-vient.",
    "Un ou plusieurs boutons poussoirs pilotent la bobine de commande du télérupteur.",
    "Chaque impulsion reçue sur la bobine fait basculer l'état du contact de puissance (allumé/éteint).",
    "Le circuit de commande (boutons poussoirs, basse puissance) est distinct du circuit de puissance (éclairage, 230 V).",
    "Le télérupteur est très utilisé dans les circulations communes d'immeubles, où de nombreux points de commande sont nécessaires."
  ],
  "Montage Minuterie": [
    "La minuterie allume l'éclairage pour une durée réglable, puis l'éteint automatiquement, contrairement au télérupteur qui reste dans son état.",
    "Elle est commandée par un ou plusieurs boutons poussoirs, comme le télérupteur.",
    "Elle est très utilisée dans les cages d'escalier et parties communes, pour économiser l'énergie.",
    "Une nouvelle impulsion pendant que la minuterie est active relance généralement la temporisation.",
    "La durée de temporisation est réglable, souvent via un potentiomètre intégré à l'appareil."
  ],
  "ECS (Eau Chaude Sanitaire)": [
    "ECS = Eau Chaude Sanitaire.",
    "Le chauffe-eau électrique (cumulus) est l'appareil le plus courant pour produire l'ECS dans un logement.",
    "Il est souvent programmé pour chauffer en heures creuses, période où le tarif de l'électricité est plus avantageux.",
    "Un contacteur jour/nuit (HC/HP) pilote automatiquement la mise en route du chauffe-eau selon les plages tarifaires.",
    "Le chauffe-eau doit être raccordé à un circuit dédié, protégé par un disjoncteur adapté à sa puissance."
  ],
  "Montage Contacteur HC / HP": [
    "HC/HP = Heures Creuses / Heures Pleines, deux plages tarifaires de l'électricité.",
    "Le contacteur jour/nuit reçoit un signal tarifaire (fil pilote ou signal du compteur) pour commuter automatiquement entre HC et HP.",
    "Il pilote typiquement le chauffe-eau électrique, et parfois le chauffage, pour profiter des heures creuses moins coûteuses.",
    "Il comporte des bornes de bobine de commande (basse puissance) et des bornes de contact de puissance (raccordées au récepteur).",
    "Ce montage permet une gestion tarifaire automatique, sans intervention manuelle de l'utilisateur."
  ],
  "Prise de terre": [
    "La prise de terre écoule les courants de défaut vers le sol et protège les personnes contre les contacts indirects.",
    "Le piquet de terre, enfoncé verticalement dans le sol, est un dispositif courant pour réaliser une prise de terre.",
    "La résistance de la prise de terre se mesure en ohms (Ω) : plus elle est faible, plus la protection est efficace.",
    "Une résistance de terre trop élevée peut entraîner une tension de contact dangereuse en cas de défaut d'isolement.",
    "La prise de terre est indispensable au bon fonctionnement du dispositif différentiel (régime TT)."
  ],
  "Amélioration de la prise de terre": [
    "Ajouter des piquets de terre supplémentaires reliés en parallèle permet de réduire la résistance globale de la prise de terre.",
    "L'humidité et la résistivité du sol influencent fortement la résistance de la prise de terre (un sol sec/rocheux est moins favorable).",
    "L'acier galvanisé et le cuivre sont couramment utilisés pour les piquets, en raison de leur bonne résistance à la corrosion.",
    "Le conducteur en boucle à fond de fouille, posé lors de la construction, est une méthode efficace et durable pour la prise de terre.",
    "Plusieurs prises de terre reliées entre elles réduisent la résistance totale, comme des résistances en parallèle."
  ],
  "Mesurage de la prise de terre": [
    "Le télurmètre (contrôleur de terre) est l'appareil dédié à la mesure de la résistance d'une prise de terre.",
    "La méthode des 62 % (méthode volt-ampèremétrique) utilise deux piquets auxiliaires enfoncés dans le sol, à distance calculée.",
    "La résistance de terre doit être contrôlée régulièrement, car elle peut évoluer dans le temps (corrosion, sécheresse, saison).",
    "Une résistance faible limite la tension de contact dangereuse en cas de défaut d'isolement, pour une meilleure sécurité.",
    "Le résultat de la mesure doit être comparé à la valeur maximale exigée compte tenu de la sensibilité du différentiel installé."
  ],
  "Le Parafoudre": [
    "Le parafoudre protège les équipements électriques contre les surtensions transitoires (foudre, coupures de réseau).",
    "Il s'installe en tête d'installation, dans le tableau électrique, en dérivation sur l'arrivée.",
    "Son installation est notamment obligatoire si le bâtiment est équipé d'un paratonnerre, ou selon le niveau kéraunique de la zone.",
    "Le parafoudre a une fonction différente du différentiel : il protège contre les surtensions, pas contre les fuites de courant.",
    "En cas de coup de foudre absorbé, le parafoudre peut nécessiter un remplacement (voyant d'usure sur l'appareil)."
  ],
  "Indices de protection": [
    "L'indice IP indique le degré de protection d'un matériel contre les corps solides (1er chiffre) et les liquides (2e chiffre).",
    "Exemple IP44 : protection contre les corps solides > 1 mm (4) et contre les projections d'eau dans toutes les directions (4).",
    "Plus les chiffres sont élevés, plus la protection est importante (jusqu'à IP68 pour une immersion prolongée).",
    "L'indice IK indique la résistance du matériel aux chocs mécaniques (de IK00 à IK10).",
    "Le choix de l'IP/IK dépend de l'environnement d'installation : extérieur, local humide, zone à risque de choc."
  ],
  "Les classes d'isolation du matériel": [
    "La classe I impose la mise à la terre obligatoire des parties métalliques accessibles de l'appareil.",
    "La classe II offre une double isolation, symbolisée par un double carré, et ne nécessite pas de conducteur de terre.",
    "La double isolation supprime le risque de mise sous tension accidentelle des parties accessibles, même en cas de défaut interne.",
    "La classe III fonctionne en Très Basse Tension de Sécurité (TBTS), généralement ≤ 50 V, offrant le niveau de sécurité le plus élevé.",
    "Connaître la classe d'un appareil permet de savoir si une mise à la terre est indispensable ou non."
  ],
  "Les volumes de salle de bain": [
    "La NF C 15-100 définit 4 zones de sécurité dans une salle de bain : volumes 0, 1, 2 et hors volume.",
    "Le volume 0 correspond à l'intérieur du récipient (baignoire, receveur de douche) : seul du matériel TBTS très limité y est toléré.",
    "Le volume 1 est la zone verticale au-dessus du volume 0, jusqu'à 2,25 m de hauteur.",
    "Le volume 2 s'étend à 0,60 m autour du volume 1.",
    "Les prises de courant classiques ne sont autorisées que hors volume.",
    "Plus on se rapproche de l'eau, plus les exigences de sécurité (TBTS, IP, liaison équipotentielle) sont strictes."
  ],
  "Montage Interrupteur horaire": [
    "L'interrupteur horaire (horloge programmable) allume/éteint un circuit automatiquement selon des plages horaires programmées.",
    "Il est utilisé pour de nombreux usages : éclairage extérieur, chauffe-eau, portail automatique, arrosage...",
    "Il doit être réglé à l'heure réelle pour que les plages programmées restent correctes (attention aux coupures de courant prolongées).",
    "Contrairement à la minuterie (temporisation courte après impulsion), l'interrupteur horaire suit un programme journalier/hebdomadaire.",
    "Certains modèles disposent d'une réserve de marche pour conserver l'heure en cas de coupure de courant."
  ],
  "Montage Yokis": [
    "La technologie Yokis permet de piloter l'éclairage et les volets sans fil, par radio, en complément du câblage existant.",
    "Les modules Yokis communiquent par radio bidirectionnelle, ce qui permet un retour d'information (confirmation d'action).",
    "En rénovation, Yokis évite de tirer de nouveaux câbles de commande grâce au pilotage radio.",
    "Un module de puissance Yokis se raccorde typiquement en encastré, au point lumineux ou dans le tableau électrique.",
    "Ce type de solution s'inscrit dans les prémices de la domotique résidentielle."
  ],
  "Le transformateur": [
    "Le transformateur modifie le niveau d'une tension alternative, en s'appuyant sur l'induction électromagnétique.",
    "Il ne fonctionne qu'en courant alternatif : le courant continu ne crée pas de variation de flux magnétique nécessaire à son fonctionnement.",
    "Un transformateur abaisseur a moins de spires au secondaire qu'au primaire ; un élévateur en a davantage.",
    "Le transformateur de sécurité assure l'isolement galvanique nécessaire pour alimenter des circuits en Très Basse Tension de Sécurité (TBTS).",
    "Le rapport de transformation est directement lié au rapport du nombre de spires entre primaire et secondaire."
  ],
  "Montage Sonnette (230 V - 12 V)": [
    "Un transformateur abaisse la tension du secteur (230 V) vers une tension plus faible et sécurisée (12 V) pour alimenter la sonnette.",
    "Le côté 230 V (primaire) reste soumis aux mêmes exigences de protection que tout circuit secteur (disjoncteur adapté).",
    "Le bouton poussoir de sonnette est câblé côté secondaire, en basse tension sécurisée (12 V).",
    "La basse tension réduit fortement les risques électriques et permet d'utiliser des conducteurs plus fins, moins isolés.",
    "Ce montage illustre concrètement le principe et l'intérêt pratique du transformateur abaisseur."
  ],
  "Diagnostic électrique (NF C 15-600)": [
    "Le diagnostic électrique évalue l'état de sécurité d'une installation électrique existante, selon la norme NF C 15-600.",
    "Il est obligatoire lors de la vente d'un logement dont l'installation électrique a plus de 15 ans.",
    "Sa durée de validité est de 3 ans pour une vente (6 ans pour une location, selon les cas).",
    "Il contrôle notamment : la présence et l'adéquation du différentiel, l'état de la prise de terre, la présence d'un AGCP, l'absence de matériels vétustes ou dangereux.",
    "Le diagnostic ne rend pas l'installation aux normes actuelles : il informe sur les risques constatés à un instant donné."
  ],
  "La colonne électrique d'immeuble": [
    "La colonne électrique relie verticalement le point de livraison (raccordement au réseau public) aux différents logements de l'immeuble.",
    "Sa gestion revient au distributeur de réseau (ex : Enedis) ou à la copropriété, selon la configuration et la date de construction.",
    "Les compteurs individuels alimentés par la colonne montante peuvent se situer en pied d'immeuble, aux paliers, ou en gaine technique.",
    "La section des conducteurs de la colonne doit être dimensionnée pour supporter la puissance totale appelée par l'ensemble des logements desservis.",
    "La colonne électrique est un ouvrage collectif, distinct de l'installation intérieure privative de chaque logement."
  ],
  "Circulation d'Immeuble à usage d'habitation": [
    "Les parties communes utilisent souvent un éclairage temporisé (minuterie) ou par détection de présence, pour limiter la consommation.",
    "La priorité dans les circulations communes est la sécurité des occupants : éclairage suffisant, issues de secours dégagées et signalées.",
    "Les Blocs Autonomes d'Éclairage de Sécurité (BAES) peuvent être obligatoires dans certaines circulations communes, selon la réglementation applicable.",
    "Les câbles et équipements des parties communes doivent respecter des exigences de comportement au feu (propagation, fumées).",
    "Un immeuble d'habitation collectif combine des installations privatives (logements) et des installations communes distinctes."
  ],
  "Le courant Alternatif": [
    "Le réseau électrique français fonctionne en courant alternatif, à une fréquence de 50 Hz (50 cycles par seconde).",
    "Une tension alternative sinusoïdale varie continuellement dans le temps, entre une valeur maximale positive et négative.",
    "La valeur efficace (RMS) correspond à la valeur continue équivalente qui produirait le même effet thermique — c'est elle qu'indiquent les appareils de mesure standards (ex : 230 V).",
    "Relation entre valeur crête et valeur efficace pour une sinusoïde : Ucrête = Uefficace × √2 (soit environ 325 V crête pour 230 V efficace).",
    "Le courant alternatif permet notamment le fonctionnement des transformateurs, impossible en courant continu."
  ],
  "Les bases et répartition du triphasé": [
    "Un réseau triphasé comporte 3 phases, généralement accompagnées d'un neutre.",
    "Les trois phases sont déphasées de 120° les unes par rapport aux autres, ce qui assure une répartition équilibrée de la puissance.",
    "En France, le réseau triphasé domestique/tertiaire courant est en 230/400 V : 400 V entre phases (tension composée U), 230 V entre phase et neutre (tension simple V).",
    "Le triphasé permet d'alimenter des charges plus puissantes et certains moteurs qui nécessitent un champ tournant.",
    "Une bonne répartition des charges entre les trois phases évite les déséquilibres et optimise le fonctionnement de l'installation."
  ],
  "Les différentes puissances (déphasage)": [
    "La puissance active (P), en watts, représente l'énergie réellement consommée/transformée (chaleur, lumière, travail mécanique).",
    "La puissance réactive (Q), en VAR, est échangée avec les éléments inductifs/capacitifs (bobinages, condensateurs) sans être consommée utilement.",
    "La puissance apparente (S), en VA, combine puissance active et réactive : S² = P² + Q².",
    "Le facteur de puissance (cos φ) est le rapport P/S : il indique la part utile de la puissance apparente fournie.",
    "Un cos φ faible (charges inductives comme les moteurs) peut nécessiter une compensation (batteries de condensateurs) pour limiter les pertes."
  ],
  "Les schémas de liaison à la terre": [
    "Le régime TT (le plus répandu en France, domestique) : le neutre est relié à la terre côté source, les masses à une prise de terre distincte.",
    "Le régime TN-C/TN-S : le neutre et les masses sont reliés à la même terre côté source, protection par coupure au premier défaut.",
    "Le régime IT : le neutre est isolé de la terre (ou relié via une forte impédance), ce qui limite le courant lors d'un premier défaut et permet la continuité de service.",
    "Le choix du régime de neutre (Schéma de Liaison à la Terre, SLT) détermine les protections et le comportement de l'installation en cas de défaut.",
    "En TT, la protection des personnes repose essentiellement sur le dispositif différentiel associé à une prise de terre efficace."
  ],
  "Les dispositifs d'arrêt d'urgence": [
    "Un arrêt d'urgence coupe rapidement l'alimentation d'une installation ou d'une machine en cas de situation dangereuse.",
    "Le bouton d'arrêt d'urgence doit être à réarmement manuel, pour éviter tout redémarrage accidentel après la coupure.",
    "Il doit être implanté à proximité des zones dangereuses, facilement identifiable (couleur rouge sur fond jaune) et accessible.",
    "Un arrêt d'urgence agit généralement en coupant l'alimentation de la bobine de commande d'un contacteur ou disjoncteur.",
    "Ce dispositif fait partie des mesures de sécurité obligatoires sur de nombreuses machines et installations industrielles."
  ],
  "Montage Bobines (MN et MX)": [
    "Une bobine MN (à Manque de tension) ouvre le disjoncteur dès qu'elle n'est plus alimentée : c'est une sécurité positive.",
    "Une bobine MX (à émission de tension) ouvre le disjoncteur lorsqu'elle reçoit une tension de commande (ex : depuis un bouton d'arrêt d'urgence).",
    "MN = déclenchement par absence de tension ; MX = déclenchement par présence/émission d'une tension de commande.",
    "Le choix entre MN et MX dépend du niveau de sécurité recherché : le MN garantit la coupure même en cas de défaillance du circuit de commande.",
    "Ces bobines auxiliaires se montent sur des disjoncteurs équipés d'un dispositif de déclenchement à distance."
  ],
  "Les BAES - BAEH": [
    "BAES = Bloc Autonome d'Éclairage de Sécurité, destiné aux Établissements Recevant du Public (ERP) et locaux professionnels.",
    "Sa fonction principale est d'assurer l'éclairage des issues et voies d'évacuation en cas de coupure du courant normal.",
    "BAEH = Bloc Autonome d'Éclairage d'Habitation, utilisé dans les circulations communes des immeubles d'habitation collectifs.",
    "Les deux dispositifs fonctionnent sur batterie interne, rechargée en permanence par le circuit d'éclairage normal.",
    "Leur bon fonctionnement doit être vérifié régulièrement (test manuel ou automatique selon le modèle)."
  ],
  "Montage BAES": [
    "En fonctionnement normal, le BAES est alimenté par le circuit d'éclairage, ce qui permet la recharge continue de sa batterie interne.",
    "Il doit s'allumer automatiquement dès la coupure de l'alimentation normale : c'est sa fonction de secours automatique, sans action humaine.",
    "Lors d'une coupure secteur, il fonctionne sur sa batterie interne rechargeable, pour une durée réglementaire minimale (souvent 1h).",
    "Un BAES doit être positionné de façon à baliser efficacement le chemin d'évacuation (au-dessus des issues, changements de direction...).",
    "La maintenance et le test régulier des BAES sont essentiels pour garantir leur disponibilité en cas d'urgence réelle."
  ],
  "Montage Détecteur de mouvement": [
    "Le détecteur infrarouge passif (PIR) détecte les variations de rayonnement infrarouge (chaleur) causées par un déplacement dans son champ de détection.",
    "Associé à l'éclairage, il permet une économie d'énergie en n'allumant la lumière qu'en cas de présence réelle.",
    "La plupart des détecteurs offrent des réglages de temporisation (durée d'allumage), de sensibilité et de seuil de luminosité.",
    "Il peut être câblé en direct sur le circuit d'éclairage, ou en complément d'un interrupteur classique selon le montage.",
    "Le placement et l'orientation du détecteur conditionnent fortement l'efficacité et la zone de détection réelle."
  ],
  "Les ERP et ERT": [
    "ERP = Établissement Recevant du Public (magasins, écoles, salles de sport, restaurants...).",
    "ERT = Établissement Recevant des Travailleurs (bureaux, ateliers, entrepôts...).",
    "Les ERP sont classés selon deux critères : le type d'activité (lettre : M, N, L, R...) et la catégorie liée à l'effectif accueilli (de 1re à 5e catégorie).",
    "Les exigences électriques et de sécurité incendie sont plus strictes en ERP qu'en habitation individuelle, en raison du public accueilli.",
    "Les installations électriques en ERP doivent faire l'objet de vérifications périodiques par un organisme agréé."
  ],
  "Les goulottes tertiaires": [
    "Les goulottes tertiaires assurent le cheminement et la protection des câbles en apparent, notamment dans les locaux de bureaux.",
    "Elles permettent de séparer courants forts et courants faibles grâce à des compartiments distincts au sein d'une même goulotte.",
    "Le PVC (matière plastique) est le matériau le plus courant pour les goulottes tertiaires, pour sa légèreté et sa facilité de pose.",
    "Elles intègrent souvent des appareillages (prises, RJ45) directement en façade, pour une distribution pratique en open-space.",
    "Leur pose se fait généralement en plinthe, en allège ou en apparent le long des murs et cloisons."
  ],
  "Les chemins de câbles": [
    "Le chemin de câbles offre un support organisé et sécurisé pour le cheminement de nombreux câbles électriques, notamment en tertiaire/industriel.",
    "Il existe plusieurs types : dalle marine (pleine), chemin en treillis soudé (fil), tôle perforée...",
    "Un taux de remplissage maximal doit être respecté pour permettre la dissipation thermique des câbles et anticiper des ajouts futurs.",
    "Les chemins de câbles peuvent être suspendus (par tiges filetées), posés sur consoles, ou fixés directement au mur/plafond.",
    "Le choix du type de chemin de câbles dépend de l'environnement (poussière, humidité, esthétique recherchée)."
  ],
  "Façonnage des chemins de câbles": [
    "La cisaille (ou la grignoteuse) permet de découper proprement la tôle d'un chemin de câbles, sans le déformer.",
    "Il faut systématiquement ébavurer les découpes réalisées, pour éviter d'endommager la gaine des câbles posés dessus.",
    "Deux tronçons de chemin de câbles s'assemblent généralement par éclisses fixées avec de la boulonnerie appropriée.",
    "Les éclisses assurent à la fois la continuité mécanique et souvent la continuité électrique (mise à la terre) entre tronçons.",
    "Le façonnage doit anticiper les changements de direction (coudes, tés, réductions) avec des pièces adaptées ou des découpes sur-mesure."
  ],
  "Montage OF - SD": [
    "Un obturateur coupe-feu (OF) rétablit le degré de résistance au feu d'une paroi traversée par des câbles ou chemins de câbles.",
    "Un séparateur (SD) cloisonne un chemin de câbles pour séparer physiquement différents types de circuits (ex : courants forts / courants faibles).",
    "Après la pose d'un obturateur coupe-feu, il faut vérifier que le degré de résistance annoncé (ex : CF 1h, 2h) correspond à celui exigé pour la paroi traversée.",
    "Ces dispositifs participent au compartimentage incendie du bâtiment, limitant la propagation du feu et de la fumée entre locaux.",
    "Ils sont particulièrement importants dans les ERP et les bâtiments industriels, soumis à des exigences réglementaires strictes."
  ],
  "Sertissage et manchonnage des conducteurs": [
    "Le sertissage assure un contact électrique fiable et une tenue mécanique solide, limitant les points chauds liés à un mauvais contact.",
    "Un manchon de raccordement permet de relier deux conducteurs bout à bout de façon sûre et durable.",
    "Il faut toujours utiliser une pince à sertir adaptée à la section du conducteur, pour garantir une compression correcte.",
    "Un sertissage mal réalisé (pince inadaptée, mauvaise compression) peut provoquer un échauffement dangereux à long terme.",
    "Le sertissage est aujourd'hui préféré à la torsion manuelle des fils, jugée moins fiable et moins durable."
  ],
  "Le presse étoupe": [
    "Le presse-étoupe assure l'étanchéité et le maintien mécanique d'un câble à l'entrée d'un boîtier ou d'une armoire.",
    "Son choix dépend principalement du diamètre extérieur du câble à faire traverser.",
    "Un presse-étoupe bien choisi et correctement serré contribue à maintenir l'indice de protection (IP) de l'enveloppe.",
    "Il existe des presse-étoupes de différentes matières (plastique, laiton) selon l'environnement et les contraintes mécaniques.",
    "Un presse-étoupe mal serré ou mal dimensionné compromet l'étanchéité de tout le boîtier."
  ],
  "L'armoire de distribution": [
    "L'armoire de distribution centralise l'arrivée d'énergie et la répartit vers les différents départs/circuits en aval.",
    "Un repérage clair des circuits (étiquetage) est indispensable pour faciliter la maintenance et l'identification rapide en cas d'intervention.",
    "Il est recommandé de laisser une réserve d'emplacements libres, pour permettre des évolutions futures de l'installation sans changer l'armoire.",
    "L'armoire doit être installée dans un lieu accessible, avec un dégagement suffisant devant elle pour les interventions.",
    "Selon sa taille et son usage, une armoire de distribution peut regrouper plusieurs tableaux divisionnaires."
  ],
  "La chute de tension": [
    "La chute de tension est la différence de tension entre le départ et l'arrivée d'un circuit, due à la résistance des conducteurs.",
    "Elle dépend principalement de la longueur du câble, de sa section, et du courant qui le traverse.",
    "Plus le câble est long et fin, et plus le courant est élevé, plus la chute de tension est importante.",
    "La norme limite la chute de tension admissible (généralement 3% en éclairage, 5% pour les autres usages) pour garantir le bon fonctionnement des récepteurs en bout de ligne.",
    "En cas de chute de tension excessive, il faut augmenter la section du câble ou raccourcir la distance."
  ],
  "Les caractéristiques des éclairages": [
    "Le flux lumineux, exprimé en lumens (lm), quantifie la lumière totale émise par une source.",
    "La température de couleur, exprimée en Kelvin (K), indique la teinte de la lumière : chaude (< 3000K, jaune), neutre (~4000K), froide (> 5000K, bleutée).",
    "L'Indice de Rendu des Couleurs (IRC), sur une échelle de 0 à 100, indique la capacité d'une source à restituer fidèlement les couleurs des objets éclairés.",
    "L'efficacité lumineuse (en lm/W) mesure la performance énergétique d'une source : plus elle est élevée, plus la source est économe.",
    "Ces caractéristiques permettent de choisir une source adaptée à l'usage du local (ambiance, confort visuel, précision des couleurs)."
  ],
  "Les sources d'éclairages": [
    "Les LED consomment beaucoup moins d'énergie et durent bien plus longtemps que les lampes à incandescence.",
    "Les tubes fluorescents fonctionnent par décharge dans un gaz, produisant des UV convertis en lumière visible par une poudre fluorescente.",
    "Les lampes halogènes restent globalement moins efficaces énergétiquement que les LED (plus de pertes en chaleur).",
    "Les LED sont aujourd'hui la technologie dominante en neuf comme en rénovation, pour leur rapport performance/consommation.",
    "Le choix d'une source dépend de l'usage, du budget, de la durée de vie souhaitée et des contraintes de dimmage éventuelles."
  ],
  "Les différents éclairages": [
    "L'éclairage direct envoie le flux lumineux directement vers la zone à éclairer (spot, suspension basse).",
    "L'éclairage indirect est renvoyé par réflexion sur une surface (plafond, mur), ce qui adoucit la lumière et limite l'éblouissement.",
    "Pour réduire l'éblouissement sur écran (bureau), on privilégie un éclairage indirect ou des optiques anti-éblouissement.",
    "L'éclairage général assure un niveau de lumière homogène dans toute la pièce ; l'éclairage d'appoint cible une zone précise (plan de travail, lecture).",
    "Le bon choix de type d'éclairage dépend de l'usage du local et du confort visuel recherché."
  ],
  "L'éclairage TBT": [
    "L'éclairage en Très Basse Tension (TBT) offre une sécurité électrique accrue, le risque de choc étant fortement réduit.",
    "Il est fréquemment utilisé pour les spots dans les volumes de salle de bain à risque accru (proximité de l'eau).",
    "La valeur limite couramment retenue pour la TBT en courant alternatif est de 50 V.",
    "Un transformateur (ou une alimentation TBT dédiée) abaisse la tension du secteur pour alimenter ces circuits basse tension.",
    "La TBT est aussi utilisée en extérieur, dans les jardins ou zones accessibles aux enfants, pour plus de sécurité."
  ],
  "La photométrie": [
    "L'éclairement, exprimé en lux, mesure la quantité de lumière reçue par une surface donnée.",
    "La luminance caractérise l'intensité lumineuse perçue par l'œil dans une direction donnée (sensation de brillance).",
    "Une étude photométrique avant l'installation d'un éclairage permet de garantir un niveau d'éclairement adapté à l'usage du local.",
    "Chaque type de local a un niveau d'éclairement recommandé (ex : bureau ~300-500 lux, atelier de précision davantage).",
    "La photométrie prend en compte le nombre, la puissance et la disposition des luminaires pour atteindre l'éclairement visé."
  ],
  "L'alarme intrusion": [
    "Un système d'alarme intrusion a pour rôle de prévenir toute tentative de pénétration dans un domaine privé, à l'extérieur comme à l'intérieur des bâtiments.",
    "Trois espaces sont protégés : la protection périphérique (surveillance de l'approche, jusqu'aux limites de propriété), la protection périmétrique (surveillance des pénétrations, sur l'enveloppe du bâtiment et ses ouvrants), et la protection volumétrique (surveillance des mouvements à l'intérieur).",
    "Il n'existe pas de normalisation obligatoire pour l'alarme intrusion (pas de contrôle type Consuel) ; les assureurs, regroupés au sein de l'APSAD, édictent la règle R81 qui encadre les installations visant une certification.",
    "En protection périphérique, on utilise des détecteurs type barrière infrarouge ou hyperfréquence, composés d'un émetteur et d'un récepteur : la rupture du signal déclenche l'alarme.",
    "En protection périmétrique, on utilise des détecteurs d'ouverture ILS (interrupteur à lame souple, actionné par un aimant) ou des détecteurs de bris de vitre (reconnaissance de la fréquence du bris).",
    "En protection volumétrique, les détecteurs infrarouge passif (IRP) détectent les variations de température liées à la présence humaine ; associés à l'hyperfréquence, ils forment un détecteur double technologie (DT).",
    "La centrale d'alarme traite les informations reçues des détecteurs et pilote les asservissements (sirènes, flash, transmetteur, neutralisation de l'intrus) ; elle existe en version filaire ou radio.",
    "Une installation peut être filaire (câblée), radio (ondes radio, adaptée à l'habitat et à la rénovation) ou mixte (base filaire avec extension radio).",
    "Chaque détecteur possède un contact d'alarme (AL) de type NC ; en boucle tout ou rien (TOR), les contacts AL des détecteurs d'une même zone sont câblés en série sur les deux bornes de la zone.",
    "La boucle supervisée (ou équilibrée) utilise deux résistances et ne nécessite que deux conducteurs par détecteur (hors alimentation), tout en distinguant l'alarme (AL) de l'autoprotection (AP).",
    "L'autoprotection (AP, ou autosurveillance/tamper) est un contact NC actif 24h/24 qui détecte toute tentative de démontage ou de vandalisme sur les matériels.",
    "Les sirènes type HP se raccordent avec 2 fils (+ 2 fils d'AP) ; les sirènes auto-alimentées se raccordent sur 3 fils (0V, 12V, +12V de blocage) et disposent d'une batterie de secours.",
    "Les dispositifs flash se raccordent comme un récepteur d'éclairage sur une sortie de la centrale ; il faut vérifier la compatibilité d'intensité, sinon interposer un relais.",
    "Le transmetteur téléphonique (intégré ou externe) prévient à distance en cas d'alarme ; s'il est externe, une sortie de la centrale (relais, transistor ou connecteur dédié) est raccordée à ses entrées.",
    "La centrale d'alarme doit être raccordée sur un circuit dédié (section 1,5 mm², protection 10 A maximum) et son local doit être surveillé par un détecteur, sauf présence permanente d'une personne."
  ],
  "L'alarme incendie": [
    "SSI = Système de Sécurité Incendie, ensemble des dispositifs de détection et de mise en sécurité d'un bâtiment.",
    "Le déclencheur manuel permet à un occupant de signaler volontairement un départ de feu, en cassant une vitre ou en appuyant sur un bouton dédié.",
    "Le détecteur automatique de fumée réagit à la présence de particules issues d'une combustion, sans intervention humaine.",
    "Le système doit déclencher une alarme audible et, selon le bâtiment, commander des dispositifs de mise en sécurité (désenfumage, compartimentage).",
    "Les ERP sont particulièrement concernés par des exigences strictes de détection et d'alarme incendie."
  ],
  "Les contrôles d'accès": [
    "Le contrôle d'accès regroupe les solutions techniques permettant de sécuriser et gérer les accès physiques à un bâtiment : la personne doit s'identifier pour que le déverrouillage soit commandé.",
    "Dans l'habitat individuel, l'autorisation d'entrer est donnée par l'occupant (sauf « pass » comme le facteur ou les pompiers) ; dans les ERP/ERT, c'est généralement un automatisme qui vérifie l'autorisation.",
    "Dans l'habitat individuel, les matériels sont des portiers audio ou vidéo, avec demande d'identification par appui sur un bouton d'appel ; le verrouillage se fait par gâche électrique, ventouse électromagnétique ou motorisation.",
    "Dans l'habitat collectif, les portiers se composent de postes intérieurs et d'une ou plusieurs platines de rue ; le système VIGIK attribue un badge de pass aux personnes habilitées (facteur, releveur de compteurs, pompiers...).",
    "Les ventouses électromagnétiques sont aujourd'hui préférées aux gâches dans le collectif : meilleure sécurité de fermeture, possibilité d'en installer plusieurs par porte, absence d'usure mécanique.",
    "Dans les bâtiments ERP/ERT, une centrale de contrôle d'accès gère l'identification/authentification et le déverrouillage, contrôle l'état des ouvrants, se lie parfois à l'alarme intrusion, et trace les entrées/sorties.",
    "Les matériels d'identification périphériques sont : claviers à code, lecteurs de badges, contacts à clé, boutons poussoirs, lecteurs biométriques.",
    "Les matériels de déverrouillage sont : gâches électriques, verrous électriques, ventouses électromagnétiques, tourniquets, tripodes, barrières levantes.",
    "Le contrôle de position des portes utilise des contacts ILS, des contacts de fin de course ou des contacts de fond de pêne de serrure.",
    "Pour les portiers en habitat, il existe deux familles : le système 5 fils (obsolète en installation neuve) et le système 2 fils, aujourd'hui privilégié.",
    "Les câbles préconisés pour les portiers sont de type SYT1 ou réseau VDI, dont la section doit respecter les préconisations du fabricant selon la longueur ; l'alimentation 230 V est câblée en 3G1,5 mm² protégée par un disjoncteur 10 A.",
    "Dans le collectif, le cheminement des câbles se fait par la gaine technique de l'immeuble ; des passe-câbles de protection sont nécessaires sur les parties mobiles des ouvrants équipées de verrouillage.",
    "Pour les locaux professionnels (ERP/ERT), les câbles périphériques sont souvent du type 6/10e SYT, voire blindés pour les lecteurs et claviers ; la section des câbles d'asservissement dépend de la puissance des récepteurs.",
    "Comme pour l'alarme intrusion, ces systèmes intègrent une autoprotection contre le démontage et le sabotage.",
    "Une diode de roue libre est placée en parallèle des récepteurs inductifs (gâches, ventouses) alimentés en courant continu pour absorber l'effet de self ; en courant alternatif, on utilise une varistance à la place."
  ],
  "Le portail battant": [
    "Un portail battant s'ouvre par la rotation d'un ou deux vantaux, entraînés par un bras articulé ou un vérin (à bras ou enterré selon la configuration).",
    "Avant toute motorisation, il faut vérifier le bon fonctionnement manuel du portail : jeu et graissage des gonds, absence d'efforts mécaniques, état des piliers, alignement des vantaux.",
    "La composition des vantaux oriente le choix : pour les portails fragiles (bois, PVC), on privilégie un automatisme à bras ; pour les autres matériaux, ce critère n'est pas déterminant.",
    "Si le portail est l'unique accès à la propriété, il faut prévoir un déverrouillage extérieur ou une batterie de secours.",
    "Toutes les motorisations conviennent pour une ouverture « à la française », mais seules certaines permettent un angle d'ouverture supérieur à 120° ou une ouverture vers l'extérieur.",
    "Les cotes (dimensions, poids, implantation) doivent être relevées précisément : certaines configurations rendent certains automatismes difficiles voire impossibles à installer.",
    "Le choix dépend aussi de la fréquence d'usage (nombre de cycles journaliers) et des accessoires souhaités (télécommande, digicode, vidéophone, commande à distance via internet).",
    "Le relevé préalable comprend : dimensions et nature du portail, poids, aspect plein/semi-ajouré/ajouré, surface prise au vent, possibilité de passer le bras à travers, largeur de passage entre piliers, présence d'écoinçons.",
    "Il faut aussi relever la profondeur de dégagement disponible (ouverture en 1/2-1/2 ou 1/3-2/3) et le nombre de cycles par jour prévu.",
    "Chaque motorisation est livrée avec une notice technique qu'il est indispensable de consulter avant toute mise en œuvre (installation, raccordement, erreurs à éviter) ; ces éléments figurent aussi dans le DTE.",
    "Les systèmes de motorisation sont conçus pour éviter tout coincement ou écrasement, par un couple de force réglable ou établi en usine ; il faut néanmoins protéger les zones à risque par des dispositifs de sécurité appropriés (cellules photoélectriques, barre palpeuse).",
    "Le non-respect des modes de pose indiqués par le fabricant expose à des dysfonctionnements, des déclenchements intempestifs, voire à la destruction du matériel."
  ],
  "Le portail coulissant": [
    "Un portail coulissant se déplace latéralement grâce à un système à crémaillère : celle-ci, fixée sur le portail, est entraînée par le pignon d'un motoréducteur solidement fixé au sol ou sur un châssis métallique.",
    "Contrairement au battant, le coulissant ne nécessite pas d'espace de débattement au sol, ce qui le rend adapté aux terrains en pente ou en dénivelé.",
    "Comme pour le battant, les systèmes de motorisation limitent les risques de coincement ou d'écrasement par un couple de force réglable ou établi en usine.",
    "Avant l'installation, il faut vérifier : dimensions et nature du portail, poids, aspect plein/ajouré, possibilité de passer le bras à travers, largeur de passage entre piliers, écartement par rapport au pilier.",
    "Il faut aussi relever la distance de roulement disponible (au moins égale à la longueur du portail) et la distance de dégagement nécessaire une fois le portail ouvert.",
    "Les paramètres à définir incluent : la facilité de manœuvre manuelle, l'existence d'un accès piéton indépendant (portillon), la forme de la section du rail, et si le déplacement se fait à l'horizontale ou en suivant une pente.",
    "Il faut également définir si l'extérieur du portail donne sur un lieu privé ou sur la voie publique, le mode de fonctionnement souhaité (homme présent, semi-automatique, automatique), l'usage (domestique/collectif), et le nombre de cycles par jour.",
    "Chaque matériel est livré avec sa notice technique, indispensable à consulter avant la mise en œuvre (installation, raccordement, erreurs à éviter), reprise le cas échéant dans le DTE.",
    "Le non-respect des modes de pose indiqués par le fabricant expose à des dysfonctionnements, des déclenchements intempestifs, voire à la destruction du matériel.",
    "En fonctionnement automatique, il est indispensable de protéger les zones à risque avec des dispositifs de sécurité appropriés (cellules photoélectriques, barre palpeuse)."
  ],
  "Les portes de garage": [
    "La norme européenne EN 13241-1, obligatoire depuis le 1er mai 2005, encadre deux aspects : les exigences d'installation et la notion de responsabilité.",
    "Les motorisations doivent être conformes à la norme de sécurité EN 60335-2-103 relative aux motorisations de portails et portes.",
    "En cas de défaillance d'un dispositif de limitation d'effort (barre palpeuse, cellules photoélectriques...), la porte doit se mettre « en sécurité » : plus de fonctionnement automatique ou impulsionnel, ou uniquement en commande à position maintenue avec vue sur le produit.",
    "Avant tout projet, six points doivent être vérifiés : la hauteur sous linteau disponible, le type de porte, le bon fonctionnement mécanique, les dimensions et le poids, les accès à la propriété, et la fréquence d'usage.",
    "La motorisation convient aux portes basculantes débordantes, sectionnelles (verticales ou horizontales), battantes ou enroulables, avec accessoires complémentaires selon les besoins.",
    "Il faut vérifier que la porte s'ouvre manuellement sans difficulté : état de l'équilibrage, des ressorts, des poulies et des supports.",
    "Le moteur est sélectionné en fonction des dimensions et du poids réels de la porte.",
    "Si la porte est l'unique accès au garage ou ne possède pas de portillon, prévoir un déverrouillage extérieur ; si un portillon existe, une sécurité doit empêcher tout fonctionnement de la porte lorsqu'il est ouvert.",
    "Les jeux de cellules photoélectriques sont des dispositifs additionnels de limitation d'effort requis par la norme NF EN 12453 en mode automatique et/ou sur la voie publique.",
    "Pour les particuliers, feux clignotants, éclairage de zone et marquage au sol sont recommandés (non obligatoires) pour toute porte motorisée donnant sur la voie publique.",
    "Chaque matériel est livré avec sa notice technique (installation, raccordement, erreurs à éviter), reprise le cas échéant dans le DTE ; le non-respect des modes de pose expose à des dysfonctionnements, voire à la destruction du matériel.",
    "Les paramètres modifiés lors du réglage de l'automatisme doivent être consignés dans le Dossier des Ouvrages Exécutés (DOE) pour faciliter le diagnostic et le suivi ultérieur."
  ],
  "Le volet roulant": [
    "Un volet roulant motorisé fonctionne grâce à un moteur tubulaire, intégré dans l'axe d'enroulement, qui fait monter/descendre le tablier.",
    "Les moteurs modernes intègrent des fins de course électroniques, détectant et mémorisant automatiquement les positions haute et basse.",
    "Un volet roulant peut être piloté via la domotique, à l'aide de modules radio ou filaires compatibles.",
    "Le circuit de commande utilise généralement un inverseur (montée/descente) qui alimente le moteur dans un sens ou dans l'autre, jamais les deux à la fois.",
    "La sécurité (arrêt en cas d'obstacle à la fermeture) est de plus en plus intégrée aux moteurs récents."
  ],
  "La domotique": [
    "Les fonctionnalités les plus courantes prises en charge par la domotique sont : l'éclairage, les ouvrants, le chauffage et la scénarisation.",
    "La différence fondamentale avec une installation conventionnelle est le besoin de communication entre les matériels, assuré par quatre grandes technologies : la radiofréquence (RF), le BUS, le courant porteur en ligne (CPL, de moins en moins utilisé) et l'Internet Protocol (IP).",
    "Au-delà de la technologie (le « moyen de parler »), les matériels doivent partager un même protocole de communication (la « langue ») pour se comprendre ; on distingue les protocoles propriétaires (une seule marque) et ouverts (marques différentes compatibles), reliés parfois par une passerelle.",
    "En radiofréquence, l'émetteur (souvent autonome en énergie : pile, cellule photovoltaïque, piézo-électricité) envoie un signal codé à un récepteur ou actionneur, alimenté en 230 V, qui pilote le récepteur final.",
    "Les émetteurs radio fonctionnent typiquement à 868 MHz, avec un protocole de communication propre, une portée moyenne en champ libre de 100 m et un nombre de canaux limité ; les récepteurs radio (230 V) partagent ces mêmes caractéristiques.",
    "Les principaux protocoles domotiques sont : Z-Wave (Danfoss, Somfy...), Zigbee (Legrand, Somfy...), X3D (Delta Dore), IO (Atlantic, Somfy, Thermor), KNX (nombreux fabricants) et Yokis (Yokis).",
    "Pour les modules radio encastrés, utiliser des boîtiers de 50 mm de profondeur minimum ; les murs épais réduisent fortement la portée annoncée « en champ libre », et les structures métalliques perturbent le signal.",
    "Le CPL utilise aussi des émetteurs et récepteurs, raccordés sur le 230 V : l'émetteur dépose un micro-signal électrique sur la sinusoïde 50 Hz qui le transporte jusqu'au récepteur. Un filtre en tête d'installation et un coupleur de phases (si triphasé + N) sont recommandés.",
    "Les liens de fonctionnement entre matériels radio ou CPL se font par appairage (adressage), selon la procédure décrite dans la notice de chaque matériel.",
    "Dans une installation à BUS filaire (ex. KNX), tous les matériels sont connectés sur un câble courant faible (minimum 6/10e) qui sert à la fois d'alimentation (via une alimentation TBTS, ex. 29 VCC) et de support de communication ; le circuit de puissance des actionneurs reste alimenté en 230 V.",
    "Le câble BUS KNX, isolé à 4 kV, peut cheminer avec les câbles courant fort. Une ligne de bus ne doit pas dépasser 1000 m ; il ne doit pas y avoir plus de 350 m entre l'alimentation bus et le participant le plus éloigné, ni plus de 700 m entre deux participants.",
    "La programmation d'une installation à bus filaire se fait via un outil dédié ou, le plus souvent, un logiciel, et reste un travail réalisé par un technicien."
  ],
  "Le tableau de communication": [
    "Le câblage du réseau de communication d'un logement est organisé en étoile autour du tableau de communication, choisi et dimensionné selon les besoins du client.",
    "VDI = Voix, Données, Images, les trois grands types de réseaux distribués dans le logement.",
    "Le tableau de communication est le point de convergence des ressources et de l'ensemble des prises du logement ; le brassage relie ressources et prises au moyen de cordons précâblés RJ45.",
    "Le tableau est équipé d'un bandeau de connecteurs RJ45 (4, 8 ou 10 ports) et d'une barrette de masse assurant sa mise à la terre ; il peut aussi recevoir un amplificateur d'antennes, un routeur, un modem, etc.",
    "Il est recommandé de prévoir une terre unique avec des mises à la terre multiples interconnectées, formant un ensemble équipotentiel, pour des raisons de sécurité et de CEM.",
    "La norme NF C 15-100 impose, au niveau de la gaine technique du logement, une liaison fonctionnelle d'au moins 6 mm² entre les barrettes de terre du tableau de répartition et du tableau de communication, aussi courte que possible (idéalement moins de 50 cm).",
    "Le DTI (dispositif de terminaison intérieure) est le point de livraison des opérateurs de télécommunication pour la distribution du téléphone.",
    "Un quadrupleur filtre maître distribue la téléphonie : il dispose de 2 entrées (LINE et ADSL) et de 4 sorties téléphone au format RJ45.",
    "La distribution du réseau Ethernet du logement se fait par un switch Ethernet installé dans le tableau de communication.",
    "Pour la distribution TV, un répartiteur TV 3 sorties permet de distribuer les signaux satellite et terrestre ; des distributeurs TV/TNT-SAT ou TNT répartissent ensuite le signal sur 3 ports RJ45, avec ou sans voie de retour selon les sorties.",
    "Un cordon TV spécifique est utilisé dans le coffret de communication ou à la prise de terminaison pour transmettre la TV TNT/SAT via une prise RJ45 vers un décodeur équipé d'une prise de type Fiche F.",
    "Le tableau de communication peut aussi organiser la distribution de la stéréophonie ainsi que celle d'une Box ADSL centralisée, dont le signal est ensuite redistribué vers les prises du logement."
  ],
  "Câblâge RJ 45": [
    "Les câbles à 4 paires torsadées en cuivre installés en résidentiel sont spécifiques au câblage multimédia et multi-services (téléphonie, données, TV) des logements.",
    "Le Grade est une désignation issue d'une norme UTE, imposée par la NF C 15-100 pour les installations résidentielles ; la Catégorie relève d'une norme ISO/EIB, plutôt utilisée en tertiaire.",
    "En Grade 2 TV, le câble comporte un écran sur la paire dédiée au signal TV (paires 7-8) ainsi qu'un écran global ; en Grade 3 TV, chaque paire est écrantée individuellement, en plus de l'écran global.",
    "Le Grade 1 (obsolète) correspond à une infrastructure télécom IP 100 MHz/100 Mbit/s associée à une infrastructure coaxiale conventionnelle pour la télévision.",
    "Le Grade 2 correspond à une infrastructure télécom IP 250 MHz/1 Gbit/s, également associée à une infrastructure coaxiale conventionnelle pour la télévision.",
    "Le Grade 3 est une infrastructure unique 900 MHz/1 Gbit/s : le réseau RJ45 distribue à lui seul la téléphonie, internet et la télévision.",
    "Le Grade 4 correspond à une infrastructure en fibre optique plastique.",
    "Pour recevoir toutes les chaînes TV, il faut atteindre 600 MHz : seuls les câbles Grade 3 et Grade 3S le permettent (une seule paire du câble Ethernet grade 3 atteint cette fréquence, ce qui suffit pour la TNT ou le câble) ; un câble RJ45 catégorie 5 ou 6 seul ne le permet pas.",
    "Il faut donc retenir le Grade 3 pour distribuer la TNT, et le Grade 3S si l'on doit aussi distribuer le satellite.",
    "La longueur maximale d'un lien de distribution capillaire est de 45 m.",
    "Les câbles de communication sont posés dans des conduits de diamètre 25 mm minimum ou des goulottes disposant d'un compartiment qui leur est exclusivement réservé, pour limiter les perturbations CEM avec les courants forts (cheminement proche mais dans des conduits distincts).",
    "Selon la norme NF EN 50174 : un câble se déroule (jamais ne se tire) d'un touret par le haut ou d'une couronne ; le rayon de courbure minimum est de 8 fois le diamètre du câble.",
    "Il faut éviter les écrasements (ne pas marcher sur le câble, ne pas poser d'objet lourd, limiter le serrage des colliers, se méfier des arêtes vives) et couper les surlongueurs plutôt que les lover : plus un câble est court, plus il est performant.",
    "Il faut éloigner les câbles de communication des éléments perturbateurs : tubes fluo, ascenseurs, machines à laver, pompes à chaleur à électronique de puissance, lampes basse consommation.",
    "Côté prise, on forme une boucle de câble dans le boîtier d'encastrement : dégainer environ 30 cm, reformer une spire hélicoïdale serrée autour des conducteurs avec l'écran, sans laisser apparaître les conducteurs.",
    "La prise RJ45 doit être conforme à la norme CEI 60603-7, avec des variantes selon le grade du câblage retenu.",
    "Il existe deux câblages EIA/TIA : le type B, utilisé pour les cordons droits des installations, et le type A, utilisé pour les cordons croisés (ex. raccordement direct de deux PC entre eux).",
    "Lors du sertissage, le pairage des conducteurs doit être conservé le plus près possible de la connexion (dépairage maximum 13 mm) ; avec un câble écranté, l'écran doit être relié à la masse des prises aux deux extrémités. Côté tableau de communication, le feuillard est retourné à 360° sur la gaine avant de recevoir la prise RJ45."
  ],
  "Le chauffage": [
    "Le chauffage électrique direct se décline en émetteurs muraux (convecteur, panneau radiant, accumulateur), émetteurs intégrés aux parois (plafond rayonnant, plancher rayonnant électrique) et solutions centralisées indirectes (pompe à chaleur, chaudière électrique) installées par des entreprises spécialisées.",
    "Depuis 2012, la RT2012 impose une limitation de la consommation d'énergie primaire (valeur moyenne 50 kWhep/m²/an) et applique un coefficient de 2,58 à l'énergie électrique dans ce calcul, ce qui pénalise fortement le chauffage électrique direct face à la pompe à chaleur.",
    "Le convecteur électrique fonctionne par convection naturelle : l'air froid entre en bas, se réchauffe au contact d'une résistance, ressort en haut ; simple, économique et rapide à chauffer, mais crée un écart de température important entre le sol et le plafond.",
    "Le panneau radiant (ou rayonnant) émet des infrarouges via un circuit imprimé, procurant une sensation de chaleur instantanée même si l'air est froid (20 à 50% de rayonnement, le reste en convection) ; plus cher qu'un convecteur mais plus économe et sans grille d'air.",
    "Convecteurs et panneaux radiants existent de 500 à 3000 W ; ils se posent sous les fenêtres, à 0,25 m du sol en général, à au moins 0,50 m d'un obstacle pour un convecteur (1,20 m pour un panneau radiant), et se raccordent dans une boîte terminale derrière l'appareil.",
    "Associés à un gestionnaire d'énergie à fil pilote, ces émetteurs peuvent recevoir jusqu'à 6 consignes de chauffe : confort, éco-1, éco-2, réduit, hors-gel et arrêt.",
    "Le circuit d'asservissement du fil pilote doit être câblé en 1,5 mm² et protégé par un disjoncteur courbe C, calibre 2 A ; son sectionnement est obligatoire (contact auxiliaire ou dispositif indépendant), avec un marquage « Attention fil pilote à sectionner » au tableau et dans les boîtes de connexion.",
    "L'accumulateur électrique stocke la chaleur dans des briques réfractaires (jusqu'à 800°C en fin de charge) pendant les heures creuses, pour la restituer pendant les heures pleines ; il doit accumuler au moins 70% de la chaleur fournie.",
    "On distingue le radiateur statique (restitution par convection naturelle) et le radiateur dynamique (restitution par ventilateur/convection forcée) ; l'accumulateur nécessite une puissance souscrite plus importante (coefficient de surpuissance 2,5) et peut être équipé d'un fil pilote 4 ou 6 ordres.",
    "Le plafond rayonnant (plaques de faux plafond, film en rouleau, ou cassettes) chauffe directement les objets et les personnes sans accumulation ; il est particulièrement adapté aux pièces de grande hauteur (halls, mezzanines) et nécessite un thermostat mural de régulation.",
    "Le Plancher Rayonnant Électrique (PRE) existe en version à accumulation (câble basse température ≤28°C enrobé dans une dalle épaisse, mode réduit permanent, complété par des convecteurs pour le mode confort) ou en version directe (câble enrobé dans une chape flottante de faible épaisseur, assurant seul tous les modes de chauffe).",
    "Le câble chauffant du PRE est un fil résistant isolé (magnésie), gainé acier cuivré puis gaine d'étanchéité, raccordé par des « sorties froides » ; comme le plafond rayonnant, il chauffe la chape qui rayonne ensuite vers la pièce, sans écart pied-tête et sans entretien."
  ],
  "La Gestion de l'énergie": [
    "Le gestionnaire d'énergie, placé dans le tableau électrique, améliore l'efficacité énergétique de l'habitat via quatre fonctions : la gestion du chauffage électrique, la commande centralisée, l'affichage de la consommation et le délestage, pour une réduction de consommation pouvant atteindre 30%.",
    "Le fil pilote est une liaison unifilaire (un seul conducteur, le second étant commun avec l'alimentation de puissance) qui transmet des ordres depuis un appareil de commande (gestionnaire ou thermostat programmable) vers la régulation de l'émetteur de chaleur.",
    "La gestion fil pilote à 4 ordres pilote 3 consignes (CONFORT, ECO, HORS GEL) plus l'ARRÊT ; la gestion à 6 ordres ajoute CONFORT -1°C et CONFORT -2°C aux 4 précédentes.",
    "Des appareils 4 et 6 ordres peuvent coexister sur le même fil pilote : un ordre CONFORT -1 ou -2 perturbera brièvement (2 à 7 s toutes les 5 min) les appareils 4 ordres, qui resteront cependant en CONFORT.",
    "Les gestionnaires les plus courants pilotent 2 fils pilotes distincts (zone jour, zone nuit) ; les modèles évolués gèrent un troisième fil pilote pour la « zone grand confort » (salle de bains).",
    "La réglementation impose une commande centralisée des zones du logement, avec possibilité de modifier l'allure de chauffe en cours via trois types de commande : la dérogation (temporaire, retour automatique), la marche forcée (sans retour automatique, active jusqu'à annulation manuelle) et le mode automatique (retour au programme).",
    "Les consignes modifiables sont CONFORT (température de réglage initial), ECO (abaissement de 3 à 4°C), CONFORT -1°C, CONFORT -2°C, et HORS GEL (généralement 7°C, pour éviter le gel et l'humidité en absence prolongée).",
    "La RT2012 impose la mesure ou l'estimation de 5 postes de consommation (chauffage, refroidissement, ECS, prises de courant, « autres »), mais les gestionnaires ne fournissant que 3 tores de mesure, la consommation des « autres » postes se déduit par soustraction (consommation totale du compteur EDF moins les 3 postes mesurés moins la climatisation le cas échéant).",
    "Le délestage n'est pas une obligation normative mais permet de limiter la puissance souscrite : il coupe temporairement les circuits non prioritaires (chauffage, chauffe-eau) pour éviter le déclenchement du disjoncteur de branchement, en laissant alimentés les circuits prioritaires (éclairage, cuisson, électroménager).",
    "Le délestage peut être hiérarchisé (il coupe toujours la même zone en premier, puis éventuellement une deuxième ou une troisième) ou tournant (il alterne les zones coupées, sur une durée typique de 5 à 10 minutes).",
    "La consommation instantanée nécessaire au délestage est mesurée soit directement à la sortie du disjoncteur de branchement (compteur électromécanique), soit via les bornes de télé-information I1-I2 du compteur (compteur électronique ou Linky)."
  ],
  "La VMC": [
    "La ventilation est essentielle pour protéger les personnes (humidité, odeurs, film microbien, polluants), protéger les bâtiments (moisissures, dégradation du bâti) et participer aux économies d'énergie en régulant les apports d'air neuf et l'extraction.",
    "Il existe trois systèmes : la VMC simple flux (auto-réglable ou hygroréglable), la VMC double flux, et la Ventilation Mécanique Répartie (VMR, en rénovation).",
    "La VMC est réglementée depuis 1969 ; les arrêtés de 1982 et 1983 fixent des débits obligatoires selon le nombre de pièces. Son fonctionnement doit être permanent (24h/24) et général pour l'ensemble du logement.",
    "En VMC simple flux, seule l'extraction est mécanique : des bouches dans les pièces de service (cuisine, salle de bains, WC) évacuent l'air vicié via un réseau de gaines vers un groupe d'extraction rejetant l'air par un chapeau de toiture ; l'air neuf entre par des entrées d'air sur les menuiseries des pièces sèches.",
    "La VMC auto-réglable maintient des débits constants (entrées et extraction) ; l'hygroréglable de type A a des entrées auto-réglables et des bouches d'extraction hygroréglables ; l'hygroréglable de type B a entrées ET bouches hygroréglables, avec jusqu'à 12% d'économie de chauffage par rapport à l'auto-réglable.",
    "La VMC double flux assure mécaniquement à la fois l'introduction et l'extraction de l'air, via un groupe équipé d'un échangeur de chaleur qui récupère jusqu'à 92% des calories de l'air extrait pour préchauffer l'air neuf, avec jusqu'à 25% d'économie de chauffage par rapport au simple flux et un meilleur confort acoustique.",
    "La VMR (Ventilation Mécanique Répartie) s'installe en rénovation quand le passage de gaines est impossible : des groupes d'extraction indépendants sont posés dans chaque pièce de service, sans réseau de gaines ; elle n'est pas réglementaire dans le neuf.",
    "Le groupe de ventilation doit être installé dans un endroit facile d'accès pour l'entretien (souvent les combles, hors volume habité), suspendu ou posé sur une plaque de mousse/laine de verre pour limiter le bruit ; en double flux, il doit être incliné pour l'écoulement des condensats.",
    "Les gaines doivent avoir un parcours le plus rectiligne possible, être tendues au maximum si souples (pour éviter les poches d'eau de condensation), isolées à proximité de parois froides, et éloignées des pièces de nuit pour limiter le bruit.",
    "La NF C 15-100/A5 impose pour le circuit d'alimentation d'une VMC ou VMR : un circuit spécialisé, protégé par un disjoncteur courbe C, calibre 2 A maximum, câblé en cuivre de section minimale 1,5 mm², avec un conducteur de protection.",
    "Certaines VMC fonctionnent à deux vitesses (petite vitesse pour le renouvellement normal, grande vitesse pour les pointes comme la cuisine ou la douche), obtenues via un commutateur 2 positions."
  ],
  "L'IRVE": [
    "IRVE = Infrastructure de Recharge pour Véhicules Électriques (voitures, motos, utilitaires).",
    "La loi n°2015-992 du 17 août 2015 et son arrêté du 13 juillet 2016 imposent, pour les bâtiments neufs, de dimensionner l'alimentation pour permettre l'installation ultérieure de points de charge : 7,4 kW pour l'habitation, 22 kW pour les autres bâtiments (7,4 kW si énergies renouvelables).",
    "Depuis le décret du 12/01/2017, les électriciens intervenant sur une IRVE de plus de 3,7 kVA doivent obtenir la qualification IRVE, délivrée par l'Afnor ou Qualifelec ; des aides existent via le programme ADVENIR et les collectivités.",
    "Le connecteur Type 1 équipe uniquement le véhicule (32 A/230 V, jusqu'à 7,4 kW) ; le Type 2 « Mennekes » est le standard européen des infrastructures publiques (jusqu'à 43 kW en AC triphasé) ; le Combo Type 2 combine une empreinte Type 2 et 2 pôles DC (jusqu'à 100 kW).",
    "Le Type 3 (« Type 3C ») est un ancien standard français en voie de disparition (côté infrastructure uniquement) ; le connecteur Chademo (Type 4) permet la recharge rapide en courant continu (jusqu'à 125 A/50 kW), côté véhicule uniquement, et nécessite un second connecteur pour la charge en alternatif.",
    "Le mode 1 utilise une prise fixe non dédiée (max 7,4 kW, non préconisé, sans contrôle) ; le mode 2 ajoute un dispositif de protection incorporé au câble (charge lente occasionnelle, limiter à 8 A).",
    "Le mode 3 utilise une borne fixe sur circuit dédié, le plus sécurisé, avec communication bidirectionnelle véhicule/infrastructure : charge normale 16 A/3,7 kW, accélérée jusqu'à 32 A/22 kW triphasé, rapide 63 A/43 kW triphasé.",
    "Le mode 4 utilise une connexion en courant continu via un chargeur externe (station de charge), pour une recharge rapide occasionnelle en 20 à 30 minutes.",
    "Le raccordement respecte la norme NF C 15-100 : une prise domestique Type 1 est câblée sur un circuit spécialisé 20 A avec un différentiel 30 mA de type A ; les bornes Type 2/3/Combo/Chademo nécessitent des alimentations plus puissantes (ex. 3G10 mm² pour une borne en mode 3).",
    "Il faut prévoir une gaine de taille suffisante pour permettre, en cas d'évolution vers une borne en mode 3, le passage d'un câble de section plus importante et le remplacement du disjoncteur par un calibre plus élevé.",
    "Le système Green'UP (Legrand) utilise des contacts argentés et une détection magnétique fiche/prise ; il nécessite à la fois une prise murale dédiée et un câble compatible, sinon la recharge reste limitée à 2,3 kW comme sur une prise domestique classique."
  ],
  "Le Photovoltaïque": [
    "Une cellule photovoltaïque est un semi-conducteur en silicium dopé N et P : les photons du soleil excitent le matériau et font migrer les électrons, générant une tension continue d'environ 0,6 V par cellule.",
    "Un module PV assemble un certain nombre de cellules en série pour obtenir une tension exploitable (ex. un module 36 V comporte 60 cellules) ; il existe des cellules monocristallines, polycristallines, et la technologie « couches minces » (amorphe), plus souple.",
    "Les caractéristiques des panneaux sont annoncées sous conditions standards de test (STC) : irradiance 1000 W/m², température des cellules 25°C, coefficient Air Masse 1,5. Les grandeurs nominales sont Impp, Icc, Umpp (Vmpp), Vco et Pmpp.",
    "La puissance d'un module est nulle en court-circuit ou à vide (circuit ouvert), et maximale au point Impp/Umpp. Une baisse d'ensoleillement réduit surtout l'intensité (générateur de courant) ; une hausse de température réduit surtout la tension.",
    "Le rendement des panneaux cristallins se situe entre 13 et 20% (le monocristallin étant légèrement supérieur mais plus sensible à la température) ; celui des couches minces (amorphe) entre 8 et 15%. La position idéale pour le productible est plein sud, à 30° d'inclinaison.",
    "L'onduleur transforme le courant continu des panneaux en courant alternatif sinusoïdal compatible avec le réseau, optimise la production du champ PV, se déconnecte automatiquement en cas d'absence ou de défaut du réseau, et surveille l'isolement côté continu.",
    "Une installation peut être raccordée réseau en vente totale, en autoconsommation avec vente de surplus, ou en autoconsommation sans vente ; la mise en œuvre suit la norme NF C 15-100 et le guide UTE C 15712-1.",
    "Les modules PV, raccordés en série (une ou plusieurs chaînes en parallèle), utilisent des connecteurs sécurisés anti-contact direct ; le type à verrouillage mécanique (MC4) est obligatoire dans les zones accessibles au public pour éviter déconnexions accidentelles et arcs électriques.",
    "Le câble PV (désignation PV1000-F) est unipolaire par polarité, non propagateur de flamme, double isolation classe 2, isolation nominale 1000 V, âme cuivre, résistant aux UV, température maximale d'âme 90°C ; section usuelle en résidentiel : 4 mm².",
    "Les modules PV, de classe II, sont raccordés à une liaison équipotentielle reliée à la terre pour protéger le cadre et les accessoires métalliques contre les surtensions atmosphériques ; les câbles (+, -, V/J) doivent cheminer ensemble pour réduire la surface de boucle.",
    "Un coffret DC comportant un organe de sectionnement doit être placé avant l'onduleur ; des parafoudres sont installés côté DC (avec l'interrupteur-sectionneur) et côté AC (avec le disjoncteur 30 mA) selon les exigences réglementaires.",
    "Le module PV s'auto-limite en courant de court-circuit (peu d'écart entre Impp et Icc), donc généralement sans protection nécessaire ; des fusibles spécifiques PV ne sont utiles qu'à partir de 3 chaînes en parallèle (rare en résidentiel).",
    "Côté AC, la sortie de l'onduleur est protégée par un disjoncteur différentiel 30 mA de type HPI (fonction de sectionnement), raccordé au coffret AC puis au DRHS ; en vente totale le comptage se fait par un compteur de production, en autoconsommation la production est raccordée sur un départ du tableau général.",
    "Les micro-onduleurs se fixent sous 1 à 4 modules et s'interconnectent entre eux par câble à connecteurs spécifiques ; ils sont surtout utilisés pour les petites installations en autoconsommation (kits RT2012).",
    "Un étiquetage réglementaire est obligatoire sur le cheminement des canalisations DC, à l'intérieur des coffrets DC, au niveau de l'AGCP d'injection et du coffret AC, en raison du risque spécifique lié au champ PV.",
    "La pose d'un champ photovoltaïque nécessite une habilitation BP ; le câblage, la mise en service et la maintenance nécessitent une habilitation BR-PV."
  ]
};
