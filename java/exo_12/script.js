let tableau = [valeur];
var valeur = "valeur"
while(valeur != "0")
{
    i = 1;
    valeur=prompt("Entrez la valeur N°"+i);
    i++;
   if(valeur==null){
       alert("Vous avez cliqué sur Annuler");
        break;
        }
};

console.table(tableau);