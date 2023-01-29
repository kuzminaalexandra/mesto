export default class UserInfo {
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
  }
}
