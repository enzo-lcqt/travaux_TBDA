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
n=prompt("donnez un nombre")
    function multiplication(n)
{
    for(i=0;i <= 10;i++)
{
    let d= (n*i)

    document.write(n+"x"+i+"="+d+"<br><br>")
}
}
multiplication(n)

//exo3
let tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane<br><br>"];


let trouve = true;

while (trouve==true){
let Prenom=prompt("devinez le prénom")
let index=tab.indexOf(Prenom)
    if (index !== -1){
        for (i=index ;i <tab.length -1;i++)
        {
            tab[i]=tab[i+1]  
            tab[tab.length-1]="";
        
        }   
        
            document.write("bravo!!"+Prenom+" a été trouvé "+"<br><br>il reste : ")
            trouve=false
    }
            
    else 
    {
         document.write("ERREUR ce "+Prenom+" n'existe pas dans le tableau.<br><br>")
         
         break;
    }
}document.write(tab)

//exo4
let pu = prompt("entrez un prix");
let qtecom = prompt("entez le nombre de quantite");
let tot = pu*qtecom
document.write("le prix total(produit+quantité) est de : "+tot+"€<br>")

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