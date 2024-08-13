var textInput = document.querySelector("#input-texto");

function criptografar() {

    var texto = textInput.value;

    var Criptografar = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

    var validarTexto = /[A-ZÀ-ÖØ-öø-ÿ!@#$%^&*'()-_+=§,.?":{}|<>]/;

    if (validarTexto.test(texto)) {

        alert("Digite apenas letras minúsculas, sem acento e sem caracteres especiais.");

        textInput.value = "";

    } else {

        document.getElementById('output').innerHTML = '<textarea readonly id="output-texto">' + Criptografar + '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>';

    }
}

function descriptografar() {

    var texto = textInput.value;

    var Descriptografar = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    var validarTexto = /[A-ZÀ-ÖØ-öø-ÿ!@#$%^&*'()-_+=§,.?":{}|<>]/;

    if (validarTexto.test(texto)) {

        alert("Digite apenas letras minúsculas, sem acento e sem caracteres especiais.");

    } else {

        document.getElementById('output').innerHTML = '<textarea readonly id="output-texto">' + Descriptografar + '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'

    }
}

function copiar() {

    var textoCopiado = document.getElementById('output-texto');

    textoCopiado.select();
    document.execCommand('copy');
}