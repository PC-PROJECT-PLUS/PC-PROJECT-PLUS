window.addEventListener("load", function() {
    const openDocument = document.querySelectorAll(".open");    
    for (let i=0; i<openDocument.length; i++) {
        openDocument[i].addEventListener("click", function() {                 
            open("prodotto" + i +".html", "_self");
        });
    }
});

