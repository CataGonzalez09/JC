
function abrirCarta() {
  const portada = document.getElementById("portada");
  const carta = document.getElementById("carta");

  portada.style.display = "none";
  carta.style.display = "block";
  
  const dibujo = carta.querySelector(".mini-plano svg");
  if (dibujo){
    dibujo.style.animation = "none";

    dibujo.querySelectorAll("g, text").forEach((elemento)=>{
        elemento.style.animation = "none";
    });
    void dibujo.getBoundingClientRect();
    
    dibujo.querySelectorAll("g").forEach((grupo)=>{
        grupo.style.animation = "";
    });

    dibujo.querySelectorAll("text").forEach((text)=>{
        texto.style.animation = "";
    });
    
    dibujo.style.animation = "";

  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function volverPortada() {
  const portada = document.getElementById("portada");
  const carta = document.getElementById("carta");

  carta.style.display = "none";
  portada.style.display = "flex";

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function mostrarSorpresa() {
  const mensaje = document.getElementById("mensajeSorpresa");
  const boton = document.getElementById("botonSorpresa");

  const estaOculto = mensaje.hidden;

  mensaje.hidden = !estaOculto;

  boton.setAttribute("aria-expanded", String(estaOculto));

  boton.innerHTML = estaOculto
    ? 'Cerrar mensaje secreto <span>↥</span>'
    : 'Descubrir mensaje secreto <span>✦</span>';
}
