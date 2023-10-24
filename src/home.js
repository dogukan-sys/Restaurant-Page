export default function buildHome() {
  // Create Elements
  const heroImg = document.createElement('div')
    heroImg.id = 'hero-img'
  const heroText = document.createElement('div')
    heroText.id = 'hero-text'
  const title = document.createElement('h1')
    title.id = 'hero-title'
    title.textContent = 'Turkish Temptations'
  const  tagline = document.createElement('p')
    tagline.id = 'hero-tagline'
    tagline.textContent = 'Sip, Savor, Delight: Where Turkish Tradition Meets Culinary Innovation'
  const menuBtn = document.createElement('button')
    menuBtn.id = 'menu-button'
    menuBtn.textContent = 'Explore Our Flavorful Menu'

  // Append in right Order.
  heroText.appendChild(title)
  heroText.appendChild(tagline)
  heroText.appendChild(menuBtn)
  heroImg.appendChild(heroText)

  return heroImg
}
