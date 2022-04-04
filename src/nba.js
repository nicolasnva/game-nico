function entierAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function tentativeAleatoire(chanceSucces) {
    const resultat = entierAleatoire(0, 100);

    if (resultat <= chanceSucces) {
        return true;
    } else {
        return false;
    }
}


class JoueurNBA {
    constructor({ nom, age, taille, tir, passe, contre, interception }) {
        this.nom = nom;
        this.age = age;
        this.taille = taille;
        this.tir = tir;
        this.passe = passe;
        this.contre = contre;
        this.interception = interception;
    }

    tirer(joueurDefense) {
        if (joueurDefense) {
            return tentativeAleatoire(this.tir - joueurDefense.contre / 4) ?
                this.nom + ' réussi son tir contre ' + joueurDefense.nom : this.nom + ' rate son tir contre ' + joueurDefense.nom
        } else {
            return tentativeAleatoire(this.tir);
        }
    }

    getOverallScore() {
        return (this.tir + this.passe + this.contre + this.interception) / 4;
    }

    passer(joueurDefense) {
        if (joueurDefense) {
            return tentativeAleatoire(this.passe - joueurDefense.interception / 4)
        } else {
            return tentativeAleatoire(this.passe);
        }
    }
}

let joueur1 = new JoueurNBA({
    nom: 'Shaquille O\'Neal',
    age: '50',
    taille: '2.16',
    tir: 80,
    passe: 70,
    contre: 90,
    interception: 80
});

let joueur2 = new JoueurNBA({
    nom: 'Kobe Bryant',
    age: '42',
    taille: '1.98',
    tir: 95,
    passe: 95,
    contre: 80,
    interception: 90
});
console.log(joueur1.tirer(joueur2));

class EquipeNBA {
    constructor({ nom, ville, joueurs }) {
        this.nom = nom;
        this.ville = ville;
        this.joueurs = joueurs;
    }

    getNomComplet() {
        return this.ville + ' ' + this.nom;
    }
}

let equipe1 = new EquipeNBA({
    nom: 'Lakers All Time',
    ville: 'Los Angeles',
    joueurs: [
        {
            joueur: joueur1,
            poste: 'Pivot',
            numero: 34
        },
        {
            joueur: joueur2,
            poste: 'Arrière',
            numero: 24
        }
    ]
})