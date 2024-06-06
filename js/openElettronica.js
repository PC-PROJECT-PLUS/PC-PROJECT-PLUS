window.addEventListener("load", function() {
    const openDocument = document.querySelectorAll(".openElettronica");    
    for (let i=0; i<openDocument.length; i++) {
        openDocument[i].addEventListener("click", function() {                 
            open("prodottiElettronici" + i +".html", "_self");
        });
    }

    const home = document.getElementById("home");
    home.addEventListener("click", function() {
        open("index.html", "_self");
    });

});