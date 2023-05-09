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
let tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];


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
