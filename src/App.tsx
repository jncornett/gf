import { useState } from "react"
import Player from "./player.jsx"
import styles from "./App.module.css"

export function App({ player }: { player: Player }) {
  const [playing, setPlaying] = useState(false)
  return (
    <>
      <button
        type="button"
        className={[styles.Button, playing && styles.active].filter(Boolean).join(" ")}
        disabled={playing}
        onClick={() => {
          setPlaying(true)
          player.play().finally(() => {
            setPlaying(false)
            player.next()
          })
        }}
      ></button>
      <footer>
        <small>
          <a href="https://github.com/jncornett/gf" className="gf">
            github.com/jncornett/gf
          </a>
        </small>
      </footer>
    </>
  )
}
