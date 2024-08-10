const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    }
]

cardArray.sort(() => 1 - Math.random())
// console.log(cardArray)

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardChosen = []
let cardsChosenIDs = []
const cardsWon = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.append(card)
    }
}

createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('img')

    const optionOneID = cardsChosenIDs[0]
    const optionTwoID = cardsChosenIDs[1]

    if (optionOneID == optionTwoID) {
        cards[optionOneID].setAttribute('src', 'images/blank.png')
        cards[optionTwoID].setAttribute('src', 'images/blank.png')
        alert('You have clicked on the same card!!!')
    }

    else if (cardChosen[0] == cardChosen[1]) {
        cards[optionOneID].setAttribute('src', 'images/white.png')
        cards[optionTwoID].setAttribute('src', 'images/white.png')
        cards[optionOneID].removeEventListener('click', flipCard)
        cards[optionTwoID].removeEventListener('click', flipCard)
        cardsWon.push(cardChosen)
    }
    else {
        cards[optionOneID].setAttribute('src', 'images/blank.png')
        cards[optionTwoID].setAttribute('src', 'images/blank.png')
    }

    resultDisplay.textContent = cardsWon.length
    cardChosen = []
    cardsChosenIDs = []

    if (cardsWon.length == cardArray.length / 2) {
        resultDisplay.textContent = 'Congrats you found them all'
    }

}

function flipCard() {
    const cardID = this.getAttribute('data-id')
    cardChosen.push(cardArray[cardID].name)
    cardsChosenIDs.push(cardID)
    console.log(cardChosen)
    console.log(cardsChosenIDs)
    this.setAttribute('src', cardArray[cardID].img)
    if (cardChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}