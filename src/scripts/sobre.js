const buttonAnuncio = document.querySelector('.botao')
const anuncioClose = document.querySelector('.anuncio')

let disableFunction = () => {
    anuncioClose.classList.add("desativa")
    buttonAnuncio.classList.add("desativa")
}


function fechar() {
    alert("clique no ok e espere três segundos")
    temp = setTimeout(disableFunction, 3000)
}