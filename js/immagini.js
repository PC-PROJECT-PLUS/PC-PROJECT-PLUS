window.addEventListener("load", function() {
  const images = this.document.querySelectorAll(".click");
  const avanti = this.document.getElementById("avanti");
  
  for (let i=0; i<images.length; i++) {
    images[i].addEventListener("click", function() {
      const firstImg = document.getElementById("img");
      firstImg.src = "";
      firstImg.src = images[i].src;
    });
  }
});
