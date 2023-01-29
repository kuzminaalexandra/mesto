import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popup, submit) {
    super(popup);
    this._submit = submit;
    this._form = this._popup.querySelector('.popup__form');
    this._inputs = this._popup.querySelectorAll('.popup__input');
  }

  _getInputValues() {
    this._formValues = {};
    this._inputs.forEach((input) => {
      return (this._formValues[input.id] = input.value);
    });
    return this._formValues;
  }

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
  }
}
