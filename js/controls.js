const linkHome = document.querySelector(".link-home")
const linkUniverse = document.querySelector(".link-universe")
const linkExploration = document.querySelector(".link-exploration")
const body = document.querySelector("body")

linkHome.classList.add('click')

function setActiveLink(element) {
  for (const link of [linkHome, linkUniverse, linkExploration]) {
    link.classList.remove('click')
  }
  element.classList.add('click')
} 

function setBg(bg) {
  document.body.className = ''
  document.body.className = bg
}

function homeClick() {
  setActiveLink(linkHome)
  setBg('home')
}

function universeClick() {
  setActiveLink(linkUniverse)
  setBg('universe')
}

function explorerClick() {
  setActiveLink(linkExploration)
  setBg('exploration')
}

export { homeClick, explorerClick, universeClick }