import { getSongs } from '../api.js'
import { PageSongs } from './page-songs.js'

customElements.define("page-artist-songs", class extends PageSongs {
  static observedAttributes = ['artist-id']


  async getSongsData() {
    return getSongs(this.getAttribute('artist-id')).then((songs) => this.songs = songs)
  }

  getTitle() {
    return `Artistes > ${this.songs[0].artist.name}`
  }

})
