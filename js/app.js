
//declaracion de variables globales

let btnEncriptar = document.querySelector('.boton-encriptar');
let btnDesencriptar = document.querySelector('.boton-desencriptar');
let muneco = document.querySelector('.caja-muneco');
let mensaje = document.querySelector('.mensaje');
let res = document.querySelector('.resultado');


btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;

function encriptar() {
    ocultarAdelante();
    let cajaTexto = recuperarTexto();
    res.textContent = encriptarTexto(cajaTexto);
}

function desencriptar() {
    ocultarAdelante();
    let cajaTexto = recuperarTexto();
    res.textContent = desencriptarTexto(cajaTexto);
}

function recuperarTexto() {
    let cajaTexto = document.querySelector('.caja');
    return cajaTexto.value;
}

function ocultarAdelante() {
    muneco.classList.add('ocultar');
    mensaje.classList.add('ocultar');
}


function encriptarTexto(mensaje) {
    let texto = mensaje;
    let textoFinal = '';

    
    const mayusculas = {
        "upper": /^[A-Z0-9 ]+$/
    }

    if (mayusculas.upper.test(texto)) {
        alert('Solo letras minusculas y sin acentos');
    
        return;
    }


    for (let i = 0; i < texto.length; i++) {

        if(texto[i] == 'a') {
            textoFinal = textoFinal + 'ai';
        }

        else if(texto[i] == 'e') {
            textoFinal = textoFinal + 'enter';
        }

        else if(texto[i] == 'i') {
            textoFinal = textoFinal + 'imes';
        }

        else if(texto[i] == 'o') {
            textoFinal = textoFinal + 'ober';
        }

        else if(texto[i] == 'u') {
            textoFinal = textoFinal + 'ufat';
        }

        else {
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}

function desencriptarTexto(mensaje) {
    let texto = mensaje;
    let textoFinal = '';

    const mayusculas = {
        "upper": /^[A-Z0-9 ]+$/
    }

    if (mayusculas.upper.test(texto)) {
        alert('Solo letras minusculas y sin acentos');
        return;
    }

    for (let i = 0; i < texto.length; i++) {

        if(texto[i] == 'a') {
            textoFinal = textoFinal + 'a';
            i = i + 1;
        }

        else if(texto[i] == 'e') {
            textoFinal = textoFinal + 'e';
            i = i + 4;
        }

        else if(texto[i] == 'i') {
            textoFinal = textoFinal + 'i';
            i = i + 3;
        }

        else if(texto[i] == 'o') {
            textoFinal = textoFinal + 'o';
            i = i + 3;
        }

        else if(texto[i] == 'u') {
            textoFinal = textoFinal + 'u';
            i = i + 3;
        }

        else {
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}

const btnCopiar = document.querySelector('.boton-copiar');
btnCopiar.addEventListener('click', copiar = () => {
    let contenido = document.querySelector('.resultado').textContent;
    navigator.clipboard.writeText(contenido);
    console.log('click');
});