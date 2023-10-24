import buildHeader from "./js/pages/header"
import buildHome from "./js/pages/home";
import css from "./styles/global.css"
const content = document.querySelector('#content')

export function firstLoad() {
  content.appendChild(buildHeader())
  content.appendChild(buildHome())
}