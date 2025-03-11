
let tableauQ = ["1", "Quelle est la planète la plus grande du système solaire ?", "1. Mars", "2. Jupiter", "3. Saturne", 2,
    "2", "Quelle est la durée d'une année sur Mercure en jours terrestres ?", "1. 88 jours", "2. 225 jours", "3. 365 jours", 1,
    "3", "Quel est le nom de la galaxie où se trouve notre système solaire ?", "1. Andromède", "2. Voie lactée", "3. Nébuleuse d’Orion", 2,
    "4", "Quelle étoile est la plus proche de la Terre après le Soleil ?", "1. Sirius", "2. Proxima du Centaure", "3. Véga", 2,
    "5", "Quel est le principal gaz constituant l’atmosphère de Vénus ?", "1. Oxygène", "2. Dioxyde de carbone", "3. Azote", 2,
    "6", "Quelle planète est surnommée la 'Planète rouge' ?", "1. Mars", "2. Vénus", "3. Mercure", 1,
    "7", "Quel corps céleste a un cycle de phases visible depuis la Terre ?", "1. Le Soleil", "2. La Lune", "3. Jupiter", 2,
    "8", "Comment s’appelle la plus grande lune de Saturne ?", "1. Europe", "2. Titan", "3. Ganymède", 2,
    "9", "Quelle planète a un immense anticyclone appelé la 'Grande Tache Rouge' ?", "1. Saturne", "2. Uranus", "3. Jupiter", 3,
    "10", "Comment s’appelle le télescope spatial lancé en 1990 qui a révolutionné l’astronomie ?", "1. Hubble", "2. Kepler", "3. James Webb", 1]

let score = 0

for (let i = 0 ; i <= tableauQ.length-6 ; i+=6) { // on incrémente de 6 DONC le premier tour c'est i = 0, puis i = 6, puis i = 12, etc.

    console.log(tableauQ[i] + ": " + tableauQ[i+1])
        
    // Affichage des options
    console.log(tableauQ[i+2])
    console.log(tableauQ[i+3])
    console.log(tableauQ[i+4])

    // Poser la question
    let reponse = prompt("Entrez le numéro de votre réponse (1, 2 ou 3):")

    // Vérifier la réponse et modifier le score
    if (reponse == i+5) {
        console.log("Bonne réponse !")
        score += 1
    }
    else {
        console.log("Mauvaise réponse")
    }

    console.log("-------------------")

}

console.log("Tu as réalisé un score de " + score)