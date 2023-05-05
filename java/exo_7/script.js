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

var A = prompt("Veuillez saisir votre 1er nombre : ")
var op = prompt("Veuillez saisir votre operateur : ")
var B = prompt("Veuillez saisir votre 2eme nombre : ")

switch (op) {
   case '+' : resultat=parseFloat(A)+parseFloat(B); 
   console.log(`${A} + ${B} = ${resultat}`);
   break;
   case '-' : resultat=A-B; 
   console.log(`${A} - ${B} = ${resultat}`);
   break;

   case '*' : resultat=A*B; 
   console.log(`${A} * ${B} = ${resultat}`);
   break;

   case '/' : resultat=A/B;
             if(A&B!=0) 
    console.log(`${A} / ${B} = ${resultat} `);
            else{
              console.log("La division par 0 est impossible");
            }
               
}


