//Apartado 1
function validateDate(textos) {
  var fechaRegex = /\b\d{2}\/\d{2}\/\d{4}\b/;
  let fechaEntonctrada = textos.match(fechaRegex);
  if (fechaEntonctrada !== null) {
    console.log('La cadena "' + fechaEntonctrada[0] + '" es una fecha válida.');
  } else {
    console.log("La cadena no contiene una fecha válida.");
  }
}
var texto = "Nací el 05/04/1982 en Donostia.";
validateDate(texto);

//Apartado 2
function validateEmail(texto) {
  if (
    /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email)
  ) {
    return true;
  } else {
    return false;
  }
}
let email = prompt("Ingresa tu email y te diré si es válido");
if (validateEmail(email)) {
  alert("Se ingresó un email correcto");
} else {
  alert("El formato de email no es correcto");
}

//Apartado 3
function escapeHTML(text) {
  var replacements = [
    ["&", "&amp;"],
    ['"', "&quot;"],
    ["<", "&lt;"],
    [">", "&gt;"],
  ];
  replacements.forEach(x => {
    text = text.replace(x[1], x[0]);
  });
  alert(text);
}

escapeHTML("Hola Ripley &amp; Nela");

//Apartado 4

let exp = /(\w+)\s(\w+)/;
let cadena = "John Smith";
let newCadena = cadena.replace(exp, "$2, $1");
alert(newCadena);

//Apartado 5
let html =
  "<p>Este es un <script>alert('mensaje que deberia desaparecer');</script>ejemplo.</p>";
//let cleanHtml = html.replace( /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");
console.log(cleanHtml);
