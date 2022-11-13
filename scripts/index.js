// Проверка работы скрипта
console.log("Js - это пипец");

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

let formElement = popupElement.querySelector('.popup__container');
let nameInput = popupElement.querySelector('.popup__name');
let jobInput = popupElement.querySelector('.popup__profession');

//Обработка отправки формы
function formSubmitHandler(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы. И происходит какая-то дикая херота....
}
// Получение значений полей jobInput и nameInput из свойства value


