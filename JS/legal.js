function showElementBlog() {
    const check = document.querySelector('.checkbox-desplegable');
    if (check.checked === true) {
        document.querySelector('.cuadro-desplegable-detras').style.display = 'block';
        document.querySelector('.fondo-desplegable').style.display = 'block';
    } else {
        document.querySelector('.cuadro-desplegable-detras').style.display = 'none';
        document.querySelector('.fondo-desplegable').style.display = 'none';
    }
}

function showElementBlog2() {
    const check = document.querySelector('.two');
    if (check.checked === true) {
        document.querySelector('.dos').style.display = 'block';
        document.querySelector('.dos-fondo').style.display = 'block';
    } else {
        document.querySelector('.dos').style.display = 'none';
        document.querySelector('.dos-fondo').style.display = 'none';
    }
}





