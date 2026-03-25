# Landing Page - Sônia Guajajara  

A **Landing Page - Sônia Guajajara** é uma aplicação web desenvolvida com **HTML, CSS e JavaScript** que apresenta informações sobre a trajetória, conquistas e desafios de Sônia Guajajara, uma importante liderança indígena no Brasil.  

O projeto tem como objetivo informar, conscientizar e, ao mesmo tempo, praticar conceitos fundamentais do desenvolvimento web, como estruturação de páginas, estilização e interatividade.  

---

## Índice  

* [Funcionalidades](#funcionalidades)  
* [Tecnologias](#tecnologias)  
* [Estrutura](#estrutura)  
* [Como funciona](#como-funciona)  
* [Autor(a)](#autora)  

---

## Funcionalidades  

- Exibição de **biografia** e informações relevantes  
- Lista de **principais realizações**  
- Seção de **desafios enfrentados**  
- Linha do tempo com **datas importantes**  
- Botão para exibir **curiosidades aleatórias**  
- **Galeria de imagens interativa** com navegação entre fotos  

---

## Tecnologias  

- **HTML5**  
- **CSS3**  
- **JavaScript**  
- **Git**  
- **GitHub**  

---

## Estrutura  

A aplicação é dividida em três partes principais:  

### 1. HTML (Estrutura da Página)  

O HTML organiza todo o conteúdo da aplicação em seções bem definidas, como biografia, realizações e galeria.  

---

```html
<section id="curiosidades">
  <h2>Curiosidades</h2>
  <p id="curiosidade-texto" style="display: none;"></p>
  <button id="btn-curiosidade">Mostrar Curiosidade</button>
</section>
```

Tecnicamente:

- Uso de IDs únicos para permitir manipulação via JavaScript
- Estrutura semântica com <section>
- Separação entre conteúdo e comportamento

---

### 2. CSS (Estilização e Layout)

Responsável pela aparência visual da página.

---

```css
main section {
  padding: 20px;
  margin-bottom: 15px;
  background: #fff;
  border-radius: 5px;
}
```
Tecnicamente:

- Uso de padding e margin para espaçamento
- border-radius e box-shadow para melhorar o visual
- Uso de :hover para interação com o usuário

---

### 3. JavaScript (Lógica da Aplicação)

O JavaScript adiciona interatividade à página.

---

```js
btnCuriosidade.addEventListener('click', function() {
    const indice = Math.floor(Math.random() * curiosidades.length);
    curiosidadeTexto.textContent = curiosidades[indice];
    curiosidadeTexto.style.display = 'block';
});
```

Explicação técnica:

- addEventListener captura o clique
- Math.random() gera um número aleatório
- Math.floor() transforma em inteiro
- Atualiza o conteúdo com textContent
- Mostra o elemento alterando display

---

### Galeria de imagens

```js
function atualizarGaleria() {
    imagem.src = galeria[indiceAtual];
}
```

Explicação técnica:

- Atualiza o atributo src da imagem
- Usa um array como fonte de dados
- Controla a imagem atual com um índice

### Navegação

```js
indiceAtual = (indiceAtual + 1) % galeria.length;
```

Explicação técnica:

- O operador % cria um loop
- Evita sair do tamanho do array
- Permite navegação contínua

---

## Como funciona

1. O HTML monta a estrutura
2. O CSS aplica o estilo
3. O JavaScript adiciona interatividade
    - responde aos cliques
    - atualiza textos
    - troca imagens

## Autor(a)

Projeto desenvolvido por:

- Vivian Oliveira Almeida

Sob tutelagem e auxílio do professor:

- Symon Pereira de Morais