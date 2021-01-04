
function maFonction() {
    alert("Hello world JS !");
}

function saisirNom() {
    var nom = prompt('Quel est votre nom ?');
    var conf = confirm('Vous appelez-vous: ? ' + nom);
    if (conf == true) {
        alert('Bonjour ' + nom);
    }
}

function maFonction2() {
    console.log("Hello my world");
}

maFonction2()

// var a = '3';
// var b = 5;
// var c = a + b;

// document.writeln('Type et valeur des variables\r\n<br>');
// document.writeln('----------------------------');
// document.writeln('a: ' + a + ', type: ' + typeof (a));

// var a = parseInt(a);
// document.writeln('a: ' + a + ', type: ' + typeof (a));
// document.writeln('a + b: ' + c + ', type: ' + typeof (c));

function nombresPairs() {
    for (i = 0; i < 10; i+=2) {
        //if (i % 2 == 0)
            document.writeln(i)
    }
}
// nombresPairs()