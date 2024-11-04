import { useEffect, useState } from "react"
import Player from "./player.jsx"
import styles from "./App.module.css"

export function App({ player }: { player: Player }) {
  const [playing, setPlaying] = useState(false)
  useEffect(() => {
    const ln = (t: "playing" | "paused") => {
      setPlaying(t === "playing")
    }
    player.addListener(ln)
    return () => {
      player.removeListener(ln)
    }
  }, [player])
  return (
    <>
      <button
        type="button"
        className={[styles.Button, playing && styles.active].filter(Boolean).join(" ")}
        onClick={() => {
          player.play()
          player.next()
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
