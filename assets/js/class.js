/*
class Personne {
    nom;
    prenom;
    age;

    constructor(nom, prenom, age) {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }
    afficherNomComplet() {
        return this.nom + " " + this.prenom;
    }
    getNom() {
        return this.nom;
    }
    setNom(nom) {
        this.nom = nom;
    }
    getPrenom() {
        return this.prenom;
    }
    setPrenom(prenom) {
        this.prenom = prenom;
    }

    getAge() {
        return this.age;
    }
    setAge(age) {
        this.age = age;
    }

 afficherPersonne() {
        console.log("Nom: " + this.nom + ", Prénom: " + this.prenom + ", âge :" + this.age);
    }
}

perso = new Personne("Stef", "Hame", 20);
perso.afficherPersonne();
console.log(perso.afficherNomComplet());
console.log(perso.getAge());
*/

//Exercice 1
var student = { name: "DavidRayy", class: "VI", rollno: 12 };

console.log(student);

delete student.rollno;

console.log(student);


//Exercice 2
var personne = function (nom, prenom, age) {
    this.nom = nom;
    this.prenom = prenom;
}

//var recette = { nom:'socca', servies:2, Ingrédients: ["Pois‐chiche", "Soleil", "Poivre"] }
var recette = {
    nom: "",
    servies: 0,
    ingredients: []
}

//var maRecette = new recette();
recette.nom = "Socca";
recette.servies = 2;
recette.ingredients = ["Pois‐chiche", "Soleil", "Poivre"];
console.log(recette);


//Exercice 3
//var obj = new book();

///////////////////////////

function book(title, author, readingStatus) {
    this.title = title;
    this.author = author;
    this.readingStatus = readingStatus;
}

var myBooks = [];
myBooks.push(new book('BillGates', 'TheRoadAhead', true));
myBooks.push(new book('Steve Jobs', 'WalterIsaacson', true));
myBooks.push(new book('Mockingjay:TheFinalBookofTheHungerGames', 'SuzanneCollins', false));

for (var i = 0; i < myBooks.length; i++) {
    console.log(myBooks);
}

//Exercice 4
class Guerrier {
    nom;
    valAtaque;
    valDefense;
    valSante;

    constructor(nom, valAtaque, valDefense, valSante) {
        this.nom = nom;
        this.valAtaque = valAtaque;
        this.valDefense = valDefense;
        this.valSante = valSante;
    }

    attack(guerrier) {
        this.valSante -= guerrier.valSante;
        return this.nom + " attaque " + guerrier.nom;
    }
}

class Magicien {
    nom;
    valAtaque;
    valDefense;
    valSante;
    mana;

    constructor(nom, valAtaque, valDefense, valSante, mana) {
        this.nom = nom;
        this.valAtaque = valAtaque;
        this.valDefense = valDefense;
        this.valSante = valSante;
        this.mana = mana;
    }

    attack(guerrier) {
        this.valSante -= guerrier.valSante;
        return this.nom + " attaque " + guerrier.nom;
    }

    soigner(mag) {
        this.mana -= 10;
        this.valSante += 10;
        return "MAGICIEN SOIGNE !";
    }
}

var guerrier1 = new Guerrier("Stef", 10, 5, 30);
var guerrier2 = new Guerrier("Damien", 6, 3, 10);
console.log("Etat des 2 guerriers avant attaque: ");
console.log(guerrier1);
console.log(guerrier2);

console.log(guerrier1.attack(guerrier2));
console.log("Etat guerrier apès attaque: ");
console.log(guerrier1);
console.log(guerrier2);

var magicien = new Magicien("Magicien d'OZ", 10, 5, 30, 40);
console.log("Etat magicien avant de se soigner");
console.log(magicien);

console.log(guerrier1.attack(magicien));
console.log(guerrier2.attack(magicien));

console.log(magicien.soigner(magicien));
console.log("Après s'être soigné");
console.log(magicien);

console.log(magicien.attack(guerrier1));
console.log(magicien); //état après attaque du magicien




