var cover = document.getElementById("cover");
var textResult = document.getElementById("textResult");
var result = document.getElementById("TextoResultado");
var botonEncriptar = document.getElementById("botonEncriptar");
var botonDesencriptar = document.getElementById("botonDesencriptar");
var botonCopiar = document.getElementById("botonCopiar");

if (botonEncriptar != null) {
    botonEncriptar.addEventListener("click", encriptar);
    botonEncriptar.addEventListener("click", auto_height);
}

function encriptar() {
    const textoBase = document.getElementById("TextoBase").value.toLowerCase();
    var texto = textoBase.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    var str = textoBase.trim();

    if (textoBase === texto && str != "") {
        var encriptado = textoBase.replace(/e/img, "enter");
        var encriptado = encriptado.replace(/i/img, "imes");
        var encriptado = encriptado.replace(/a/img, "ai");
        var encriptado = encriptado.replace(/o/img, "ober");
        var encriptado = encriptado.replace(/u/img, "ufat");

        result.value = encriptado;
        cover.style.display = "none";
        textResult.style.display = "flex";
    } else {
        cover.style.display = "flex";
        textResult.style.display = "none";
        if (str != "") {
            alert("Solo se permiten letras minusculas y sin acentos");
        }
    }
}

if (botonDesencriptar != null) {
    botonDesencriptar.addEventListener("click", desencriptar);
    botonDesencriptar.addEventListener("click", auto_height);
}


function desencriptar() {
    const textoBase = document.getElementById("TextoBase").value.toLowerCase();
    var texto = textoBase.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    var str = textoBase.trim();

    if (textoBase == texto && str != "") {
        var desencriptado = textoBase.replace(/ufat/img, "u");
        var desencriptado = desencriptado.replace(/ober/img, "o");
        var desencriptado = desencriptado.replace(/ai/img, "a");
        var desencriptado = desencriptado.replace(/imes/img, "i");
        var desencriptado = desencriptado.replace(/enter/img, "e");

        result.value = desencriptado;
        cover.style.display = "none";
        textResult.style.display = "flex";
    } else {
        cover.style.display = "flex";
        textResult.style.display = "none";
        if (str != "") {
            alert("Solo se permiten letras minusculas y sin acentos");
        }
    }
}

function auto_height() {
    result.style.height = "5px";
    result.style.height = (result.scrollHeight) + "px";
}

if (botonCopiar != null) {
    botonCopiar.addEventListener("click", copiar);
}

function copiar() {
    var texto = document.getElementById("TextoResultado");
    texto.select();
    navigator.clipboard.writeText(texto.value);;
}