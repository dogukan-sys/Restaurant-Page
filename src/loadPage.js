import buildHeader from "./header";
import buildHome from "./home";

const content = document.querySelector('#content')

export function firstLoad() {
  content.appendChild(buildHeader())
  content.appendChild(buildHome())
}