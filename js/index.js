import {Router} from "./router.js"

const router = new Router()

router.add("/", "./html/home.html")
router.add("/exploration", "./html/exploration.html")
router.add("/universe", "./html/universe.html")

router.handle()

router.onpopstate = () => router.handle()
window.route = () => router.handle()