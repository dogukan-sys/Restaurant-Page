import buildHeader from "../pages/header"
import buildHome from "../pages/home";
import build, { buildMenu } from "../pages/menu"



const content = document.querySelector('#content')

function firstLoad() {
  content.appendChild(buildHeader())
  content.appendChild(buildHome())
}

function loadPage(event) {
  while (content.childNodes.length > 1 ){
    content.removeChild(content.lastChild)
  }
  if (event.target.id ==  'home') {content.appendChild(buildHome())}
  if (event.target.id == 'menu') {buildMenu()}
  if (event.target.id == 'contact') {content.appendChild(buildHome())}
  if (event.target.id == 'menu-button') { buildMenu()}
}

export {firstLoad, loadPage}