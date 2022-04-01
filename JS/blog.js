function showElementBlog() {
    const check = document.querySelector('.checkbox-desplegable');
    if (check.checked === true) {
        document.querySelector('.cuadro-desplegable-detras').style.display = 'block';
    } else {
        document.querySelector('.cuadro-desplegable-detras').style.display = 'none';
    }
}

function showElementBoton(){

    function showElementDown() {
        const check = document.querySelector('.checkbox-desplegable');
        if (check.checked === true) {
            document.querySelector('.down').style.display = 'none';
        } else {
            document.querySelector('.down').style.display = 'block';
        }
    }

    function showElementUp() {
        const check = document.querySelector('.checkbox-desplegable');
        if (check.checked === true) {
            document.querySelector('.up').style.display = 'block';
        } else {
            document.querySelector('.up').style.display = 'none';
        }
    }

}




