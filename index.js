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

//imagens

document.addEventListener('DOMContentLoaded', function() {
    const imagem = document.getElementById('imagem-galeria');
    const btnProximo = document.getElementById('btn-proximo');
    const btnAnterior = document.getElementById('btn-anterior');

    const galeria = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkQOawFQw83UNT1lWgiMjH7DdNMFdXfNF_xA&s",
        "https://racismoambiental.net.br/wp-content/uploads/2020/05/sonia-guajajara-brasilia.jpg",
        "https://osbrasisesuasmemorias.com.br/wp-content/uploads/2024/06/Sonia_Guajajara-768x512.jpeg",
        "https://images.ecycle.com.br/wp-content/uploads/2024/03/12155434/52344650623_faace42b7f_k.jpg.webp",
        "https://campanhademulher.org/files/2018/08/32530707_1817892191603761_7127587773485154304_n.jpg",
        "https://agenciacenarium.com.br/wp-content/uploads/2022/12/whatsapp-image-2022-12-29-at-103951.jpeg",
        "https://s2-oglobo.glbimg.com/xRB_MDW9N7Dk02YjTialzYBi4go=/0x0:507x411/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2022/i/B/Y4MnO4R3a3a1noP3kJbA/sonniaguajajara.png"
    ];

    let indiceAtual = 0;

    function atualizarGaleria() {
        imagem.src = galeria[indiceAtual];
    }

    btnProximo.addEventListener('click', function() {
        indiceAtual = (indiceAtual + 1) % galeria.length;
        atualizarGaleria();
    });

    btnAnterior.addEventListener('click', function() {
        indiceAtual = (indiceAtual - 1 + galeria.length) % galeria.length;
        atualizarGaleria();
    });

    // mostra a primeira imagem ao carregar
    atualizarGaleria();
});