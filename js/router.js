import {homeClick, explorerClick, universeClick} from "./controls.js"

export class Router {
  
  routes = {}

  add(routeName, page) {
    this.routes[routeName] = page
  }

  route(event) {
    event = event || window.event
    event.preventDefault()
  
    window.history.pushState({}, "", event.target.href)
  
    this.handle()
  }
  
   handle() {
    const pathname = window.location.pathname
    const route = this.routes[pathname]
    if (pathname === '/') {
      homeClick()
    } else if (pathname === '/universe') {
      universeClick()
    } else if (pathname === '/exploration') {
      explorerClick()
    }
    fetch(route)
    .then(data => data.text())
    .then(html => {
      document.querySelector("#app").innerHTML = html
    })
  }

}
