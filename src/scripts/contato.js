
var up = document.getElementById('subject');

let formInit = document.getElementById('contato');

let inputSubject = document.forms[0].subject;

let radioValid = document.getElementById('inlineRadio');

// console.log("teste: ",inputSubject.value)
let myButton = document.getElementsByTagName('button')[0];

// console.log(myButton)

$(document).ready(function(){
    $('.cellPhones').mask('(00) 00000-0000');
    $('#subject').keydown(function(event) {
        if (event.keyCode == 9) {
            alert('opa calma la complete o formulario ai!!!')
        }
    })
})

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

const buttonAnuncio = document.querySelector('.botao');
const anuncioClose = document.querySelector('.anuncio2');

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

class Dados{
    constructor(nome, email, telefone, assunto, textA){
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.assunto = assunto;
        this.textA = textA;
    }

    get jsonT() {
        let dadosForm = {
            NOME : this.nome,
            EMAIL : this.email,
            TELEFONEFONE : this.telefone,
            ASSUNTO : this.assunto,
            TEXT: this.textA
        }

        return JSON.stringify(dadosForm);
    }
}

$(myButton).on('click', function(event){
    event.preventDefault();
        let jsonInicial = new Dados($('#inputNameV').val(), $('#inputEmail1').val(), 
                                    $('.cellPhones').val(), $('#subject').val(), 
                                    $('#textArea').val());
        let jsonFinal = jsonInicial.jsonT;
        console.log(JSON.parse(jsonFinal));
        localStorage.setItem('dados', jsonFinal)
})

// console.log(validaEmail);
// console.log(document.forms[0].inputNameV)
// console.log(document.getElementsByName("inlineRadioOptions"))


