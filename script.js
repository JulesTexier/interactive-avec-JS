// Fonctionnalité 1bis :

var footerEl = document.getElementsByTagName("footer");
  
i = 0
  var footerClick = function(){
  i = i + 1
  console.log(`clique n°${i}`);
};
footerEl[0].addEventListener("click", footerClick);


// Fonctionnalité 2 : "Hamburger Menu"

var navbar = document.getElementById("navbarHeader")
var bigButton = document.getElementsByClassName("navbar-toggler")

var clic1 = function(){
  navbar.classList.toggle("collapse")
  console.log
};
bigButton[0].addEventListener("click", clic1);



// Fonctionnalité 3 :

// 1. je définis la variable ou je souhaite agir
var text1 = document.querySelectorAll("div.card > div.card-body > p.card-text")[0]
var edit1 = document.querySelectorAll("div.card > div.card-body > div.d-flex > div.btn-group")[0].getElementsByClassName("btn")[1]

// 2. Définir l'action à réaliser
var clic1edit = function(){
  text1.style="color:red";
};

// 3. Connecter la variable à la fonction
edit1.addEventListener("click", clic1edit);


//Fonctionnalité 4 :

// 1. je définis la variable ou je souhaite agir
var text2 = document.querySelectorAll("div.card > div.card-body > p.card-text")[1]
var edit2 = document.querySelectorAll("div.card > div.card-body > div.d-flex > div.btn-group")[1].getElementsByClassName("btn")[1]

// 2. Définir l'action à réaliser
var clic2edit = function() {
  if (text2.style.color === 'green') {
    text2.style="color: "; 
}
else {text2.style="color:green";};
};

// 3. Connecter la variable à la fonction
edit2.addEventListener("click", clic2edit);


//Fonctionnalité 5 :

// 1. je définis la variable ou je souhaite agir

var cdn = document.getElementsByTagName("link")
var babar = document.getElementsByTagName("header")

// 2. Définir l'action à réaliser
var set = function() {
  if (cdn[0].disabled == true) {
    cdn[0].disabled = false;
  }

else {cdn[0].disabled = true;};
  }

// 3. Connecter la variable à la fonction
babar[0].addEventListener("dblclick", set);


//Fonctionnalité 6 :

const carte = document.getElementsByClassName("card")

for (let i = 0; i < carte.length; i++) {

var view = document.getElementsByClassName("btn btn-sm btn-success")
var text = document.getElementsByClassName("card-text")
var img = document.getElementsByClassName("card-img-top")
  
var set = function() 

  {
    if (text[i].style.display == "none" && carte[i].style.width =='80%') {
      text[i].style.display = "block"; carte[i].style.width='100%';
  }
  else {text[i].style.display = "none" ;carte[i].style.width='80%'};
  };

  view[i].addEventListener("mouseover", set)
}


//Fonctionnalité 7 :

// 1. je définis la variable ou je souhaite agir
var fleche = document.querySelectorAll(".container > p > a")[1]
var row = document.getElementsByClassName("row")[1]
var newItem = document.getElementsByClassName("col-md-4")[5]


// 2. Définir l'action à réaliser

var sens = function () {
  row.insertBefore(newItem, row.childNodes[0])
}

// 3. Connecter la variable à la fonction

fleche.addEventListener("click", sens)


