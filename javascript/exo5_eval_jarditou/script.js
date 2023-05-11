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

function validateForm(){

// nom
if (nom === ""){
    nom_error.innerHTML = "veuillez entrez votre nom";
    nom_error.style.color="red";
    valid = false;
}
// prenom
if (prenom === ""){
    prenom_error.innerHTML ="veuillez entrez votre nom";
    prenom_error.style.color="red";
    valid = false;
}
// date
if (date === ""){
    date_error.innerHTML = "veuillez entre une date";
    date_error.style.color="red";
    valid = false;
}
// adresse
if (adresse === ""){
    adresse_error.innerHTML = "veuillez entrez votre adresse";
    adresse_error.style.color="red";
    valid = false;
}

// ville
if(ville === ""){
    ville_error.innerHTML = "veuillez entrez votre ville";
    ville_error.style.color="red";
    valid = false;
}

// mail
if(mail === ""){
    mail_error.innerHTML = "veuillez entrez votre mail";
    mail_error.style.color="red";
    valid = false;
} else if (!/\S+@\S+\.\S+/.test(mail)){
    mail_error.innerHTML = "veuillez entrez un mail valide";
    mail_error.style.color="red";
    valid = false;
}

// demande
if (demande === ""){
    demande_error.innerHTML = "veuillez entrez votre demande";
    demande_error.style.color="red";
    valid = false;
}


// question
if (question === ""){
    question_error.innerHTML = "veuillez poser votre question";
    question_error.style.color="red";
    valid = false;
}

//  code postal
if (code === ""){
    code_error.innerHTML = "veuillez entrez votre code postal";
    code_error.style.color="red";
    valid = false;
}else if(!/^[0-9]{5}$/.test(code)){
    code_error.innerHTML = "le code doit être de 5 chiffres";
    code_error.style.color="red";
    valid = false;
}

if (valid){
    document.myForm.submit();
}
}
validateForm();