// Проверка работы скрипта
console.log('JS - это боль (╬ ಠ益ಠ)');

import { Card } from '../components/Card.js';
import { initialCards } from '../utils/massive.js';
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
  photoName,
  photoLink,
  openPopupPhotoZoom,
} from '../utils/constants.js';
import { FormValidation } from '../components/FormValidation.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import './index.css';

function generateCard(item) {
  const card = new Card(item, '#template__elements', handleCardClick);
  const templateCard = card.generateCard();
  return templateCard;
}

const sectionCard = new Section(
  {
    items: initialCards,
    renderer: generateCard,
  },
  photoCardsContainer
);
sectionCard.renderItems();

const addCardValidation = new FormValidation(enableValidation, popupPhotoElement);

const editProfileValidation = new FormValidation(enableValidation, popupElement);

addCardValidation.enableValidation();

editProfileValidation.enableValidation();

function handleCardClick(name, link) {
  PopupPhotoCard.open(name, link);
}

popupAddButtonElement.addEventListener('click', function () {
  addCardValidation.resetValue();
  PopupAddCard.open();
});

const addProfileInfo = function () {
  nameInput.value = profileName.textContent;
  professionInput.value = profileProfession.textContent;
};

popupOpenButtonElement.addEventListener('click', () => {
  editProfileValidation.resetValue();
  PopupEditProfile.open();
  addProfileInfo();
});

function handleProfileFormSubmit(obj) {
  editProfileInfo.setUserInfo(obj);
}

const editProfileInfo = new UserInfo({
  profileName,
  profileProfession,
});

function addCartByClickOnSubmit() {
  const AddNewCard = {
    link: photoLink.value,
    name: photoName.value,
  };
  sectionCard.prependItem(AddNewCard);
  PopupAddCard.close();
}

const PopupPhotoCard = new PopupWithImage(openPopupPhotoZoom);
PopupPhotoCard.setEventListeners();
const PopupEditProfile = new PopupWithForm(popupElement, handleProfileFormSubmit);
PopupEditProfile.setEventListeners();
const PopupAddCard = new PopupWithForm(popupPhotoElement, addCartByClickOnSubmit);
PopupAddCard.setEventListeners();
