import css from "../../styles/header.css"

export default function buildHeader() {
  // Build HEADER
  const HEADER = document.createElement('div')
  const NAV = document.createElement('div')
  const HOME = document.createElement('button')
  const MENU = document.createElement('button')
  const ABOUT = document.createElement('button')
  const TITLE = document.createElement('i') 
 
  TITLE.id = 'title'
  TITLE.dataset.lucide = 'coffee'

  HEADER.id = 'header'
  NAV.id = 'nav'
 
  HOME.id = 'home'
  HOME.textContent = 'Home'
  
  MENU.id = 'menu'
  MENU.textContent = 'Menu'
  
  ABOUT.id = 'about'
  ABOUT.textContent = 'About Us'

  NAV.appendChild(HOME)
  NAV.appendChild(MENU)
  NAV.appendChild(ABOUT)
  HEADER.appendChild(TITLE)
  HEADER.appendChild(NAV)
  
  return HEADER
}