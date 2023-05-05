// var valeur = "valeur";
// i = 1
// while(valeur != "0")
// {
//     valeur=window.prompt("Entrez la valeur N°"+i);
//     i++;
//     document.write("\n\n"+valeur)
//    if(valeur==null){
//        alert("Vous avez cliqué sur Annuler");
//         break;
//         }
// }
function AddElement(event){
    event.preventDefault();

       
    let IdElement = document.getElementById("plat");

    console.log(IdElement.value);

    let ligne = document.createElement('tr');
    let cellule = document.createElement('td');
    
    cellule.innerHTML = prompt("entrez vos valeurs");
    ligne.appendChild(cellule);

    let IdTableau = document.getElementById("body");

    IdTableau.appendChild(ligne);
}

function AddElement1(event){

    let IdElement = document.getElementById("moyenne");

    let ligne = document.createElement('tr');
    let cellule = document.createElement('td');
   
    cellule.innerHTML = alert("voici la moyenne");
    ligne.appendChild(cellule);

    let IdTableau = document.getElementById("body");

    IdTableau.appendChild(ligne);

}