function AddElement(event){
    event.preventDefault();

    let IdElement = document.getElementById("plat");

    console.log(IdElement.value);

    let ligne = document.createElement('tr');
    let cellule = document.createElement('td');

    cellule.innerHTML = IdElement.value;
    ligne.appendChild(cellule);

    let IdTableau = document.getElementById("body");

    IdTableau.appendChild(ligne);
}