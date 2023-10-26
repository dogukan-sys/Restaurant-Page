const bakerySelection = {
  Borek: {
    description: "Flaky pastries with savory fillings.",
    imagePath: "path/to/borek-image.jpg"
  },
  Simit: {
    description: "Sesame-crusted bread rings.",
    imagePath: "path/to/simit-image.jpg"
  },
  Pogaca: {
    description: "Soft mini bread rolls with various fillings.",
    imagePath: "path/to/pogaca-image.jpg"
  },
  Baklava: {
    description: "Classic pastry with honey and nuts.",
    imagePath: "path/to/baklava-image.jpg"
  },
  Revani: {
    description: "Semolina cake with sweet syrup.",
    imagePath: "path/to/revani-image.jpg"
  }
};

const coffeeSelection = {
  TurkishCoffee: {
    description: "Rich and aromatic.",
    imagePath: "path/to/turkish-coffee-image.jpg"
  },
  Cappuccino: {
    description: "Espresso with milk foam.",
    imagePath: "path/to/cappuccino-image.jpg"
  },
  Latte: {
    description: "Espresso with steamed milk.",
    imagePath: "path/to/latte-image.jpg"
  },
  IcedCoffee: {
    description: "Chilled coffee with syrups.",
    imagePath: "path/to/iced-coffee-image.jpg"
  },
  TurkishTea: {
    description: "Strong, black tea.",
    imagePath: "path/to/turkish-tea-image.jpg"
  }
};
const bakeryItemNames = Object.keys(bakerySelection)
const coffeItemNames = Object.keys(coffeeSelection);


function buildMenu(){  
  const bakeryMenu = document.createElement('div')
  const coffeeMenu = document.createElement('div')
  
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

function createCard(img,title,description){
  const card = document.createElement('div')
  const cardImg = document.createElement('img')
  const cardTitle = document.createElement('h4')
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

export { buildMenu }