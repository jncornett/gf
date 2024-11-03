import { createRoot } from "react-dom/client"
import { App } from "./App"

const $root = document.getElementById("root") as HTMLElement
const root = createRoot($root)
root.render(<App />)
