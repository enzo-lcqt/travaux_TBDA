let formulaire_contact = document.getElementById("formulaire_contact");
formulaire_contact.addEventListener("submit", function (error){

let nom = document.getElementById("nom")
let prenom  = document.getElementById("prenom");
let date = document.getElementById("date");
let code = document.getElementById("code");
let adresse = document.getElementById("adresse");
let ville = document.getElementById("ville");
let mail = document.getElementById("mail");
let demande = document.getElementById("demande");
let question = document.getElementById("question");

if(nom.value.trim() == ""){
    let defaultname = document.getElementById("defaultname");
    defaultname.innerHTML = "Veuillez indiquer votre nom";
    defaultname.style.color = "red";
    error.preventDefault();
}else if (nom.value == false){
    let defaultname = document.getElementById("defaultname");
    defaultname.innerHTML = "veuillez indiquer votre nom";
    defaultname.style.colre = "red"
    error.preventDefault();
}




}
)

