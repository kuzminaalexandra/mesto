// Проверка работы скрипта
console.log("Hello world!");

// Выборка DOM-элементов
const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__button-close');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');
console.log(popupElement);
console.log(popupCloseButtonElement);
console.log(popupOpenButtonElement);


// const togglePopupVisibility = function () {
//     popupElement.classList.toggle('popup__is-opened');
// }

const openPopup = function (event) {
    popupElement.classList.add('popup__is-opened');
    console.log('Open popup clicked');
}

const closePopup = function () {
    popupElement.classList.remove('popup__is-opened');
}

const closePopupByClickOnOverlay = function (event) {
    console.log(event.target, event.currentTarget);
    if (event.target !== event.currentTarget) {
        return;
    }
    closePopup();
}


// togglePopupVisibility();

// Регистрация обработчика событий по клику

popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
popupElement.addEventListener('click', closePopupByClickOnOverlay)