function showElement() {
    const check = document.querySelector('.b-modal');
    if (check.checked === true) {
        document.querySelector('.modal-full').style.display = 'block';
    } else {
        document.querySelector('.modal-full').style.display = 'none';
    }
}

function showElementInfo() {
    const check = document.querySelector('.b-infor');
    if (check.checked === true) {
        document.querySelector('.infor-full').style.display = 'block';
    } else {
        document.querySelector('.infor-full').style.display = 'none';
    }
}
