document.getElementById('mostrarFotoBtn').addEventListener('click', function () {
    const fotoContainer = document.getElementById('fotoContainer');
    if (fotoContainer.style.display === 'none') {
        fotoContainer.style.display = 'block';
    } else {
        fotoContainer.style.display = 'none';
    }
});