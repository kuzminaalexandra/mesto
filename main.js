(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}var n=function(){function e(t,n,r,o,i,u){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=n.name,this._link=n.link,this._templateElement=r,this._handleCardClick=o,this._setLikeCounter=i,this._likes=n.likes,this._userId=t,this._id=n._id,this._clickDeleteElement=u,this._ownerId=n.owner._id,this._deleteCard=this._deleteCard.bind(this)}var n,r;return n=e,(r=[{key:"_getTemplateElement",value:function(){return document.querySelector(this._templateElement).content.querySelector(".elements__photo").cloneNode(!0)}},{key:"generateCard",value:function(){var e=this;return this._element=this._getTemplateElement(),this._cardImage=this._element.querySelector(".elements__photo-card"),this._cardImage.src=this._link,this._cardImage.alt=this._name,this._element.querySelector(".elements__paragraph").textContent=this._name,this._elementLike=this._element.querySelector(".elements__like"),this._elementCount=this._element.querySelector(".elements__like-count"),this._likeState=this._likes.some((function(t){return t._id===e._userId})),this._elementCount.textContent=this._likes.length,this._elementDelete=this._element.querySelector(".elements__delete"),this.likeState()&&this.handleLikeActive(),this._deleteIcon(),this._setEventListeners(),this._element}},{key:"likeState",value:function(){return this._likeState}},{key:"handleLikeActive",value:function(){this._elementLike.classList.toggle("elements__like-active")}},{key:"_deleteIcon",value:function(){this._ownerId!==this._userId&&this._elementDelete.remove()}},{key:"_deleteCard",value:function(){console.log(this._element),this._element.remove(),this._element=null}},{key:"_setEventListeners",value:function(){var e=this,t=this;this._elementLike.addEventListener("click",(function(){e._setLikeCounter(e._id,t),e._likeState=!e._likeState})),this._elementDelete.addEventListener("click",(function(){e._clickDeleteElement(e._id,e._deleteCard)})),this._cardImage.addEventListener("click",(function(){e._handleCardClick(e._name,e._link)}))}},{key:"setCounter",value:function(e){this._elementCount.textContent=e}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}(),r=document.querySelector("#popup-photo-card-zoom"),o=(r.querySelector(".popup__photo-item"),document.querySelector(".elements__container")),i=(document.querySelectorAll(".popup__button-close"),document.querySelector("#popup-photo-card")),u=document.querySelector(".profile__add-button"),l=(i.querySelector("#popup-submit-button"),document.querySelector(".profile__edit-button")),a=document.querySelector("#popup-profile"),c=a.querySelector(".popup__name"),s=a.querySelector(".popup__profession"),f=document.querySelector(".profile__subtitle"),p=document.querySelector(".profile__title"),y=(i.querySelector("#popup__photo-name"),i.querySelector("#popup__photo-link"),r.querySelector(".popup__photo-subtitle"),document.querySelector("#popup-photo-content"),document.querySelector("#popup-delete-card")),h=document.querySelector("#popup-avatar"),v=document.querySelector(".profile__avatar"),b=(document.querySelector("#popup-avatar-edit"),{formSelector:".popup__content",inputSelector:".popup__input",submitButtonSelector:".popup__button-save",inactiveButtonClass:"popup__button-save_invalid",inputErrorClass:"popup__input-error",errorClass:"popup__error_visible"});function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,S(r.key),r)}}function _(e,t,n){return(t=S(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function S(e){var t=function(e,t){if("object"!==m(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==m(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===m(t)?t:String(t)}var g=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),_(this,"_errVisible",(function(e,t){var n=r._form.querySelector("#".concat(e.id,"-error"));e.classList.add(r._inputErrorClass),n.textContent=t,n.classList.add(r._errorClass)})),_(this,"_errInvisible",(function(e){var t=r._form.querySelector("#".concat(e.id,"-error"));e.classList.remove(r._inputErrorClass),t.textContent="",t.classList.remove(r._errorClass)})),_(this,"_checkInputValidity",(function(e){e.validity.valid?r._errInvisible(e):r._errVisible(e,e.validationMessage)})),_(this,"_toggleButton",(function(){r._invalidInputs()?(r._submitButtons.classList.add(r._inactiveButtonClass),r._submitButtons.disabled=!0):(r._submitButtons.classList.remove(r._inactiveButtonClass),r._submitButtons.disabled=!1)})),_(this,"_setEventListener",(function(){r._toggleButton(),r._inputs.forEach((function(e){e.addEventListener("input",(function(){r._checkInputValidity(e),r._toggleButton()}))}))})),_(this,"_invalidInputs",(function(){return r._inputs.some((function(e){return!e.validity.valid}))})),_(this,"enableValidation",(function(){r._form.addEventListener("submit",(function(e){e.preventDefault()})),r._setEventListener()})),this._form=n,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inactiveButtonClass,this._errorClass=t.errorClass,this._inputs=Array.from(n.querySelectorAll(this._inputSelector)),this._submitButtons=n.querySelector(this._submitButtonSelector)}var t,n;return t=e,(n=[{key:"resetValue",value:function(){var e=this;this._toggleButton(),this._inputs.forEach((function(t){e._errInvisible(t)}))}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==w(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==w(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===w(o)?o:String(o)),r)}var o}var E=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=t,this._handleEscapeClose=this._handleEscapeClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup__is-opened"),document.addEventListener("keydown",this._handleEscapeClose)}},{key:"close",value:function(){this._popup.classList.remove("popup__is-opened"),document.removeEventListener("keydown",this._handleEscapeClose)}},{key:"_handleEscapeClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){(t.target.classList.contains("popup__is-opened")||t.target.classList.contains("popup__button-close"))&&e.close()}))}}])&&k(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==j(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==j(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===j(o)?o:String(o)),r)}var o}function P(){return P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=C(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},P.apply(this,arguments)}function C(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=I(e)););return e}function L(e,t){return L=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},L(e,t)}function q(e,t){if(t&&("object"===j(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function I(e){return I=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},I(e)}var R=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&L(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=I(r);if(o){var n=I(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return q(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._image=t._popup.querySelector(".popup__photo-item"),t._title=t._popup.querySelector(".popup__photo-subtitle"),t}return t=u,(n=[{key:"open",value:function(e,t){this._image.src=t,this._image.alt=e,this._title.textContent=e,P(I(u.prototype),"open",this).call(this)}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(E);function T(e){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(e)}function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==T(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==T(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===T(o)?o:String(o)),r)}var o}function A(){return A="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=U(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},A.apply(this,arguments)}function U(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=D(e)););return e}function x(e,t){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},x(e,t)}function V(e,t){if(t&&("object"===T(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function D(e){return D=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},D(e)}var N=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&x(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=D(r);if(o){var n=D(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return V(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._submit=t,n._form=n._popup.querySelector(".popup__content"),n._inputs=n._popup.querySelectorAll(".popup__input"),n._submitButton=n._popup.querySelector(".popup__button-save"),n._submitButtonValue=n._submitButton.textContent,n}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputs.forEach((function(t){return e._formValues[t.id]=t.value})),this._formValues}},{key:"load",value:function(e,t){this._submitButton.textContent=e?t:this._submitButtonValue}},{key:"setEventListeners",value:function(){var e=this;A(D(u.prototype),"setEventListeners",this).call(this),this._popup.addEventListener("submit",(function(t){t.preventDefault();var n=e._getInputValues();e._submit(n),A(D(u.prototype),"close",e).call(e)}))}},{key:"close",value:function(){A(D(u.prototype),"close",this).call(this),this._form.reset()}}])&&B(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(E);function J(e){return J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},J(e)}function z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==J(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==J(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===J(o)?o:String(o)),r)}var o}var H=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._containerSelector=n}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"prependItem",value:function(e){this._containerSelector.prepend(e)}}])&&z(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function M(e){return M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},M(e)}function $(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==M(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==M(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===M(o)?o:String(o)),r)}var o}var F=function(){function e(t){var n=t.profileName,r=t.profileProfession,o=t.profileAvatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._profileName=n,this._profileProfession=r,this._profileAvatar=o}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._profileName.textContent,profession:this._profileProfession.textContent,avatar:this._profileAvatar}}},{key:"setUserInfo",value:function(e){this._profileName.textContent=e.name,this._profileProfession.textContent=e.about,this._profileAvatar.src=e.avatar}},{key:"updateAvatar",value:function(e){this._profileAvatar.src=e["popup-avatar-edit"]}}])&&$(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function G(e){return G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},G(e)}function K(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==G(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==G(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===G(o)?o:String(o)),r)}var o}var Q=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_handleResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this._handleResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(this._handleResponse)}},{key:"setUserInfo",value:function(e){return console.log(e),fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e["popup-profile-name"],about:e["popup-profile-profession"]})}).then(this._handleResponse)}},{key:"generateCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",body:JSON.stringify({name:e["popup__photo-name"],link:e["popup__photo-link"]}),headers:this._headers}).then(this._handleResponse)}},{key:"likeCounter",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:e,headers:this._headers}).then(this._handleResponse)}},{key:"deleteElement",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._handleResponse)}},{key:"updateAvatar",value:function(e){return console.log(e["popup-avatar-edit"]),fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e["popup-avatar-edit"]})}).then(this._handleResponse)}}])&&K(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function W(e){return W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},W(e)}function X(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==W(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==W(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===W(o)?o:String(o)),r)}var o}function Y(){return Y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=Z(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},Y.apply(this,arguments)}function Z(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=ne(e)););return e}function ee(e,t){return ee=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},ee(e,t)}function te(e,t){if(t&&("object"===W(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function ne(e){return ne=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},ne(e)}var re=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ee(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=ne(r);if(o){var n=ne(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return te(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._submit=t,n._submitButton=n._popup.querySelector(".popup-submit-delete"),n}return t=u,(n=[{key:"setEventListeners",value:function(){var e=this;this._submitButton.addEventListener("click",(function(t){t.preventDefault(),e._submit(e._id,e._deleteCard)})),Y(ne(u.prototype),"setEventListeners",this).call(this)}},{key:"open",value:function(e,t){this._id=e,this._deleteCard=t,Y(ne(u.prototype),"open",this).call(this)}}])&&X(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(N);function oe(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}console.log("JS - это боль (╬ ಠ益ಠ)");var ie,ue=new Q({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-59",headers:{authorization:"98e50b60-4c69-4264-a162-27fbf7e799c3","Content-Type":"application/json"}});function le(e){return new n(ie,e,"#template__elements",he,ce,se).generateCard()}Promise.all([ue.getUserInfo(),ue.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,u,l=[],a=!0,c=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{if(!a&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(c)throw o}}return l}}(t,n)||function(e,t){if(e){if("string"==typeof e)return oe(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?oe(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];ie=o._id,ve.setUserInfo(o),ae.renderItems(i.reverse())})).catch((function(e){return console.warn(e)}));var ae=new H({renderer:function(e){ae.prependItem(le(e))}},o);function ce(e,t){var n=t.likeState()?"DELETE":"PUT";ue.likeCounter(n,e).then((function(e){t.setCounter(e.likes.length),t.handleLikeActive()})).catch((function(e){console.warn(e)}))}function se(e,t){_e.open(e,t)}var fe=new g(b,i),pe=new g(b,a),ye=new g(b,h);function he(e,t){be.open(e,t)}fe.enableValidation(),pe.enableValidation(),ye.enableValidation(),u.addEventListener("click",(function(){fe.resetValue(),de.open()})),l.addEventListener("click",(function(){var e,t,n;pe.resetValue(),me.open(),t=(e=ve.getUserInfo()).name,n=e.profession,c.value=t,s.value=n}));var ve=new F({profileName:p,profileProfession:f,profileAvatar:v});v.addEventListener("click",(function(){ye.resetValue(),Se.open()}));var be=new R(r);be.setEventListeners();var me=new N(a,(function(e){me.load(!0,"Сохранение..."),ue.setUserInfo(e).then((function(e){ve.setUserInfo(e),me.close()})).catch((function(e){console.warn(e)})).finally((function(){me.load(!1)}))}));me.setEventListeners();var de=new N(i,(function(e){de.load(!0,"Сохранение..."),ue.generateCard(e).then((function(e){o.prepend(le(e)),de.close()})).catch((function(e){console.warn(e)})).finally((function(){de.load(!1)}))}));de.setEventListeners();var _e=new re(y,(function(e,t){_e.load(!0,"Удаление..."),ue.deleteElement(e).then((function(){t(),_e.close()})).catch((function(e){console.warn(e)})).finally((function(){_e.load(!1)}))}));_e.setEventListeners();var Se=new N(h,(function(e){Se.load(!0,"Сохранение..."),ue.updateAvatar(e).then((function(){ve.updateAvatar(e),Se.close()})).catch((function(e){console.warn(e)})).finally((function(){Se.load(!1)}))}));Se.setEventListeners()})();