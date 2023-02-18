import PopupWithForm from './PopupWithForm.js';

export default class PopupWithConfirmation extends PopupWithForm {
  constructor(popup, submit) {
    super(popup);
    this._submit = submit;
    this._submitButton = this._popup.querySelector('.popup-submit-delete');
  }

  setEventListeners() {
    this._submitButton.addEventListener('click', (e) => {
      e.preventDefault();
      this._submit(this._id, this._deleteCard);
    });

    super.setEventListeners();
  }

  open(id, deleteCard) {
    this._id = id;
    this._deleteCard = deleteCard;
    super.open();
  }
}
