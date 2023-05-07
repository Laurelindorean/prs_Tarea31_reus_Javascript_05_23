const botonImagen = document.querySelector("#contenedor-fotos");
const principal = document.querySelector("#principal");
const footer = document.querySelector("#footer");

botonImagen.addEventListener("click", e => {
  e.preventDefault();
  maximizarFoto(e);
});

const maximizarFoto = e => {
  principal.innerHTML = e.target.outerHTML;
  footer.innerHTML = e.target.alt;
};
