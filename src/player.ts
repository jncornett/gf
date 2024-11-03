export default class Player {
  readonly elements: HTMLAudioElement[]
  private index: number

  constructor(...elements: HTMLAudioElement[]) {
    this.elements = elements
    this.index = 0
  }

  get playing() {
    return !this.elements[this.index].paused
  }

  async play() {
    const audio = this.elements[this.index]!
    if (!audio.paused) return
    audio.currentTime = 0
    audio.play()
    return new Promise<void>((resolve) => {
      let resolved = false
      const done = () => {
        if (resolved) return
        resolved = true
        resolve()
      }
      audio.addEventListener("pause", done, { once: true })
      audio.addEventListener("cancel", done, { once: true })
      audio.addEventListener("abort", done, { once: true })
    })
  }

  pause() {
    const audio = this.elements[this.index]!
    if (audio.paused) return
    audio.pause()
  }

  next() {
    this.pause()
    this.index = (this.index + 1) % this.elements.length
  }
}
