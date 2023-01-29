export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._renderer = renderer;
    this._items = items;
    this._containerSelector = containerSelector;
  }

  renderItems() {
    this._items.forEach((item) => {
      this._containerSelector.append(this._renderer(item));
    });
  }

  prependItem(item) {
    this._containerSelector.prepend(this._renderer(item));
  }
}
