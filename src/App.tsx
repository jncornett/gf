import { useRef, useState } from "react"
import I_SCREM_1 from "./assets/screm-1.mp4"
import I_SCREM_2 from "./assets/screm-2.mp4"
import I_SCREM_3 from "./assets/screm-3.mp4"

const CLIPS = [{ src: I_SCREM_1 } as const, { src: I_SCREM_2 } as const, { src: I_SCREM_3 } as const] as const

export function App() {
  const audioRefs = CLIPS.map(() => useRef<HTMLAudioElement>(null))
  const [{ playing, clip }, setPlayerState] = useState({ playing: false, clip: 0 })
  return (
    <>
      <button
        type="button"
        className={`screm-action${playing ? " active" : ""}`}
        onClick={() => {
          const audio = audioRefs[clip].current
          if (!audio) return
          audio.currentTime = 0
          audio.play()
          setPlayerState({ playing: true, clip: (clip + 1) % CLIPS.length })
        }}
      ></button>
      {CLIPS.map(({ src }, i) => (
        <audio
          key={i}
          src={src}
          ref={audioRefs[i]}
          onPause={() => {
            setPlayerState({ playing: false, clip })
          }}
        ></audio>
      ))}
    </>
  )
}
