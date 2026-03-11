import { playSong } from '../player.js'

export class PageSongs extends HTMLElement {
  static observedAttributes = []

  connectedCallback() {
    this.render()
  }

  attributeChangedCallback() {
    this.render()
  }

  render() {
    getSongsData()
      .then((songs) => {
        this.innerHTML = `
        <h4>
          ${getTitle()}
        </h4>

        <div class="list">
        </div>
      `
        const songList = this.querySelector('.list')
        // Itérer le tableau de chansons reçu et créer les éléments correspondants
        songs.forEach((song) => {
          const songItem = document.createElement('song-item')
          songItem.setAttribute('title', song.title)
          songItem.addEventListener('playsong', () => playSong(song, songs))
          songList.append(songItem)
        })
      })
  }

  getSongsData() {
    return []
  }

  getTitle() {
    return "title"
  }

}
