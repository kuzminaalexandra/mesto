// Проверка работы скрипта
console.log('Js - это не пипец) Учитель говорит, у меня отлично получается)) Александр, спасибо за ревью!');

// Выборка DOM-элементов
const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__button-close');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');
const formElement = popupElement.querySelector('.popup__content');
const nameInput = popupElement.querySelector('.popup__name');
const professionInput = popupElement.querySelector('.popup__profession');
const profileName = document.querySelector('.profile__title');
const profileProfession = document.querySelector('.profile__subtitle');

// Открытие попапа
const openPopup = function () {
    popupElement.classList.add('popup__is-opened');
    nameInput.value = profileName.textContent;
    professionInput.value = profileProfession.textContent;
}

// Закрытие попапа
const closePopup = function () {
    popupElement.classList.remove('popup__is-opened');
}

// Закрытие попапа при клике на пространстве за рамками попапа
const closePopupByClickOnOverlay = function (event) {
    if (event.target === event.currentTarget) {
        closePopup();
    }
}

//Обработка отправки введенных в попап данных
function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileProfession.textContent = professionInput.value;
    closePopup();
}

//Подключение слушателей
popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
popupElement.addEventListener('click', closePopupByClickOnOverlay);
formElement.addEventListener('submit', formSubmitHandler);