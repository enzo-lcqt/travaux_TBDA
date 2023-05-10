function validateForm(){
let nom = document.getElementById("nom").value.trim()
let prenom  = document.getElementById("prenom").value.trim()
let date = document.getElementById("date").value.trim()
let code = document.getElementById("code").value.trim()
let adresse = document.getElementById("adresse").value.trim()
let ville = document.getElementById("ville").value.trim()
let mail = document.getElementById("mail").value.trim()
let demande = document.getElementById("demande").value.trim()
let question = document.getElementById("question").value.trim()
let nom_error = document.getElementById("nom_error");
let prenom_error = document.getElementById("prenom_error");
let date_error = document.getElementById("date_error");
let code_error = document.getElementById("code_error");
let adresse_error = document.getElementById("adresse_error");
let ville_error = document.getElementById("ville_error");
let mail_error = document.getElementById("mail_error");
let demande_error = document.getElementById("demande_error");
let question_error = document.getElementById("question_error");

let valid = true;
// nom
if (nom === ""){
    nom_error.innerHTML = "veuillez entrez votre nom"
    valid = false;
}else {
    nom_error.innerHTML = "";
}
// prenom
if (prenom === ""){
    prenom_error.innerHTML ="veuillez entrez votre nom"
    valid = False
}else {
    prenom_error.innerHTML = "";
}
// date
if (date === ""){
    date_error.innerHTML = "veuillez entre une date"
    valid = false;
}else {
    date_error.innerHTML = "";
}
// adresse
if (adresse === ""){
    adresse_error.innerHTML = "veuillez entrez votre adresse"
    valid = false;
}else {
    adresse_error.innerHTML = "";
}

// ville
if(ville === ""){
    ville_error.innerHTML = "veuillez entrez votre ville"
    valid = false;
}else {
    ville_error.innerHTML= "";
}

// mail
if(mail === ""){
    mail_error.innerHTML = "veuillez entrez votre mail"
    valid = false;
} else if (!/\S+@\S+\.\S+/.test(mail)){
    mail_error.innerHTML = "veuillez entrez un mail valide";
    valid = false;
}else {
    mail_error.innerHTML = "";
}

// demande
if (demande === ""){
    demande_error.innerHTML = "veuillez entrez votre demande"
    valid = false;
}else {
    demande_error.innerHTML = ""
}

// question
if (question === ""){
    question_error.innerHTML = "veuillez poser votre question"
    valid = false;
}else {
    question_error.innerHTML = ""
}

//  code postal
if (code === ""){
    code_error.innerHTML = "veuillez entrez votre code postal"
    valid = false;
}else if(!/^[0-9]{5}$/.test(code)){
    code_error.innerHTML = "le code doit être de 5 chiffres"
    valid = false;
}else {
    code_error.innerHTML = "";
}

if (valid){
    document.myForm.submit();
}
}