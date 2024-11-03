import { createRoot } from "react-dom/client"
import { App } from "./App"

const $root = document.getElementById("root") as HTMLElement
const root = createRoot($root)
root.render(<App />)

// const SCREMS = [
//   [10, 20],
//   [30, 40],
// ] as const

// let currentScrem = 0

// const audio = document.getElementById("screm-audio") as HTMLMediaElement

// const button = document.getElementById("screm-action") as HTMLButtonElement

// button.addEventListener("click", function () {
//   this.classList.add("active")
//   this.disabled = true
//   audio.fastSeek(SCREMS[currentScrem][0])
//   audio.play()
// })

// audio.addEventListener("timeupdate", function () {
//   const stop = SCREMS[currentScrem][1]
//   if (this.currentTime < stop) return
//   console.log(this.currentTime)
//   button.classList.remove("active")
//   this.pause()
// })
