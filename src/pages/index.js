// Проверка работы скрипта
console.log('JS - это боль (╬ ಠ益ಠ)');

import { Card } from '../components/Card.js';
import {
  photoCardsContainer,
  popupAddButtonElement,
  popupOpenButtonElement,
  nameInput,
  professionInput,
  profileName,
  profileProfession,
  popupElement,
  popupPhotoElement,
  enableValidation,
  openPopupPhotoZoom,
  DeleteCard,
  updateAvatar,
  profileAvatar,
} from '../utils/constants.js';
import { FormValidation } from '../components/FormValidation.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';
import './index.css';

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-59',
  headers: {
    authorization: '98e50b60-4c69-4264-a162-27fbf7e799c3',
    'Content-Type': 'application/json',
  },
});
let userId;
Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([data, cards]) => {
    userId = data._id;
    userInfo.setUserInfo(data);
    sectionCard.renderItems(cards.reverse());
  })
  .catch((e) => console.warn(e));

function generateCard(item) {
  const card = new Card(
    userId,
    item,
    '#template__elements',
    handleCardClick,
    setLikeCounter,
    clickDeleteElement
  );
  const templateCard = card.generateCard();
  return templateCard;
}

const sectionCard = new Section(
  {
    renderer: (item) => {
      sectionCard.prependItem(generateCard(item));
    },
  },
  photoCardsContainer
);

function setLikeCounter(id, card) {
  const method = card.likeState() ? 'DELETE' : 'PUT';
  api
    .likeCounter(method, id)
    .then((res) => {
      card.setCounter(res.likes.length);
      card.handleLikeActive();
    })
    .catch((err) => {
      console.warn(err);
    });
}

function clickDeleteElement(id, deleteCard) {
  popupDeleteCard.open(id, deleteCard);
}

function clickDeleteElementSubmit(id, deleteCard) {
  popupDeleteCard.load(true, 'Удаление...');
  api
    .deleteElement(id)
    .then(() => {
      deleteCard();
      popupDeleteCard.close();
    })
    .catch((err) => {
      console.warn(err);
    })
    .finally(() => {
      popupDeleteCard.load(false);
    });
}

const addCardValidation = new FormValidation(enableValidation, popupPhotoElement);

const editProfileValidation = new FormValidation(enableValidation, popupElement);

const avatarUpdateValidation = new FormValidation(enableValidation, updateAvatar);

addCardValidation.enableValidation();

editProfileValidation.enableValidation();

avatarUpdateValidation.enableValidation();

function handleCardClick(name, link) {
  popupPhotoCard.open(name, link);
}

popupAddButtonElement.addEventListener('click', function () {
  addCardValidation.resetValue();
  popupAddCard.open();
});

const addProfileInfo = function () {
  const { name, profession } = userInfo.getUserInfo();
  nameInput.value = name;
  professionInput.value = profession;
};

popupOpenButtonElement.addEventListener('click', () => {
  editProfileValidation.resetValue();
  popupEditProfile.open();
  addProfileInfo();
});

function handleProfileFormSubmit(userData) {
  popupEditProfile.load(true, 'Сохранение...');
  api
    .setUserInfo(userData)
    .then((res) => {
      userInfo.setUserInfo(res);
      popupEditProfile.close();
    })
    .catch((err) => {
      console.warn(err);
    })
    .finally(() => {
      popupEditProfile.load(false);
    });
}

const userInfo = new UserInfo({
  profileName,
  profileProfession,
  profileAvatar,
});

function addCartByClickOnSubmit(obj) {
  popupAddCard.load(true, 'Сохранение...');
  api
    .generateCard(obj)
    .then((res) => {
      sectionCard.prependItem(generateCard(res));
      popupAddCard.close();
    })
    .catch((err) => {
      console.warn(err);
    })
    .finally(() => {
      popupAddCard.load(false);
    });
}

profileAvatar.addEventListener('click', () => {
  avatarUpdateValidation.resetValue();
  popupAvatarUpdate.open();
});

function clickUpdateAvatar(data) {
  popupAvatarUpdate.load(true, 'Сохранение...');
  api
    .updateAvatar(data)
    .then(() => {
      userInfo.updateAvatar(data);
      popupAvatarUpdate.close();
    })
    .catch((err) => {
      console.warn(err);
    })
    .finally(() => {
      popupAvatarUpdate.load(false);
    });
}

const popupPhotoCard = new PopupWithImage(openPopupPhotoZoom);
popupPhotoCard.setEventListeners();
const popupEditProfile = new PopupWithForm(popupElement, handleProfileFormSubmit);
popupEditProfile.setEventListeners();
const popupAddCard = new PopupWithForm(popupPhotoElement, addCartByClickOnSubmit);
popupAddCard.setEventListeners();
const popupDeleteCard = new PopupWithConfirmation(DeleteCard, clickDeleteElementSubmit);
popupDeleteCard.setEventListeners();
const popupAvatarUpdate = new PopupWithForm(updateAvatar, clickUpdateAvatar);
popupAvatarUpdate.setEventListeners();
