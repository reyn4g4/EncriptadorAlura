

function encripta() {

    textoInput = document.getElementById('texto-encriptar').value;

    document.getElementById('rec-1').setAttribute('hidden', 'true');
    document.getElementById('rec-2').removeAttribute('hidden');

    document.getElementById('area-encriptado').value = encriptador(textoInput);

    return;
}

function desencripta() {

    textoInput2 = document.getElementById('texto-encriptar').value;

    document.getElementById('area-encriptado').value = desencriptador(textoInput2);

    return;
}

function copiar() {
    navigator.clipboard.writeText(document.getElementById('area-encriptado').value);
    return alert("Texto copiado");
}



function encriptador(txt) {

    let encriptado = txt
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    return encriptado;
}

function desencriptador(txt) {
    let desencriptado = txt
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    return desencriptado;
}






