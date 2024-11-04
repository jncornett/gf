export default class Player {
  readonly elements: HTMLAudioElement[]
  private index: number
  private lastState: "playing" | "paused" = "paused"
  readonly listeners: ((t: "playing" | "paused") => void)[] = []

  private onEvent() {
    const event = this.playing ? "playing" : "paused"
    if (event === this.lastState) return
    this.lastState = event
    this.listeners.forEach((f) => f(event))
  }

  constructor(...elements: HTMLAudioElement[]) {
    this.elements = elements
    this.index = 0
    this.elements.forEach((e) => {
      e.addEventListener("play", this.onEvent.bind(this))
      e.addEventListener("pause", this.onEvent.bind(this))
      e.addEventListener("cancel", this.onEvent.bind(this))
      e.addEventListener("abort", this.onEvent.bind(this))
    })
  }

  get playing() {
    return this.elements.some((e) => !e.paused)
  }

  play() {
    const audio = this.elements[this.index]!
    if (!audio.paused) return
    audio.currentTime = 0
    audio.play()
  }

  pause() {
    const audio = this.elements[this.index]!
    if (audio.paused) return
    audio.pause()
  }

  next() {
    this.index = (this.index + 1) % this.elements.length
  }

  addListener(f: (t: "playing" | "paused") => void) {
    this.listeners.push(f)
  }

  removeListener(f: (t: "playing" | "paused") => void) {
    const i = this.listeners.indexOf(f)
    if (i < 0) return
    this.listeners.splice(i, 1)
  }
}
