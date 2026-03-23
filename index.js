document.addEventListener('DOMContentLoaded', function() {
    const btnCuriosidade = document.getElementById('btn-curiosidade');
    const curiosidadeTexto = document.getElementById('curiosidade-texto');

    if (btnCuriosidade && curiosidadeTexto) {
    btnCuriosidade.addEventListener('click', function() {
        if (curiosidadeTexto.style.display === 'none') {
    curiosidadeTexto.style.display = 'block';
    btnCuriosidade.textContent = 'Esconder Curiosidade';
        } else {
    curiosidadeTexto.style.display = 'none';
    btnCuriosidade.textContent = 'Mostrar Curiosidade';
            }
        });
    }
});