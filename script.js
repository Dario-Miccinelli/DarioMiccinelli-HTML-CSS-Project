function verificaEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function controlloForm() {
  var nome = document.forms["formmail"]["nome"].value;
  var email = document.forms["formmail"]["email"].value;
  var tel = document.forms["formmail"]["tel"].value;
  var msg = document.forms["formmail"]["msg"].value;

  if (nome == "" || email == "" || msg == "") {
    alert("I campi Nome, Email e Messaggio sono obbligatori!");
    return false;
  }
  else if (verificaEmail(email) !== true) {
    alert("L'indirizzo email non sembra corretto!");
    return false;
  }else{
    return true;
  }
}

var menuBtn = document.getElementById("menuBtn")
    var sideNav = document.getElementById("sideNav")
    var menu = document.getElementById("menu")

    sideNav.style.right = "-250px";

    menuBtn.onclick = function () {
      if (sideNav.style.right == "-250px") {
        sideNav.style.right = "0";
        menu.src = "img/close.png";
      }
      else {
        sideNav.style.right = "-250px";
        menu.src = "img/menu.png";
      }
    }

    var words = ['Web Developer', 'Team worker', 'Problem solver', 'IT Lover', 'Dreamer'];
    var counter = 0;
    var word = document.getElementById("keep");
    setInterval(update_carousel_words, 1300);
    function update_carousel_words() {
      word.innerHTML = words[counter];
      counter++;

      if (counter >= words.length) {
        counter = 0;
      }
    }
    
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});