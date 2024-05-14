import dotenv from 'dotenv';
dotenv.config();

function obtenerParametroDeURL(nombreParametro) {
    const queryString = window.location.search;
    const parametros = new URLSearchParams(queryString);
    const valorParametro = parametros.get(nombreParametro);
    return valorParametro;
}

function cambiarSrcIframeSegunParametro() {
  const urlApp = process.env.URL_APP;
  const urlLogin = process.env.URL_LOGIN; 
    const page = obtenerParametroDeURL('p');
    const user = obtenerParametroDeURL('u');
    const iframe = document.getElementById('iframeBody');
    if (page === "App") {
        iframe.src = `${urlApp}?u=${user}`; 
        ocultarParametros();
    } else {
      iframe.src = urlLogin; 
        console.log('No se proporcionó ningún parámetro válido, se redirege al login.');
        ocultarParametros();
    }
}

window.addEventListener('DOMContentLoaded', cambiarSrcIframeSegunParametro);


function ocultarParametros() {
    if (window.history.replaceState && window.location.search) {
        let nuevaUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
        window.history.replaceState({}, document.title, nuevaUrl);
    }
}
