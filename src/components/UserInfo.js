export default class UserInfo {
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
  }
}
