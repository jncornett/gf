import { createRoot } from "react-dom/client"
import { App } from "./App.jsx"
import Player from "./player.js"

const player = new Player(...Array.from(document.getElementsByTagName("audio")))

const $root = document.getElementById("root") as HTMLElement
const root = createRoot($root)
root.render(<App player={player} />)
