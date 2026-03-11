customElements.define('song-item', class extends HTMLElement {
  static observedAttributes = ['title']

  connectedCallback() {
    this.render()
  }

  attributeChangedCallback() {
    this.render()
  }

  render() {
    const icon = this.getAttribute('favorite') == 'true' ? 'favorite' : 'favorite_border'

    this.innerHTML = `
      <div class="list-item-title">${this.getAttribute('title')}</div>
      <div class="list-item-actions">
        <button type="button" class="icon-button favorite-button ">
          <span class="material-icons">${icon}</span>
        </button>
        <button type="button" class="icon-button play-button">
          <span class="material-icons">play_arrow</span>
        </button>
      </div>`

    // événements customs
    const playEvent = new CustomEvent('playsong')
    this.querySelector('.play-button').addEventListener('click', this.dispatchEvent(playEvent))
  }
})
