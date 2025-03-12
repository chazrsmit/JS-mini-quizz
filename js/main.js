// First select the element we want to modify
let intro = document.querySelector(".mon-texte") //on sélectionne cette partie avant la fonction pour pouvoir modifier le message d'accueil

// Define the message function
function msg() {
  var prenom = prompt("Bienvenue ! Quel est ton prénom ?")
  
  // Now update the text after we have the prenom value
  intro.innerText = `Bienvenue ${prenom}` //mettre cette partie dans la fonction sinon on ne peut pas utiliser prénom
}

// Call the function after a delay
setTimeout(msg, 1000);
