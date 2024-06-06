window.addEventListener("load", function(){

  if(!localStorage.getItem("cookie"))
  {
   const mod = this.document.getElementById("mod");
    mod.style.color = "black";
    const modal = new bootstrap.Modal("#my-modal");
    modal.show();
   localStorage.setItem("cookie",false);
  }
  
})