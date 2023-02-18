import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popup, submit) {
    super(popup);
    this._submit = submit;
<<<<<<< HEAD
    this._form = this._popup.querySelector('.popup__content');
    this._inputs = this._popup.querySelectorAll('.popup__input');
    this._submitButton = this._popup.querySelector('.popup__button-save');
    this._submitButtonValue = this._submitButton.textContent;
=======
    this._form = this._popup.querySelector('.popup__form');
    this._inputs = this._popup.querySelectorAll('.popup__input');
>>>>>>> 7a5f24ee858667578486b4f7f00147096b8fd3c7
  }

  _getInputValues() {
    this._formValues = {};
    this._inputs.forEach((input) => {
      return (this._formValues[input.id] = input.value);
    });
    return this._formValues;
  }

<<<<<<< HEAD
  load(load, text) {
    if (load) {
      this._submitButton.textContent = text;
    } else {
      this._submitButton.textContent = this._submitButtonValue;
    }
  }

=======
>>>>>>> 7a5f24ee858667578486b4f7f00147096b8fd3c7
  setEventListeners() {
    super.setEventListeners();
    this._popup.addEventListener('submit', (evt) => {
      evt.preventDefault();
      const inputValues = this._getInputValues();
      this._submit(inputValues);
      super.close();
    });
  }

  close() {
    super.close();
<<<<<<< HEAD
    this._form.reset();
=======
>>>>>>> 7a5f24ee858667578486b4f7f00147096b8fd3c7
  }
}
