import { Home } from "lucide"
import css from "../../styles/header.css"
import { loadPage } from "../functions/loadPage"


export default function buildHeader() {
  // Build HEADER
  const HEADER = document.createElement('div')
  const NAV = document.createElement('div')
  const HOME = document.createElement('button')
  const MENU = document.createElement('button')
  const CONTACT = document.createElement('button')
  const TITLE = document.createElement('i') 
 
  TITLE.id = 'title'
  TITLE.dataset.lucide = 'coffee'

  HEADER.id = 'header'
  NAV.id = 'nav'
 
  HOME.id = 'home'
  HOME.textContent = 'Home'
  HOME.onclick = loadPage
  
  MENU.id = 'menu'
  MENU.textContent = 'Menu'
  MENU.onclick = loadPage
  
  CONTACT.id = 'contact'
  CONTACT.textContent = 'Contact Us'
  CONTACT.onclick = loadPage

  NAV.appendChild(HOME)
  NAV.appendChild(MENU)
  NAV.appendChild(CONTACT)
  HEADER.appendChild(TITLE)
  HEADER.appendChild(NAV)
  
  return HEADER
}