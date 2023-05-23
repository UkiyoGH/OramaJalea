document.getElementById("botonMostrarDiv").addEventListener("click", function() {
    var div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `
      <img src="images/dark_blue_jelly-removebg-preview.png" alt="" class="imagen">
      <p class="name">Jalea Azul</p>
      <button class="nada">Eliminar</button>
    `;
    
    var contenedor = document.getElementById("contenedor");
    contenedor.appendChild(div);
  });