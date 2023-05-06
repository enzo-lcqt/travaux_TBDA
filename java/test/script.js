let tableau = []; // Initialise un tableau vide
let valeur = 1; // Initialise une variable valeur à une valeur différente de 0

// Boucle de saisie des valeurs
while (valeur !== 0) {
  valeur = parseFloat(window.prompt("Entrez une valeur numérique (ou 0 pour arrêter la saisie) :"));
  if (valeur !== 0 && !isNaN(valeur)) {
    tableau.push(valeur); // Ajoute la valeur saisie au tableau si elle est différente de 0 et qu'elle est numérique
    document.write("<li>" + valeur + "</li>"); // Ajoute la valeur saisie à la liste HTML
  }
}

// Calcule le nombre de valeurs saisies, la somme et la moyenne
const nombreValeurs = tableau.length;
const somme = tableau.reduce((total, valeur) => total + valeur, 0);
const moyenne = somme / nombreValeurs;

// Affiche le nombre de valeurs saisies, la somme et la moyenne
document.write("<p>Nombre de valeurs saisies : " + nombreValeurs + "</p>");
document.write("<p>Somme : " + somme + "</p>");
document.write("<p>Moyenne : " + moyenne + "</p>");