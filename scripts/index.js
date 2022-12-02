// Проверка работы скрипта
console.log('JS - это боль (╬ ಠ益ಠ)');

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

// Выборка элементов попапа профиля
const popupElement = document.querySelector('#popup-profile');
const popupCloseButtonElement = popupElement.querySelector('.popup__button-close');
const formElement = popupElement.querySelector('.popup__content');
const nameInput = popupElement.querySelector('.popup__name');
const professionInput = popupElement.querySelector('.popup__profession');

// Выборка элементов блока профиля
const popupOpenButtonElement = document.querySelector('.profile__edit-button');
const popupAddButtonElement = document.querySelector('.profile__add-button');
const profileProfession = document.querySelector('.profile__subtitle');
const profileName = document.querySelector('.profile__title');

// Выборка элементов попапа редакрирования карточки
const popupPhotoElement = document.querySelector('#popup-photo-card');
const photoName = popupPhotoElement.querySelector('#popup__photo-name');
const photoLink = popupPhotoElement.querySelector('#popup__photo-link');
const popupPhotoElementCloseButton = popupPhotoElement.querySelector('.popup__button-close');
const formPhotoElement = popupPhotoElement.querySelector('#popup-photo-content');

// Выборка элементов общего контейнера карточек
const photoCardsContainer = document.querySelector('.elements__container');

// Выборка элементов карточек
const addTemplate = document.querySelector('#template__elements').content.querySelector('.elements__photo').cloneNode(true);
const photoCardElement = document.querySelector('.elements__photo');

// Выборка элементов блока профиля
const openPopupPhotoZoom = document.querySelector('#popup-photo-card-zoom');
const popupPhotoZoomClose = openPopupPhotoZoom.querySelector('.popup__button-close');

// Открытие попапа редактирования профиля
function openPopup(popupItem) {
    popupItem.classList.add('popup__is-opened');
};

//Добавление данных в карточки попапа профиля
const addProfileInfo = function () {
    nameInput.value = profileName.textContent;
    professionInput.value = profileProfession.textContent;
};

// Функция открытия попапа редактирования фото-карточки
const openPopupPhotoCard = function () {
    openPopup(popupPhotoElement);
};

// Функия закрытия попапа
function closePopup(popupItem) {
    popupItem.classList.remove('popup__is-opened');
};

//Функция отправки введенных в попап профиля 
const handleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileProfession.textContent = professionInput.value;
    closePopup(popupElement);
};

//Функция создания фото-контейнера, добавления тайка и удаления карточки
function generateCard(placeName, link) {
    const addPhotoContainer = addTemplate.cloneNode(true);
    const addPhoto = addPhotoContainer.querySelector('.elements__photo-card');
    const addPhotoName = addPhotoContainer.querySelector('.elements__paragraph');
    const addLike = addPhotoContainer.querySelector('.elements__like');
    const popupPhotoZoomElement = openPopupPhotoZoom.querySelector('.popup__photo-item');
    const popupPhotoZoomSubtitle = openPopupPhotoZoom.querySelector('.popup__photo-subtitle');
    const trashBin = addPhotoContainer.querySelector('.elements__delete');

    addPhoto.src = link;
    addPhoto.alt = placeName;
    addPhotoName.textContent = placeName;

    addLike.addEventListener('click', addLikeElement);

    addPhoto.addEventListener('click', function () {
        popupPhotoZoomElement.src = link;
        popupPhotoZoomElement.alt = placeName;
        popupPhotoZoomSubtitle.textContent = placeName;
        openPopup(openPopupPhotoZoom);
    });
    
    trashBin.addEventListener('click', deletePhotoCard);

    return addPhotoContainer;
};

//Функция удаления карточки
const deletePhotoCard = (evt) => {
    evt.target.closest('.elements__photo').remove();
}

//Функция добавления лайка
const addLikeElement = (evt) => {
    evt.target.classList.toggle('elements__like-active');
}

//Функция оюработки карточки
function renderCard(place, link) {
    photoCardsContainer.prepend(generateCard(place, link));
}

//Функция перебора массива карточек
initialCards.forEach(function (item) {
    renderCard(item.name, item.link);
});

//СЛУШАТЕЛИ
//Открытие попапов
popupAddButtonElement.addEventListener('click', openPopupPhotoCard);

popupOpenButtonElement.addEventListener('click', () => {
    openPopup(popupElement);
    addProfileInfo();
});

//Сохранение данных
popupElement.addEventListener('submit', handleProfileFormSubmit);

popupPhotoElement.addEventListener('submit', function (evt) {
    evt.preventDefault();
    renderCard(photoName.value, photoLink.value);
    formPhotoElement.reset();
    closePopup(popupPhotoElement);
});

//Закрытие попапов
popupCloseButtonElement.addEventListener('click', function () {
    closePopup(popupElement);
});

popupPhotoElementCloseButton.addEventListener('click', function () {
    closePopup(popupPhotoElement);
});

popupPhotoZoomClose.addEventListener('click', function () {
    closePopup(openPopupPhotoZoom);
});
