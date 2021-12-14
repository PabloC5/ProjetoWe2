
window.onload = function(){
    'use strict';
    if (window.confirm('voce esta preparado para ver as melhores fotos da sua vida?')) {
        alert('então seja bem vindo');
    }else{
        window.open('https://br.pinterest.com/marisecunha/fotos-de-paisagens/');
    }
};

(function() {
    var d = document, s = d.createElement('script');
    s.src = 'https://balmung-project-1.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
})();