let aggiunto = 0; // Dichiarata come variabile globale

window.addEventListener("load", function() {
  let button = document.getElementById("button0");

  button.addEventListener("click",function(){
    let img = document.getElementById("imgP");
    let prezzo = document.getElementById("price");
    let titolo = document.getElementById("titolo");
    localStorage.setItem("prezzo" + img.dataset.idProdotto, prezzo.innerText);
    localStorage.setItem("titolo" + img.dataset.idProdotto, titolo.innerText);
    localStorage.setItem(img.dataset.idProdotto,img.src);
    if(img.dataset.idProdotto <= 11){  
      localStorage.setItem("a" + img.dataset.idProdotto, "prodotto" + img.dataset.idProdotto + ".html");
    } else {
      localStorage.setItem("a" + img.dataset.idProdotto, "prodottiElettronici" + (img.dataset.idProdotto - 12) + ".html");
    }
    
    aggiuntoCarrello();
  });
});

function aggiuntoCarrello()  {

  if(aggiunto==0)
  {
  let div = document.getElementById("success");
  div.classList.add("alert");
  div.classList.add("alert-success");
  div.classList.add("fixed-top");
  div.classList.add("mt-4");
  div.classList.add("ms-5");
  div.classList.add("me-5");
  div.classList.add("text-center");

    div.innerText = "Prodotto aggiunto con successo";


  let opacity = 1;
  aggiunto = 1;
  let fadeOutInterval = setInterval(function() {
    
    if (opacity > 0) {
      opacity -= 0.01;
      div.style.opacity = opacity;

    } else {
      clearInterval(fadeOutInterval);
      aggiunto = 0;
      div.classList.remove("alert");
      div.classList.remove("alert-success");
      div.classList.remove("fixed-top");
      div.classList.remove("mt-4");
      div.classList.remove("ms-5");
      div.classList.remove("me-5");
      div.classList.remove("text-center");
    }
  }, 21);
  }

  
}