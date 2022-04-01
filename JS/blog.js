function showElementBlog() {
    const check = document.querySelector('.desplegable');
    if (check.checked === true) {
        document.querySelector('.cuadro-desplegable-detras').style.display = 'block';
    } else {
        document.querySelector('.cuadro-desplegable-detras').style.display = 'none';
    }
}