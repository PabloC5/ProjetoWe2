
const alternaTema = document.querySelector(
    '.theme-switch input[type="checkbox"]'
);

// const logoFinal = document.querySelector('.logoTeste')
// console.log(document.getElementsByName("test")[0])
const logoFinal = document.getElementsByName('logoF')[0];

// "pego" o tema atual do navegador e guardo no local storage com o getItem
const temaAtual = localStorage.getItem('theme');
  
(function(){
  'use strict';
  if (temaAtual) {
    // Defina o atributo body data-theme para corresponder ao item de armazenamento local 
    document.documentElement.setAttribute('data-theme', temaAtual);
    localStorage.setItem(logoFinal.src = './img/logo-final.png', 'dark');
  
    // Se o tema atual for dark, verifique a alternância do tema
    if (temaAtual === 'dark') {
      alternaTema.checked = true;
      localStorage.setItem(logoFinal.src = './img/logo-branco.png', 'light');

    }
  }
})();
  
function switchTheme(e) {
  // target para que todo o html capture o evento
  'use strict';
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    localStorage.setItem(logoFinal.src = './img/logo-branco.png', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    localStorage.setItem(logoFinal.src = './img/logo-final.png', 'light');
  }
}
  // adicionando o evento change ao botão do darkMode
alternaTema.addEventListener('change', switchTheme, false);
  