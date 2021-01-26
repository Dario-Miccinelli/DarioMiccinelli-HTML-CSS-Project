

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
