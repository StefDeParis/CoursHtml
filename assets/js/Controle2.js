
//Partie 1 Exercice 1
//effectue l'addition de 2 nombres entiers envoyés en paramètres
//avec un contrôle de type
function addition(x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
        return "Entrer 2 nombres entiers !";
    }
    return x + y;
}
// Afficher la sortie
console.log(addition(1, 2));
console.log(addition(-2, -4));


//Partie 1 Exercice 2
//prends des minutes en paramètre et revoie le nombre de secondes corespondant
//avec un contrôle sur le type
function minuteToSecond(minutes) {
    if (typeof minutes !== "number") {
        return "Entrer 1 nombre entier !";
    }
    return minutes * 60;
}

// Afficher la sortie
console.log(minuteToSecond(4));
console.log(minuteToSecond(3));


//Partie 1 Exercice 3
//utilise la pré-incrémentation pour renvoyer le nombre passé en paramètre +1
function increment(n) {
    if (typeof minutes !== "number") {
        return "Ce n'est pas un nombre entier !";
    }
    return ++n; //ou bien return n+1;

}

// Afficher la sortie
console.log(increment(1));
console.log(increment(4));


//Partie 1 Exercice 4
//revoie le produit de la base par la hauteur divisé par 2
function getSurface(base, hauteur) {
    return base * hauteur / 2;
}

// Afficher la sortie
console.log(getSurface(8, 2));
console.log(getSurface(7, 3));

//Partie 1 Exercice 5
//reconstruit une chaîne vide de la fin vers le début avec une boucle et renvoie le résultat obtenu
//ou bien directement: return str.split("").reverse().join("");
function strReverse(str) {
    var reverseStr = "";
    for (var i = str.length - 1; i >= 0; i--) {
        reverseStr += str[i]; // or newString = newString + str[i];
    }
    return reverseStr;
}

// Afficher la sortie
console.log(strReverse("WayToLearnX"));
console.log(strReverse("Hello"));


//Partie 1 Exercice 6
//plusieurs solutions possibles
//compare chacun des paramètres avec les 2 autres 
function getMax(a, b, c) {
    if (a > b && a > c) {
        return a;
    }
    if (b > a && b > c) {
        return b;
    }
    if (c > a && c > b) {
        return c;
    }
}

// Afficher la sortie
console.log(getMax(5, 9, 1));
console.log(getMax(2, 3, 10));


//Partie 1 Exercice 7
//revoie le premier élément du tableau avec la notation entre crochets
function getFirst(tab) {
    return tab[0];
}

// Afficher la sortie
console.log(getFirst([1, 2, 3]));
console.log(getFirst([50, 60, 70]));


//Partie 1 Exercice 7
//la fonction "document" qui permet de récupérer l'URL d'un site Web
///console.log(document.URL);


//Partie 1 Exercice 9
//la fonction modulo notée "%" permet de revoyer le reste de la division
function resteDiv(a, b) {
    return a % b;
}

// Afficher la sortie
console.log(resteDiv(1, 3));
console.log(resteDiv(2, 4));
console.log(resteDiv(3, 3));


//////////////////////////////////////////////////////////////////////////////////////////////////


//Partie 5 Exercice 1
function checkNbr(n) {

    if (n % 5 == 0 && n % 3 != 0) {  //teste le reste de la division à 5 en excluant 3
        return 'World';
    } else if (n % 3 == 0 && n % 5 != 0) {  //teste le reste de la division à 3 en excluant 5
        return 'Hello';
    } else if (n % 3 == 0 && n % 5 == 0) {  //teste le reste de la division à 3 et 5 à la fois
        return 'Hello World';
    }
}

// Afficher la sortie
console.log(checkNbr(3));
console.log(checkNbr(5));
console.log(checkNbr(15));


//Partie 5 Exercice 2
var str = "242Welcome23 45to344 254324WayToLearnX!";
var patt = /\D */g  //\D: les caractères non numériques. /g: sur tout le texte
var result = str.match(patt);
return result;

// Afficher la sortie
console.log(result.join("")); //"Welcome to WayToLearnX!"


//Partie 5 Exercice 3
//boucle sur tous les éléments du paramètre tableau et ajoute le double de chaque valeur dans un nouveau tableau
function tabX2(tab) {
    // Écrivez votre code ici
    var resTab = [];
    for (var i = 0; i < tab.length; i++) {
        resTab.push(tab[i] * 2);
    }
    return resTab;
}

// Afficher la sortie
console.log(tabX2([1, 2, 3]));
console.log(tabX2([5, 10, 20]));
console.log(tabX2([100, 200, 300]));


//Partie 5 Exercice 4
//le côté d'un triangle doit être toujours inférieur à la somme des 2 autres
function isTriangle(a, b, c) {
    return a + b > c && b + c > a && c + a > b;
}

// Afficher la sortie
console.log(isTriangle(2, 3, 4));
console.log(isTriangle(2, 4, 5));
console.log(isTriangle(8, 2, 1));


//Partie 5 Exercice 5
//la fonction "charCodeAt" donne le nombre entier du code ASCII d'un caractère. 
//on retourne cett valeur
function charToAscii(c) {
    return c.charCodeAt(0);
}

// Afficher la sortie
console.log(charToAscii("A"));
console.log(charToAscii("a"));
console.log(charToAscii("+"));


//Partie 5 Exercice 6
//la fonction "eval" permet d'évaluer le calcul d'un chaîne
//de caratères et renvoie le résultat de la comparaison
function FracSup1(f) {
    return eval(f) > 1;
}

// Afficher la sortie
console.log(FracSup1("2/2"));
console.log(FracSup1("8/2"));
console.log(FracSup1("1/2"));


//Partie 5 Exercice 7
//crée un variable pour stocker la somme de tous les éléments
//du tableau et on itère sur ces éléments
function sum(tab) {
    let sigma = 0
    for (let i = 0; i < tab.length; i++) {
        sigma += tab[i]
    }
    return sigma
}

// Afficher la sortie
console.log(sum([1, 1, 1]));
console.log(sum([1, 2, 3]));
console.log(sum([-2, 2, 1]));


//Partie 5 Exercice 8
//Itère sur tous les éléments du tableau envoyé en paramètre et ajoute
// avec la fonction "length" la taille de chaque chaîne de caractères
//puis renvoie le tableau résultat
function countStr(tab) {
    // Écrivez votre code ici
    var tabLength = [];
    for (var i = 0; i < tab.length; i++) {
        tabLength.push(tab[i].length);
    }
    return tabLength;
}

// Afficher la sortie
console.log(countStr(["A", "B", "C"]));
console.log(countStr(["Welcome", "To", "WayToLearnX"]));
console.log(countStr(["Bob", "Ali", "Thomas"]));


//Partie 5 Exercice 9
//chaque syllabe est composée de 2 lettres. Le nombre de syllables est donc
// la taille de la chaîne de caractères divisée par 2
function nbrOfSyllables(str) {
    return str.length / 2;
}

// Afficher la sortie
console.log(nbrOfSyllables("SOSOSOSO"));
console.log(nbrOfSyllables("HAHAHAHAHA"));
console.log(nbrOfSyllables("RIRIRIRIRIRIRIRIRIRI"));

//////////////////////////////////////////////////////////////////////////////////////////////////

//Partie 10 Exercice 1
//une autre variante de la correction:
//si les 2 paramètres sont des chaînes de caratères, on les convertit en entier pour les aditionner
//sinon, si les 2 paramètres sont des entiers, on les convertit en chaîne pour les concaténer
//null dans tous les autres cas 
function add(a, b) {
    if (typeof a === 'string' && typeof b === 'string') {
        return Number(a) + Number(b);
    }
    else if (typeof a === 'number' && typeof b === 'number') {
        return a.toString() + b.toString();

    }
    return null;
}

// Afficher la sortie
console.log(add("2", "3"));
console.log(add(2, 3));
console.log(add("2", 3));


//Partie 10 Exercice 2
//balaye tous les éléments du tableau et renvoie le produit des impairs
//initialisé à 1 pour éviter lle 0, élément absorbant de la multiplication
function prodImp(tab) {
    var produit = 1;
	for (var i=0; i<tab.length; i++) {
	    if (tab[i] % 2 != 0) {
	        produit *= tab[i];
	    }
	}
	return produit;
}

// Afficher la sortie
console.log(prodImp([1, 2, 3, 4]));
console.log(prodImp([3, 6, 8, 5, 5, 7]));
console.log(prodImp([1, 0, 1, 0, 1, 0]));


//Partie 10 Exercice 3
//doubles boucles imbriquées pour balayer les caractères de la chaîne et multiplier ses éléments
//en les concaténant. Renvoi du résultat
function repeatChr(str, n) {
    var res= "";
	for (var i=0; i<str.length; i++) {
		 for (var j=0; j<n; j++) {
		    res += str[i];
        }
    }
    return res;
}

// Afficher la sortie
console.log(repeatChr("alex", 3));
console.log(repeatChr("waytolearnx", 1));
console.log(repeatChr("bob", 2));


//Partie 10 Exercice 4
//balaye tous les éléments du tableau passé en paramètre
//et ajoute au tableau vide les éléments dont la première lettre ne commence pas par "Z"
function filterWords(tab) {
    var tabRes = [];
	  //return tab.filter(str => /^[^Z]/.test(str))
	  	for (var i=0; i<tab.length; i++) {
	  	    if (tab[i][0] != "Z") {
	  	        tabRes.push(tab[i]);
	  	}
    }
    return tabRes;
}

// Afficher la sortie
console.log(filterWords(["Bob", "Alex", "Zoello"]));
console.log(filterWords(["Lion", "Zebra", "Gazelle"]));
console.log(filterWords(["Mercedes", "Bmw", "Audi"]));


//Partie 10 Exercice 5
//balaye tous les éléments du tableau passé en paramètre
//ajoute dans un tableau vide les éléments étant des entiers
//renvoi du résultat
//**** Nota: Erreur dans le résultat devant être obtenu:
//getInt(["Vache", 20, "Cheval", 1, "Poule", 50]) ➞ [20, 1, 1] ->>> [20, 1, 50]
function getInt(tab) {
    var tabRes = [];
	for (var i=0; i<tab.length; i++) {
	    if (Number.isInteger(tab[i])) {
	        tabRes.push(tab[i]);
	    }
	}
	return tabRes;
}

// Afficher la sortie
console.log(getInt([1, 2, "3", "4", "5", 6]));
console.log(getInt(["Vache", 20, "Cheval", 1, "Poule", 50]));
console.log(getInt(["Str", false, 5.56, 6]));


//Partie 10 Exercice 6
//un tableau de 2 tableaux
//pousse les couples des 2 tableaux pour les pousser dans le tableau final
function convert(tabX, tabY) {
    var tabRes = [];
    for (var i=0; i<tabX.length; i++) {
       var tabTemp = [];
       tabTemp.push(tabX[i]);
        tabTemp.push(tabY[i]);
        tabRes.push(tabTemp);
   }
   return tabRes;
}

// Afficher la sortie
console.log(convert([0, 2, 5], [8, 6, 9]));
console.log(convert([2, 2], [4, 8]));
console.log(convert([1], [2]));


//Partie 10 Exercice 7
//expression régulière contenant les voyelles à remplacer entre crochets
//et "g" pour effectuer le remplacement sur la globalité de la chaîne de caractères
function replaceVoyel(str, c) {
	return str.replace(/[aeoiu]/g, c);
}

// Afficher la sortie
console.log(replaceVoyel("voyelle", "$"));
console.log(replaceVoyel("boulevard", "?"));
console.log(replaceVoyel("bouche", "@"));



//Partie 10 Exercice 8
//[[a, b], 
//[c, d]]
//renvoie le déterminant a * d – b * c
function det(matrice) {
	return (matrice[0][0]*matrice[1][1] - matrice[1][0]*matrice[0][1]);
}

// Afficher la sortie
console.log(det([[1, 1],[2, 3]]));
console.log(det([[6, 4],[2, 3]]));
console.log(det([[2, 4],[4, 2]]));


//Partie 10 Exercice 9
//**** NOTA: substring non reconnu dans "paiza.io" */
//balaye tous les éléments du tableau avec une boucle "for"
//récupère l'extension du fichier. la sous chaîne après le "."
//ajoute à un nouveau tableau et renvoie le résultat
function getExtension(files) {
	var index = files.indexOf(".");
    var tabRes = [];
	for (var i=0; i<files.length; i++) {
	    var ext = files[i].subtring(index + 1);
	    tabRes.push(ext);
	}
	return tabRes;
}

// Afficher la sortie
console.log(getExtension(["file.html", "file.js"]));
console.log(getExtension(["image.jpg", "image.png", "image.gif"]));
console.log(getExtension(["file.pdf", "file.txt", "file.docx"]));

////////////////////////////////////////////////////////////////////////////
//constructeur
var personne = function(nom, prenom, age) {
    this.nom = nom;
    this.prenom = prenom;
}
perso = new Personne("nom1", "prenom1", 30);
perso = new Personne("nom2", "prenom2", 40);

console.log(perso);
console.log(perso2);

class Personne {
    nom;
    prenom;
    constructor(nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
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
}