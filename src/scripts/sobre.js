const buttonAnuncio = document.querySelector('.botao');
const anuncioClose = document.querySelector('.anuncio');

let disableFunction = () => {
    'use strict';
    anuncioClose.classList.add('desativa');
    buttonAnuncio.classList.add('desativa');
};

let temp;
function fechar() {
    'use strict';
    alert('clique no ok e espere três segundos');
    temp = setTimeout(disableFunction, 3000);
}