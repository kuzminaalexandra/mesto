// Проверка работы скрипта
console.log('JS - это боль ಠ_ಠ');

// Создание массива
const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

// Выборка DOM-элементов
const popupElement = document.querySelector('.popup');
const popupPhotoElement = document.querySelector('#popup-photo-card');
const popupCloseButtonElement = popupElement.querySelector('.popup__button-close');
const popupCloseAddButtonElement = popupElement.querySelector('.popup__button-close');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');
const popupAddButtonElement = document.querySelector('.profile__add-button');
const formElement = popupElement.querySelector('.popup__content');
const nameInput = popupElement.querySelector('.popup__name');
const professionInput = popupElement.querySelector('.popup__profession');
const profileName = document.querySelector('.profile__title');
const profileProfession = document.querySelector('.profile__subtitle');

const photoCardsContainer = document.querySelector('.elements__container');
const addTemplate = document.querySelector('#template__elements').content.querySelector('.elements__photo');

// Открытие попапа редактирования профиля
const openPopup = function () {
    popupElement.classList.add('popup__is-opened');
    nameInput.value = profileName.textContent;
    professionInput.value = profileProfession.textContent;
}

popupOpenButtonElement.addEventListener('click', openPopup);

// Открытие попапа редактирования фото-карточки
const openPopupPhotoCard = function () {
    popupPhotoElement.classList.add('popup__is-opened');
}

popupAddButtonElement.addEventListener('click', openPopupPhotoCard);

// Закрытие попапа
const closePopup = function () {
    popupElement.classList.remove('popup__is-opened');
}

popupCloseButtonElement.addEventListener('click', closePopup);

// Закрытие попапа при клике на пространстве за рамками попапа
const closePopupByClickOnOverlay = function (event) {
    if (event.target === event.currentTarget) {
        closePopup();
    }
}

popupElement.addEventListener('click', closePopupByClickOnOverlay);

//Обработка отправки введенных в попап данных
function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileProfession.textContent = professionInput.value;
    closePopup();
}

initialCards.forEach((dataCard) => {
renderCard(dataCard);
});

//Функция создания фото-контейнера
const generateCard = (dataCard) => {
    const addPhotoContainer = addTemplate.cloneNode(true);
    const addPhoto = addPhotoContainer.querySelector('.elements__photo-card'); 
    const addPhotoName = addPhotoContainer.querySelector('.elements__paragraph');

    addPhoto.src = item.link;
    addPhotoName.textContent = item.name;

    return addPhotoContainer;
}

//Добавление карточки
const renderCard = (dataCard) => {
    photoCardsContainer.prepend(generateCard(dataCard))
};


