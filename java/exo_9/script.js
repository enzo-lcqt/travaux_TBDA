// exo1
var cube = prompt("ecrire un nombre");
var calc = prompt("ecrire un multiplicateur");
resultat1 = Number(cube) * Number(cube) * Number(cube)
resultat2 = Number(cube) * Number(calc);


document.getElementById("cube").innerHTML = ("Le cube de "+cube+" est égal à : "+resultat1);
document.getElementById("calcule").innerHTML = ("le produit de "+cube+" x "+calc+" est égal à : "+resultat2);