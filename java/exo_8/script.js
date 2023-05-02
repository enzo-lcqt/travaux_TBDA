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
 var A = prompt("Entrez votre 1er nombre");
 var B = prompt("Entrez votre 2eme nombre");

     resultat1 = Number(A) + Number(B);
   resultat2 = Number(A) + Number(B) / 2;

 console.log("la somme est :"+resultat1);
console.log("La moyenne est : "+resultat2)
// exo4
i = prompt("ENtrez votre nombre");
nombre = prompt("entrez votre multiplicateur");
for (let compteur = i * nombre; compteur >= 0; compteur -=i){
    resultat = i * nombre;
    console.log(i+"x"+nombre+"="+compteur);
}
// exo5
var myVar = ("ordinateur Portable");
var len = myVar.length
console.log(len);
var sub = myVar.substring(0,6);
console.log(sub);
var ind = myVar.indexOf("portable");
console.log(ind);