function handleSubmit(e) {
  e.preventDefault();
}

function handleLoad() {
  var textarea = document.getElementById("textbox");
  textarea.value = "";
  textarea.focus();
}

function handleChange() {
  var textarea = document.getElementById("textbox").value.trim();
  if (textarea === "") {
    toggle();
  }
}

function copiarTextoEncriptado() {
  var texto = document.getElementById("resultado").innerText;

  navigator.clipboard
    .writeText(texto)
    .then(function () {
      console.log("¡Datos copiados al portapapeles!");
    })
    .catch(function (error) {
      console.error("Error al copiar datos: ", error);
    });

  var textarea = document.getElementById("textbox");
  textarea.value = "";
  textarea.focus();
}

function mpstraResultado() {
  var div1 = document.getElementById("sin-incriptar");
  var div2 = document.getElementById("texto-encriptado");
  div1.classList.add("hidden");
  div2.classList.remove("hidden");
}

function encriptarTexto() {
  var texto = document.getElementById("resultado");
  var textarea = document.getElementById("textbox");
  var inputText = textarea.value.trim();
  var textoEncriptado = cifradoCesar(inputText, 3);
  texto.innerHTML = textoEncriptado;
  mpstraResultado();
}

function desencriptarTexto() {
  var texto = document.getElementById("resultado");
  var textarea = document.getElementById("textbox");
  var textoEncriptado = textarea.value.trim();
  var textoDesencriptado = cifradoCesar(textoEncriptado, -3);
  texto.innerHTML = textoDesencriptado.trim();
}

function cifradoCesar(texto, desplazamiento) {
  var resultado = "";

  for (var i = 0; i < texto.length; i++) {
    var caracter = texto[i];
    var codigoAscii = caracter.charCodeAt();

    if (codigoAscii >= 65 && codigoAscii <= 90) {
      codigoAscii = ((((codigoAscii - 65 + desplazamiento) % 26) + 26) % 26) + 65;
    } else if (codigoAscii >= 97 && codigoAscii <= 122) {
      codigoAscii = ((((codigoAscii - 97 + desplazamiento) % 26) + 26) % 26) + 97;
    }

    resultado += String.fromCharCode(codigoAscii);
  }

  return resultado;
}
