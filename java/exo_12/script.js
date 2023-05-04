let tab = {};
tab.valeur = "valeur numerique";
i = 1
while(valeur != "0")
{
    valeur=prompt("Entrez la valeur N°"+i);
    i++;
    console.log(valeur)
   if(valeur==null){
       alert("Vous avez cliqué sur Annuler");
        break;
        }
}
console.table(tab)




