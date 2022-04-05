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

function showElementBoton(){
        const check = document.querySelector('.checkbox-desplegable');
        if (check.checked === true) {
            document.querySelector('.icon-blog').classList.add('up');
        } else {
            document.querySelector('.icon-blog').classList.remove('up');
        }

}




