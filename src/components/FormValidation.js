export class FormValidation {
  constructor(enableValidation, form) {
    this._form = form;
    this._inputSelector = enableValidation.inputSelector;
    this._submitButtonSelector = enableValidation.submitButtonSelector;
    this._inactiveButtonClass = enableValidation.inactiveButtonClass;
    this._inputErrorClass = enableValidation.inactiveButtonClass;
    this._errorClass = enableValidation.errorClass;
    this._inputs = Array.from(form.querySelectorAll(this._inputSelector));
    this._submitButtons = form.querySelector(this._submitButtonSelector);
  }

  _errVisible = (input, errText) => {
    const error = this._form.querySelector(`#${input.id}-error`);
    input.classList.add(this._inputErrorClass);
    error.textContent = errText;
    error.classList.add(this._errorClass);
  };

  _errInvisible = (input) => {
    const error = this._form.querySelector(`#${input.id}-error`);
    input.classList.remove(this._inputErrorClass);
    error.textContent = '';
    error.classList.remove(this._errorClass);
  };

  _checkInputValidity = (input) => {
    if (!input.validity.valid) {
      this._errVisible(input, input.validationMessage);
    } else {
      this._errInvisible(input);
    }
  };
  _toggleButton = () => {
    if (this._invalidInputs()) {
      this._submitButtons.classList.add(this._inactiveButtonClass);
      this._submitButtons.disabled = true;
    } else {
      this._submitButtons.classList.remove(this._inactiveButtonClass);
      this._submitButtons.disabled = false;
    }
  };

  _setEventListener = () => {
    this._toggleButton();
    this._inputs.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input);
        this._toggleButton();
      });
    });
  };

  _invalidInputs = () => {
    return this._inputs.some((input) => {
      return !input.validity.valid;
    });
  };

  enableValidation = () => {
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    this._setEventListener();
  };

  resetValue() {
    this._toggleButton();
    this._inputs.forEach((input) => {
      this._errInvisible(input);
    });
  }
}
