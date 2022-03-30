function showElementInfo2() {
    const check = document.querySelector('.b-infor-cvc');
    if (check.checked === true) {
        document.querySelector('.infor-full-cvc').style.display = 'block';
    } else {
        document.querySelector('.infor-full-cvc').style.display = 'none';
    }
}

function showElementTarjet() {
    const check = document.querySelector('.b-filldata');
    if (check.checked === true) {
        document.querySelector('.cuadro-border-tarjet').style.visibility = 'visible';
    } else {
        document.querySelector('.cuadro-border-tarjet').style.visibility = 'hidden';
    }
}

function Edit() {
    var x = document.getElementById("label-contenido");

    if (x.innerHTML === "Aceptar") {
        x.innerHTML = "Editar";
    } else {
        x.innerHTML = "Aceptar";
    }
}

function showElementFilldata() {
    const check = document.querySelector('.b-filldata');
    if (check.checked === true) {
        document.querySelector('.filldata-full').style.display = 'block';
    } else {
        document.querySelector('.filldata-full').style.display = 'none';
    }
}

