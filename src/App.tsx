import { useRef, useState } from "react"
import styles from "./App.module.css"
import I_SCREM_1 from "./assets/screm-1.mp4"
import I_SCREM_2 from "./assets/screm-2.mp4"
import I_SCREM_3 from "./assets/screm-3.mp4"

const SCREMS = [I_SCREM_1, I_SCREM_2, I_SCREM_3]

export function App() {
  const audioRefs = SCREMS.map(() => useRef<HTMLAudioElement>(null))
  const [state, setPlayerState] = useState({ playing: false, clip: 0, next: 1 })
  return (
    <>
      <button
        type="button"
        className={[styles.Button, state.playing && styles.active].filter(Boolean).join(" ")}
        onClick={() => {
          audioRefs[state.clip].current?.pause()
          const audio = audioRefs[state.next].current
          if (!audio) return
          audio.currentTime = 0
          audio.play()
          setPlayerState({
            playing: true,
            clip: state.next,
            next: (state.next + 1) % audioRefs.length,
          })
        }}
      ></button>
      {SCREMS.map((src, i) => (
        <audio
          key={i}
          src={src}
          ref={audioRefs[i]}
          onPause={() => {
            setPlayerState({
              ...state,
              playing: false,
            })
          }}
        ></audio>
      ))}
    </>
  )
}
