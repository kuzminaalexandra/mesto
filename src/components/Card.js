export class Card {
<<<<<<< HEAD
  constructor(userId, data, templateElement, handleCardClick, setLikeCounter, clickDeleteElement) {
=======
  constructor(data, templateElement, handleCardClick) {
>>>>>>> 7a5f24ee858667578486b4f7f00147096b8fd3c7
    this._name = data.name;
    this._link = data.link;
    this._templateElement = templateElement;
    this._handleCardClick = handleCardClick;
<<<<<<< HEAD
    this._setLikeCounter = setLikeCounter;
    this._likes = data.likes;
    this._userId = userId;
    this._id = data._id;
    this._clickDeleteElement = clickDeleteElement;
    this._ownerId = data.owner._id;
    this._deleteCard = this._deleteCard.bind(this);
  }

  _getTemplateElement() {
    const addTemplate = document
      .querySelector(this._templateElement)
      .content.querySelector('.elements__photo')
      .cloneNode(true);
=======
  }

  _getTemplateElement() {
    const addTemplate = document.querySelector(this._templateElement).content.querySelector('.elements__photo').cloneNode(true);
>>>>>>> 7a5f24ee858667578486b4f7f00147096b8fd3c7

    return addTemplate;
  }

  generateCard() {
    this._element = this._getTemplateElement();

    this._cardImage = this._element.querySelector('.elements__photo-card');
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;

    this._element.querySelector('.elements__paragraph').textContent = this._name;

<<<<<<< HEAD
    this._elementLike = this._element.querySelector('.elements__like');
    this._elementCount = this._element.querySelector('.elements__like-count');
    this._likeState = this._likes.some((like) => like._id === this._userId);
    this._elementCount.textContent = this._likes.length;

    this._elementDelete = this._element.querySelector('.elements__delete');

    if (this.likeState()) {
      this.handleLikeActive();
    }

    this._deleteIcon();
=======
>>>>>>> 7a5f24ee858667578486b4f7f00147096b8fd3c7
    this._setEventListeners();
    return this._element;
  }

<<<<<<< HEAD
  likeState() {
    return this._likeState;
  }

  handleLikeActive() {
    this._elementLike.classList.toggle('elements__like-active');
  }

  _deleteIcon() {
    if (this._ownerId !== this._userId) {
      this._elementDelete.remove();
    }
  }

  _deleteCard() {
    console.log(this._element);
    this._element.remove();
    this._element = null;
  }

  _setEventListeners() {
    const card = this;

    this._elementLike.addEventListener('click', () => {
      this._setLikeCounter(this._id, card);
      this._likeState = !this._likeState;
    });

    this._elementDelete.addEventListener('click', () => {
      this._clickDeleteElement(this._id, this._deleteCard);
=======
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
>>>>>>> 7a5f24ee858667578486b4f7f00147096b8fd3c7
    });

    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  }
<<<<<<< HEAD

  setCounter(obj) {
    this._elementCount.textContent = obj;
  }
=======
>>>>>>> 7a5f24ee858667578486b4f7f00147096b8fd3c7
}
