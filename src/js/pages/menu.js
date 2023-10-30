import css from '../../styles/menu.css'
import borek from '../../img/borek.jpg'
import simit from '../../img/simit.jpg'
import pogaca from '../../img/pogaca.jpg'
import baklava from '../../img/baklava.jpg'
import revani from '../../img/revani.jpg'
import coffee from '../../img/coffee.jpg'
import cappuccino from '../../img/cappuccino.jpg'
import latte from '../../img/latte.jpg'
import icedcoffee from '../../img/icedcoffee.jpg'
import cay from '../../img/cay.jpg'


const bakerySelection = {
  Borek: {
    description: "Flaky pastries with savory fillings.",
    imagePath: borek
  },
  Simit: {
    description: "Sesame-crusted bread rings.",
    imagePath: simit
  },
  Pogaca: {
    description: "Soft mini bread rolls with various fillings.",
    imagePath: pogaca
  },
  Baklava: {
    description: "Classic pastry with honey and nuts.",
    imagePath: baklava
  },
  Revani: {
    description: "Semolina cake with sweet syrup.",
    imagePath: revani
  }
};

const coffeeSelection = {
  TurkishCoffee: {
    description: "Rich and aromatic.",
    imagePath: coffee
  },
  Cappuccino: {
    description: "Espresso with milk foam.",
    imagePath: cappuccino
  },
  Latte: {
    description: "Espresso with steamed milk.",
    imagePath: latte
  },
  IcedCoffee: {
    description: "Chilled coffee with syrups.",
    imagePath: icedcoffee
  },
  TurkishTea: { 
    description: "Strong, black tea.",
    imagePath: cay
  }
};
const bakeryItemNames = Object.keys(bakerySelection)
const coffeItemNames = Object.keys(coffeeSelection);


export default function buildMenu(){  
  const bakeryMenu = document.createElement('div')
    bakeryMenu.id = 'food'
  const coffeeMenu = document.createElement('div')
    coffeeMenu.id = 'drink'

  for (const item of bakeryItemNames) {
    bakeryMenu.appendChild(createCard(item, bakerySelection[item].description, bakerySelection[item].imagePath))
  }
      
  for (const item of coffeItemNames) {
    coffeeMenu.appendChild(createCard(item, coffeeSelection[item].description, coffeeSelection[item].imagePath))
  }
  const content = document.querySelector('#content')
  content.appendChild(bakeryMenu)
  content.appendChild(coffeeMenu)
}

function createCard(title,description, img){
  const card = document.createElement('div')
  const cardImg = document.createElement('img')
  const cardTitle = document.createElement('h2')
  const cardDescription = document.createElement('p')

  card.classList.add('card')
  cardImg.classList.add('card-image')
  cardTitle.classList.add('card-title')
  cardDescription.classList.add('card-description')

  cardImg.src = img
  cardTitle.textContent = title
  cardDescription.textContent = description

  card.appendChild(cardImg)
  card.appendChild(cardTitle)
  card.appendChild(cardDescription)
  return card
}
