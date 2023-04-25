var bouton2= document.getElementById("Id_btn1");
bouton2.addEventListener("click",clickbtn1);

function clickbtn1(){

    var prenom = prompt("Veuillez saisir votre prénom");
    if(prenom==null){
    alert("Vous avez cliqué sur Annuler");
    return;
    }

    var nom = prompt("Veuillez saisir votre nom");
    if(nom==null){
    alert("Vous avez cliqué sur Annuler");
    return;
    }
    alert("Voici ce que vous avez saisi :\n\nVotre prénom : "+prenom+"\nVotre nom : " +nom);
}

var bouton3= document.getElementById("Id_btn2");
bouton3.addEventListener("click",clickbtn3);

function clickbtn3(){

    var nombre1 = parseInt(prompt("Veuillez saiser votre 1er nombre"));
    if(isNaN(nombre1)){
    alert("Vous n'avez pas saisi un nombre correct !\nVeuillez recommencer");
    return;
    }

    var nombre2 = parseInt(prompt("Veuillez saisir votre 2nd nombre"));
    if(isNaN(nombre2)){
    alert("Vous n'avez pas saisi un nombre correct !\nVeuillez recommencer");
    return;
    }
    alert("Voici ce que vous avez saisi :\n\Votre nombre1 : "+nombre1+"\nVotre nombre2 : " +nombre2+"\nVotre addition : "+(nombre1+nombre2));
}

var bouton4= document.getElementById("Id_btn3");
bouton4.addEventListener("click",clickbtn4);

function clickbtn4(){

    var temperature = parseInt(prompt("Veuillez saisir votre temperature"));
    if(isNaN(temperature)){
    alert("Vous n'avez pas saisi une temperature correcte !\nVeuillez recommencer");
    return;
    }

    var fahrenheit = (temperature * 1.8) +32 
    alert("Voici ce que vous avez saisi :\n\Votre temperature en celcius : "+temperature+"\nVotre temperature en fahrenheit : "+fahrenheit); 
}

