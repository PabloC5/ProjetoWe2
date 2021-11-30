
var up = document.getElementById('InputName');

let formInit = document.getElementById('contato');

let inputName1 = document.getElementById('InputName');

// função para deixar a primeira letra do nome em maiusculo com onblur
function nameUp() {
    'use strict';
    up.value = up.value[0].toUpperCase() +  up.value.substr(1);
}

// console.log("teste: ",inputName1.value)
let myButton = document.getElementsByTagName('button')[0];


// console.log(myButton)


myButton.onclick = function(event) {
    // event = arguments[0]
    'use strict';
    alert('Caso queira saber se voce segurou o ctrl enquanto apertava o botão a resposta é: ' + 
            event.ctrlKey);
};


formInit.onblur = () =>{
        if (inputName1.value === "") {
            inputName1.classList.add('erros')
        }else {
            inputName1.classList.remove('erros')
        }
}