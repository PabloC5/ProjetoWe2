
window.onload = function(){
    'use strict';
    if (window.confirm('voce esta preparado para ver as melhores fotos da sua vida?')) {
        alert('então seja bem vindo');
    }else{
        window.open('https://br.pinterest.com/marisecunha/fotos-de-paisagens/');
    }
};

// import { createClient } from 'pexels';

// const client = createClient('563492ad6f91700001000001b2e9ef9b55be4653a6684072c4b6238e');

// const query = 'Nature';

// client.photos.search({ query, per_page: 1 }).then(photos => {});
// All requests made with the client will be authenticated