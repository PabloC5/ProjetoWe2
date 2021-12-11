
var up = document.getElementById('subject');

let formInit = document.getElementById('contato');

let inputSubject = document.forms[0].subject;

let radioValid = document.getElementById('inlineRadio');

// console.log("teste: ",inputSubject.value)
let myButton = document.getElementsByTagName('button')[0];


// console.log(myButton)

$(document).ready(function(){
    $('.cellPhones').mask('(00) 00000-0000');
    $(myButton).on('click',function(event) {
        // event = arguments[0]
        'use strict';
        window.alert('Caso queira saber se voce segurou o ctrl enquanto apertava o botão a resposta é: ' + 
                event.ctrlKey);
    })
})
// myButton.onclick = function(event) {
//     // event = arguments[0]
//     'use strict';
//     window.alert('Caso queira saber se voce segurou o ctrl enquanto apertava o botão a resposta é: ' + 
//             event.ctrlKey);
// };

function validaCampos() {
    'use strict';
    if (inputSubject.value === '') {
        $(inputSubject).addClass('erros');
    }else {
        // mudança de local do upperCase
        $(inputSubject).removeClass('erros');
    }
}

function upC() {
    'use strict';
    up.value = up.value[0].toUpperCase() +  up.value.substr(1);
}

function validaRadio() {
    'use strict';
    let isCheck = false;
    let elementos = document.querySelectorAll('[name=inlineRadioOptions]');
    // elementos.forEach(element => {
    //     console.log(element)

    // });

    for (const i in elementos) {
        if (elementos[i].checked) {
            isCheck = true;
            return true;
        }
    }
    if(!isCheck){
        alert('Por favor marcar as opções de sim ou não!!!');
            return false;
    }
}

var inputNome = document.getElementById('inputEmail1');

inputNome.addEventListener('invalid', function (event) {
    'use strict';
    if (inputNome.validity.typeMismatch) {
        inputNome.setCustomValidity('favor inserir um email valido com @');
    } 
    else {
        inputNome.setCustomValidity('');
    }
});

// console.log(validaEmail);
// console.log(document.forms[0].inputNameV)
// console.log(document.getElementsByName("inlineRadioOptions"))


