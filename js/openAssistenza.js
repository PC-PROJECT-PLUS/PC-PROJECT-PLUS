window.addEventListener("load", function(){
    const apriAssistenza = document.querySelectorAll(".apri");
    for (let i=0; i<apriAssistenza.length; i++) {
        apriAssistenza[i].addEventListener("click", function() {
            open("assistenza" + i + ".html", "_self");
        });
    }
});