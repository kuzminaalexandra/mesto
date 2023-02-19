import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popup, submit) {
    super(popup);
    this._submit = submit;
    this._form = this._popup.querySelector('.popup__content');
    this._inputs = this._popup.querySelectorAll('.popup__input');
    this._submitButton = this._popup.querySelector('.popup__button-save');
    this._submitButtonValue = this._submitButton.textContent;
  }

  _getInputValues() {
    this._formValues = {};
    this._inputs.forEach((input) => {
      return (this._formValues[input.id] = input.value);
    });
    return this._formValues;
  }

  load(load, text) {
    if (load) {
      this._submitButton.textContent = text;
    } else {
      this._submitButton.textContent = this._submitButtonValue;
    }
  }

  setEventListeners() {
    super.setEventListeners();
    this._popup.addEventListener('submit', (evt) => {
      evt.preventDefault();
      const inputValues = this._getInputValues();
      this._submit(inputValues);
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}
