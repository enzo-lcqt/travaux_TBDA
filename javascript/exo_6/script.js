let a = "100";
let a1 = "Ceci est une chaîne de caractères : ";
let phrase = "" + a1 + "" + a;
console.log(phrase);
alert("Voici ce que vous avez saisi :\n\na : "+phrase)

let b = 100;
b--;
console.log(b);
alert("Voici ce que vous avez saisi :\n\nb : "+b)

let c = 1;
let c2 = Number(c) + Number(a);
console.log(c2);
alert("Voici ce que vous avez saisi :\n\nc : "+c2)

let bool = false;
if(bool){
    console.log("le booléen est à true");
}else{
    console.log("le booléen est à false");
}
alert("Voici ce que vaux le booléen :\n\nd : "+bool)