nombre = parseInt(prompt("Veuillez saisir votre chiffre"))
result = nombre%2
if(isNaN(nombre)){
    alert("ce nest pas un chiffre");
}
else if(result === 0 )
    console.log("le nombre est pair ");
else{
    console.log("le nombre est impair");
}

nombre1 = parseInt(prompt("veuillez saisir votre année de naissance"))
if(isNaN(nombre1)){
    alert("vous n'avez pas saisi de chiffre");
}
else if(nombre1 >= 2005)
    console.log("l'utilsateur est mineur")
else{
    console.log("l'utilisateur est majeur")
}

nombre3 = parseInt(prompt("Veuillez saisir votre 1er nombre"))
nombre4 = parseInt(prompt("Veuillez saisir votre 2eme nombre"))
operateur = parseInt(prompt("Veuillez saisir votre opérateur"))
if(isNaN(nombre3, nombre4)){
    alert("Vous n'avez pas saisi de chiffre");
}
if(isNaN(operateur)){
    alert("Vous n'avez pas saisi un opérateur correct")
}