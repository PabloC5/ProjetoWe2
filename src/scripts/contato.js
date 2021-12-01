
var up = document.getElementById('InputName');

let formInit = document.getElementById('contato');

let inputName1 = document.getElementById('InputName');

let radioValid = document.getElementById('inlineRadio');

// função para deixar a primeira letra do nome em maiusculo com onblur
// function nameUp() {
//     'use strict';
//     up.value = up.value[0].toUpperCase() +  up.value.substr(1);
// }

// console.log("teste: ",inputName1.value)
let myButton = document.getElementsByTagName('button')[0];


// console.log(myButton)


// myButton.onclick = function(event) {
//     // event = arguments[0]
//     'use strict';
//     alert('Caso queira saber se voce segurou o ctrl enquanto apertava o botão a resposta é: ' + 
//             event.ctrlKey);
// };

function validaCampos() {
    if (inputName1.value === "") {
        inputName1.classList.add('erros')
    }else {
        up.value = up.value[0].toUpperCase() +  up.value.substr(1);
        inputName1.classList.remove('erros')
    }
}
// let iChecked = false
// formInit.onsubmit() = () => {
//     // let radios = document.getElementById('')
    
//     for (const e of radioValid) {
//         if (e.checked) {
//             iChecked = true
//         }
//     }
//     if (!iChecked) {
//         alert("teste")
//         return false
//     }
// }

function validaRadio() {
    let isCheck = false;
    let elementos = document.getElementsByName("inlineRadioOptions")
    // elementos.forEach(element => {
    //     console.log(element)

    // });

    for (const i in elementos) {
        if (elementos[i].checked) {
            isCheck = true;
            return true
        }else{
            alert("Por favor marcar as opções de sim ou não!!!")
            return false
        }
    }
}

var inputNome = document.getElementById('inputEmail1');

// validaEmail.addEventListener("blur", function(event) {
//     if (validaEmail.validity.typeMismatch) {
//         validaEmail.setCustomValidity("teste")
//     }else{
//         validaEmail.setCustomValidity("")

//     }
// })

inputNome.addEventListener("invalid", function (event) {
    if (inputNome.validity.typeMismatch) {
        inputNome.setCustomValidity("favor inserir um email valido com @");
    } 
    else {
        inputNome.setCustomValidity("");
    }
});

// console.log(validaEmail);
// console.log(document.forms[0].inlineRadio[0])
// console.log(document.getElementsByName("inlineRadioOptions"))


