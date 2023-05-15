//exo1
let age = parseInt(prompt("Entrez un âge :"));
let nbMoins20 = 0;
let nbEntre20et40 = 0;
let nbPlus40 = 0;

while (age < 100) {
if (age < 20) {
nbMoins20++;
} else if (age >= 20 && age <= 40) {
nbEntre20et40++;
} else {
nbPlus40++;
}
age = parseInt(prompt("Entrez un âge :"));
}

nbPlus40++; // On ajoute le centenaire

document.write("Nombre de personnes de moins de 20 ans : " + nbMoins20+"<br>");
document.write("Nombre de personnes entre 20 et 40 ans : " + nbEntre20et40+"<br>");
document.write("Nombre de personnes de plus de 40 ans : " +nbPlus40+"<br><br>");

//exo2
let n = parseInt(prompt("entrez un nombre"));
let message = "";

for(let i = 1;i<=10;i++){
    message +=n+"x"+i+"="+(n*i)+"\n";
}
alert(message)

//exo3
let box;
let prenom = prompt("Veuillez saisir un prenom");

const l = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane" ,"<br>"];
 

box = l.indexOf(prenom);
 

document.write(prenom+"<br>");
while(box != -1){

    l.splice(box,1);
    prenom = prompt("Veuillez saisir un prenom");
    box = l.indexOf(prenom);
    l.splice(box,1);
    document.write("Hop un prénom de trouver<br>"+prenom+"<br>");



} 
    document.write("Ce prénom ne se trouve pas dans la liste <br>");
    document.write("<br>Voici la liste finale des prénoms restants a trouver : " +l+"<br>");


// //exo4
let pu = prompt("entrez un prix");
let qtecom = prompt("entez le nombre de quantite");
let tot = pu*qtecom
document.write("<br>le prix total(produit+quantité) est de : "+tot+"€<br>")

//remise
if(tot<=100){ 
      rem=0
    }
else if((tot>=100)&&(tot<=200)){
}      
else if(tot>200){
      rem=0.1
    }
totrem = tot-(tot*rem)
document.write("le prix(produit+quantité) avec la remise est de : "+totrem+"<br>")

//port
let port = 0
if(totrem>500){
    port=0
}else if(totrem<=500){
    port=totrem*0.2
}
if(port>6){
     port = totrem*0.2
    }
else if(port<6)
port=6
document.write("le total de la commande : "+totrem+"€<br>"+"plus les frais de port sont de : "+port+"€<br>"+"le total est de : "+(port+totrem)+"€")