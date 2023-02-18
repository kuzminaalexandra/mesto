export default class UserInfo {
<<<<<<< HEAD
  constructor({ profileName, profileProfession, profileAvatar }) {
    this._profileName = profileName;
    this._profileProfession = profileProfession;
    this._profileAvatar = profileAvatar;
  }

  getUserInfo() {
    return {
      name: this._profileName.textContent,
      profession: this._profileProfession.textContent,
      avatar: this._profileAvatar,
    };
  }

  setUserInfo(data) {
    this._profileName.textContent = data['name'];
    this._profileProfession.textContent = data['about'];
    this._profileAvatar.src = data['avatar'];
  }

  updateAvatar(data) {
    this._profileAvatar.src = data['popup-avatar-edit'];
=======
  constructor({ profileName, profileProfession }) {
    this._profileName = profileName;
    this._profileProfession = profileProfession;
  }

  getUserInfo() {
    return { name: this._profileName.textContent, profession: this._profileProfession.textContent };
  }

  setUserInfo(obj) {
    this._profileName.textContent = obj['popup-profile-name'];
    this._profileProfession.textContent = obj['popup-profile-profession'];
>>>>>>> 7a5f24ee858667578486b4f7f00147096b8fd3c7
  }
}
