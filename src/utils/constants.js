export const openPopupPhotoZoom = document.querySelector('#popup-photo-card-zoom');
export const popupPhotoZoomElement = openPopupPhotoZoom.querySelector('.popup__photo-item');
export const photoCardsContainer = document.querySelector('.elements__container');
export const closePopupsButtons = document.querySelectorAll('.popup__button-close');
export const popupPhotoElement = document.querySelector('#popup-photo-card');
export const popupAddButtonElement = document.querySelector('.profile__add-button');
export const popupPhotoElementSaveButton = popupPhotoElement.querySelector('#popup-submit-button');
export const popupOpenButtonElement = document.querySelector('.profile__edit-button');
export const popupElement = document.querySelector('#popup-profile');
export const nameInput = popupElement.querySelector('.popup__name');
export const professionInput = popupElement.querySelector('.popup__profession');
export const profileProfession = document.querySelector('.profile__subtitle');
export const profileName = document.querySelector('.profile__title');
export const photoName = popupPhotoElement.querySelector('#popup__photo-name');
export const photoLink = popupPhotoElement.querySelector('#popup__photo-link');
export const PopupText = openPopupPhotoZoom.querySelector('.popup__photo-subtitle');
export const PhotoContent = document.querySelector('#popup-photo-content');
export const DeleteCard = document.querySelector('#popup-delete-card');
export const updateAvatar = document.querySelector('#popup-avatar');
export const profileAvatar = document.querySelector('.profile__avatar');
export const popupAvatarForm = document.querySelector('#popup-avatar-edit');

export const enableValidation = {
  formSelector: '.popup__content',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button-save_invalid',
  inputErrorClass: 'popup__input-error',
  errorClass: 'popup__error_visible',
};
