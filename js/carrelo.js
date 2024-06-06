window.addEventListener("load", function() {
  
  const demo = this.document.getElementById("demo");
  demo.innerHTML=" ";
  let cont =0;
  for(let i=0; i<=23;i++){
    if(localStorage.getItem(i)){
      const a = document.createElement("a");
      const div = this.document.createElement("div");
      const divm = this.document.createElement("div");
      const img = document.createElement("img");
      const button = document.createElement("button");
      const p1 = document.createElement("p");
      const p2 = document.createElement("p");
      p1.innerText = this.localStorage.getItem("titolo" +i);
      p2.innerText = this.localStorage.getItem("prezzo" +i);
      p1.classList.add("fontSize");
      p2.classList.add("fontSize");
      p2.classList.add("underline");
      
      button.value = i;
      button.classList.add("btn");
      button.classList.add("btn-outline-light");
      button.classList.add("fontSize");
      button.innerText = "Togli dal carello";
      button.addEventListener("click",function(){
        localStorage.removeItem(this.value);
        localStorage.removeItem("titolo"+this.value);
        localStorage.removeItem("prezzo"+this.value);
        const divr = document.getElementById(i);
        divr.remove();
        cont--;
        if(cont==0)
        {
          const a = document.getElementById("acquista");
          a.hidden = true;
         
          let img = document.createElement("img");
          let p = document.createElement("h1");
          let div = document.createElement("div");
          p.innerText = "Il carello è vuoto... Riempilo";
          img.src = "img/logo/cartello_vuoto1.2.png";
          img.classList.add("img-fluid");

          div.classList.add("col");
          div.classList.add("container");
          div.classList.add("col-8");
          div.classList.add("d-flex")
          div.classList.add("flex-column");
          div.classList.add("align-items-center");


          div.appendChild(img);
          div.appendChild(p);
          demo.appendChild(div);
        }
      })
      a.href = localStorage.getItem("a"+i);
      img.src = localStorage.getItem(i);
      div.id = i;
      
      divm.classList.add("flex-row");
      div.classList.add("flex-column");
      div.classList.add("col-lg-4");

      div.classList.add("mt-5");
      div.classList.add("col-md-6");
      a.classList.add("d-flex");
      a.classList.add("justify-content-center");
      div.classList.add("d-flex");
      img.classList.add("img-fluid");
      img.classList.add("resize");
      img.classList.add("mb-4");
      divm.appendChild(a);
      divm.appendChild(p1);
      divm.appendChild(p2);
      div.appendChild(divm);
      div.appendChild(button);
      a.appendChild(img);
      demo.appendChild(div);
      cont++;
    }
  }
  if(cont==0)
  {
    const a = this.document.getElementById("acquista");
    a.hidden = true;
    let img = document.createElement("img");
    let p = document.createElement("h1");
    let div = document.createElement("div");
    p.innerText = "Il carello è vuoto... Riempilo";
    img.src = "img/logo/cartello_vuoto1.2.png";
    img.classList.add("img-fluid");
    
    div.classList.add("col");
    div.classList.add("container");
    div.classList.add("col-8");
    div.classList.add("d-flex")
    div.classList.add("flex-column");
    div.classList.add("align-items-center");
    
    
    div.appendChild(img);
    div.appendChild(p);
    demo.appendChild(div);
    
  }
  else{
    const a = this.document.getElementById("acquista");
    a.hidden = false;
  }
 
});
