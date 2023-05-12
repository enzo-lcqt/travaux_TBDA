// exo1
 var prenom = "prenom";
 i = 1
 while(prenom != "")
 {
     prenom=prompt("Entrez le prenom N°"+i);
     i++;
     console.log(prenom +i)
    if(prenom==null){
        alert("Vous avez cliqué sur Annuler");
         break;
         }
 }
 // exo2
   nombre = prompt("Entrez un nombre")
  for(let compteur = nombre; compteur >= 0; compteur--){
    console.log(compteur)  
 }
// exo3
let tableau = []; // Initialise un tableau vide
let valeur = 1; // Initialise une variable valeur à une valeur différente de 0

// Boucle de saisie des valeurs
while (valeur !== 0) {
  valeur = parseFloat(window.prompt("Entrez une valeur numérique (ou 0 pour arrêter la saisie) :"));
  if (valeur !== 0 && !isNaN(valeur)) {
    tableau.push(valeur); // Ajoute la valeur saisie au tableau si elle est différente de 0 et qu'elle est numérique
    
  }
}

// Calcule le nombre de valeurs saisies, la somme et la moyenne
const nombreValeurs = tableau.length;
const somme = tableau.reduce((total, valeur) => total + valeur, 0);
const moyenne = somme / nombreValeurs;

// Affiche le nombre de valeurs saisies, la somme et la moyenne
console.log("Nombre de valeurs saisies : " + nombreValeurs + "");
console.log("Somme : " + somme + "");
console.log("Moyenne : " + moyenne + "");
//exo4
i = prompt("ENtrez votre nombre");
nombre = prompt("entrez votre multiplicateur");
for (let compteur = i * nombre; compteur >= 0; compteur -=i){
    resultat = i * nombre;
    console.log(i+"x"+nombre+"="+compteur);
    nombre--;
}
// exo5
var myVar = "ordinateur"; // demande à l'utilisateur de saisir un mot
var voyelles = "aeiouy"; // liste des voyelles
var compteur = 0; // initialisation du compteur de voyelles

for (var i = 0; i < myVar.length; i++) { // boucle sur chaque lettre du mot
if (voyelles.indexOf(myVar.substring(i, i+1)) !== -1) { // si la lettre est une voyelle
compteur++; // on incrémente le compteur
}
}

console.log("Le mot " + myVar + " contient " + compteur + " voyelle(s)."); // affiche le résultat