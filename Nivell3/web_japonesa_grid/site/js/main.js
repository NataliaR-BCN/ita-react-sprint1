function menuResponsive() {

    var x = document.getElementById("menuNavegacio");
    var y = document.getElementById("header");

    if (x.className === "menu-list") {
        x.className += " responsive";
        y.className += " header-responsive";
    } else {
        x.className = "menu-list";
        y.className = "header";
    }
    
}

function sortimMobile() {
    var foraMobile = window.matchMedia("(min-width: 601px)");

    if(foraMobile.matches) {
        document.getElementById("menuNavegacio").className = "menu-list";
        document.getElementById("header").className = "header";
    }
  
}

   
  

