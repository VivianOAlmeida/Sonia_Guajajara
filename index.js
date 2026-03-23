document.addEventListener('DOMContentLoaded', function() {
    const btnCuriosidade = document.getElementById('btn-curiosidade');
    const curiosidadeTexto = document.getElementById('curiosidade-texto');

    const curiosidades = [
        "Ela pertence ao povo Guajajara (Tenetehara), um dos maiores povos indígenas do Brasil.",
        "Ela foi a primeira indígena a se tornar ministra no Brasil.",
        "Sônia já foi considerada uma das 100 pessoas mais influentes do mundo pela revista Time.",
        "Ela é formada em Letras e também em Enfermagem.",
        "Foi candidata à vice-presidência do Brasil em 2018.",
        "É uma das principais vozes indígenas na luta contra as mudanças climáticas.",
        "Atua há anos na defesa dos territórios indígenas e da Amazônia."
    ];

    if (btnCuriosidade && curiosidadeTexto) {
        btnCuriosidade.addEventListener('click', function() {

            // sorteia uma curiosidade
            const indice = Math.floor(Math.random() * curiosidades.length);
            curiosidadeTexto.textContent = curiosidades[indice];

            // mostra o texto (sem alternar esconder/mostrar)
            curiosidadeTexto.style.display = 'block';
        });
    }
});