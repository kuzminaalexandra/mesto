export default class Popup {
  constructor(popup) {
    this._popup = popup;
    this._handleEscapeClose = this._handleEscapeClose.bind(this);
  }

  open() {
    this._popup.classList.add('popup__is-opened');
    document.addEventListener('keydown', this._handleEscapeClose);
  }

  close() {
    this._popup.classList.remove('popup__is-opened');
    document.removeEventListener('keydown', this._handleEscapeClose);
  }

  _handleEscapeClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners() {
    this._popup.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup__is-opened') || evt.target.classList.contains('popup__button-close')) {
        this.close();
      }
    });
  }
}
