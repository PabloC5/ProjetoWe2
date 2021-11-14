const testeCard = document.querySelector('.card-deck')
const testeCard2 = document.querySelector('.card-deck2')
let nomeVisit = prompt("Ola qual o seu nome?")

alert(`ola ${nomeVisit} espero que goste do balmung project, aproveite!!!`)

// criação de objetos para gerar os cards apartir do javaScript
let novoCard = [{
        titulo: "Paisagem",
        imagem: src="img/foto-paisagem3.jpg",
        descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        data: "Last updated 3 mins ago",
    },
    {
        titulo: "Carro",
        imagem: src="img/carro2.jpg",
        descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem    Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        data: "Last updated 3 mins ago",
    },

    {
        titulo: "Cachorro",
        imagem: src="./img/cachorro2.jpg",
        descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        data: "Last updated 5 mins ago",
    }
]

let novoCard2 = [{
        titulo: "Paisagem",
        imagem: src="img/foto-paisagem2.jpg",
        descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        data: "o anderson não gosta de JAVA",
    },
    {
        titulo: "Carro",
        imagem: src="img/carro1.jpg",
        descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        data: "aooooooo",
    },

    {
        titulo: "Cachorro",
        imagem: src="./img/cachorro1.jpg",
        descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        data: "aooooooo",
    }
]

// função que ira que é chamada pelo evento onload sempre que a pagina recarregar
window.onload = function(){
    gerarCard(novoCard, testeCard)
    gerarCard(novoCard2, testeCard2)
}

// função que irei percorrer objetos e então irei criar os elementos la no html
function gerarCard(array, deck) {
    for (let index = 0; index < array.length; index++) {
        // cada const é uma tag html que crio aqui no js e depois passo para index.html
        const cardDiv1 = document.createElement("div")
        const cardImg = document.createElement("img")
        const cardH5 = document.createElement("h5")
        const cardP = document.createElement("p")
        const cardSmall = document.createElement("small")
        const cardDiv2 = document.createElement("div")
        const cardDiv3 = document.createElement("div")
        
        cardH5.innerHTML = array[index].titulo
        cardImg.setAttribute("src", array[index].imagem)
        cardP.innerHTML = array[index].descricao
        cardSmall.innerHTML = array[index].data
        
        cardDiv3.appendChild(cardSmall)
        cardDiv2.appendChild(cardH5)
        cardDiv2.appendChild(cardP)

        cardDiv1.appendChild(cardImg)
        cardDiv1.appendChild(cardDiv2)
        cardDiv1.appendChild(cardDiv3)

        cardDiv1.className = 'card' 
        cardImg.className = 'card-img-top tamanhoImg' 
        cardDiv2.className = 'card-body'
        cardH5.className = 'card-title'
        cardP.className = "card-text"
        cardDiv3.className = 'card-footer'
        cardSmall.className = 'text-muted'

        deck.appendChild(cardDiv1)
    
    }
}
