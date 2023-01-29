export class Card {
  constructor(data, templateElement, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._templateElement = templateElement;
    this._handleCardClick = handleCardClick;
  }

  _getTemplateElement() {
    const addTemplate = document.querySelector(this._templateElement).content.querySelector('.elements__photo').cloneNode(true);

    return addTemplate;
  }

  generateCard() {
    this._element = this._getTemplateElement();

    this._cardImage = this._element.querySelector('.elements__photo-card');
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;

    this._element.querySelector('.elements__paragraph').textContent = this._name;

    this._setEventListeners();
    return this._element;
  }

  _handleLikeActive() {
    this._elementLike.classList.toggle('elements__like-active');
  }

  _handleDeleteCard() {
    this._element.remove();
  }

  _setEventListeners() {
    this._elementLike = this._element.querySelector('.elements__like');
    this._elementDelete = this._element.querySelector('.elements__delete');

    this._elementLike.addEventListener('click', () => {
      this._handleLikeActive();
    });

    this._elementDelete.addEventListener('click', () => {
      this._handleDeleteCard();
    });

    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  }
}
