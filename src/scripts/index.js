const testeCard = document.querySelector('.card-deck')
const testeCard2 = document.querySelector('.card-deck2')


let novoCard = [{
    titulo: "teste2",
    imagem: "lindos",
    descricao: "salve4",
    data: "o anderson não gosta de JAVA",
    
},
    {
        titulo: "teste",
        imagem: "salve carai",
        descricao: "testa essa coisa",
        data: "aooooooo",
    },

    {
        titulo: "teste",
        imagem: "salve carai",
        descricao: "testa essa coisa",
        data: "aooooooo",
    }
]


window.onload = function(){
    gerarCard(novoCard, testeCard)
    gerarCard(novoCard, testeCard2)
}

function gerarCard(array, deck) {
    for (let index = 0; index < array.length; index++) {
        const cardDiv1 = document.createElement("div")
        const cardImg = document.createElement("img")
        const cardH5 = document.createElement("h5")
        const cardP = document.createElement("p")
        const cardSmall = document.createElement("small")
        const cardDiv2 = document.createElement("div")
        const cardDiv3 = document.createElement("div")
        
        cardH5.innerHTML = array[index].titulo
        cardImg.setAttribute("scr", array[index].imagem)
        cardP.innerHTML = array[index].descricao
        cardSmall.innerHTML = array[index].data
        
        cardDiv3.appendChild(cardSmall)
        cardDiv2.appendChild(cardH5)
        cardDiv2.appendChild(cardP)

        cardDiv1.appendChild(cardImg)
        cardDiv1.appendChild(cardDiv2)
        cardDiv1.appendChild(cardDiv3)

        // taskSection.className = 'task-card__task-section';
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