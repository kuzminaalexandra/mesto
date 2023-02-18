export default class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._containerSelector = containerSelector;
  }

  renderItems(items) {
    items.forEach((item) => {
      this._renderer(item);
    });
  }

  prependItem(item) {
    this._containerSelector.prepend(item);
  }
}
