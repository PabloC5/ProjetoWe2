
var up = document.getElementById("InputName");

function myFunction() {
    up.value = up.value[0].toUpperCase() +  up.value.substr(1)
}


let myButton = document.querySelector('.btn')

myButton.onclick = function(event) {
    event = arguments[0]
    alert("Caso queira saber se voce segurou o ctrl enquanto apertava o botão a resposta é: " 
            + event.ctrlKey)
}